import Head from "next/head";
 
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Page({ story, config }) {
  story = useStoryblokState(story);

  return (
    <div >
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <StoryblokComponent blok={story.content} />
    </div>
  );
}
 
export async function getStaticProps({ params }) {
    let slug = params.slug ? (Array.isArray(params.slug) ? params.slug.join("/") : params.slug) : "home";
  
    let sbParams = {
      version: "draft", // or 'published'
    };
  
    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
    let { data: config } = await storyblokApi.get('cdn/stories/config', sbParams);
  
    return {
      props: {
        story: data ? data.story : false,
        key: data ? data.story.id : false,
        config: config ? config.story : false,
      },
      revalidate: 3600,
    };
  }
export async function getStaticPaths() {
    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get("cdn/links/", {
      version: 'draft'
    });
  
    console.log('Data from Storyblok:', data); // Log the data object
  
    const paths = Object.values(data.links)
      .filter(link => !link.is_folder && link.slug !== "home")
      .map(link => ({ params: { slug: link.slug } }));
  
    return {
      paths: paths,
      fallback: false,
    };
  }