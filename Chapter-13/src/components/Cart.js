import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utility/cartSlice";
import FoodItem from "./FoodItem";

const Cart =()=>{

   const cartItems = useSelector(store => store.cart.items)
   console.log(cartItems); 

   const dispatch = useDispatch();

   const handleClearCart=()=>{
       dispatch(clearCart());
   }
    return (
        <div>
            <h1 className="font-bold text-2xl">cart Items- { cartItems.length} </h1>
            <button className="p-2 m-2 bg-green-200" onClick={()=>handleClearCart()}>Clear Cart</button>
            <div className="flex">   
                {cartItems.map(item => <FoodItem key={item.id} {...item}/>)}
            </div>
        </div>
    )
}  

export default Cart;