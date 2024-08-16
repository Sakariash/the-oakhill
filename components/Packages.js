import { storyblokEditable } from '@storyblok/react';
import { useRouter } from 'next/router';
// import { FaCheck } from 'react-icons/fa';

const Packages = ({ blok }) => {
    const router = useRouter();

    const handleClick = () => {
      router.push('/contact'); // Adjust the route based on your contact form path
    };

  return (
    <div {...storyblokEditable(blok)} className="px-4 mt-14 md:py-16 font-montserrat">
      <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
        
        {/* Quick Launch Package */}
        <div onClick={handleClick} className="relative shadow-md flex-1 transform hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col">
          <div className="absolute top-0 left-0 w-full h-2 bg-oakhill-green rounded-t-lg"></div>
          <div className="p-6 flex-1">
            <h3 className="text-2xl text-left text-gray-800 border-l-4 border-oakhill-green pl-4 mb-4">Quick Launch</h3>
            <ul className="space-y-3 font-light">
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Mobilanpassad
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Kontaktformulär
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Anpassad design
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Upp till 4st undersidor
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                CMS
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                1h kostnadsfria möten
              </li>
            </ul>
          </div>
          <div className="p-6 border-t-2 border-oakhill-green text-center text-gray-900">
            1,990 SEK exkl. moms
          </div>
        </div>

        {/* Professional Package */}
        <div onClick={handleClick} className="relative bg-white rounded-lg shadow-md flex-1 transform hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col">
          <div className="absolute top-0 left-0 w-full h-2 bg-oakhill-green rounded-t-lg"></div>
          <div className="p-6 flex-1">
            <h3 className="text-2xl text-left text-gray-800 border-l-4 border-oakhill-green pl-4 mb-4">Professional</h3>
            <ul className="space-y-3 font-light">
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Mobilanpassad
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Kontaktformulär
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Anpassad design
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Upp till 4st undersidor
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                CMS
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Domän
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Serviceavtal 1 månad
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Webbhotell
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                SSL Certifikat
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Blogg
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                SEO
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                4h kostnadsfria möten
              </li>
            </ul>
          </div>
          <div className="p-6 border-t-2 border-oakhill-green text-center text-gray-900">
            4,990 SEK exkl. moms
          </div>
        </div>

        {/* Tailored Package */}
        <div onClick={handleClick} className="relative bg-white rounded-lg shadow-md flex-1 transform hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col">
          <div className="absolute top-0 left-0 w-full h-2 bg-oakhill-green rounded-t-lg"></div>
          <div className="p-6 flex-1">
            <h3 className="text-2xl text-left text-gray-800 border-l-4 border-oakhill-green pl-4 mb-4">Tailored</h3>
            <ul className="space-y-3 font-light">
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Mobilanpassad
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Kontaktformulär
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Digital design
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Undersida
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                CMS
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Domän
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Webbhotell
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                SSL Certifikat
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Blogg
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                SEO
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                Serviceavtal 3 månader
              </li>
              <li className="flex items-center text-gray-700">
                {/* <FaCheck className="text-oakhill-green mr-3" /> */}
                8h kostnadsfria möten
              </li>
            </ul>
          </div>
          <div className="p-6 border-t-2 border-oakhill-green text-center text-gray-900">
            19,990 SEK exkl. moms
          </div>
        </div>

      </div>
    </div>
  );
};

export default Packages;