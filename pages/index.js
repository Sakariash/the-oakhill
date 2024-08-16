import Head from "next/head";
import {
  useStoryblokState, getStoryblokApi, StoryblokComponent} from "@storyblok/react";

export default function Home({ story, config }) {
  story = useStoryblokState(story);
  console.log('story.content in Home ::>', story.content);
  return (
    <div>
      <Head>
        <title>Poprtfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps() {
  let slug = "home";
  let sbParams = {
    version: "draft", // or 'published'
    resolve_links: "url",
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let { data: config } = await storyblokApi.get('cdn/stories/config', sbParams);

  return {
    props: {
      story: data ? data.story : false || {},
      key: data ? data.story.id : false,
      config: config ? config.story : false,
    },
    revalidate: 3600,
  };
}

