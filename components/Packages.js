import { storyblokEditable } from "@storyblok/react";
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import MeetingButton from "./Buttons/MeetingButton";
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

  useEffect(() => {
    if (isBottomInView && hasTopAnimated && !hasBottomAnimated) {
      setHasBottomAnimated(true);
    }
  }, [isBottomInView, hasTopAnimated, hasBottomAnimated]);

  return (
    <div {...storyblokEditable(blok)} className="mt-28 font-montserrat">
      <div
        ref={topRef}
        className={`flex flex-col px-4 space-y-8 md:flex-row md:space-y-0 md:space-x-8 mb-14 ${
          hasTopAnimated ? "animate-slideUp" : "opacity-0"
        }`}
      >
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
              <MeetingButton
                packageType="paket"
                packageName={pkg.package_name}
                price={pkg.price}
                className="bg-oakhill-black transform hover:scale-105 transition duration-200 text-white py-4 px-4 rounded-md flex items-center justify-center group"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full bg-oakhill-black py-10 px-3 text-left md:p-32 mb-14">
        <div className="text-left mb-3">
          <p className="text-xs text-gray-500 uppercase">prenumerera på kod</p>
        </div>
        <h3 className=" text-3xl lg:text-5xl lg:w-3/4 mb-10 text-white">
          Skräddarsydda lösningar <br />
          för din digitala tillväxt
        </h3>
        <p className="text-sm lg:w-2/4 lg:text-base text-gray-500 text-left">
          Betala månad för månad och få flexibel tillgång till kvalificerad
          programmering.
        </p>
      </div>
      <div
        ref={bottomRef}
        className={`flex flex-col px-4 space-y-8 md:flex-row md:space-y-0 md:space-x-8 ${
          hasBottomAnimated ? "animate-slideUp" : "opacity-0"
        }`}
      >
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
                <span className="text-sm">/månad</span>
              </h3>
            </div>
            <div className="flex justify-between items-center pt-6 border-t-2 border-gray-300 mt-4 h-20">
              <span className="text-gray-900 text-sm md:text-lg">
                {plan.price}{" "}
                <span className="text-gray-500 text-sm">exkl. moms</span>
              </span>
              <MeetingButton
                packageType="prenumerentation"
                packageName={plan.headline}
                price={plan.price}
                className="bg-oakhill-black transform hover:scale-105 transition duration-200 text-white py-4 px-4 rounded-md flex items-center justify-center group"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
