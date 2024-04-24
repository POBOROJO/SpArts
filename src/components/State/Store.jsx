import { configureStore } from "@reduxjs/toolkit";
import CheckOutReducer from "./Slice/CheckoutSlice";
import cartReducer from "./Slice/CartSlice";
// import CheckOut from "../CheckOut";

export const store = configureStore({
  reducer: {
    checkout: CheckOutReducer,
    cart: cartReducer
  }  
})