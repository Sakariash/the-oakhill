import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const MenuLink = ({ blok }) => {
  const isContactLink = blok.name === "Kontakta oss"; // Check if it's the "Contact Us" link

  return (
    <Link href={blok.link.cached_url} {...storyblokEditable(blok)}>
      <div className={isContactLink ? "p-3 bg-black" : "p-3"}>
        <span className={isContactLink ? "text-base text-white font-medium hover:text-gray-500" : "text-base text-black font-medium hover:text-gray-500"}>
          {blok.name}
        </span>
      </div>
    </Link>
  );
};

export default MenuLink;