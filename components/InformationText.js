import { storyblokEditable } from '@storyblok/react';

const InformationText = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="w-full my-24 px-4 md:px-8 lg:px-16 bg-oakhill-green">
      <div className="container mx-auto max-w-7xl h-auto flex flex-col justify-center py-16 md:py-22 lg:py-32">
        <h2 className="text-4xl font-diatype md:text-6xl lg:text-8xl text-left mb-6 md:mb-8 lg:mb-10">
          {blok.headling}
        </h2>
        <p className="text-base font-diatype md:text-lg lg:text-xl max-w-prose text-left mx-4 md:mx-8 lg:mx-16">
          {blok.informaiton}
        </p>
      </div>
    </div>
  );
};

export default InformationText;
