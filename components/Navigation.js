import { useState } from "react";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import Image from "next/image";

const Navigation = ({ story }) => {
  const [openMenu, setOpenMenu] = useState(false);

  // Ensure that story is defined and has the necessary properties
  const headerLogo = story?.header_logo || {};
  const headerMenu = story?.header_menu || [];

  return (
    <div className="relative border-b border-gray-600 md:mx-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 cursor-auto relative w-32 h-10"> {/* Container for the logo */}
            {headerLogo?.filename && (
              <Link href="/" passHref>
                <div className="relative w-48 h-full">
                  <Image
                    src={headerLogo.filename}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'contain' }}
                    alt={story.header_logo.alt || 'Logo'}
                    className="absolute inset-0"
                  />
                </div>
              </Link>
            )}
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setOpenMenu(true)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <HeaderMenu story={story && story.header_menu} />
        </div>
      </div>

      {/* Mobile menu, show/hide based on mobile menu state */}
      <div
        className={`fixed inset-0 bg-white z-50 p-6 flex flex-col transition-transform duration-500 ease-in-out ${
          openMenu ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
        <div className="flex cursor-auto relative w-32 h-10"> {/* Container for the logo */}
            {headerLogo?.filename && (
              <Link href="/" passHref>
                <div className="relative w-48 h-full">
                  <Image
                    src={headerLogo.filename}
                    fill
                    sizes="max-width: 120px"
                    style={{ objectFit: 'contain' }}
                    alt={story.header_logo.alt || 'Logo'} 
                  />
                </div>
              </Link>
            )}
          </div>
          <button
            type="button"
            onClick={() => setOpenMenu(false)}
            className="text-gray-600 hover:text-gray-900"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex-grow flex flex-col space-y-2 ">
          {/* Add a delay to the appearance of each item */}
          <Link href="/about" passHref>
            <span className={`text-3xl font-medium text-gray-900 transition-opacity duration-200 ease-in-out ${openMenu ? 'opacity-100 delay-500' : 'opacity-0'}`}>About</span>
          </Link>
          <Link href="/blog" passHref>
            <span className={`text-3xl font-medium text-gray-900 transition-opacity duration-200 ease-in-out ${openMenu ? 'opacity-100 delay-700' : 'opacity-0'}`}>Blog</span>
          </Link>
          <Link href="/services" passHref>
            <span className={`text-3xl font-medium text-gray-900 transition-opacity duration-200 ease-in-out ${openMenu ? 'opacity-100 delay-1000' : 'opacity-0'}`}>Components</span>
          </Link>
        </nav>
        <footer className={`font-montserrat border-t border-gray-600 transition-opacity duration-1000 ease-in-out ${openMenu ? 'opacity-100 delay-1000' : 'opacity-0'}`} aria-labelledby="footer-heading">
          <div className="grid grid-cols-4 gap-y-8">
            <div className="col-span-4">
              <h2 id="footer-heading" className="text-md font-light mt-4">Let's Talk</h2>
              <a className="pt-14 relative group" target="_blank" rel="noreferrer noopener" aria-label="Email" href="mailto:hello@oakhill.com">
                <span className="text-2xl underline underline-offset-8">hello@theoakhill.se</span>
                <span className="absolute -bottom-[6px] left-0 h-[2px] bg-gray-400 transition-all duration-700 ease-in-out w-0 group-hover:w-full"></span>
              </a>
            </div>
            <div className="col-span-4 mt-8">
              <a className="relative group" target="_blank" rel="noreferrer noopener" href="https://maps.app.goo.gl/PbxprJKHBRjWAaHK8">
                <span className="underline underline-offset-8">Varmfrontsgata 12, 418 43 Göteborg</span>
                <span className="absolute -bottom-[6px] left-0 h-[2px] bg-gray-400 transition-all duration-700 ease-in-out w-0 group-hover:w-full"></span>
              </a>
            </div>
            <div className="col-span-2 flex space-x-8 mt-4">
              <span className="text-sm text-gray-500 relative group hover:text-gray-900">Privacy
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
              </span>
              <span className="text-sm text-gray-500 relative group hover:text-gray-900">Terms
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
              </span>
              <span className="text-sm text-gray-500 relative group hover:text-gray-900">Sitemap
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
              </span>
            </div>
            <div className="text-sm col-span-2 place-content-end flex text-gray-500 mt-4">
              <span>© 2024, Oakhill</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Navigation;
