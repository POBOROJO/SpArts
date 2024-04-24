import React, { useEffect, useState } from 'react'
import {BiShoppingBag} from "react-icons/bi"
import {open} from './State/Slice/CheckoutSlice';
import {useDispatch, useSelector} from 'react-redux';
const NavBar = () => {
    const dispatch = useDispatch();
    const {amount} = useSelector(state => state.cart)
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20)
        })
    },[])
  return (
    <div className={`${scroll ? "bg-grey shadow-lg" : ""} fixed top-0 left-0 w-full z-20`}>
        <div className="flex items-center justify-between relative conatiner py-4 px-2 mx-auto">
            <div className="font-bold text-xl">AgroGet
            </div>
            <div className="realtive cursor-pointer" onClick={() => dispatch(open())}>
                <BiShoppingBag className='text-3xl opacity-80'/>
                <div className="absolute bottom-[20%] left-[99%] flex aspect-square items-center justify-center rounded-full bg-green-500 p-1 pb-[5px] text-[0.6rem] leading-[0] text-white outline outline-2 outline-white">{amount}</div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
