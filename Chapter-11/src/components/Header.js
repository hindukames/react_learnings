import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utility/useOnline.js";
import { useSelector } from "react-redux";
import UserContext from "../utility/userContext.js";
import emailContext from "../utility/emailContext.js";


const isLoggedIn =()=>{
    //API call to make the authentication 
    return true;
}



const Title = ()=>(
    <a href="/">
    <img 
    className="h-28 pl-50 m-2 " 
    src ="https://png.pngtree.com/png-vector/20190830/ourmid/pngtree-crossed-spoon-and-fork-restaurant-and-food-logo-design-png-image_1716397.jpg" 
    alt="Food Logo"></img>
    </a>
 ); 

 
const HeaderComponent =() =>{  

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    const cartItems = useSelector(store=>store.cart.items); 
    console.log(cartItems);
    const {user} = useContext (UserContext); 
    const email = useContext(emailContext);
    return (
    <div className=" flex flex-wrap justify-center bg-red-200 shadow-lg md:justify-between items-center">
       <Title/>
       <div >
          <ul className="flex py-5 "> 
             <li className="px-2"><Link to ="/">Home </Link></li>
             <li className="px-2"><Link to= "/about">About</Link></li>
             <li className="px-2"> <Link to= "/contact">Contact</Link></li>
             <li className="px-2"> <Link to ="/instamart">Instamart</Link></li>
             <li className="px-2"> <Link to ="/cart">cart {cartItems.length}</Link></li>
          </ul>
       </div>
       <span className="">{isOnline?"Online":"Offline"}</span>
       <span className="font-bold text-fuchsia-800">{user.name}-{email[0].text}</span>
       { isLoggedIn?<button className="m-2 bg-slate-800" onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button className="m-2 w-20 h-10 bg-red-300 rounded-md" onClick={()=>setIsLoggedIn(true)}>Login</button> }
    </div>  );
 } 
export default HeaderComponent;
