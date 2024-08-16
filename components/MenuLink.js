import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
const MenuLink = ({blok}) => (
    <Link href={blok.link.cached_url} {...storyblokEditable(blok)}>
    <span className="text-base font-medium hover:text-gray-500">
      {blok.name}
    </span>
  </Link>
)
export default MenuLink