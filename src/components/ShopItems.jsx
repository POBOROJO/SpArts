import React from 'react'
import {add} from './State/Slice/CartSlice';
import {useDispatch} from 'react-redux'
const ShopItems = ({item}) => {
    const dispatch = useDispatch();
    const {id, name, price, image} = item
  return (
    <div>
      <div className="bg-grey h-[400px] flex items-center justify-center">
        <img src={image} alt="" className='h-full w-full'/>
      </div>
      <div className='mt-6 flex justify-between items-center px-4'>
        <div>
            <div className="text-sm font-bold mb-3">
                {name}
            </div>
            <div className='text-xl font-bold'>${price}</div>
        </div>
        <button className='bg-green-500 text-black p-3 rounded' onClick={()=> dispatch(add(item))}>Add to cart</button>
      </div>
    </div>
  )
}

export default ShopItems
