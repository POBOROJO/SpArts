import React , { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import ShopContainer from './components/ShopContainer'
import CheckOut from './components/CheckOut'
import { useSelector,useDispatch } from 'react-redux' 
import { total } from './components/State/Slice/CartSlice'
function App() {
  const {isOpen} = useSelector((state) => state.checkout)
  const {cartItems} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(total())
  },[cartItems])
  return (
    <div className=''>
      <NavBar />
      <ShopContainer />
      {isOpen && <CheckOut />}
    </div>
  )
}

export default App
