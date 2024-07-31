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
  twoImage: TwoImages
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
  return (
    <Layout story={pageProps.config}>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
