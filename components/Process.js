import React from 'react'; // Import React
import { storyblokEditable } from '@storyblok/react';

const Process = ({ blok }) => {

  const steps = [
    { value: '1', description: blok.step_1 },
    { value: '2', description: blok.step_2 },
    { value: '3', description: blok.step_3 },
    { value: '4', description: blok.step_4 },
    { value: '5', description: blok.step_5 }
  ];

  return (
    <div {...storyblokEditable()} className="flex flex-col lg:items-center mt-14 px-4 font-montserrat lg:px-48">
      <h2 className="text-3xl md:text-5xl lg:text-6xl mt-14 text-oakhill-black">Hur fungerar det?</h2>
      <div className="flex flex-col lg:flex-row lg:items-center mt-14">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-row lg:flex-col lg:items-center lg:w-32 lg:h-48">
              <div className="min-w-20 h-20 mr-12 border lg:mb-0 lg:mr-0 border-oakhill-black rounded-full flex items-center justify-center text-4xl text-gray-800">
                {step.value}
              </div>
              <p className="mt-7 text-left lg:text-center">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="w-16 ml-10 lg:ml-4 border-l lg:border-l-0 lg:h-0 h-16 lg:border-t border-oakhill-black mx-4 lg:mb-24  lg:visible" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Process;