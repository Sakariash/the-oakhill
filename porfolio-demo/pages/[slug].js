import Head from "next/head";
import {
    useStoryblokState,
    getStoryblokApi,
    StoryblokComponent,
  } from "@storyblok/react";
  import Layout from "../components/Layout";
  
  export default function DynamicPage({ story }) {
    story = useStoryblokState(story);
  
    return (
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <StoryblokComponent blok={story.content} />
        </Layout>
      </div>
    );
  }
  
  export async function getStaticPaths() {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories");
    const paths = data.stories.map((story) => ({
      params: { slug: story.slug },
    }));
  
    return {
      paths,
      fallback: false, // Set fallback to false if all possible slugs are known
    };
  }
  
  export async function getStaticProps({ params }) {
    const slug = params.slug || "home";
    const sbParams = {
      version: "draft", // or 'published'
      resolve_links: "url",
    };
  
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
    const { data: config } = await storyblokApi.get("cdn/stories/config");
  
    return {
      props: {
        story: data ? data.story : false,
        key: data ? data.story.id : false,
        config: config ? config.story : false,
      },
      revalidate: 3600,
    };
  }