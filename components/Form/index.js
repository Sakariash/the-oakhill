import React, { useState } from 'react';
import { storyblokEditable } from '@storyblok/react';

const GenericForm = ({ blok }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    address: '',
    description: '',
    checklist: [],
  });
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);
  
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
    if (!formData.name) newErrors.name = 'Vänligen fyll i ditt namn.';
    if (!formData.description) newErrors.description = 'Vänligen lämna en beskrivning av jobbet ni vill få en offert på.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      fetch('https://www.theoakhill.se/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          lastname: formData.lastname,
          address: formData.address,
          description: formData.description,
          checklist: formData.checklist,
        }),
      })
      .then(response => response.json())
      .then(data => {
        setNotification({ type: 'success', message: 'Tack, vi har tagot emot dit email!' });
        setFormData({
          name: '',
          lastname: '',
          address: '',
          description: '',
          checklist: [],
        });
        setErrors({});
      })
      .catch(error => {
        setNotification({ type: 'error', message: 'Ett fel uppstod, vänligen försök igen!' });
      });
    }
  };
  
  
  return (
    <div {...storyblokEditable(blok)} className="relative max-w-4xl mx-auto font-montserrat text-left p-6 shadow-md rounded-lg border border-oakhill-green">
      <div className="absolute top-0 left-0 w-full h-2 bg-oakhill-green rounded-t-lg"></div>
      <h2 className="font-montserrat mb-6 text-2xl text-left text-gray-800 border-l-4 border-oakhill-green pl-4">
        {blok.title || 'Contact Form'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {blok.name && (
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
        {blok.lastname !== undefined && (
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
          </div>
        )}
        {blok.address !== undefined && (
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-medium mb-1 px-2">Adress</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
        {blok.checklist !== undefined && (
          <div className="mb-4">
            <p className="text-gray-700 font-medium mb-2 px-2">Vad behöver ni hjälp med?</p>
            {blok.Checklist && Array.isArray(blok.Checklist) && blok.Checklist.length > 0 ? (
              blok.Checklist.map((option, index) => (
                option ? (
                  <div key={index} className="flex items-center mb-2 px-2">
                    <input
                      type="checkbox"
                      id={`checkbox-${index}`}
                      name="checklist"
                      value={option}
                      checked={formData.checklist.includes(option)}
                      onChange={handleChange}
                      className="mr-2 h-5 w-5 text-blue-600 border-gray-300 border focus:ring-blue-500"
                    />
                    <label htmlFor={`checkbox-${index}`} className="text-gray-700">{option}</label>
                  </div>
                ) : null
              ))
            ) : (
              <p className="text-gray-500">No options available.</p>
            )}
          </div>
        )}
        {blok.description !== undefined && (
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-1 px-2">Beskrivning</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.description ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              rows="4"
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>
        )}
        <button type="submit" className="w-full bg-oakhill-green text-white py-2 rounded-lg hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Skicka
        </button>
      </form>
      {notification && (
        <div className={`mt-4 p-4 rounded-lg ${notification.type === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default GenericForm;
