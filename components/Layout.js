import Navigation from "./Navigation";
import Hero from "./Hero";
import Footer from "./Footer";
import { useState } from "react";
import { useRouter } from "next/router";

const Layout = ({ children, story }) => {
  const [startTransition, setStartTransition] = useState(true);
  const router = useRouter();

  // Check if the current page is the 404 page
  const is404Page = router.pathname === "/404";

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Only render Navigation and Hero if not on the 404 page */}
        {!is404Page && (
          <>
            {/* <Hero blok={story?.hero} onTransitionStart={setStartTransition} /> */}
            <Navigation story={story?.content} />
          </>
        )}
        <div
          className={`transition-transform duration-4000 ${
            startTransition ? "translate-y-1" : "translate-y-0"
          }`}
        >
          {children}
        </div>
      </main>
      {/* Only render Footer if not on the 404 page */}
      {!is404Page && <Footer story={story?.content} />}
    </div>
  );
};

export default Layout;

// import Navigation from "./Navigation";
// import Hero from "./Hero";
// import Footer from "./Footer";
// import { useState } from "react";

// const Layout = ({ children, story }) => {
//   // Log the `story` prop before returning the JSX
//   const [startTransition, setStartTransition] = useState(true);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="flex-grow">
//         {/* <Hero blok={story.hero} onTransitionStart={setStartTransition} /> */}
//         <Navigation story={story && story.content} />
//         <div
//           className={`transition-transform duration-4000 ${
//             startTransition ? "translate-y-1" : "translate-y-0"
//           }`}
//         >
//           {children}
//         </div>
//       </main>
//       <Footer story={story && story.content} />
//     </div>
//   );
// };

// export default Layout;
