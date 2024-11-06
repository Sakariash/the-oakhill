import { storyblokEditable } from '@storyblok/react';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import useInView from './hooks/useInView';

const Packages = ({ blok }) => {
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, { threshold: 0.2 });

  const router = useRouter();
  const handleClick = (packageType) => {
      router.push(`/contact?package=${packageType}`);
  };

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
   }

    return (
        <div ref={ref} {...storyblokEditable(blok)} className="px-4 mt-28 font-montserrat">
            <div className={`flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 ${hasAnimated ? 'animate-slideUp' : 'opacity-0'}`}>
                
                {/* Small Package */}
                <div className="shadow-md flex-1 cursor-pointer flex flex-col p-6">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4">Small</h3>
                    
                    <ul className="space-y-3 font-light text-gray-700 flex-grow">
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />Mobilanpassad</li>
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />Kontaktformulär</li>
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />Anpassad design</li>
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />Upp till 2st undersidor</li>
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />1h kostnadsfria möten</li>
                    </ul>
                    
                    <div className="flex justify-between items-center pt-6 border-t-2 border-gray-300 mt-4 h-20">
                        <span className="text-gray-900 text-lg">1,990 SEK exkl. moms</span>
                        <button onClick={() => handleClick('Small')} className="bg-oakhill-black transform hover:scale-105 transition duration-200 text-white py-2 px-4 rounded-md flex items-center justify-center group">Boka möte
                          <span className="inline-block ml-2 transition-transform duration-700 ease-in-out transform group-hover:rotate-45 group-hover:translate-y-[2px]">
                            <FiArrowUpRight className="transform transition-transform duration-300 ease-in-out" />
                          </span>
                        </button>
                    </div>
                </div>

                {/* Medium Package */}
                <div className="shadow-md flex-1 cursor-pointer flex flex-col p-6">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4">Medium</h3>
                    
                    <ul className="space-y-3 font-light text-gray-700 flex-grow">
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />Allt i Small</li>
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />Anpassad design</li>
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />Upp till 4st undersidor</li>
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />Grundläggande SEO</li>
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />2h kostnadsfria möten</li>
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />Serviceavtal 1 månad</li>
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />CMS</li>
                    </ul>
                    
                    <div className="flex justify-between items-center pt-6 border-t-2 border-gray-300 mt-4 h-20">
                        <span className="text-gray-900 text-lg">4,990 SEK exkl. moms</span>
                        <button onClick={() => handleClick('Medium')} className="bg-oakhill-black transform hover:scale-105 transition duration-200 text-white py-2 px-4 rounded-md flex items-center justify-center group">Boka möte
                          <span className="inline-block ml-2 transition-transform duration-700 ease-in-out transform group-hover:rotate-45 group-hover:translate-y-[2px]">
                            <FiArrowUpRight className="transform transition-transform duration-300 ease-in-out" />
                          </span>
                        </button>
                    </div>
                </div>

                {/* Big Package */}
                <div className="shadow-md flex-1 cursor-pointer flex flex-col p-6">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4">Big</h3>
                    
                    <ul className="space-y-3 font-light text-gray-700 flex-grow">
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />Allt i Medium</li>
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />Skräddarsydd design</li>
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />Obegränsade undersidor</li>
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />Omfattande SEO</li>
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />5h kostnadsfria möten efter behov</li>
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />Serviceavtal 3 månader</li>
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />Blogg</li>
                        <li className="flex items-center"><FaCheck className="text-oakhill-black mr-3" />Google-analytics</li>
                    </ul>
             
                    <div className="flex justify-between items-center pt-6 border-t-2 border-gray-300 mt-4 h-20">
                        <span className="text-gray-900 text-lg">19,990 SEK exkl. moms</span>
                        <button onClick={() => handleClick('Big')} className="bg-oakhill-black transform hover:scale-105 transition duration-200 text-white py-2 px-4 rounded-md flex items-center justify-center group">Boka möte
                          <span className="inline-block ml-2 transition-transform duration-700 ease-in-out transform group-hover:rotate-45 group-hover:translate-y-[2px]">
                            <FiArrowUpRight className="transform transition-transform duration-300 ease-in-out" />
                          </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;
