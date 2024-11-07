import { storyblokEditable } from "@storyblok/react";
import useInView from "./hooks/useInView";
import { useRef, useState } from "react";

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
      className="relative flex p-3 md:p-32 mt-28 bg-oakhill-black font-montserrat text-white"
    >
      {/* Tag */}
      <div className="flex flex-col max-w-36 md:max-w-2xl">
        <div className="text-left mb-3">
          <a
            href="#"
            className={`text-xs text-white uppercase ${
              hasAnimated ? "animate-slideInLeft" : "opacity-0"
            }`}
          >
            Tag
          </a>
        </div>

        {/* Headline */}
        <div className="text-left mb-6">
          <h2
            className={`text-2xl md:text-5xl ${
              hasAnimated ? "animate-slideDown" : "opacity-0"
            }`}
          >
            Headline of our Services. Pay per month. Just relax.
          </h2>
        </div>

        {/* Paragraph */}
        <div className="text-left w-2/3">
          <p
            className={`text-white md:text-xl ${
              hasAnimated ? "animate-slideInRight" : "opacity-0"
            }`}
          >
            En kortis paragraph som kan komma till användning vid senare
            tillfälle kanske. Kanske inte
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between bg-red-400 w-full p-6">
        {/* Left Side: Top Price & Text */}
        <div className="flex flex-col justify-between">
          <div>
            <h3
              className={`text-5xl font-semibold text-white ${
                hasAnimated ? "animate-slideUp" : "opacity-0"
              }`}
            >
              300kr
            </h3>
            <p
              className={`text-xs text-white ${
                hasAnimated ? "animate-slideUp" : "opacity-0"
              }`}
            >
              per månad, avsluta när du vill
            </p>
          </div>

          {/* Left Side: Bottom Price & Text */}
          <div className="flex flex-col justify-end mb-6 md:mb-0">
            <h3
              className={`text-5xl font-semibold text-white ${
                hasAnimated ? "animate-slideUp" : "opacity-0"
              }`}
            >
              1500kr
            </h3>
            <p
              className={`text-xs text-white ${
                hasAnimated ? "animate-slideUp" : "opacity-0"
              }`}
            >
              För 6 månader. Boka nu!
            </p>
          </div>
        </div>

        {/* Right Side: Top Text & Button */}
        <div className="flex flex-col justify-start justify-between mb-6 md:mb-0">
          <div className="flex flex-col justify-end">
            <p
              className={`text-sm text-white ${
                hasAnimated ? "animate-slideInLeft" : "opacity-0"
              }`}
            >
              Här är en text, vad gör den??
            </p>
            <button
              className="bg-black text-white py-2 px-4 rounded-md hover:scale-105 transition-transform"
              onClick={() => alert("Button 1 clicked")}
            >
              Boka
            </button>
          </div>

          {/* Right Side: Bottom Text & Button */}
          <div>
            <p
              className={`text-sm text-white${
                hasAnimated ? "animate-slideInLeft" : "opacity-0"
              }`}
            >
              Vad ska det stå här då?
            </p>
            <button
              className="bg-black text-white py-2 px-4 w-full rounded-md hover:scale-105 transition-transform"
              onClick={() => alert("Button 2 clicked")}
            >
              Ingen aning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePlan;
