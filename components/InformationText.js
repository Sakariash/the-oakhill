import { storyblokEditable } from '@storyblok/react';
import useInView from './hooks/useInView';
import { useRef, useState } from 'react';

const InformationText = ({ blok }) => {

  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, { threshold: 0.2 });

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
   }

  return (
    <div ref={ref} {...storyblokEditable(blok)} className="mt-28 py-9 relative w-full grid grid-cols-12 grid-rows-10 bg-oakhill-black font-montserrat text-white">
      {blok.headline && (
  <div className="col-start-2 col-end-12 row-start-1 row-end-5 md:row-start-2 lg:col-start-2 lg:col-end-11  2xl:col-start-2 2xl:col-end-9 2xl:row-end-5 text-left">
        <h2 className={`text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl ${hasAnimated ? 'animate-slideDown' : 'opacity-0'}`}>
          {blok.headline}
        </h2>
        </div>
)}{blok.information && (
  <div className="col-start-4 col-end-12 row-start-6 row-end-12 md:col-start-6 lg:col-end-12 lg:row-start-6 lg:row-end-11 2xl:col-start-7 2xl:col-end-12 text-left">
        <p className={`md:text-xl lg:text-2xl 2xl:text-3xl ${
              hasAnimated ? 'animate-slideInRight' : 'opacity-0'
            }`}>
          {blok.information}
        </p>
  </div>
)}
    </div>
  );
};

export default InformationText;