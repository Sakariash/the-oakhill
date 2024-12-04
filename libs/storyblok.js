import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
});

export const getStoryblokData = async (slug) => {
  try {
    console.log(`Fetching data for slug: ${slug}`); // Debugging log
    const response = await Storyblok.get(`cdn/stories/${slug}`);
    console.log("API response:", response); // Check the actual response
    return response.data.story;
  } catch (error) {
    console.error(
      "Error fetching Storyblok data:",
      error.response?.data || error.message
    );
    return null;
  }
};
