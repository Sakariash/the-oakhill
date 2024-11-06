import { useRef } from 'react';
import { storyblokEditable } from '@storyblok/react';
import useInView from './hooks/useInView';
import StatisticItem from './StatisticItem';

const Statistic = ({ blok }) => {
  const ref = useRef();
  const isInView = useInView(ref, { threshold: 0.2 });

  const potentialStats = [
    { value: blok.firstNumber, description: blok.firstDescription, badge: blok.firstBadge },
    { value: blok.secondNumber, description: blok.secondDescription, badge: blok.secondBadge },
    { value: blok.thirdNumber, description: blok.thirdDescription, badge: blok.thirdBadge },
    { value: blok.fourthNumber, description: blok.fourthDescription, badge: blok.fourthBadge },
  ];

  const numbers = potentialStats.filter(
    (stat) => stat.value && stat.description && stat.badge
  );

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-wrap md:flex-row font-montserrat mt-14 border-b border-oakhill-black mx-8"
      {...storyblokEditable(blok)}
    >
      {numbers.map((num, index) => (
        <StatisticItem
          key={index}
          number={num.value}
          description={num.description}
          badge={num.badge}
          isInView={isInView} // Pass isInView to StatisticItem
        />
      ))}
    </div>
  );
};

export default Statistic;

