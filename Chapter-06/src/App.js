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
what is a microservice? 
   Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.

What is monolithic architecture? 
    With monolithic architectures, all processes are tightly coupled and run as a single service

What is the difference between microservice and the monolithic architecture? 
   https://aws.amazon.com/microservices/ 

Why do we use UseEffect hook ? 
      UseEffect hook is more of a relief to the class based components in the lane. We could handle all the effects ( ComponentDidUpdate, ComponentDidMount) or even when our state or Props change, This is really 
      useful to make my DOM Updates on every render and to manage the render based on the dependencies array in them. Conditionally effects to the useEffect is also a plus when using functional hooks

What is Optional chaining? 
      The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.
   
What is shimmer UI ? 
   A shimmer UI resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up.

What is the difference between JS expression and Js statement ? 
      Expression is something that evaluates out a value, usually they are right handed part of the statement.
      Statement is something like assigning values, they are two sided statements ( Eg., Let a=10, If statements, while statements, they would execute something based on the conditions, but not a value assured at the end of the day)

What is conditional Rendering? 
     Conditional Rendering is used in the applications ( Eg., the Login format), thus depending on the Loggedin State variable,
     Thus, the UserProfile component icon is updated with either the Loggedin and LogOut buttons, depending on the state. 

     const myFunc () => {
      return (
         <div> 
         { isLoggedin ? <Logout/>: <Login/> }
         </div>
      )
     }
What is CORS ? 
     CORS is the cross-origin Resource handling between two origins, is one of the web standards protocol in its way, that are responsible for making the resource sharing between the origins 
safe. The browers usuallyy send a pre-flight request ( in return for the OPTIONS response with the additional headers like Access control allow origin: *, Access-control-allow-methods: GET,PUT,POST )followed by the actual API request, 

What is the async and await used ? 
      Usually the API calls are really necessary to update the workflow aftermath. But the API calls are asynchronous as the Javascript waits for none being a single threaded language. 
      To make them synchronous to the flow, we are using async to the function to them and await for the responsone to be more of synchronous with the codeFlow. 

What is the use of 'const json = await data.json()' in getRestaurants()
      It just waits for the API response, Since we have used fetch, it is necessary to convert the response to json, to process further by means of the Javascript objcets to process, 
      await makes the flow to be in synchronous form 
      */