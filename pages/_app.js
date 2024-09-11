import Script from 'next/script';
import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import ThreeColumn from "../components/ThreeColumn";
import TwoColumn from "../components/TwoColumn";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Config from "../components/Config";
import HeaderMenu from "../components/HeaderMenu";
import MenuLink from "../components/MenuLink";
import Layout from "../components/Layout";
import Card from "../components/Card";
import InformationText from "../components/InformationText";
import TwoImages from "../components/TwoImage";
import ThreeImages from "../components/ThreeImage";
import GenericForm from "../components/Form";
import Hero from "../components/Hero";
// import ProtectedRoute from "../components/ProtectedRoute";
import FAQ from "../components/FAQ";
import Packages from "../components/Packages";
import Statistic from "../components/Statistic";
import TextContent from "../components/Text/TextContent";
import HeroContent from "../components/Text/HeroContent"
import Process from "../components/Process";

const components = {
  feature: Feature,
  threeColumn: ThreeColumn,
  twoColumn: TwoColumn,
  teaser: Teaser,
  page: Page,
  config: Config,
  layout: Layout,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
  card: Card,
  information: InformationText,
  twoImage: TwoImages,
  threeImage: ThreeImages,
  form: GenericForm,
  hero: Hero,
  faq: FAQ,
  packages: Packages,
  statistic: Statistic,
  textContent: TextContent,
  heroContent: HeroContent,
  process: Process,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
});

function MyApp({ Component, pageProps }) { 
  const isHomePage = pageProps.story && pageProps.story.full_slug === 'home'; // Check if it's the homepage
  const {key, ...props} = pageProps;
  
  return (
    <>
    <Script
    async
    src={`https://www.googletagmanager.com/gtag/js?id=G-E3WGSRDPY5`}
  />
  <Script
    id="google-analytics"
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-E3WGSRDPY5');
      `,
    }}
  />
    // <ProtectedRoute>
      <Layout story={pageProps.config}>
      {/* {isHomePage && <Hero blok={pageProps.story.content.hero} />} */}
      <Component key={key} {...props} />
      </Layout>
    // </ProtectedRoute>
    </>
      );
}

export default MyApp;
