import React from 'react'

const Indicator = ({value,position}) => {
  return (
    <span className={`absolute ${position} top-0 indicator h-3 w-3 grid place-content-center rounded-full text-white bg-black`} >{value}  </span>

  )
}

export default Indicator
