import React,{lazy, Suspense,useContext,useState} from "react"
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
import { Provider, useStore } from "react-redux";
import store from "./utility/store.js";
import Cart from "./components/Cart.js"
import UserContext from "./utility/userContext.js";
import emailContext from "./utility/emailContext.js";

const Instamart = lazy(()=>import("./components/Instamart.js")); 

const AppLayout =()=>{ 

   const [user,setUser] = useState ({
         name: "Hindhuja", 
         email: "happy@gmail.com", 
   }); 
   const email = useContext(emailContext); 
   console.log(email);
   return(
      <Provider store={store} >
      {/* { console.log(user)}; */}
      <UserContext.Provider value = {{user: user, setUser: setUser,}}> 
        <emailContext.Provider value={email}>
             <HeaderComponent/>
        </emailContext.Provider>
      {/* <UserContext.Provider value = {{user: user}}> */}
         <Outlet/>
         <FooterComponent/>
      </UserContext.Provider>
      </Provider>

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
         {
            path:"/cart",
            element:<Cart/>
         
         },

      ],
   },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); 




 /*
 What is Prop drilling : 
         Data is passed from one component through multiple interdependent components until you get to the component where the data is needed.
 What is lifting the state up 
       sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”
 What is context provider and context consumer 
      Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers/Components.
 If you dont pass a value to the provider, does it take the default value ? 
      Yes. 
 */


      