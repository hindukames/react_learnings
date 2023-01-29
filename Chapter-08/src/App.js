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
import Profile from "./components/Profile.js";


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

      ],
   },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); 




/* 
 How do we create nested routes in the react-router-dom application ? 
    Create everything inside the Children block of the router configuration in the Routes 
    They will be embedded  to the <Outlet/> section of the react-dom connfiguration which is used to render in the dom.

Read about CreateHashRouter ( For the backend less applications), createMemoryRouter( for testing using jest, in the back-navigation testing etc.,) - DONE 

What is the order of life cycle methods in class based components ? 
    constructor(), render() Mounting ,componentDidMount(),render(),componentDidUpdate(),componentWillUnmount()

Why do we use componentDidMount() 
   If we need to load data from a remote endpoint, this is a good place to instantiate the network request. It will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state.

Why do we use ComponentwillUnmount() 
      componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount()

Why do we use super(props) in the constructor ? 
    To get access to the this.props in the constructor phase in the component
    Otherwise, it will be challenging to debug if we initialize a method in the constructor and that specific method tries to access 'this' inside the function. 

Why we dont add async in the useEffect function ?
    Adding the async to the useEffect function, will make the process of not calling the return unumount function in the useEffect 
   first argument of useEffect is supposed to be a function that returns either nothing (undefined) or a function (to clean up side effects). But an async function returns a Promise, which can't be called as a function!
   It is fine to use them, but we do get a react warning of the same.

    */