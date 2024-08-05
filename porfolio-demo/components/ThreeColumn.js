import { storyblokEditable } from "@storyblok/react";
import Teaser from './Teaser';
import Card from "./Card";

const ThreeColumn = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="container mx-auto px-4 my-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blok.columns.map((nestedBlok) => (
          <div key={nestedBlok._uid} className="w-full">
            {nestedBlok.component === 'teaser' && <Teaser blok={nestedBlok} isThreeColumn />}
            {nestedBlok.component === 'card' && <Card blok={nestedBlok} isThreeColumn />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeColumn;
