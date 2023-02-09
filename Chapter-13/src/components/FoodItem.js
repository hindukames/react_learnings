import { IMG_CDN_URL } from "../config"


const FoodItem =({ cloudinaryImageId,name,description,price})=>{
 
    return(
       <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-100">
          { cloudinaryImageId && <img src={IMG_CDN_URL+ cloudinaryImageId }></img> }
          <h2 className="font-bold text-md">{name}</h2>
          <h3>{description}</h3>
          <h4>{(price/100).toFixed(1)}</h4> 
          
       </div>
    )
 }
 export default FoodItem;