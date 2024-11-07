import { useRouter } from "next/router";
import { FiArrowUpRight } from "react-icons/fi";

const PrimaryButton = ({
  packageType = "",
  price = "",
  destinationURL = "/404",
  className = "",
  text = "Skicka",
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: destinationURL,
      query: { package: packageType, price: price },
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-oakhill-black text-white py-2 px-4 rounded-md transition duration-200 flex items-center justify-center group ${className}`}
    >
      {text}
      <span className="inline-block ml-2 transition-transform duration-700 ease-in-out transform group-hover:rotate-45 group-hover:translate-y-[2px]">
        <FiArrowUpRight className="transform transition-transform duration-300 ease-in-out" />
      </span>
    </button>
  );
};

export default PrimaryButton;
