import { storyblokEditable } from "@storyblok/react";
import Teaser from './Teaser';
import Card from "./Card";

const ThreeColumn = ({ blok }) => {
  const columns = Array.isArray(blok.columns) ? blok.columns : [];

  return (
    <div {...storyblokEditable(blok)} className="container mx-auto px-4 mt-14">
      <div className="grid grid-cols-1 gap-4 lg:gap-2 lg:grid-cols-3">
        {columns.map((nestedBlok) => (
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
