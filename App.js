import React from "react"
import ReactDOM  from "react-dom/client";
import { BiUserCircle } from "react-icons/bi";

const heading1 = React.createElement("h1",{key:"h1"},"Heading1"); 
const heading2 = React.createElement("h2",{key:"h2"},"Heading2");
const heading3 = React.createElement("h3",{key:"h3"},"Heading3");
const container = React.createElement("div",{className:"title"},[heading1,heading2,heading3]);

const Title = ()=>(
   <h3 key ="h3">Heading3</h3>
);

const HeaderComponent =()=>{
return (
   <div className="title">
       <h1 key ="h1">Heading1</h1>
       <h2 key="h2">Heading2</h2>
      <Title/>
   </div>
);
}; 
const Header =() =>{
   return (
   <div className="header">
      <img className="logo" src ="https://png.pngtree.com/png-vector/20190830/ourmid/pngtree-crossed-spoon-and-fork-restaurant-and-food-logo-design-png-image_1716397.jpg" alt="Food Logo"></img>
      <input type="text" className="searchBox" placeholder="Search your food here..."></input>
      <BiUserCircle />
      
   </div>);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>); 

/*  
JSX: 
JSX is a part of react that helps the developers to write a bertter readable code in the application, which it turn converted by Babel to JS OBjcets which in turn is converted to DOM


Super Powers of JSX: 
1.Readability 
2.Super Easy to build for react 
3.Limited Code 

<type> in the script tag: 
Type attribute in the script tag means for tells the nature of the script for the compiler.

Commonly use ones are the 
Eg.,<script type="module"></script>, tells that the script acts as a module which could be imported/exported within the application 

1.text/ecmascript : this value indicates that the script is following the EcmaScript standards.
2.module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
3.text/babel : This value indicates that the script is a babel type and required bable to transpile it.
4.text/typescript: As the name suggest the script is written in TypeScript.

{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

{TitleComponent} is the piece of javascript code ( variable ) that could be executed within the JSX 

{<TitleComponent/>} is the functional component built by JSX that could be evoked within other copmonent 
<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.

Example
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>


*/ 
