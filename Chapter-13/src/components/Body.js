import { restaurantList } from "../config.js";
import RestaurantCard from "./RestaurantCard.js";
import { useState,useEffect, useContext} from "react"; 
import BodyShimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../utility/helper.js";
import useOnline from "../utility/useOnline.js"
import useAllRestaurants from "../utility/useAllRestaurants.js"
import UserContext from "../utility/userContext.js"; 




const BodyComponent =()=>{

    const [searchText,setSearchText] = useState("");
    const [searchClicked, setSearchClicked] = useState("false");
    const [errorMessage, setErrorMessage]= useState("");

    const {allRestaurants,filteredRestaurants,setAllRestaurants,setFilteredRestaurants} = useAllRestaurants(); 
    const { user, setUser} = useContext( UserContext);
   
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
        <div className="p-5 h-15 bg-red-200 my-2 rounded-sm">
            <input type="text" className= "h-10 w-60 rounded-md p-2 focus:bg-slate-100"placeholder="search here..." data-testid="search-input" value={searchText} onChange={((e)=> setSearchText(e.target.value))} />
            <button className="p-2 bg-purple-300 text-white rounded-md hover:bg-violet-600" data-testid="Search-Btn" onClick={()=>{
                 searchData(searchText,allRestaurants);
            }
                }>search</button>
            {/* {console.log(user.name)} */}
             <input type="text" value={user.name} className="p-2 m-2" onChange={e=> setUser({...user,name:e.target.value})}/>
             <input type="text" value={user.email} className="p-2 m-2" onChange={e=> setUser({...user, email:e.target.value})}/>
        </div>
       { errorMessage? (<h1> {errorMessage}</h1>):
       (<div className="flex flex-wrap" data-testid="res-list">
       {filteredRestaurants.map((restaurant) => 

       <Link to ={"/restaurant/"+ restaurant.data.id }  key = {restaurant.data.id}> 
       <RestaurantCard {...restaurant.data}/> 
       </Link>)}
       </div>) }
       </>
    )
 
 }

 export default BodyComponent; 
