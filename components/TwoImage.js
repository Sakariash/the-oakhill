import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';

const TwoImages = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="relative h-screen mx-4 mt-14 flex mb-6">
      {/* Desktop View */}
      <div className="relative flex-1 h-full hidden md:flex">
        <div
          className="absolute top-0 left-0 w-[calc(50%+3%)] h-full"
          style={{ clipPath: 'polygon(0 0, 100% 0, 87% 100%, 0 100%)' }}
        >
          {blok.Images[0]?.image?.filename && (
            <div className="relative h-full w-full">
              <Image
                src={blok.Images[0].image.filename}
                alt={blok.Images[0].image.alt || 'First Image'}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
        </div>
        <div
          className="absolute top-0 right-0 w-[calc(50%+3%)] h-full"
          style={{ clipPath: 'polygon(13% 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          {blok.Images[1]?.image?.filename && (
            <div className="relative h-full w-full">
              <Image
                src={blok.Images[1].image.filename}
                alt={blok.Images[1].image.alt || 'Second Image'}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* Mobile/Tablet View */}
      <div className="relative flex flex-col w-full min-h-full bg-blue-200 md:hidden">
        <div
          className="absolute top-0 w-full h-[calc(50%+3%)]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 87%, 0 100%)' }}
        >
          {blok.Images[0]?.image?.filename && (
            <Image
              src={blok.Images[0].image.filename}
              alt={blok.Images[0].image.alt || 'First Image'}
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
        <div
          className="absolute bottom-0 w-full h-[calc(50%+3%)]"
          style={{ clipPath: 'polygon(0 13%, 100% 0, 100% 100%, 0 100%)' }}
        >
          {blok.Images[1]?.image?.filename && (
            <Image
              src={blok.Images[1].image.filename}
              alt={blok.Images[1].image.alt || 'Second Image'}
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TwoImages;
