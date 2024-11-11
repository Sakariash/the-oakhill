import PrimaryButton from "../components/Buttons/PrimaryButton";
import { getStoryblokData } from "../libs/storyblok";
import useInView from "../components/hooks/useInView";
import { useRef, useState } from "react";

const Custom404 = ({ storyData }) => {
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, { threshold: 0.2 });

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center gap-4 px-12 h-screen relative w-full  bg-oakhill-black font-montserrat text-white overflow-hidden"
    >
      <div className="text-left">
        <h2
          className={`text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl ${
            hasAnimated ? "animate-slideDown" : "opacity-0"
          }`}
        >
          404 - Sidan kunde inte hittas
        </h2>
      </div>

      <div className="text-left w-1/2">
        <p
          className={`md:text-xl lg:text-2xl 2xl:text-3xl ${
            hasAnimated ? "animate-slideInRight" : "opacity-0"
          }`}
        >
          Ett fel uppstod och sidan kunde tyvärr inte hittas. Om ni meddelar oss
          om detta fel innan vi har hunnit åtgärda det så får ni 10% rabatt på
          valfritt paketerbjudande!
        </p>
      </div>
      <div>
        <PrimaryButton
          text="Till startsidan"
          destinationURL="/"
          className="bg-gray-200 uppercase text-gray-950"
        />
      </div>
    </div>
  );
};

// export async function getStaticProps() {
//   const storyData = await getStoryblokData("404"); // Fetch the 404 data at build time
//   return {
//     props: { storyData },
//   };
// }

export default Custom404;
