import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer.js"
import useRestuarant from "../utility/useRestaurant.js"
import { addItem } from "../utility/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu =()=>{  

    const {id} = useParams(); 
    const restaurant = useRestuarant(id);
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item));
    }
    if(!restaurant) return <Shimmer/>   
 
    return(
        <div className="flex ">
            <div>
                <h1>Restaurant ID: {id}</h1>
                <h1>{restaurant.name}</h1>
                <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}></img>
                <h1>{restaurant.area}</h1>
                <h1>{restaurant.avgRating}</h1>
                <h1>{restaurant.city}</h1>
                <h1>{restaurant.costForTwoMsg}</h1>
            </div>  
            {/* <div>
                <button className="p-2 m-2 bg-green-200" onClick={()=>handleAddItem()}>Add Item</button>
            </div> */}
            <div className="m-4"> 
                <h1 className="font-bold">Menu</h1>
                <ul data-testid="menu">
                { Object.values(restaurant.menu.items).map((item)=><li key={item.id}>{item.name} - <button className=" m-1 bg-green-100" data-testid="addBtn" onClick ={()=>handleAddItem(item)}>+</button></li>)}
                </ul>
            </div> 
        </div>

    )
} 
export default RestaurantMenu;