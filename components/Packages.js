import { storyblokEditable } from "@storyblok/react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import useInView from "./hooks/useInView";

const Packages = ({ blok }) => {
  console.log("Packages DATA ::>", blok);
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, { threshold: 0.2 });
  const packages = blok.package;
  const subscriptionPlans = blok.subscription;

  const router = useRouter();
  const handleClick = (packageType) => {
    router.push(`/contact?package=${packageType}`);
  };

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div
      ref={ref}
      {...storyblokEditable(blok)}
      className="px-4 mt-28 font-montserrat"
    >
      <div
        className={`flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 ${
          hasAnimated ? "animate-slideUp" : "opacity-0"
        }`}
      >
        {/*Package */}
        {packages.map((pkg, index) => (
          <div
            key={pkg._uid}
            className="shadow-md flex-1 cursor-pointer flex flex-col p-6"
          >
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              {pkg.package_name}
            </h3>

            <ul className="space-y-3 font-light text-gray-700 flex-grow">
              {pkg.features.map((feature, featureIndex) => (
                <li className="flex items-center">
                  <FaCheck className="text-oakhill-black mr-3" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center pt-6 border-t-2 border-gray-300 mt-4 h-20">
              <span className="text-gray-900 text-sm md:text-lg">
                {pkg.price}{" "}
                <span className="text-gray-500 text-sm">exkl. moms</span>
              </span>
              <button
                onClick={() => handleClick(pkg.package_name)}
                className="bg-oakhill-black transform hover:scale-105 transition duration-200 text-white py-4 px-4 rounded-md flex items-center justify-center group"
              >
                Boka möte
                <span className="inline-block ml-2 transition-transform duration-700 ease-in-out transform group-hover:rotate-45 group-hover:translate-y-[2px]">
                  <FiArrowUpRight className="transform transition-transform duration-300 ease-in-out" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 ${
          hasAnimated ? "animate-slideUp" : "opacity-0"
        }`}
      >
        {subscriptionPlans.map((plan, index) => (
          <div
            key={plan._uid}
            className="shadow-md flex-1 cursor-pointer flex flex-col p-6"
          >
            {/* Flex container to ensure content takes full height */}
            <div className="flex flex-col mb-6 flex-grow">
              {" "}
              {/* flex-grow added to allow growth */}
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                {plan.headline}
              </h3>
              <p className="font-light text-gray-700 flex-1">
                {plan.paragraph}
              </p>
            </div>

            {/* Hours and price section */}
            <div className="justify-center my-5">
              <h3 className="text-6xl text-gray-800 mx-5">
                {plan.hours}
                <span className="text-gray-500 text-sm">/månad</span>
              </h3>
              <span className="text-gray-500 text-sm md:text-lg">
                ≈{plan.price} exkl. moms
              </span>
            </div>

            {/* Features list */}
            <ul className="space-y-3 font-light text-gray-700 flex-grow">
              {plan.features.length > 0 &&
                plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <FaCheck className="text-oakhill-black mr-3" />
                    {feature}
                  </li>
                ))}
            </ul>

            {/* Booking button */}
            <div className="flex justify-center pt-6 mt-4 h-20">
              <button
                onClick={() => handleClick(pkg.package_name)}
                className="bg-oakhill-black transform hover:scale-105 transition duration-200 text-white py-4 px-4 rounded-md flex items-center justify-center group"
              >
                Boka möte
                <span className="inline-block ml-2 transition-transform duration-700 ease-in-out transform group-hover:rotate-45 group-hover:translate-y-[2px]">
                  <FiArrowUpRight className="transform transition-transform duration-300 ease-in-out" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
