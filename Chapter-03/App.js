import React from "react"
import ReactDOM  from "react-dom/client";

const Title = ()=>(
   <h1>Hi</h1>
);

const HeaderComponent =()=>{
return (
   <div>
       <h1>I amm</h1>
       <Title/>
   </div>
);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>); 

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

{<TitleComponent/>}

*/ 
