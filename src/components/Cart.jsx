import React from 'react'
import cross from "../Assets/svg/cross.svg";
import bag from "../Assets/svg/bag.svg";

const Cart = ({setRightOverlayActive}) => {
  return (
    <div className="w-full h-full">
      <div className="w-full m-auto flex py-3 text-lg border-b-2 px-2">
        <h2 className="inline-block grow text-center font-medium text-md">SHOPPING CART</h2>
        <button onClick={()=>setRightOverlayActive(false)} className="">
          <img
            className="h-5 hover:rotate-180 transition-all ease duration-500 "
            src={cross}
            alt=""
          />
        </button>
    </div>
    <div className='flex w-full flex-col items-center mt-12'>
        <div className=' grid place-content-center relative h-16 w-16'>
          <img className='absolute' src={bag} alt="" />
          <img className='bag-cross h-5' src={cross} alt="" />
        </div>
        <h5 className='mt-5 text-sm text-gray-500' >Your Cart Is Empty</h5>
        <button className='mt-5 return-shop-btn text-white px-3 py-2 text-sm font-bold'>RETURN TO SHOP</button>
    </div>
    </div>
  )
}

export default Cart
