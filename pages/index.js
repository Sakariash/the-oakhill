import Storyblok from "../libs/storyblok";

export async function getStaticProps() {
  const res = await Storyblok.get('cdn/stories/home');
  return {
    props: {
      story: res.data.story
    }
  };
}

export default function Home({ story }) {
    return (
      <div>
        <h1>{story.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: story.content }} />
      </div>
    );
  }
