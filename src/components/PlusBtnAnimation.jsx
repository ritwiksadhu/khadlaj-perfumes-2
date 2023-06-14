import React, { useState } from 'react'
import plus from "../Assets/svg/plus.svg";
import minus from "../Assets/svg/minus.svg";
const PlusBtnAnimation = ({openClose,hidden}) => {
  return (
    <span className={`${hidden}:hidden mt-1 inline-block plus-btn h-5 w-5 relative grid-center`} >
    <img className={`plus ${openClose?"active":"inactive" } h-5 absolute w-5`} src={plus} alt="" />
    <img className={`minus ${openClose?"active":"inactive"} h-5 absolute w-5`} src={minus} alt="" />
    </span>
  )
}

export default PlusBtnAnimation
