import React, { useState } from 'react';
import { storyblokEditable } from '@storyblok/react';

const GenericForm = ({ blok }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    company: '',
    description: '',
    checklist: [],
  });
  const [errors, setErrors] = useState({});

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
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.description) newErrors.description = 'Description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission logic here
    }
  };

  // Log to verify the structure of the form data
  console.log('Form blok:', blok);

  return (
    <div {...storyblokEditable(blok)} className="max-w-4xl mx-auto text-left p-6 bg-red-200 shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">{blok.title || 'Contact Form'}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
      {blok.Names && (
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1 px-2">Namn</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
        )}
        {blok.lastname && (
        <div className="mb-4">
          <label htmlFor="lastname" className="block text-gray-700 font-medium mb-1 px-2">Efternamn</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>)}
        {blok.address && (
        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-700 font-medium mb-1 px-2">Adress</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>)}
        {(blok.checklist && 
        <div className="mb-4">
          <p className="text-gray-700 font-medium mb-2 px-2">Vad behöver ni hjälp med?</p>
          {blok.Checklist && Array.isArray(blok.Checklist) && blok.Checklist.length > 0 ? (
            blok.Checklist.map((option, index) => (
              option ? (
                <div key={index} className="flex items-center mb-2 px-2 bg-blue-200">
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    name="checklist"
                    value={option}
                    checked={formData.checklist.includes(option)}
                    onChange={handleChange}
                    className="mr-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={`checkbox-${index}`} className="text-gray-700">{option}</label>
                </div>
              ) : null
            ))
          ) : (
            <p className="text-gray-500">No options available.</p>
          )}
        </div> )}
        {(blok.description && 
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-1 px-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg ${errors.description ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            rows="4"
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>)}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Skicka
        </button>
      </form>
    </div>
  );
};

export default GenericForm;
