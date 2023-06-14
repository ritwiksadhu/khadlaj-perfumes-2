import React from 'react'
import Heading from './Heading'

const BestSellers = () => {
  return (
    <div className='h-fit mt-5'>
      <Heading title="BEST SELLERS"/>

    <div className='px-3 grid md:grid-cols-4 lg:gap-5 gap-2 md:w-full mx-auto max-w-screen-lg' >
        <div className='md:col-span-2 lg:col-span-1 mg-container my-2 w-full  overflow-hidden	'>
            <img className='transition md:h-96 lg:h-64 transform ease-in duration-300  hover:scale-110 w-full' src="https://cdn.shopify.com/s/files/1/0626/6119/8023/files/Bestseller_1_720x.jpg?v=1668406293" alt="" />
        </div>
        <div className='md:col-span-2 lg:col-span-1 img-container my-2 w-full  overflow-hidden '>
            <img className='transition md:h-96 lg:h-64 transform ease-in duration-300 hover:scale-110 w-full' src="https://cdn.shopify.com/s/files/1/0626/6119/8023/files/dehn_540x.jpg?v=1685448926" alt="" />
        </div>
        <div className='md:col-span-2 lg:col-span-1 img-container my-2 w-full  overflow-hidden '>
            <img className='transition md:h-96 lg:h-64 transform ease-in duration-300  hover:scale-110 w-full' src="https://cdn.shopify.com/s/files/1/0626/6119/8023/files/airFreshner_540x.jpg?v=1685448926" alt="" />
        </div>
        <div className='md:col-span-2 lg:col-span-1 img-container my-2 w-full  overflow-hidden '>
            <img className='transition md:h-96 lg:h-64 transform ease-in duration-300  hover:scale-110 w-full' src="https://cdn.shopify.com/s/files/1/0626/6119/8023/files/shiyaaka_540x.jpg?v=1685448926" alt="" />
        </div>
    </div>
    </div>
  )
}

export default BestSellers
