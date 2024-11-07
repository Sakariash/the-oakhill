import { storyblokEditable } from "@storyblok/react";
import useInView from "./hooks/useInView";
import { useRef, useState } from "react";
import CTAButton from "./Buttons/PrimaryButton";

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
      className="relative flex flex-col lg:flex-row p-3 md:p-32 mt-28 bg-oakhill-black font-montserrat text-white"
    >
      {/* Tag */}
      <div className="flex flex-col lg:max-w-5xl">
        <div className="text-left mb-3">
          <p
            className={`text-xs text-gray-500 uppercase ${
              hasAnimated ? "animate-slideDown" : "opacity-0"
            }`}
          >
            Support
          </p>
        </div>

        {/* Headline */}
        <div className="text-left mb-6">
          <h2
            className={`text-2xl md:text-5xl ${
              hasAnimated ? "animate-slideDown" : "opacity-0"
            }`}
          >
            Trygg och smidig hemsideshantering. Betala per månad.
          </h2>
        </div>

        {/* Paragraph */}
        <div className="text-left w-2/3">
          <p
            className={`text-gray-500 md:text-l ${
              hasAnimated ? "animate-slideDown" : "opacity-0"
            }`}
          >
            Vi hanterar all underhåll och säkerhet – så att ni kan fokusera på
            er verksamhet.
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-between lg:bg-gray-800 rounded-lg  w-full lg:p-6 mt-10 lg:mt-0 lg:max-w-5xl">
        {/* Left Side: Top Price & Text */}
        <div
          className={`flex flex-col justify-between transition-opacity duration-[3000ms] ${
            hasAnimated ? "opacity-1" : "opacity-0"
          }`}
        >
          <div>
            <h3 className="text-3xl md:text-5xl text-white mb-1 lg:mb-3">
              300kr
            </h3>
            <p className="text-xs mb-10 lg:mb-0">
              Per månad, avsluta när du vill
            </p>
          </div>

          {/* Left Side: Bottom Price & Text */}
          <div className="flex flex-col justify-end mb-6 md:mb-0">
            <h3 className="text-3xl md:text-5xl text-white mb-1 lg:mb-3">
              1500kr
            </h3>
            <p className="text-xs">För 6 månader - Spara 300kr</p>
          </div>
        </div>

        {/* Right Side: Top Text & Button */}
        <div
          className={`flex flex-col justify-between mb-6 md:mb-0 transition-opacity duration-[3000ms] ${
            hasAnimated ? "opacity-1" : "opacity-0"
          }`}
        >
          <div className="flex flex-col justify-end">
            <p className="text-sm text-gray-400 mb-2 max-w-48">
              Dygnet runt-support
            </p>
            <CTAButton
              className="w-full border-gray-700 border hover:bg-white hover:text-black text-sm"
              destinationURL="/contact"
              packageType="serviceavtal"
              price="300kr"
              text="Skicka"
            />
          </div>

          {/* Right Side: Bottom Text & Button */}
          <div>
            <p className="text-sm text-gray-400 mb-2 max-w-48">
              Slipp förnya, säkra 6 månaders tillgång
            </p>
            <CTAButton
              className="w-full border-gray-700 border hover:bg-white hover:text-black text-sm"
              destinationURL="/contact"
              packageType="serviceavtal"
              price="1500kr"
              text="Berätta mer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePlan;
