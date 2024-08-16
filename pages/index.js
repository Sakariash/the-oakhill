import Head from "next/head";
import {
  useStoryblokState, getStoryblokApi, StoryblokComponent} from "@storyblok/react";

export default function Home({ story, config }) {
  story = useStoryblokState(story);
  
  return (
    <div>
      <Head>
        <title>Oakhill Design&Solutions</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700;900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;700&family=Montserrat:ital,wght@0,100;0,200;0,400;0,700;1,100;1,200;1,400;1,700&display=swap" rel="stylesheet"/>
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
      config: config ? config.story : false,
    },
    revalidate: 3600,
  };
}

