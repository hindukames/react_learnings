import { useEffect,useState } from "react";
import { ALLRES_FETCH_URL } from "../config";


const useAllRestaurants=()=>{
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);


    useEffect(()=>{
        getRestaurants();
     },[]); 
 
     async function getRestaurants() {
         const data = await fetch(ALLRES_FETCH_URL);      
         const json = await data.json(); 
         setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
         setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
     } 
     return { allRestaurants,filteredRestaurants,setAllRestaurants,setFilteredRestaurants};
}


export default useAllRestaurants;