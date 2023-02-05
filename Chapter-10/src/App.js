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
            <Suspense fallback={<BodyShimmer/>}>
               <Instamart />
            </Suspense>)
         },

      ],
   },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); 




/* 
     Explore all ways of writing css: 
         In the index.css, the classes are written with the normal traditional way. 
         By the way of the SCSS, SASS. You will be adding some new code to the existing css 
         Inline css to the components and the div 
         Styled components 
         Component Libraries - Material UI, Chakra UI, Ant Design, Base UI 
         Tailwind Framework - CSS 

     How do we configure CSS: 
            1.Install tailwindcss and its peer dependencies via npm, and then run the init command to generate tailwind.config.js
            2.Add the paths to all of your template files in your tailwind.config.js file.
            3.Create a .postcssrc file in your project root, and enable the tailwindcss plugin.
            4.Create a ./src/index.css file and add the @tailwind directives for each of Tailwind’s layers.

            

     In tailwind config.js, what does all the keys mean ( content, theme, extend,plugin) 
               Content means for applying tailwind in a particular folder, to only the files with the extensions mentioned in the documentation. So we can configure them accordingly.
               Theme is where you define your project’s color palette, type scale, fonts, breakpoints, border radius values otherwise it is defaulted to the tailwind's default value
               Extend - preserve the default values for a theme option but also add new values, add your extensions under the extend key in the theme section of your configuration file.
               Plugin means extending Tailwind with reusable third-party plugins ( Eg.,tailwind forms plugin)

     Why do we have .postcssrc file 
            To tell parcel, while bundling that to consider postcss ( which convert my tailwind classes to something that is understood by parcel) files, so that tailwind is included in the production 
            build and so they are part of dev dependencies

    */  