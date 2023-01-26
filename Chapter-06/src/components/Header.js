import { useState } from "react";

const isLoggedIn =()=>{
    //API call to make the authentication 
    return true;
}



const Title = ()=>(
    <a href="/">
    <img 
    className="logo" 
    src ="https://png.pngtree.com/png-vector/20190830/ourmid/pngtree-crossed-spoon-and-fork-restaurant-and-food-logo-design-png-image_1716397.jpg" 
    alt="Food Logo"></img>
    </a>
 ); 

 
const HeaderComponent =() =>{ 

   const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (
    <div className="header">
       <Title/>
       <div className="nav-items">
          <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact</li>
             <li>cart</li>
          </ul>
       </div>
       { isLoggedIn?<button className="login" onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button className="login" onClick={()=>setIsLoggedIn(true)}>Login</button> }
       
    </div>  );
 } 
export default HeaderComponent;
