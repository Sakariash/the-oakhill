import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import useIsMobile from "./hooks/useIsMobile";

const Footer = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const isMobile = useIsMobile();
  const router = useRouter();
  const logoRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    if (router.pathname !== "/") {
      setHasAnimated(true); // Skip animation if not on the home page
      return;
    }

    const handleScroll = () => {
      const footer = footerRef.current;
      const logo = logoRef.current;

      // Check if the footer is in the viewport
      if (footer && logo) {
        const footerRect = footer.getBoundingClientRect();

        // Trigger animation when the footer is halfway visible in the viewport
        if (footerRect.top <= window.innerHeight / 2 && !hasAnimated) {
          setHasAnimated(true);
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  return (
    <>
      <footer
        ref={footerRef}
        id="footer"
        className={`font-montserrat border-t border-gray-600 p-8 md:px-48 bg-oakhill-black text-white  ${
          hasAnimated
            ? "mt-28" // If hasAnimated is true, apply mt-28 regardless of isMobile
            : isMobile
            ? "mt-48" // If hasAnimated is false and isMobile is true, apply mt-48
            : "mt-80" // If both hasAnimated and isMobile are false, apply mt-80
        } transition-all duration-700 ease-in-out`}
        aria-labelledby="footer-heading"
        style={{ position: "relative" }}
      >
        {/* The logo starts above the footer, but moves into the footer when scrolled */}
        <div
          ref={logoRef}
          className={`transition-all duration-700 ease-in-out ${
            hasAnimated
              ? "text-white translate-y-0"
              : "text-oakhill-black -translate-y-24"
          }`}
          style={{
            position: "absolute",
            top: `${hasAnimated ? "24px" : isMobile ? "-25%" : "-50%"}`, // Position the logo outside initially
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
            zIndex: 10,
            transition: "all 0.7s ease-in-out",
          }}
        >
          <div className="w-full flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center">
              <p
                className="text-6xl md:text-9xl font-extralight"
                style={{ fontFamily: "Montserrat", fontWeight: 100 }}
              >
                the
              </p>
              <p
                className="text-6xl md:text-9xl font-medium"
                style={{
                  marginLeft: isMobile ? "12px" : "24px",
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                }}
              >
                oakhill
              </p>
            </div>
            <div className="flex items-center w-full justify-between mt-2">
              {/* Left dash */}
              <div
                style={{
                  width: isMobile ? "48px" : "72px",
                  height: "2px",
                  backgroundColor: hasAnimated ? "white" : "#191919",
                  transition: "all 0.7s ease-in-out",
                }}
              ></div>

              {/* Design & Solutions text */}
              <span
                className=" text-sm"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 300,
                  letterSpacing: isMobile ? "3px" : "12px",
                }}
              >
                design & solutions
              </span>

              {/* Right dash */}
              <div
                style={{
                  width: isMobile ? "48px" : "72px",
                  height: "2px",
                  backgroundColor: hasAnimated ? "white" : "#191919",
                  transition: "all 0.7s ease-in-out",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Footer content that will be pushed down when the logo moves into the footer */}
        <div
          className={`grid grid-cols-4 md:grid-cols-8 gap-y-8 transition-all duration-700 ease-in-out ${
            hasAnimated ? "mt-52" : "mt-0"
          }`}
        >
          <div className="col-span-4 md:col-span-6">
            <h2
              id="footer-heading"
              className="text-6xl lg:text-8xl mb-4 font-bold"
            >
              Hey!
            </h2>
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
          <div className="col-span-2 md:col-span-2 mt-8 md:mt-0 flex flex-wrap justify-between">
            <ul role="list" className="w-1/2 space-y-4">
              <li>
                <a
                  href="/404"
                  className="text-sm md:text-lg relative group hover:text-slate-200"
                >
                  Projekt
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm md:text-lg relative group hover:text-slate-200"
                >
                  Om oss
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
            </ul>
            <ul role="list" className="w-1/2 space-y-4">
              <li>
                <a
                  href="/contact"
                  className="text-sm md:text-lg relative group hover:text-slate-200"
                >
                  Kontakt
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-sm md:text-lg relative group hover:text-slate-200"
                >
                  Tjänster
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
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
          <div className="col-span-full md:col-span-5 flex space-x-8 md:mt-4 pt-6">
            <a
              href="/privacy"
              className="text-sm md:text-lg text-gray-500 relative group hover:text-slate-200"
            >
              Integritetspolicy
              <span className="absolute  bottom-0 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="text-sm md:text-lg text-gray-500 relative group hover:text-slate-200"
            >
              Användarvillkor
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
            </a>
          </div>
          <div className="col-span-full md:col-span-3 flex md:text-lg text-gray-500 md:mt-10 mt-16">
            <span>© 2024 The Oakhill</span>
            <span className="ml-8">All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
