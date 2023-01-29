import { IMG_CDN_URL } from "../config"


const RestaurantCard =({ name,cuisines,lastMileTravel,cloudinaryImageId})=>{
 
    return(
       <div className="card-lists">
          <img src={IMG_CDN_URL+ cloudinaryImageId }></img>
          <h2>{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <h4>{lastMileTravel.toFixed(1)} stars</h4>
       </div>
    )
 }
 export default RestaurantCard;