import React from 'react'

const Heading = ({title}) => {
  return (
    <div className="mx-auto my-5 text-xl flex items-center w-fit ">
    <span className="yellow-squares inline-block"></span>
    <h1 className="inline mx-2">{title}</h1>
    <span className="yellow-squares inline-block"></span>
  </div>
  )
}

export default Heading
