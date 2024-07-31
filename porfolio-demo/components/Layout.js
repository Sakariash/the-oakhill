import Navigation from "./Navigation";
import Footer from "./Footer";
 
const Layout = ({ children, story }) => (
  <div className="flex flex-col min-h-screen">
  <main className="flex-grow">
   <Navigation story={story && story.content} />
      {children}
      </main>
    <Footer story={story && story.content}/>
  </div>
);
 
export default Layout;
