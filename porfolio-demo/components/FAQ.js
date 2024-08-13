import { useState } from 'react';
import { storyblokEditable } from '@storyblok/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = ({ blok }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div {...storyblokEditable(blok)} className="w-auto py-14">
      <h2 className="text-7xl font-diatype mb-10 md:mx-[100px] text-left">FAQ</h2>
      {blok.questions.map((faq, index) => (
        <div 
          key={index} 
          className={`transition-all duration-300 ease-in-out
           border-black
            border-b-2 px-2 mx-auto md:mx-[100px]`}
        >
          <div 
            className={"flex items-center cursor-pointer py-6"}
            onClick={() => toggleAnswer(index)}
          >
            <h3 className="text-xl font-diatype text-left flex-1 text-4xl">{faq.question}</h3>
            <span className={`text-xl transition-transform duration-300 ease-in-out`}>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          <div className={`overflow-hidden text-left transition-all duration-300 ease-in-out
            ${activeIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}>
            <p className="text-lg">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
