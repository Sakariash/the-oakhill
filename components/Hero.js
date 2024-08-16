import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';
import { useEffect, useState } from 'react';

const Hero = ({ blok }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set up a timer to hide the component after 4 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!blok) return null; // If no blok data, do not render anything

  return (
    isVisible && (
      <div {...storyblokEditable(blok)} className={`relative w-full h-[70vh] ${isVisible ? 'animate-fadeInOut' : 'hidden'}`}>
        {blok.filename && (
          <div className="relative w-full h-full">
            <Image
              src={blok.filename}
              fill 
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'contain'}}
              alt={blok.alt || 'Hero Image'}
              className="absolute inset-0"
              priority 
            />
            {blok.headline && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <h1 className="text-white text-4xl font-bold text-center">{blok.headline}</h1>
              </div>
            )}
          </div>
        )}
      </div>
    )
  );
};

export default Hero;
