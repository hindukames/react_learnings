import { restaurantList } from "../config.js";
import RestaurantCard from "./RestaurantCard.js";
import { useState,useEffect} from "react"; 
import BodyShimmer from "./Shimmer.js";

function filterData(searchText,restaurants)
{
    return( restaurants.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())));
}


const BodyComponent =()=>{

    const [searchText,setSearchText] = useState("");
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants]= useState([]);
    const [searchClicked, setSearchClicked] = useState("false");
    const [errorMessage, setErrorMessage]= useState("");
    
    useEffect(()=>{
       getRestaurants();
    },[]); 

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&page_type=DESKTOP_WEB_LISTING");      
        const json = await data.json(); 
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } 

   

   const searchData = (searchText,allRestaurants)=>{


    const data = filterData(searchText,allRestaurants);
    if ( data.length ===0 ){
           setErrorMessage ("No Matches Found");
    }
    else{
        setFilteredRestaurants(data);
        setErrorMessage("");
    }

   }

    if (!allRestaurants) return null; // Not render the component ( Early return );
    return (allRestaurants?.length===0)? <BodyShimmer/>:(
        <>
        <div className="search-container">
            <input type="text" placeholder="search here..." value={searchText} onChange={((e)=> setSearchText(e.target.value))} />
            <button className="search-btn" onClick={()=>{
                 searchData(searchText,allRestaurants);
            }
                }>search</button>
        </div>
       { errorMessage? (<h1> {errorMessage}</h1>):
       (<div className="restaurant-list">
       {filteredRestaurants.map((restaurant) => <RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>)}
       </div>) }
       </>
    )
 
 }

 export default BodyComponent; 
