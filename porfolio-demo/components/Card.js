import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';

const Card = ({ blok }) => {
  const hasInfo = !!blok.info;
  const hasButton = true; //Fix storyblok - Should button be required?
  
  return (
    <div {...storyblokEditable(blok)} className="relative h-96 bg-black rounded-md overflow-hidden transition-transform duration-1000 hover:scale-95 group">
      {/* <ul className="absolute right-2 top-0 flex flex-col items-center justify-center z-40 rounded-lg p-2 opacity-0 transform translate-x-full transition-all duration-250 group-hover:opacity-100 group-hover:translate-x-0">
        <li className="bg-white w-10 h-10 flex items-center justify-center cursor-pointer opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:transform translate-x-1 translate-y-1 rounded-lg mb-1">
          <i className='bx bx-drink text-xl text-black'></i>
        </li>
        <li className="bg-white w-10 h-10 flex items-center justify-center cursor-pointer opacity-70 transition-all duration-500  group-hover:opacity-100 group-hover:transform translate-x-1 translate-y-1 rounded-lg mb-1">
          <i className='bx bx-film text-xl text-black'></i>
        </li>
        <li className="bg-white w-10 h-10 flex items-center justify-center cursor-pointer opacity-70 transition-all duration-500  group-hover:opacity-100 group-hover:transform translate-x-1 translate-y-1 rounded-lg mb-1">
          <i className='bx bx-store-alt text-xl text-black'></i>
        </li>
        <li className="bg-white w-10 h-10 flex items-center justify-center cursor-pointer opacity-70 transition-all duration-500  group-hover:opacity-100 group-hover:transform translate-x-1 translate-y-1 rounded-lg">
          <i className='bx bx-map text-xl text-black'></i>
        </li>
      </ul> */}
      <div className="absolute inset-0 z-10">
        <Image
          src={blok.image.filename}
          alt={blok.image.alt || 'Image'}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-1000"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-100 group-hover:opacity-50 z-20"></div>
      <div className="absolute w-full bottom-0 left-0 z-30 text-white p-5 pb-4 flex flex-col space-y-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000">
        <h2 className="absolute top-0 text-2xl text-left font-diatype transform -translate-y-12 group-hover:-translate-y-4 transition-transform duration-1000">
          {blok.headline}
        </h2>
        {hasInfo && (
            <p className="text-base font-diatype text-left w-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            {blok.info}
          </p>
        )}
        {hasButton && (
          <button className="mt-2 py-1 px-4 font-diatype bg-white border-2 text-black border-black rounded-lg transition-all duration-1000 hover:bg-violet-300 hover:text-black self-end opacity-0 group-hover:opacity-100">
            See more
          </button>
        )}
        </div>
    </div>
  );
};

export default Card;
