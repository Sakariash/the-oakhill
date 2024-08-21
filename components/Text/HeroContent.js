import React from 'react';
import { storyblokEditable } from '@storyblok/react';

const formatTextWithLineBreaks = (text) => {
  return text.split(/(\. )/).map((part, index) => (
    part.match(/(\. )/) ? <React.Fragment key={index}>{part}<br /></React.Fragment> : part
  ));
};

const TextContent = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="relative w-full lg:h-[65vh] 2xl:h-[70vh] grid grid-cols-12 grid-rows-12 font-montserrat">
      {blok.headline && (
        <div className="col-start-2 col-end-12 row-start-1 row-end-5 md:row-start-2 lg:col-start-2 lg:col-end-11 lg:row-end-5 2xl:col-start-2 2xl:col-end-9 2xl:row-end-5 text-left">
          <h1 className="text-xl sm:text-4xl md:text-4xl lg:text-6xl 2xl:text-7xl font-bold">
            {formatTextWithLineBreaks(blok.headline)}
          </h1>
        </div>
      )}
      {blok.tagline && (
        <div className="col-start-4 col-end-12 row-start-6 row-end-12 md:col-start-6 lg:col-end-12 lg:row-start-7 lg:row-end-11 2xl:col-start-6 2xl:col-end-12 2xl:row-start-7 2xl:row-end-11 text-left">
          <h2 className="md:text-xl lg:text-2xl 2xl:text-3xl">
            {formatTextWithLineBreaks(blok.tagline)}
          </h2>
        </div>
      )}
    </div>
  );
};
export default TextContent;
