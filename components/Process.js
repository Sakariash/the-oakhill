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
    <div {...storyblokEditable()} className="flex flex-col items-center mt-14 px-4 font-montserrat md:px-48">
      <h2 className="text-6xl mt-14">Hur fungerar det?</h2>
      <div className="flex items-center mt-14">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 border border-oakhill-green rounded-full flex items-center justify-center text-2xl text-gray-800">
                {step.value}
              </div>
              <p className="mt-5 text-center text-wrap">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="w-16 border-t border-oakhill-green mx-4" />
            )}
          </React.Fragment>
        ))}
      {/* <div className="flex flex-col items-center">
       <div className="text-4xl text-gray-800">
            Klart
        </div>
       </div> */}
      </div>
    </div>
  );
};

export default Process;