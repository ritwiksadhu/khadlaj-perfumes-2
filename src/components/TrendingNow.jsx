import React from 'react'
import Heading from './Heading'

const TrendingNow = () => {

    const trending = [
        {
            src: "https://cdn.shopify.com/s/files/1/0626/6119/8023/files/Untitled-design-_50.png?v=1685425536",
            title:"The magic of Stellar Musk & Oudh by favorite @khadlajperfumes😍❤️"
        },
        {
            src:"https://cdn.shopify.com/s/files/1/0626/6119/8023/files/Untitled-design-_49.png?v=1685425535",
            title:"بينما تخطو إلى عالم خدلاج ، فإن اللحظة التي تدع فيها عطورنا تغلف حواسك ستكون اللحظة التي تعرف فيها حقًا ما هي الفخامة. تسوق اليوم www.khadlaj-perfumes.com"
        },
        {
            src: "	https://cdn.shopify.com/s/files/1/0626/6119/8023/files/Untitled-design-_48.png?v=1685425536",
            title:"Mystical Indian Oud perfume 💯luxury"
        }
    ]

  return (
    <div>
      <Heading title="TRENDING NOW"/>
      <div className='flex flex-col sm:flex-row justify-between max-w-screen-lg mx-auto	'>

        {
            trending.map((item,index)=>{
                return  (<div key={index} className='text-center font-medium mx-2 flex flex-col sm:w-1/3 lg:w-80 '>
                <img className='' src={item.src} alt="" />
                <p className=''>{item.title}</p>
              </div>)
            })
        }
        </div>

    </div>
  )
}

export default TrendingNow
