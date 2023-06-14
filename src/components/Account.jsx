import React from 'react'
import cross from "../Assets/svg/cross.svg"
const Account = ({rightOverlayActive,setRightOverlayActive}) => {
  return (
    <div className="w-full h-full">
      <div className="w-full m-auto flex py-3 text-lg border-b-2 px-2">
        <h2 className="inline-block grow text-center font-medium text-lg text-gray-500 uppercase">Login</h2>
        <button onClick={()=>setRightOverlayActive(false)} className="">
          <img
            className="h-5 hover:rotate-180 transition-all ease duration-500 "
            src={cross}
            alt=""
          />
        </button>
    </div>
    <form action="" className='flex flex-col p-2'>
        <label className='mt-3 text-sm text-gray-400' htmlFor="email">Email <span className='text-red-500'> *</span> </label>
        <input className='border-2 px-1 outline-0  py-2 mt-3 text-md'  id="email" type="email" />
        <label className='mt-3 text-sm text-gray-400' htmlFor="password">Password <span className='text-red-500'> *</span> </label>
        <input className='border-2 px-1 outline-0  py-2 mt-3 text-md' id="password" type="password" />
        <button className='submit-btn w-full mt-2 text-white py-2 font-bold text-sm uppercase' > Sign in</button>
    </form>
    <button className='text-xs w-full text-left mx-2 mt-3' ><span className='text-gray-500'>New Customer ? </span> Create your account</button>
    <button className='text-xs w-full text-left mx-2 mt-3' ><span className='text-gray-500'>Lost Password ? </span> Recover Password</button>
    </div>
  )
}

export default Account
