import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }) => {
  const body = Array.isArray(blok.body) ? blok.body : [];

  return (
    <main className="text-center" {...storyblokEditable(blok)}>
      {body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
