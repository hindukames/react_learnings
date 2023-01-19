import React from "react"
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/Header.js";
import BodyComponent from "./components/Body.js";
import FooterComponent from "./components/Footer.js";

const AppLayout =()=>{
   return(
      <>
      <HeaderComponent/>
      <BodyComponent/>
      <FooterComponent/>
      </>

   )

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); 

/*  
React Hooks:

      React Hooks are the built features in React for the functional components to make it work like a class based components, with bind to the component lifecycle methods and the state management as well.

Why do we need a UseState react Hook:

      UseState hook is one of the famous hooks that are used to manage the data of anything that could be rendered in react for all the variables. It follows the two way data binding process.
of taking the input and updating the same in the UI as real DOM, and maintaing the state.

what is the importance of a config.js file?
      Config.js file is something that was used to have a global memory of all the static data/objects, so that we can make the hard coding values inside the script for to be used between the applications.
It is important to have them, as they are used as simple templating objects for using our applications, so that we do not miss out on the details.

Named Import: They can be used to import modules from other modules, like the Header component, footer Component etc.,
Default Import: They can be used to import modules on the destructed way { Header as header, Footer as footer // the names can be changed if we wish, but the convention is to follow the same name as the export }, most commonly used to import data from the config, as the default export can export only one module in them.
* Import: They can be used to completely carry all the variables/ components from the module to the other module, Eg., Import *as {Header, Footer} from "..\constant.js" ( Need to check on that )
*/ 
