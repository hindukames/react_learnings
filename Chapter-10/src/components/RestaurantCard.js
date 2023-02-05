import { IMG_CDN_URL } from "../config"


const RestaurantCard =({ name,cuisines,lastMileTravel,cloudinaryImageId})=>{
 
    return(
       <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-100">
          <img src={IMG_CDN_URL+ cloudinaryImageId }></img>
          <h2 className="font-bold text-md">{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <h4><span className="bg-green-200 rounded-md px-1">{lastMileTravel.toFixed(1)} </span> Stars</h4> 
          
       </div>
    )
 }
 export default RestaurantCard;