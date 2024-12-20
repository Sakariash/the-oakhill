import { useState } from 'react';
import { storyblokEditable } from '@storyblok/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = ({ blok }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div {...storyblokEditable(blok)} className="w-auto mt-28 mx-2">
      <h2 className="text-7xl font-montserrat mb-10 md:mx-[100px] text-left">FAQ</h2>
      {blok.questions.map((faq, index) => (
        <div 
          key={index} 
          className={`transition-all duration-300 ease-in-out
           border-oakhill-black
            border-b-2 px-2 mx-auto md:mx-[100px]`}
        >
          <div 
            className={"flex items-center cursor-pointer py-6"}
            onClick={() => toggleAnswer(index)}
          >
            <h3 className="font-montserrat text-left flex-1 text-lg md:text-2xl lg:text-4xl">{faq.question}</h3>
            <span className={`text-xl transition-transform duration-300 ease-in-out`}>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          <div className={`overflow-hidden text-left transition-[max-height,padding] duration-300 ease-in-out md:w-2/3
            ${activeIndex === index ? 'max-h-[1000px] py-4' : 'max-h-0 py-0'}`}>
            <p className="text-smlg whitespace-pre-wrap font-montserrat font-light">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
