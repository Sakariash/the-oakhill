import { useEffect, useState } from 'react';
import { storyblokEditable } from '@storyblok/react';

const Statistic = ({ blok }) => {
  console.log('blok', blok)
  // Skapa en array med alla nummer och beskrivningar som kan finnas
  const potentialStats = [
    { value: blok.firstNumber, description: blok.firstDescription, badge: blok.firstBadge },
    { value: blok.secondNumber, description: blok.secondDescription, badge: blok.secondBadge },
    { value: blok.thirdNumber, description: blok.thirdDescription, badge: blok.thirdBadge },
    { value: blok.fourthNumber, description: blok.fourthDescription, badge: blok.fourthBadge },
    // Lägg till fler om det behövs
  ];

  // Filtrera bort objekt som saknar värde för nummer eller beskrivning
  const numbers = potentialStats.filter(
    (stat) => stat.value && stat.description && stat.badge
  );

  return (
    <div className="flex flex-col md:flex-wrap md:flex-row font-montserrat mt-14 border-b border-oakhill-black mx-8" {...storyblokEditable()}>
      {numbers.map((num, index) => (
        <StatisticItem key={index} number={num.value} description={num.description} badge={num.badge} />
      ))}
    </div>
  );
};

const StatisticItem = ({ number, description, badge }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(number, 10);
    const duration = 2000;
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className='flex flex-row md:flex-col md:w-1/3 py-5 text-left'>
      <p className="hidden md:block">{badge}</p>
      <h3 className="text-4xl md:text-8xl mr-5 border-r-2 border-oakhill-black md:border-none">{count}% </h3>
      <p className="text-sm md:text-base mt-2">{description}</p>
    </div>
  );
};

export default Statistic;
