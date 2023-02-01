import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utility/useOnline.js";

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
    const isOnline = useOnline();
    return (
    <div className="header">
       <Title/>
       <div className="nav-items">
          <ul>
             <li><Link to ="/">Home </Link></li>
             <li><Link to= "/about">About</Link></li>
             <li> <Link to= "/contact">Contact</Link></li>
             <li> <Link to ="/instamart">Instamart</Link></li>
             <li>cart</li>
          </ul>
       </div>
       { isLoggedIn?<button className="Login" onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button className="Login" onClick={()=>setIsLoggedIn(true)}>Login</button> }
       <span>{isOnline?"Online":"Offline"}</span>
    </div>  );
 } 
export default HeaderComponent;
