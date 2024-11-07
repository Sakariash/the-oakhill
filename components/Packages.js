import { storyblokEditable } from "@storyblok/react";
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import useInView from "./hooks/useInView";

const Packages = ({ blok }) => {
  const topRef = useRef();
  const bottomRef = useRef();
  const [hasTopAnimated, setHasTopAnimated] = useState(false);
  const [hasBottomAnimated, setHasBottomAnimated] = useState(false);

  const isTopInView = useInView(topRef, { threshold: 0.2 });
  const isBottomInView = useInView(bottomRef, { threshold: 0.2 });

  const packages = blok.package;
  const subscriptionPlans = blok.subscription;

  const router = useRouter();
  const handleClick = (packageType) => {
    router.push(`/contact?package=${packageType}`);
  };

  useEffect(() => {
    if (isTopInView && !hasTopAnimated) {
      setHasTopAnimated(true);
    }
  }, [isTopInView, hasTopAnimated]);

  // Set animation state for the bottom section (only trigger after the top has animated)
  useEffect(() => {
    if (isBottomInView && hasTopAnimated && !hasBottomAnimated) {
      setHasBottomAnimated(true);
    }
  }, [isBottomInView, hasTopAnimated, hasBottomAnimated]);

  return (
    <div {...storyblokEditable(blok)} className="px-4 mt-28 font-montserrat">
      <div
        ref={topRef}
        className={`flex flex-col space-y-8 mb-14 md:flex-row md:space-y-0 md:space-x-8 ${
          hasTopAnimated ? "animate-slideUp" : "opacity-0"
        }`}
      >
        {/* Package Section */}
        {packages.map((pkg) => (
          <div
            key={pkg._uid}
            className="shadow-md flex-1 cursor-pointer flex flex-col p-6"
          >
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              {pkg.package_name}
            </h3>
            <ul className="space-y-3 font-light text-gray-700 flex-grow">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center">
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
                  <FiArrowUpRight />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center w-full bg-oakhill-black p-20 mb-14">
        <h3 className=" text-3xl lg:text-5xl w-3/4 mb-10 text-white">
          Skräddarsydda lösningar <br /> Betala månad för månad för din digitala
          tillväxt
        </h3>
        <p className="text-sm w-3/4 lg:text-base text-white">
          Få flexibel tillgång till kvalificerad programmering där du betalar
          månadsvis. Oavsett om du vill bygga en ny hemsida, uppdatera en
          befintlig bygga ett system eller en e-handel. Välj det paket som
          passar bäst för ert företags utveckling och väx tillsammans med oss!
        </p>
      </div>
      <div
        ref={bottomRef}
        className={`flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 ${
          hasBottomAnimated ? "animate-slideUp" : "opacity-0"
        }`}
      >
        {/* Subscription Plans */}
        {subscriptionPlans.map((plan) => (
          <div
            key={plan._uid}
            className="shadow-md flex-1 cursor-pointer flex flex-col p-6"
          >
            <div className="flex flex-col mb-6 flex-grow">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                {plan.headline}
              </h3>
              <p className="font-light text-gray-700 flex-1">
                {plan.paragraph}
              </p>
            </div>
            <div className="justify-center my-5">
              <h3 className="text-6xl text-gray-800 mx-5">
                {plan.hours}
                <span className="text-gray-500 text-sm">/månad</span>
              </h3>
              <span className="text-gray-500 text-sm md:text-lg">
                ≈ {plan.price}kr exkl. moms
              </span>
            </div>
            <ul className="space-y-3 font-light text-gray-700 flex-grow">
              {plan.features.length > 0 &&
                plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheck className="text-oakhill-black mr-3" />
                    {feature}
                  </li>
                ))}
            </ul>
            <div className="flex justify-center pt-6 mt-4 h-20">
              <button
                onClick={() => handleClick(plan.headline)}
                className="bg-oakhill-black transform hover:scale-105 transition duration-200 text-white py-4 px-4 rounded-md flex items-center justify-center group"
              >
                Boka möte
                <span className="inline-block ml-2 transition-transform duration-700 ease-in-out transform group-hover:rotate-45 group-hover:translate-y-[2px]">
                  <FiArrowUpRight />
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
