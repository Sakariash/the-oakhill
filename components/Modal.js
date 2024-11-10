import { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, packageType }) => {
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex justify-center items-end"
      style={{ overflow: "hidden" }}
    >
      <div
        className={`bg-white w-full h-[100vh]  transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ overflow: "hidden" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 z-[200] right-4 p-4 text-gray-600 hover:text-gray-800 text-3xl"
        >
          &times;
        </button>

        {/* Calendly Widget */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/simon-theoakhill/introduktionsmote?hide_gdpr_banner=1&text_color=191919&primary_color=191919"
          style={{ minWidth: "320px", height: "100%" }}
        ></div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
