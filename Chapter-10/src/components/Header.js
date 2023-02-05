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
    className="max-h-28 pl-50 justify-self-center border-slate-900 border-10 sm:h-20 m-2" 
    src ="https://png.pngtree.com/png-vector/20190830/ourmid/pngtree-crossed-spoon-and-fork-restaurant-and-food-logo-design-png-image_1716397.jpg" 
    alt="Food Logo"></img>
    </a>
 ); 

 
const HeaderComponent =() =>{  

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    return (
    <div className="flex  flex-wrap justify-items-stretch items-center justify-between bg-red-200 shadow-lg">
       <Title/>
       <div >
          <ul className="flex py-5 "> 
             <li className="px-2"><Link to ="/">Home </Link></li>
             <li className="px-2"><Link to= "/about">About</Link></li>
             <li className="px-2"> <Link to= "/contact">Contact</Link></li>
             <li className="px-2"> <Link to ="/instamart">Instamart</Link></li>
             <li className="px-2">cart</li>
          </ul>
       </div>
       <span className="">{isOnline?"Online":"Offline"}</span>
       { isLoggedIn?<button className="m-2 bg-slate-800" onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button className="m-2 w-20 h-10 bg-red-300 rounded-md" onClick={()=>setIsLoggedIn(true)}>Login</button> }
    </div>  );
 } 
export default HeaderComponent;
