import React,{lazy, Suspense} from "react"
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
import Profile from "./components/Profile.js";
import BodyShimmer from "./components/Shimmer";
//import Instamart from "./components/Instamart.js";

const Instamart = lazy(()=>import("./components/Instamart.js")); 

const AppLayout =()=>{
   return(
      <>
      <HeaderComponent/>
      <Outlet/>
      <FooterComponent/>
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
            element:<About/>,
            children:[
               {
               path:"profile",
               element:<Profile/>,
            },
         ],
         },
         {
            path:"/contact",
            element:<Contact/>
         },
         {
            path:"/restaurant/:id",
            element:<RestaurantMenu/>
         }, 
         {
            path:"/instamart",
            element:(
            <Suspense>
               <Instamart fallback={<BodyShimmer/>}/>
            </Suspense>)
         },

      ],
   },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); 




/* 
        When and Why do we need lazy()? 
               When the application is too large, then it becomes highly necessary to implement the lazy loading feature, download the component asynchronously 
               to reduce the initial loading time,. 
         What is Suspense ? 
                It's a mechanism for data fetching libraries to communicate to React that the data a component is reading is not ready. Otherwise react start to render the things making unnecessary bugs 
         
         Uncaught Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
               This occurs when the React tries to render the  component as quick as possible even before the Lazy component loads in our application. To avoid that, wrap the lazy component Route with the <suspense/> Block. 

         Advantages and disadvantages of using code-splitting in react ? 
             PROS: To prevent the requirement of downloading ginormous files, scripts can be split into multiple smaller files. Then features required at page load can be downloaded immediately with additional scripts being lazy loaded after the page or application is interactive, thus improving performance. 
             CONS: The only drawback about code splitting is that you can only use it in client side rendering. 
         
         When and why do we use suspense ? 
             This occurs when the React tries to render the  component as quick as possible even before the Lazy component loads in our application. To avoid that, wrap the lazy component Route with the <suspense/> Block. 

      


    */  