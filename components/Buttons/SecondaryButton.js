import { useRouter } from "next/router";
import { FiArrowUpRight } from "react-icons/fi";

const SecondaryButton = ({
  destinationURL = "/404",
  className = "",
  text = "Skicka",
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: destinationURL,
    });
  };

  return (
    <button
      onClick={handleClick}
      className={` text-black border border-oakhill-black py-2 px-4 rounded-md transition duration-200 flex items-center justify-center hover:bg-oakhill-black hover:text-white ${className}`}
    >
      {text}
      <span className="inline-block ml-2 hover:bg-oakhill-black"></span>
    </button>
  );
};

export default SecondaryButton;
