import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';

const Hero = ({ blok }) => {

  return (
    <div {...storyblokEditable(blok)} className="relative w-full md:h-[70vh] grid grid-cols-12 grid-rows-12 font-montserrat">
      {blok.headline && (
        <div className="col-start-2 col-end-12 row-start-1 row-end-5 md:row-start-2 lg:col-start-2 lg:col-end-11  lg:row-end-5 2xl:col-start-2 2xl:col-end-9 2xl:row-end-5 text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold">{blok.headline}</h1>
        </div>
      )}
      {blok.tagline && (
        <div className="col-start-4 col-end-12 row-start-6 row-end-12 md:col-start-6 lg:col-end-12 lg:row-start-7 lg:row-end-11 2xl:col-start-7 2xl:col-end-12 2xl:row-start-6 2xl:row-end-11 text-left">
          <h2 className="md:text-xl lg:text-2xl 2xl:text-3xl">{blok.tagline}</h2>
        </div>
      )}
    </div>
  );
};

export default Hero;
