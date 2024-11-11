import React, { useState } from "react";
import { storyblokEditable } from "@storyblok/react";
import { FiArrowUpRight } from "react-icons/fi";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

const formatTextWithLineBreaks = (text) => {
  return text.split('"').map((part, index) => {
    // Första delen, inga radbrytningar behövs
    if (index === 0) {
      return part;
    }

    // För efterföljande delar, sätt in ett <br /> innan varje del
    return (
      <>
        <br />
        {part}
      </>
    );
  });
};

const HeroContent = ({ blok }) => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setIsChecked(checked);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Vänligen fyll i er email";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      setError("Du måste godkänna att vi sparar dina uppgifter.");
      return;
    }
    if (validateForm()) {
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ email: "" });
          setErrors({});
        } else {
          setError("Ett fel uppstod, vänligen försök igen!");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        setError("Ett fel uppstod, vänligen försök igen!");
      }
    }
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const getLabelClasses = (field) => {
    const isFocused = focusedField === field;
    const isFilled = formData[field] !== "";
    return `absolute left-3 text-gray-500  text-sm font-medium transition-transform duration-500 ease-in-out ${
      isFilled || isFocused
        ? "transform -translate-y-4 scale-75 top-1"
        : "top-3"
    }`;
  };

  return (
    <div
      {...storyblokEditable(blok)}
      className="flex justify-center items-center align-middle w-full overflow-hidden"
    >
      <div className="mt-24 lg:mt-48 mx-2 lg:max-w-screen-xl">
        <div className="text-xs lg:text-base w-full uppercase text-gray-500 animate-slideDown">
          Bygg en stark digital närvaro för långsiktig framgång
        </div>
        {blok.headline && (
          <div className="mb-8">
            <h1 className="text-4xl mb-4 sm:text-4xl lg:text-8xl animate-slideDown">
              {formatTextWithLineBreaks(blok.headline)}
            </h1>
          </div>
        )}
        <div className="flex justify-center text-lg animate-slideInLeft text-gray-500">
          <div className="md:w-1/2 mb-10">{blok.tagline}</div>
        </div>

        {/* Center buttons */}
        <div className="flex justify-center mb-4">
          <div className="flex justify-center w-full max-w-screen-sm gap-1 md:gap-2">
            <PrimaryButton
              text="Våra tjänster"
              destinationURL="services"
              className="md:w-1/3"
            >
              Primary
            </PrimaryButton>
            <SecondaryButton
              text="Kontakta oss"
              destinationURL="contact"
              className="md:w-1/3"
            >
              Secondary
            </SecondaryButton>
          </div>
        </div>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default HeroContent;
