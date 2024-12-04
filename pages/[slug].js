import Head from "next/head";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
// import Custom404 from "./404";

export default function Page({ story, config }) {
  story = useStoryblokState(story);
  if (!story) {
    return null; // Let Next.js handle the 404
  }
  // if (!story) {
  //   return <Custom404 />; // Return custom 404 page
  // }

  return (
    <div>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  let slug = params.slug
    ? Array.isArray(params.slug)
      ? params.slug.join("/")
      : params.slug
    : "home";
  console.log("Requested slug:", slug);

  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();

  try {
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams); // Fetch story data
    const { data: config } = await storyblokApi.get(
      "cdn/stories/config",
      sbParams
    ); // Fetch config

    if (!data || !data.story) {
      // If no story is found, return 404-like state
      return {
        notFound: true,
      };
    }

    return {
      props: {
        story: data.story,
        config: config.story,
      },
      revalidate: 3600, // ISR: Incremental Static Regeneration
    };
  } catch (error) {
    console.error("Error fetching Storyblok data:", error);
    return {
      props: {
        story: null, // If error, return null for story
      },
    };
  }
}
export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: "draft",
  });
  console.log("Fetched paths:", data.links); // Log links data for debugging
  const paths = Object.values(data.links)
    .filter(
      (link) => !link.is_folder && link.slug !== "home" && link.slug !== "404"
    ) // Exclude '/404'
    .map((link) => ({ params: { slug: link.slug } }));

  return {
    paths,
    fallback: false, // Enable fallback for dynamic paths
  };
}
