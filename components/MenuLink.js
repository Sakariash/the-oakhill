import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const MenuLink = ({ blok }) => {
  const isContactLink = blok.name === "Kontakta oss";

  return (
    <Link
      href={blok.link.cached_url}
      {...storyblokEditable(blok)}
      className={`text-base font-medium relative group p-3 inline-block ${isContactLink ? "bg-black text-white" : "text-black mr-2"}`}
    >
      {blok.name}
      {isContactLink && (
        <span className="inline-block ml-2 transition-transform duration-700 ease-in-out group-hover:rotate-45 group-hover:translate-y-[2px]">
          <FiArrowUpRight className="transform transition-transform duration-300 ease-in-out" />
        </span>
      )}
      {!isContactLink && (
        <span className="absolute left-0 bottom-0 h-[1px] bg-gray-400 w-0 transition-all duration-700 ease-in-out group-hover:w-full"></span>
      )}
    </Link>
  );
};

export default MenuLink;
