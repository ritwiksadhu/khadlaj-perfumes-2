import React, { useEffect, useState } from 'react'
const imagesArray = [
 "https://cdn.shopify.com/s/files/1/0626/6119/8023/files/Untitled-8-_1_-_1_1950x.jpg?v=1685523576",
 "https://cdn.shopify.com/s/files/1/0626/6119/8023/files/perfume-_1_-_1_1950x.jpg?v=1685523576",
 "https://cdn.shopify.com/s/files/1/0626/6119/8023/files/kh2_1950x.jpg?v=1676277017",
 "https://cdn.shopify.com/s/files/1/0626/6119/8023/files/bukhoor_bu_1950x.jpg?v=1676282272",
 "https://cdn.shopify.com/s/files/1/0626/6119/8023/files/kh1_1950x.jpg?v=1676277036",
 "https://cdn.shopify.com/s/files/1/0626/6119/8023/files/Musk_pour_narcis1_2eb57ff4-d891-43b5-a7de-ec44ccc19c4f_1950x.jpg?v=1676277001",
  
]

const Carousel = () => {

  const [activeImage,setActiveImage] = useState(0)

  useEffect(()=>{
  const interval = setInterval(() => {
    activeImage<imagesArray.length-1?setActiveImage(activeImage+1) : setActiveImage(0)
  }, 3000);

  return ()=>clearInterval(interval)
  },[activeImage])

  return (
  <div className=" relative carousel w-full h-64 sm:h-96 md:h-96 lg:h-screen max-w-screen-3xl ">
  {imagesArray.map((image,index)=>{
    return <img key={image} className={`carousel-images ${activeImage === index ?"active":"inactive"}`} src={image} />
  })} 
  <div className='absolute w-fit h-6 bottom-0 left-0 flex left-1/2 -translate-x-1/2	' >
  {imagesArray.map((image,index)=>{
    return <button key={image} onClick={()=>setActiveImage(index)} className={`h-3 w-3 mx-1  ${activeImage === index ?"bg-white":"bg-gray-500"} bg-white rounded-full `}></button>
  })}   
  </div>  
</div>   
  )
}

export default Carousel
