import { useEffect, useState } from 'react';
import useIsMobile from './hooks/useIsMobile';

const Footer = () => {
  const [isLogoInFooter, setIsLogoInFooter] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      const logo = document.getElementById('scroll-logo');
      const footerRect = footer.getBoundingClientRect();
      
      // Detect if the user has scrolled halfway to the footer
      if (footerRect.top <= window.innerHeight / 2) {
        setIsLogoInFooter(true);
      } else {
        setIsLogoInFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Footer */}
      <footer
        id="footer"
        className="font-montserrat border-t border-gray-600 mt-80 p-8 md:px-48 bg-oakhill-black text-white"
        aria-labelledby="footer-heading"
        style={{ position: 'relative' }}
      >
        {/* The logo starts above the footer, but moves into the footer when scrolled */}
        <div
          id="scroll-logo"
          className={`transition-all duration-700 ease-in-out ${
            isLogoInFooter ? 'text-white translate-y-0' : 'text-black -translate-y-24'
          }`}
          style={{
            position: 'absolute',
            top: isLogoInFooter ? '24px' : '-50%', // Pushes logo above footer before scrolling
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            zIndex: 10,
            transition: 'all 0.7s ease-in-out',
          }}
        >
          <div className="w-full flex flex-col items-center justify-center text-center">
  {/* "the oakhill" text */}
  <div className="flex items-center justify-center">
    <p className="text-6xl md:text-9xl font-extralight" style={{ fontFamily: 'Montserrat', fontWeight: 100 }}>
      the
    </p>
    <p className="text-6xl md:text-9xl font-medium" style={{ marginLeft: isMobile ? '12px' : '24px', fontFamily: 'Montserrat', fontWeight: 500 }}>
      oakhill
    </p>
  </div>

  {/* "- design & solutions -" text */}
  <div className="flex items-center w-full justify-between mt-2">
    {/* Left dash */}
    <div
      style={{
        width: isMobile ? '48px' : '72px',
        height: '2px',
        backgroundColor: isLogoInFooter ? 'white' : 'black',
      }}
    ></div>

    {/* Design & Solutions text */}
    <span
      className=" text-sm"
      style={{
        fontFamily: 'Montserrat',
        fontWeight: 300,
        letterSpacing: isMobile ? '3px' : '12px',
      }}
    >
      design & solutions
    </span>

    {/* Right dash */}
    <div
      style={{
        width: isMobile ? '48px' : '72px',
        height: '2px',
        backgroundColor: isLogoInFooter ? 'white' : 'black',
        
      }}
    ></div>
  </div>
</div>
        </div>

        {/* Footer content that will be pushed down when the logo moves into the footer */}
        <div
          className={`grid grid-cols-4 md:grid-cols-8 gap-y-8 transition-all duration-700 ease-in-out ${
            isLogoInFooter ? 'mt-52' : 'mt-0'
          }`}
        >
          <div className="col-span-4 md:col-span-6">
            <h2 id="footer-heading" className="text-6xl lg:text-8xl mb-4 font-bold">Hey!</h2>
            <a
              className="pt-14 relative group"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Email to The Oakhill Design & Solutions - hello@theoakhill.se"
              href="mailto:hello@theoakhill.se"
            >
              <span className="text-xl md:text-2xl underline underline-offset-8">
                hello@theoakhill.se
              </span>
              <span className="absolute -bottom-[6px] left-0 h-[2px] bg-gray-400 transition-all duration-700 ease-in-out w-0 group-hover:w-full"></span>
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 md:col-span-2 mt-8 md:mt-0 flex flex-wrap justify-between">
            <ul role="list" className="w-1/2 space-y-4">
              <li>
                <a href="#" className="text-sm md:text-lg relative group hover:text-slate-200">
                  Projekt
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm md:text-lg relative group hover:text-slate-200">
                  Om oss
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
            </ul>
            <ul role="list" className="w-1/2 space-y-4">
              <li>
                <a href="/contact" className="text-sm md:text-lg relative group hover:text-slate-200">
                  Kontakt
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-lg relative group hover:text-slate-200">
                  Prisplan
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location link */}
          <div className="col-span-4 md:col-span-full mt-8 md:mt-32">
            <a
              className="relative group"
              target="_blank"
              rel="noreferrer noopener"
              href="https://maps.app.goo.gl/PbxprJKHBRjWAaHK8"
            >
              <span className="md:text-xl underline underline-offset-8">
                Varmfrontsgata 12, 418 43 Göteborg
              </span>
              <span className="absolute -bottom-[6px] left-0 h-[2px] bg-gray-400 transition-all duration-700 ease-in-out w-0 group-hover:w-full"></span>
            </a>
          </div>

          {/* Policy links */}
          <div className="col-span-full md:col-span-5 flex space-x-8 md:mt-4">
            <a href="/privacy" className="text-sm md:text-lg text-gray-500 relative group hover:text-slate-200">
              Integritetspolicy
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
            </a>
            <a href="#" className="text-sm md:text-lg text-gray-500 relative group hover:text-slate-200">
              Användarvillkor
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
            </a>
          </div>

          {/* Copyright */}
          <div className="col-span-full md:col-span-3 flex md:text-lg text-gray-500 md:mt-4">
            <span className="">© 2024, The Oakhill Design & Solutions</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

