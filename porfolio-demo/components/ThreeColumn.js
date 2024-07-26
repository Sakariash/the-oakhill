import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Teaser from './Teaser'; // Import Teaser component

const ThreeColumn = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="container mx-auto px-4 my-12 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blok.columns.map((nestedBlok) => (
          <div key={nestedBlok._uid} className="w-full">
            {/* Use Teaser component without additional props */}
            <Teaser blok={nestedBlok} isThreeColumn />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeColumn;
