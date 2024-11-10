import { storyblokEditable } from "@storyblok/react";
import useInView from "./hooks/useInView";
import { useRef, useState } from "react";
import PrimaryButton from "./Buttons/PrimaryButton";
import MeetingButton from "./Buttons/MeetingButton";

const ServicePlan = ({ blok }) => {
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, { threshold: 0.2 });

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div
      ref={ref}
      {...storyblokEditable(blok)}
      className="relative flex flex-col lg:flex-row p-3 md:p-32 mt-28 2xl:px-60 bg-oakhill-black font-montserrat text-white"
    >
      <div className="flex flex-col lg:max-w-5xl">
        <div className="text-left mb-3">
          <p
            className={`text-xs text-gray-500 uppercase ${
              hasAnimated ? "animate-slideDown" : "opacity-0"
            }`}
          >
            {blok.tag}
          </p>
        </div>

        <div className="text-left mb-6 lg:max-w-7xl">
          <h2
            className={`text-2xl md:text-5xl lg:w-3/4 ${
              hasAnimated ? "animate-slideDown" : "opacity-0"
            }`}
          >
            {blok.headline}
          </h2>
        </div>

        <div className="text-left w-2/3">
          <p
            className={`text-gray-500 md:text-l ${
              hasAnimated ? "animate-slideDown" : "opacity-0"
            }`}
          >
            {blok.paragraph}
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-between lg:bg-gray-800 rounded-lg  w-full lg:p-6 mt-10 lg:mt-0 lg:max-w-3xl">
        <div
          className={`flex flex-col justify-between transition-opacity duration-[3000ms] ${
            hasAnimated ? "opacity-1" : "opacity-0"
          }`}
        >
          <div>
            <h3 className="text-3xl md:text-5xl text-white mb-1 lg:mb-3">
              {blok.first_price}kr
            </h3>
            <p className="text-xs mb-10 lg:mb-0">{blok.first_price_info}</p>
          </div>
          <div className="flex flex-col justify-end mb-6 md:mb-0">
            <h3 className="text-3xl md:text-5xl text-white mb-1 lg:mb-3">
              {blok.second_price}kr
            </h3>
            <p className="text-xs">{blok.second_price_info}</p>
          </div>
        </div>

        <div
          className={`flex flex-col justify-between mb-6 md:mb-0 transition-opacity duration-[3000ms] ${
            hasAnimated ? "opacity-1" : "opacity-0"
          }`}
        >
          <div className="flex flex-col">
            <p className="text-sm text-gray-400 mb-2 max-w-48">
              {blok.first_cta_text}
            </p>
            <MeetingButton
              packageType="prenumerentation"
              packageName="support"
              price="300"
              className="ml-auto lg:w-full border-gray-700 border hover:bg-white hover:text-black text-sm"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-sm text-gray-400 mb-2 max-w-48">
              {blok.second_cta_text}
            </p>
            <MeetingButton
              packageType="prenumerentation"
              packageName="support"
              price="1500"
              className="ml-auto lg:w-full border-gray-700 border hover:bg-white hover:text-black text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePlan;
