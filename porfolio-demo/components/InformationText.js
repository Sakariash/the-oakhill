import { storyblokEditable } from '@storyblok/react';

const InformationText = ({ blok }) => {
    console.log('log this blok::>', blok)
  return (
    <div {...storyblokEditable(blok)} className="w-full bg-red-200 my-64">
      <div className="container mx-auto max-w-7xl h-[500px] flex flex-col justify-center z-10 px-16">
        <h2 className="text-8xl font-bold text-left mb-8">{blok.headling}</h2>
        <p className="text-lg max-w-prose text-left mx-8">{blok.informaiton}</p>
      </div>
    </div>
  );
};

export default InformationText;