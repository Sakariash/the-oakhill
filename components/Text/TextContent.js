import { storyblokEditable } from '@storyblok/react';

const TextContent = ({ blok }) => {

  return (
    <div {...storyblokEditable(blok)} className="relative w-full grid grid-cols-12 font-montserrat mt-28">
      {blok.headline && (
        <div className="col-start-2 col-end-12 lg:col-start-2 lg:col-end-11 2xl:col-start-2 2xl:col-end-9 text-left my-14">
          <h1 className="text-4xl md:text-5xl lg:text-9xl 2xl:text-9xl animate-slideDown">{blok.headline}</h1>
        </div>
      )}
      {blok.paragraph && (
        <div className="col-start-4 col-end-12 md:col-start-6 lg:col-end-12 2xl:col-start-7 2xl:col-end-12 text-left">
          <p className="md:text-xl lg:text-2xl 2xl:text-3xl font-light whitespace-pre-wrap animate-slideInRight">{blok.paragraph}</p>
        </div>
      )}
    </div>
  );
};

export default TextContent;
