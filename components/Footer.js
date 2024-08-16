import Link from "next/link"
import { storyblokEditable } from '@storyblok/react';

const Footer = ({story}) => {

return (
<footer className="font-diatype border-t border-gray-600 mt-32 p-8 md:px-48" aria-labelledby="footer-heading">
  <div className="grid grid-cols-4 md:grid-cols-8 gap-y-8">
    <div className="col-span-4 md:col-span-6">
      <h2 id="footer-heading" className="text-6xl lg:text-8xl mb-4 font-bold">Let's Talk!</h2>
        <a className="pt-14 relative group" target="_blank" rel="noreferrer noopener" aria-label="Email" href="mailto:hello@oakhill.com">
          <span className="text-xl md:text-2xl underline underline-offset-8">hello@oakhill.com</span>
          <span className="absolute -bottom-[6px] left-0 h-[2px] bg-gray-400 transition-all duration-700 ease-in-out w-0 group-hover:w-full"></span>
        </a>
    </div>
    <div className="col-span-2 md:col-span-2 mt-8 md:mt-0 flex flex-wrap justify-between">
      <ul role="list" className="w-1/2 space-y-4">
        <li><a href="#" className="text-sm md:text-lg relative group hover:text-gray-900">Work
           <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span></a></li>
        <li><a href="#" className="text-sm md:text-lg relative group hover:text-gray-900 ">Service<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span></a></li>
        <li><a href="#" className="text-sm md:text-lg relative group hover:text-gray-900 ">Blog<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span></a></li>
      </ul>
      <ul role="list" className="w-1/2 space-y-4">
        <li><a href="#" className="text-sm md:text-lg relative group hover:text-gray-900 ">Clients<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span></a></li>
        <li><a href="#" className="text-sm md:text-lg relative group hover:text-gray-900 ">About<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span></a></li>
        <li><a href="#" className="text-sm md:text-lg relative group hover:text-gray-900 ">Contact<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span></a></li>
      </ul>
    </div>
    <div className="col-span-4 md:col-span-full mt-8 md:mt-32">
      <a className="relative group" target="_blank" rel="noreferrer noopener" href="https://maps.app.goo.gl/PbxprJKHBRjWAaHK8">
        <span className="md:text-xl underline underline-offset-8">Varmfrontsgata 12, 418 43 Göteborg</span>
        <span className="absolute -bottom-[6px] left-0 h-[2px] bg-gray-400 transition-all duration-700 ease-in-out w-0 group-hover:w-full"></span>
      </a>
    </div>
    <div className="col-span-full md:col-span-6 6 flex space-x-8 md:mt-4">
      <a href="#" className="text-sm md:text-lg text-gray-500 relative group hover:text-gray-900">Privacy<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span></a>
      <a href="#" className="text-sm md:text-lg text-gray-500 relative group hover:text-gray-900">Terms<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span></a>
      <a href="#" className="text-sm md:text-lg text-gray-500 relative group hover:text-gray-900">Sitemap<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span></a>
    </div>
    <div className="col-span-full md:col-span-2 flex md:text-lg text-gray-500 md:mt-4">
     <span className="">© 2024, Oakhill</span>
    </div>
  </div>
</footer>
)}
     
    export default Footer