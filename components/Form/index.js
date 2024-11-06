import React, { useState } from 'react';
import { storyblokEditable } from '@storyblok/react';
import { FiArrowUpRight } from 'react-icons/fi';

const GenericForm = ({ blok, packageType }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    phonenumber: '',
    checklist: [],
  });
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevState) => {
        const newChecklist = checked
          ? [...prevState.checklist, value]
          : prevState.checklist.filter((item) => item !== value);
        return { ...prevState, checklist: newChecklist };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Vänligen fyll i ert namn.';
    if (!formData.email) newErrors.email = 'Vänligen fyll i er email';
    if (!formData.message) newErrors.message = 'Vänligen lämna en beskrivning av jobbet ni vill få en offert på.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          setNotification({ type: 'success', message: 'Tack, vi har tagit emot ditt mail!' });
          setFormData({
            name: '',
            company: '',
            email: '',
            phonenumber: '',
            message: '',
            checklist: [],
          });
          setErrors({});
        } else {
          setNotification({ type: 'error', message: 'Ett fel uppstod, vänligen försök igen!' });
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setNotification({ type: 'error', message: 'Ett fel uppstod, vänligen försök igen!' });
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
    return `absolute left-1 text-gray-700 font-medium leading-3 transition-transform duration-500 ease-in-out ${
      isFilled || isFocused ? 'transform -translate-y-3 scale-75 top-0' : 'top-4'
    }`;
  };

  return (
    <div {...storyblokEditable(blok)} className="flex flex-col md:flex-row mx-auto mt-20 font-montserrat">
      {/* Image section for desktop */}
      <div className="hidden md:block w-1/2  " style={{
        backgroundImage: `url(${blok.image.filename})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100vh - 80px)',
      }}></div>
 
      
      {/* Form section */}
      <div className="w-full md:w-1/2 p-6 md:px-16">
        
          <h2 className="text-2xl md:text-4xl text-oakhill-black mb-6 text-left">{blok.headline}</h2>
          <p className="mb-8 text-gray-600 text-left text-sm md:text-md">{blok.paragraph}</p> 
          <form onSubmit={handleSubmit} className="space-y-6">
              {blok.name && (
                <div className="relative mb-4">
                  <label htmlFor="name" className={getLabelClasses('name')}>Namn</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className={`w-full px-2 py-2 border rounded-md ${errors.name && 'border-red-500'} focus:outline-none`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
              )}
              {blok.company !== undefined && (
                <div className="relative mb-4">
                  <label htmlFor="company" className={getLabelClasses('company')}>Företag</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => handleFocus('company')}
                    onBlur={handleBlur}
                    className={`w-full px-2 py-2 border rounded-md  ${errors.company && 'border-red-500'} focus:outline-none`}
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>
              )}
            
            {blok.email !== undefined && (
              <div className="relative mb-4">
                <label htmlFor="email" className={getLabelClasses('email')}>Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className={`w-full px-2 py-2 border rounded-md ${errors.email && 'border-red-500'} focus:outline-none`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            )}
            {blok.phonenumber !== undefined && (
              <div className="relative mb-4">
                <label htmlFor="phonenumber" className={getLabelClasses('phonenumber')}>Telefon</label>
                <input
                  type="text"
                  id="phonenumber"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  onFocus={() => handleFocus('phonenumber')}
                  onBlur={handleBlur}
                  className={`w-full px-2 py-2 border rounded-md ${errors.phonenumber && 'border-red-500'} focus:outline-none`}
                />
                {errors.phonenumber && <p className="text-red-500 text-sm mt-1">{errors.phonenumber}</p>}
              </div>
            )}
            {blok.message !== undefined && (
              <div className="relative mb-4">
                <label htmlFor="message" className={getLabelClasses('message')}>Beskrivning</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  className={`w-full px-2 py-2 border rounded-md ${errors.message && 'border-red-500'} focus:outline-none resize-none`}
                  rows="4"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
            )}
            <button
              type="submit"
              className="relative w-full py-2 bg-oakhill-black text-white rounded transition duration-200 flex items-center justify-center group"
            >
              Skicka
              <span className="inline-block ml-2 transition-transform duration-700 ease-in-out transform group-hover:rotate-45 group-hover:translate-y-[2px]">
                <FiArrowUpRight className="transform transition-transform duration-300 ease-in-out" />
              </span>
            </button>
          </form>
          {notification && (
            <div className={`mt-4 p-4 rounded-lg ${notification.type === 'success' ? 'bg-oakhill-black text-white' : 'text-red-800'}`}>
              {notification.message}
            </div>
          )}
        </div>
    </div>
  );
};

export default GenericForm;
