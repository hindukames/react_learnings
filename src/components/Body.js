import { restaurantList } from "../config.js";
import RestaurantCard from "./RestaurantCard.js";
import { useState} from "react"; 

function filterData(searchText,restaurants)
{
    // const data=restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText));
    // console.log(searchText);
    // console.log(data);
    // data.map((e)=>console.log(e.data.name))
    return( restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText)));
}
const BodyComponent =()=>{

    const [searchText,setSearchText] = useState("");
    const [restaurants,setRestaurants] = useState(restaurantList);
    const [searchClicked, setSearchClicked] = useState("false");

    return(
        <>
        <div className="search-container">
            <input type="text" placeholder="search here..." value={searchText} onChange={((e)=> setSearchText(e.target.value))} />
            <button className="search-btn" onClick={()=> 
                {const data = filterData(searchText,restaurants);
                setRestaurants(data);}
                }>search</button>
            {searchClicked}
        </div>

       <div className="restaurant-list">
       {restaurants.map((restaurant) => <RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>)}
       </div>
       </>
    )
 
 }

 export default BodyComponent;