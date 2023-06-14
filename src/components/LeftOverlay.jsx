import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";

const LeftOverlay = ({leftOverlayActive,setLeftOverlayActive}) => {

  const [currentShowing,setCurrentShowing] =  useState("nav-menu")


  function hide(e){
    e.preventDefault()
    if(e.target.className.includes("closeNav")){
      setLeftOverlayActive(!leftOverlayActive)
    }
  }

  return (
    <div onClick={(e)=>hide(e)} className={`${leftOverlayActive? "left-overlay-active":"left-overlay-inactive"} closeNav overlay left-overlay-active fixed top-0 h-full w-full lg:hidden z-40`}>
      <button onClick={()=>setLeftOverlayActive(!leftOverlayActive)} className={` ${leftOverlayActive? "left-80":"hidden"} closeNav transition-all duration-100 fixed bg-black text-white z-30 left-80 py-1  px-4 text-3xl border-gray-500 border-2` }>x</button>
      <div className={` ${leftOverlayActive? "right-32":"right-full"} transition-all duration-100 z-50 flex w-80 bg-white`}>
        <button onClick={()=>setCurrentShowing("nav-menu")} className={`w-40 h-12 py-2 text-xs ${currentShowing==="nav-menu"?"bg-gray-200":"bg-gray-100"}`}>MENU</button>
        <button onClick={()=>setCurrentShowing("nav-categories")} className={`w-40 h-12 py-2 text-xs ${currentShowing==="nav-menu"?"bg-gray-100":"bg-gray-200"}`}>CATEGORIES</button>
        <span className={`${currentShowing === "nav-menu" ? "left-0" : "left-40" } transition-all ease inline-block duration-300 h-1 bg-gray-400 w-40 absolute top-11`}></span>
      </div>
      {currentShowing === "nav-menu" ? <Menu/> : <Categories/> }
    </div>
  );
};

export default LeftOverlay;
