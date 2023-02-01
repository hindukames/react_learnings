import { restaurantList } from "../config.js";
import RestaurantCard from "./RestaurantCard.js";
import { useState,useEffect} from "react"; 
import BodyShimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../utility/helper.js";
import useOnline from "../utility/useOnline.js"
import useAllRestaurants from "../utility/useAllRestaurants.js"



const BodyComponent =()=>{

    const [searchText,setSearchText] = useState("");
    const [searchClicked, setSearchClicked] = useState("false");
    const [errorMessage, setErrorMessage]= useState("");

    const {allRestaurants,filteredRestaurants,setAllRestaurants,setFilteredRestaurants} = useAllRestaurants(); 

   
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

   const isOnline = useOnline(); 

   if(!isOnline)
   {
      return (<h1>Opps!!! seems like you are Offline</h1>)
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
       {filteredRestaurants.map((restaurant) => 

       <Link to ={"/restaurant/"+ restaurant.data.id }  key = {restaurant.data.id}> 
       <RestaurantCard {...restaurant.data}/> 
       </Link>)}
       </div>) }
       </>
    )
 
 }

 export default BodyComponent; 
