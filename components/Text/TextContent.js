import { storyblokEditable } from '@storyblok/react';

const TextContent = ({ blok }) => {

  return (
    <div {...storyblokEditable(blok)} className="relative w-full gap-4 grid grid-cols-12 grid-rows-12 font-montserrat">
      {blok.headline && (
        <div className="col-start-2 col-end-12 row-start-1 row-end-5 md:row-start-2 lg:col-start-2 lg:col-end-11  lg:row-end-5 2xl:col-start-2 2xl:col-end-9 2xl:row-end-5 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-7xl 2xl:text-9xl font-bold">{blok.headline}</h1>
        </div>
      )}
      {blok.paragraph && (
        <div className="col-start-4 col-end-12 row-start-3 row-end-12 md:col-start-6 md:row-start-4 lg:col-end-12 lg:row-start-5 lg:row-end-11 2xl:col-start-7 2xl:col-end-12 2xl:row-start-6 2xl:row-end-11 text-left">
          <p className="md:text-xl lg:text-2xl 2xl:text-3xl font-thin whitespace-pre-wrap">{blok.paragraph}</p>
        </div>
      )}
    </div>
  );
};

export default TextContent;
