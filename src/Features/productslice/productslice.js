import { createSlice } from "@reduxjs/toolkit";
import { productdata } from "../../dummydata/productdata"; 

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: productdata, 
    cart:[],
  },
  reducers: {
  
    addtocart: (state, action) => {
      const product = action.payload;
      state.cart = [{ ...product, quantity: 1 }]; // Replace the cart with the new product
    },
    addmultipleproducts: (state, action) => {
      const products = action.payload; // Expecting an array of products
    
      products.forEach((product) => {
        const existingItem = state.cart.find((item) => item.id === product.id);
    
        if (existingItem) {
          existingItem.quantity += 1; // Increase quantity if product already exists
        } else {
          state.cart.push({ ...product, quantity: 1 }); // Add new product
        }
      });
    },
    
    
    removefromcart:(state, action)=>{
      const productid =action.payload;
      state.cart  = state.cart.filter((item)=> item.id !== productid);
    },
    clearcart:(state)=>{
      state.cart = [];
    }

  },
});

export const { addtocart, removefromcart, clearcart, addmultipleproducts } = productSlice.actions;

export default productSlice.reducer;
