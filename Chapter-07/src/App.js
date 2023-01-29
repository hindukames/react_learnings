import React from "react"
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/Header.js";
import BodyComponent from "./components/Body.js";
import FooterComponent from "./components/Footer.js";
import About from  "./components/About.js";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import Error from "./components/Error.js"
import Contact from "./components/contact.js";
import Body from "./components/Body.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Login from "./components/Login.js";


const AppLayout =()=>{
   return(
      <>
      <HeaderComponent/>
      <Outlet/>
      <FooterComponent/>
      <Login/>
      </>

   )

} 

const appRouter = createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children: [
         {
            path:"/",
            element:<Body/>,
         },
         {
            path:"/about",
            element:<About/>
         },
         {
            path:"/contact",
            element:<Contact/>
         },
         {
            path:"/restaurant/:id",
            element:<RestaurantMenu/>
         },

      ],
   },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); 




/* 
   SPA:  https://www.excellentwebworld.com/what-is-a-single-page-application/
   Whenever you click something or scroll the page, only a few elements will change and the rest will remain the same. Single Page Application monitoring works in the browser and does not require any extra page load time. The SPAs only load the information that you ask for with a click. For instance, when you browse through an email, you’ll notice that every information on sidebar or header will remain as it is when you navigate through the inbox or anything such.

   What is the difference between client side routing and server side routing ? 
       Client side Routing: 
         A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application. The changed state will ultimately result in a different view of the webpage. This could be the rendering of a new component, or even a request to a server for some data that the application will turn into some HTML elements.
       Server side Routing: 
          When browsing, the adjustment of a URL can make a lot of things happen. This will happen regularly by clicking on a link, which in turn will request a new page from the server. This is what we call a server-side route. A whole new document is served to the user.

   What will useEffect behave with no dependencies array ? 
          The useEffect would be rendered after every time the component renders, when no dependency array is given in the useEffect Hook 

   What will happen if we do console.log(useState())? 
       on consoling this, we get a array of 2, which includes the state variable and the set Function to update the state variable  


   How to add images to our App ? 
         1. Create a another folder in the components called images from them, put the images in there 
            import image from "./components/images"
            add them like {image} to the src attribute of the image tag in the components 
         2. Get the CDN link and keep them in the constants page.
            Named imports like : import {IMG_CDN_URL} from "./path"; 
            add them like {image} to the src attribute of the image tag in the components 





      */