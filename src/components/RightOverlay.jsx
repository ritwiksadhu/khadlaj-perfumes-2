import React from 'react'
import Cart from './Cart'
import Search from './Search'
import Account from './Account'

const RightOverlay = ({rightOverlayActive,setRightOverlayActive}) => {



  function hideRightOverlay(e){
    if(e.target.className.includes("close-right-overlay")){
      setRightOverlayActive(false)
    }
  }

  return ( 
    <div onClick={(e)=>hideRightOverlay(e)} className={`${rightOverlayActive?"close-right-overlay right-overlay-active":"right-overlay-deactive"} fixed top-0 h-full w-full overlay z-30`} >
      <div className='ms-auto w-64 h-full bg-white'>
      {rightOverlayActive ==="open-cart"? <Cart rightOverlayActive={rightOverlayActive} setRightOverlayActive={setRightOverlayActive}/> : rightOverlayActive ==="open-search"? <Search  rightOverlayActive={rightOverlayActive} setRightOverlayActive={setRightOverlayActive}/> : rightOverlayActive==="open-account"? <Account rightOverlayActive={rightOverlayActive} setRightOverlayActive={setRightOverlayActive}/>:"" }
      </div>
    </div>
  )
}

export default RightOverlay
