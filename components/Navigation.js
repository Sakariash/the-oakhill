import { useState, useEffect } from "react";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import Image from "next/image";

const Navigation = ({ story }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setOpenMenu(false);

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openMenu]);

  // Ensure that story is defined and has the necessary properties
  const headerLogo = story?.header_logo || {};
  const headerMenu = story?.header_menu || [];

  return (
    <div className="relative md:mx-10">
      <div className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
        <div className="flex justify-between items-center md:justify-start px-4">
          <div className="flex lg:w-0 lg:flex-1 cursor-auto relative h-12 sm:h-16 md:h-20"> 
            {headerLogo?.filename && (
              <Link href="/" passHref>
                <div className="relative w-32 sm:w-44 md:w-52 h-20">
                  <Image
                    src={headerLogo.filename}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'contain' }}
                    alt={story.header_logo.alt || 'The Oakhill Logo'}
                    className="absolute inset-0"
                  />
                </div>
              </Link>
            )}
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setOpenMenu(!openMenu)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-white hover:bg-oakhill-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              aria-expanded={openMenu}
            >
              <span className="sr-only">Open menu</span>
              {openMenu ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          <HeaderMenu story={headerMenu} />
        </div>
      </div>

      {/* Mobile menu, show/hide based on mobile menu state */}
      <div
        className={`fixed inset-0 bg-white z-10 p-6 flex flex-col transition-transform duration-500 ease-in-out ${openMenu ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ height: 'calc(100vh - 75px)' }} 
      >
        <nav className="flex-grow flex flex-col space-y-2 mt-14">
          <Link href="/about" passHref>
            <span onClick={closeMenu} className={`text-3xl font-medium text-gray-900 transition-opacity duration-200 ease-in-out ${openMenu ? 'opacity-100 delay-500' : 'opacity-0'}`}>Om oss</span>
          </Link>
          <Link href="/contact" passHref>
            <span onClick={closeMenu} className={`text-3xl font-medium text-gray-900 transition-opacity duration-200 ease-in-out ${openMenu ? 'opacity-100 delay-700' : 'opacity-0'}`}>Kontakt</span>
          </Link>
        </nav>
        <footer className={`font-montserrat border-t border-gray-600 transition-opacity duration-1000 ease-in-out ${openMenu ? 'opacity-100 delay-1000' : 'opacity-0'}`} aria-labelledby="footer-heading">
          <div className="grid grid-cols-4 gap-y-8">
            <div className="col-span-4">
              <h2 id="footer-heading" className="text-md font-light mt-4">Hey!</h2>
              <a onClick={closeMenu} className="pt-14 relative group" target="_blank" rel="noreferrer noopener" aria-label="Email" href="mailto:hello@oakhill.com">
                <span className="text-2xl underline underline-offset-8">hello@theoakhill.se</span>
                <span className="absolute -bottom-[6px] left-0 h-[2px] bg-gray-400 transition-all duration-700 ease-in-out w-0 group-hover:w-full"></span>
              </a>
            </div>
            <div className="col-span-4 mt-8">
              <a onClick={closeMenu} className="relative group" target="_blank" rel="noreferrer noopener" href="https://maps.app.goo.gl/PbxprJKHBRjWAaHK8">
                <span className="underline underline-offset-8">Varmfrontsgata 12, 418 43 Göteborg</span>
                <span className="absolute -bottom-[6px] left-0 h-[2px] bg-gray-400 transition-all duration-700 ease-in-out w-0 group-hover:w-full"></span>
              </a>
            </div>
            <div className="col-span-2 flex flex-wrap mt-4">
              <a onClick={closeMenu} href='/privacy' className="text-sm text-gray-500 relative group hover:text-gray-900">Integritetspolicy
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
              </a>
              <span onClick={closeMenu} className="text-sm text-gray-500 relative group">© 2024 The Oakhill.
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Navigation;
