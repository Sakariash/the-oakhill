import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';

const Teaser = ({ blok, isTwoColumn = false, isThreeColumn = false }) => {
  return (
    <div {...storyblokEditable(blok)} className={`relative ${isTwoColumn ? 'w-full' : ''}`}>
      {blok.image && blok.image.filename && (
        <div className={`relative w-full h-0 pb-[100%] ${isTwoColumn ? 'pb-[100%]' : ''}`}>
          <Image
            src={blok.image.filename}
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover'}}
            alt={blok.image.alt || 'Image'}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <h2 className={`absolute top-5 left-5 text-white text-2xl ${isTwoColumn ? 'text-5xl' : ''} ${isThreeColumn ? 'left-3 top-3' : ''}`}>
            {blok.headline}
          </h2>
        </div>
      )}
      <div className="py-4 pr-4 bg-white border-black w-full">
        <p className="text-left font-montserrate text-lg">{blok.info}</p>
      </div>
    </div>
  );
};


export default Teaser;