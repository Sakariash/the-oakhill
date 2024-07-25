// import Footer from "./Footer";
// import Config from './Config';
 
// const Layout = ({ children, story }) => (
//   <div>
//     {story && story.content && <Config blok={story.content} />}
//     {children}
//     <Footer />
//   </div>
// );
 
// export default Layout;
import Navigation from "./Navigation";
import Footer from "./Footer";
 
const Layout = ({ children, story }) => (
  console.log('children', children),
  <div>
   <Navigation story={story && story.content} />
      {children}
    <Footer />
  </div>
);
 
export default Layout;
