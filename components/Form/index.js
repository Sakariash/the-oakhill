import React, { useState } from 'react';
import { storyblokEditable } from '@storyblok/react';
console
const GenericForm = ({ blok }) => {
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
    return `absolute left-1 text-gray-700 font-medium transition-transform duration-500 ease-in-out ${
      isFilled || isFocused
        ? 'transform -translate-y-3 scale-75 top-0'
        : 'top-4'
    }`;
  };

  return (
    <div {...storyblokEditable(blok)} className="relative max-w-4xl mx-3 mt-28 md:mx-auto font-montserrat text-left p-6  rounded-lg ">
      <div className="absolute top-0 left-0 w-full h-2 bg-oakhill-green "></div>
      <h2 className="font-montserrat mb-6 text-2xl text-left text-gray-800 border-l-4 border-oakhill-green pl-4">
        {blok.title || 'Kontakta oss'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex space-x-4">
          {blok.name && (
            <div className="relative w-1/2">
              <label
                htmlFor="name"
                className={getLabelClasses('name')}
              >
                Namn
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                className={`w-full px-2 py-2 border-b-2 ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
          )}
          {blok.company !== undefined && (
            <div className="relative w-1/2">
              <label
                htmlFor="company"
                className={getLabelClasses('company')}
              >
              Företag
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onFocus={() => handleFocus('company')}
                onBlur={handleBlur}
                className={`w-full px-2 py-2 border-b-2 ${errors.company ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
              />
              {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
            </div>
          )}
        </div>
        {blok.email !== undefined && (
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className={getLabelClasses('email')}
            >
            Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              className={`w-full px-2 py-2 border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        )}
        {blok.phonenumber !== undefined && (
          <div className="relative mb-4">
            <label
              htmlFor="phonenumber"
              className={getLabelClasses('phonenumber')}
            >
              Telefon
            </label>
            <input
              type="text"
              id="phonenumber"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              onFocus={() => handleFocus('phonenumber')}
              onBlur={handleBlur}
              className={`w-full px-2 py-2 border-b-2 ${errors.phonenumber ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
            />
            {errors.phonenumber && <p className="text-red-500 text-sm mt-1">{errors.phonenumber}</p>}
          </div>
        )}
        {blok.message !== undefined && (
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className={getLabelClasses('message')}
            >
              Beskrivning
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
              className={`w-full px-2 border-b-2 ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none resize-none`}
              rows="1"
              style={{ paddingTop: '1.5rem' }} 
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
        )}
        <button type="submit" className="w-full bg-oakhill-green text-white py-2 rounded-lg hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Skicka
        </button>
      </form>
      {notification && (
        <div className={`mt-4 p-4 rounded-lg ${notification.type === 'success' ? 'bg-oakhill-green text-white' : 'text-red-800'}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default GenericForm;
