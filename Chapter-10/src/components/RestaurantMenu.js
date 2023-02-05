import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer.js"
import useRestuarant from "../utility/useRestaurant.js"

const RestaurantMenu =()=>{  

    const {id} = useParams(); 
    const restaurant = useRestuarant(id);
    if(!restaurant) return <Shimmer/>
 
    return(
        <div className="menu-container">
            <div>
                <h1>Restaurant ID: {id}</h1>
                <h1>{restaurant.name}</h1>
                <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}></img>
                <h1>{restaurant.area}</h1>
                <h1>{restaurant.avgRating}</h1>
                <h1>{restaurant.city}</h1>
                <h1>{restaurant.costForTwoMsg}</h1>
            </div> 
            <div>
                { Object.values(restaurant.menu.items).map((item)=><li key={item.id}>{item.name}</li>)}
            </div>
        </div>

    )
} 
export default RestaurantMenu;