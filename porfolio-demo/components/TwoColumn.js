import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Teaser from './Teaser'; // Import Teaser component

const TwoColumn = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="container mx-auto px-4 my-12 bg-red-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blok.columns.map((nestedBlok) => (
          <div key={nestedBlok._uid} className="w-full">
            {/* Pass the isTwoColumn prop */}
            <Teaser blok={nestedBlok} isTwoColumn />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwoColumn;
