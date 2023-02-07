import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({ 
     name: 'cart',
     initialState:{
        items:[],
     },
     reducers:{
        addItem: (state, action)=>{
                state.items.push(action.payload);
        },
        removeItem: (state,action)=>{
                 state.items.pop(); // Find index and need to remove them;
        },
        clearCart: (state)=>{
                state.items =[];
        },
     },

});

export const { addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer ;