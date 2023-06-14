import React from 'react'
import Heading from './Heading'
const NewInStore = () => {
  return (
    <div className='max-w-screen-lg	 mx-auto'>
    <Heading title="NEW IN STORE"/>
    <div className=' newInStore px-3 grid md:grid-cols-4 md:gap-2 md:w-full max-w-screen-lg	' >
        <div className=' md:col-span-1  img-container my-2 w-full  overflow-hidden	'>
            <img className='  transition md:h-64 transform ease-in duration-300  hover:scale-110 w-full' src={"https://cdn.shopify.com/s/files/1/0626/6119/8023/files/pic_1_1_1_360x.jpg?v=1678453517"} alt="" />
        </div>
        <div className='  md:col-span-2  img-container my-2 w-full  overflow-hidden '>
            <img className=' transition  md:h-64	 transform ease-in duration-300 hover:scale-110 w-full' src={"https://cdn.shopify.com/s/files/1/0626/6119/8023/files/MYSTICAL_INDIAN_540x.jpg?v=1685449335"} alt="" />
        </div>
        <div className='  md:col-span-1  img-container my-2 w-full   overflow-hidden '>
            <img className=' transition md:h-64 transform ease-in duration-300  hover:scale-110 w-full' src={"https://cdn.shopify.com/s/files/1/0626/6119/8023/files/CASHMERE_WARM_OUD_540x.jpg?v=1685449335"} alt="" />
        </div>
    </div>
    </div>
  )
}

export default NewInStore
