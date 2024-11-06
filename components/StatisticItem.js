import { useEffect, useState } from 'react';

const StatisticItem = ({ number, description, badge, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return; // Only start counting when the component is in view

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
  }, [number, isInView]); // Depend on isInView to trigger the effect when it enters view

  return (
    <div className='flex flex-row md:flex-col md:w-1/3 py-5 text-left'>
      <p className="hidden md:block">{badge}</p>
      <h3 className="text-4xl md:text-8xl mr-5 pr-5 border-r-2 border-oakhill-black md:border-none">{count}%</h3>
      <p className="text-sm md:text-base mt-2">{description}</p>
    </div>
  );
};

export default StatisticItem;