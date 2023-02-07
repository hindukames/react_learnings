import { IMG_CDN_URL } from "../config"
import UserContext from "../utility/userContext";
import { useContext } from "react";


const RestaurantCard =({ name,cuisines,lastMileTravel,cloudinaryImageId})=>{  

   const { user } = useContext(UserContext);
   //console.log(user);
    return(
       <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-100">
          <img src={IMG_CDN_URL+ cloudinaryImageId }></img>
          <h2 className="font-bold text-md">{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <h4><span className="bg-green-200 rounded-md px-1">{lastMileTravel.toFixed(1)} </span> Stars</h4> 
          <span className="font-bold" >{user.name} - {user.email}</span>
       </div>
    )
 }
 export default RestaurantCard;