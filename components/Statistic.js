import { useEffect, useState } from 'react';
import { storyblokEditable } from '@storyblok/react';

const Statistic = ({ blok }) => {
  // Skapa en array med alla nummer och beskrivningar som kan finnas
  const potentialStats = [
    { value: blok.firstNumber, description: blok.firstDescription },
    { value: blok.secondNumber, description: blok.secondDescription },
    { value: blok.thirdNumber, description: blok.thirdDescription },
    { value: blok.fourthNumber, description: blok.fourthDescription },
    // Lägg till fler om det behövs
  ];

  // Filtrera bort objekt som saknar värde för nummer eller beskrivning
  const numbers = potentialStats.filter(
    (stat) => stat.value && stat.description
  );

  return (
    <div className="flex md:flex-wrap justify-center font-montserrat" {...storyblokEditable()}>
      {numbers.map((num, index) => (
        <StatisticItem key={index} number={num.value} description={num.description} />
      ))}
    </div>
  );
};

const StatisticItem = ({ number, description }) => {
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
    <div className='my-14 w-1/3'>
      <h3 className="text-4xl md:text-5xl text-gray-500">{count}%</h3>
      <p className="text-sm md:text-base mt-2">{description}</p>
    </div>
  );
};

export default Statistic;
