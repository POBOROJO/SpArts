import React from "react";
import { HiChevronLeft } from "react-icons/hi";
import CheckOutItems from "./CheckOutItems";
import {open} from './State/Slice/CheckoutSlice';
import {useDispatch, useSelector} from 'react-redux'

const CheckOut = () => {
    const dispatch = useDispatch();
    const {cartItems, total, amount} = useSelector(state => state.cart)
  return (
    <div className="bg-transparentBlack fixed z-30 top-0 left-0 w-full h-screen">
      <div className="h-full bg-grey sm:w-[40rem] min-w-[15rem] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer" onClick={() => dispatch(open())}>
              <HiChevronLeft />
              <span className="uppercase text-[0.95rem] select-none font-bold">
                Continue Shopping
              </span>
            </div>
            <div className="text-[0.95rem] font-bold">Your Cart ({amount})</div>
          </div>
          <div className="mt-8">
            {cartItems.length === 0 ? (
                <div className="uppercase text-center text-3xl">Your cart is empty</div>
            ) : (
                <>
                    {cartItems.map((cartItem) => {
                        return(
                            <CheckOutItems key={cartItem.id} cartItem={cartItem}/> 
                        )
                    })}
                    <div className="flex justify-between mt-12 font-bold">
                        <div>Total Cost :${total.toFixed(2)}</div>
                    </div>
                    <div className="text-center cursor-pointer bg-black text-white p-3 mt-8 rounded" >
                        Checkout
                    </div>
                </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
