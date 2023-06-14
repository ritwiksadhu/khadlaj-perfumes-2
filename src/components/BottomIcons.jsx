import React from 'react'
import account from "../Assets/svg/account.svg"
import shop from "../Assets/svg/shop.svg"
import heart from "../Assets/svg/heart.svg"
import search from "../Assets/svg/searchSVG.svg"
import cart from "../Assets/svg/cart.svg"
import Indicator from './Indicator'

const BottomIcons = () => {
  return (
    <>
    <div className='h-16 lg:h-0'></div>
    <div className=' bottom-navigation bg-white fixed w-full bg-wite flex justify-between p-3 lg:hidden'>
        <button  className='font-medium flex flex-col items-center justify-center text-xs'><img className='h-5' src={shop} alt="" />Shop</button>
        <button  className='relative font-medium flex flex-col items-center justify-center text-xs'><img className='h-5' src={heart} alt="" />
        <Indicator value={0} position={"right-2"}/>
        Wishlist</button>
        <button  className='relative font-medium flex flex-col items-center justify-center text-xs'><img className='h-5' src={cart} alt="" /><Indicator value={0} position={"right-0"}/>Cart</button>
        <button  className='font-medium flex flex-col items-center justify-center text-xs'><img className='h-5' src={account} alt="" />Account</button>
        <button  className='font-medium flex flex-col items-center justify-center text-xs'><img className='h-5' src={search} alt="" />Search</button>
    </div>
    </>
  )
}

export default BottomIcons
