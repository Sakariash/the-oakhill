import Script from "next/script";
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
import FAQ from "../components/FAQ";
import Packages from "../components/Packages";
import Statistic from "../components/Statistic";
import TextContent from "../components/Text/TextContent";
import HeroContent from "../components/Text/HeroContent";
import Process from "../components/Process";
import StatisticItem from "../components/StatisticItem";
import ServicePlan from "../components/ServicePlan";

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
  statisticItem: StatisticItem,
  servicePlan: ServicePlan,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "",
  },
});

function MyApp({ Component, pageProps }) {
  const isHomePage = pageProps.story && pageProps.story.full_slug === "home"; // Check if it's the homepage
  const { key, ...props } = pageProps;

  return (
    <Layout story={pageProps.config}>
      <Component key={key} {...props} />
    </Layout>
  );
}

export default MyApp;
