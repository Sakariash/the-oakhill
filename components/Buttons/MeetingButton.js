// MeetingButton.js
import { useState } from "react";
import Modal from "../Modal";
import { LuCalendarCheck } from "react-icons/lu";

const MeetingButton = ({
  className = "",
  packageType = "",
  packageName = "",
  price = "",
  text = "Boka möte",
}) => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  return (
    <div>
      <button
        onClick={openCalendly}
        className={`bg-oakhill-black text-white py-2 px-4 rounded-md transition duration-200 flex items-center justify-center group ${className}`}
      >
        {text}
        <LuCalendarCheck className="ml-4" />
      </button>
      <Modal
        isOpen={isCalendlyOpen}
        onClose={closeCalendly}
        packageType={packageType}
      />
    </div>
  );
};

export default MeetingButton;
