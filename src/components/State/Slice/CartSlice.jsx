import { createSlice } from "@reduxjs/toolkit";
import { items } from "../../../productList";
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.amount = state.amount + 1;
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      cartItem
        ? (cartItem.amount = cartItem.amount + 1)
        : state.cartItems.push({ ...action.payload, amount: 1 });
    },
    increase: (state, action) => {
      state.amount++;
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItems[itemIndex].amount++;
      let total = 0;
      total = state.cartItems[itemIndex].amount * state.cartItems.price;
    },
    decrease: (state, action) => {
      state.amount--;
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItems[itemIndex].amount > 0 &&
        state.cartItems[itemIndex].amount-- &&
        state.amount++;
    },
    remove: (state, action) => {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );
          state.amount = state.amount - cartItem.amount;
        }
      });
    },
    total: (state) => {
      let total = 0;
      state.cartItems.forEach((cartItem) => {
        total += cartItem.amount * cartItem.price;
      });
      state.total = total;
    },
  },
});
export const { add, increase, decrease, remove, total } = CartSlice.actions;
export default CartSlice.reducer;
