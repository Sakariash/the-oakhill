import React, { useState } from 'react';
import { storyblokEditable } from '@storyblok/react';
import { FiArrowUpRight } from 'react-icons/fi';

const formatTextWithLineBreaks = (text) => {
  return text.split(/(\. )/).map((part, index) => (
    part.match(/(\. )/) ? <React.Fragment key={index}>{part}<br /></React.Fragment> : part
  ));
};

const HeroContent = ({ blok }) => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setIsChecked(checked);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Vänligen fyll i er email';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      setError('Du måste godkänna att vi sparar dina uppgifter.');
      return;
    }
    if (validateForm()) {
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ email: '' });
          setErrors({});
        } else {
          setError('Ett fel uppstod, vänligen försök igen!');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setError('Ett fel uppstod, vänligen försök igen!');
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
    const isFilled = formData[field] !== '';
    return `absolute left-3 text-gray-500  text-sm font-medium transition-transform duration-500 ease-in-out ${
      isFilled || isFocused
        ? 'transform -translate-y-4 scale-75 top-1'
        : 'top-3'
    }`;
  };

  return (
    <div {...storyblokEditable(blok)} className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: `url(${blok.image.filename})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        zIndex: -1,
      }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-50% z-10"></div>
      <div className="absolute inset-0 bg-white opacity-100 mix-blend-multiply backdrop-blur-sm" style={{ zIndex: 0 }}></div>

      <div className="flex items-center justify-between h-full">
        <div className="grid grid-cols-12 grid-rows-12 w-full z-40">
          {blok.headline && (
            <div className="col-start-2 col-end-12 row-start-1 row-end-5 text-left">
              <h1 className="text-xl sm:text-4xl md:text-4xl lg:text-6xl 2xl:text-7xl">
                {formatTextWithLineBreaks(blok.headline)}
              </h1>
            </div>
          )}
          <div className="col-start-2 col-end-12 md:col-end-6 row-start-6 row-end-12 text-left">
            <div className="max-w-md mx-auto">
              {submitted ? (
                <p className="text-left">Vi har registrerat din e-mail och kommer inom en snar framtid att höra av oss till dig via mail!</p>
              ) : (
                <form onSubmit={handleSubmit}>
                    <p className='text-gray-500 text-sm'>Email*</p>
                  <div className="relative mb-4">
                    <label htmlFor="email" className={getLabelClasses('email')}>
                    Boka ett gratis möte redan idag!
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      className={`w-full px-2 py-2 border-2 rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none `}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={isChecked}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="terms" className="text-sm">
                      Jag godkänner att The Oakhill sparar mina uppgifter i syfte att kontakta mig.
                    </label>
                  </div>
                  <button
      type="submit"
      className="relative w-full py-2 bg-oakhill-black text-white rounded transition duration-200 flex items-center justify-center group"
    >
      Skicka
      <span className="inline-block ml-2 transition-transform duration-700 ease-in-out transform group-hover:rotate-45 group-hover:translate-y-[2px]">
        <FiArrowUpRight className="transform transition-transform duration-300 ease-in-out" />
      </span>
    </button>
                  {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
