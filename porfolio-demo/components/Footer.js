import Link from "next/link"
import { storyblokEditable } from '@storyblok/react';

const Footer = ({story}) => {
  console.log('story', story);
return (
      <footer className="bg-white lg:py-6 px-4 md:px-6 lg:px-8" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className=" py-12 mx-auto bg-red-200 max-w-7xl lg:py-16 px-12 lg:px-20">
        <div className="grid md:grid-cols-4 md:gap-8 grid-cols-2 place-items-center">
          <div className="mt-12 md:mt-0 ">
            <h3 className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Support</h3>
            <ul role="list" className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900"> Pricing </a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900"> Documentation </a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900"> Guides </a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900"> API Status </a>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Support</h3>
            <ul role="list" className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900"> Pricing </a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900"> Documentation </a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900"> Guides </a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900"> API Status </a>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0 ">
            <h3 className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Support</h3>
            <ul role="list" className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900"> Pricing </a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900"> Documentation </a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900"> Guides </a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900"> API Status </a>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0 ">
            <h3 className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Support</h3>
            <ul role="list" className="mt-4 space-y-4">
            <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900"> Pricing </a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900"> Documentation </a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900"> Guides </a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900"> API Status </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
     
)}
     
    export default Footer