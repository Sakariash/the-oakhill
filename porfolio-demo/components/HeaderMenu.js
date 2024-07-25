import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const HeaderMenu = ({ blok, story }) => {
    if (!story || !Array.isArray(story)) {
      return null; // Render nothing if blok or links is not valid
    }
  
    return (
      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10" {...storyblokEditable({ story })}>
        {story.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    );
  };

export default HeaderMenu;