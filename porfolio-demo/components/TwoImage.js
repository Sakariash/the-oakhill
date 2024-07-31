import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';

const TwoImages = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="relative h-96 flex mx-4">
      {/* White Margin */}
      <div className="relative" style={{ width: '4px', height: '100%', zIndex: 10 }}>
        <div className="absolute inset-0 bg-white"></div>
      </div>

      {/* Container for images to handle absolute positioning */}
      <div className="relative flex-1 h-full">
        {/* First Image */}
        <div className="absolute top-0 left-0 w-[calc(50%+50px)] h-full" style={{ clipPath: 'polygon(0 0, 100% 0, 89% 100%, 0 100%)' }}>
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

        {/* Second Image */}
        <div className="absolute top-0 right-0 w-[calc(50%+50px)] h-full" style={{ clipPath: 'polygon(11% 0, 100% 0%, 100% 100%, 0% 100%)' }}>
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
    </div>
  );
};

export default TwoImages;
