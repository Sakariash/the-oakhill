import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';

const Teaser = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h2 className="text-2xl mb-10">{blok.headline}</h2>
      {blok.image && blok.image.filename && (
        // <div style={{ width: '300px', height: 'auto',  }}>
        <Image
           src={blok.image.filename}
          //  layout="responsive"
           width={500}
           height={500}
           objectFit="cover" 
           alt={blok.image.alt || 'Image'}
        />
        // </div>
      )}
      <p>{blok.info}</p>
    </div>
  );
};

export default Teaser;