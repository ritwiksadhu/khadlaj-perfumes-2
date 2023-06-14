import React, { useState } from 'react'
import PlusBtnAnimation from './PlusBtnAnimation';

const Menu = () => {

    const [sprayDropdown, setSprayDropdown] = useState(false);
    const [oilsDropdown, setOilsDropdown] = useState(false);
    const [homeDropdown, setHomeDropdown] = useState(false);
    const [giftDropdown, setGiftDropdown] = useState(false);
  return (
    <ul className="w-80 h-screen bg-white">
    <li>
      <button
        onClick={() => setSprayDropdown(!sprayDropdown)}
        className="px-3 text-sm py-3 border-b-2 w-full text-left flex justify-between"
      >
        Perfume Sprays <PlusBtnAnimation openClose={sprayDropdown}/>
      </button>
      <ul
        className={`${
          
          sprayDropdown
            ? "show-dropdown-info  h-36  "
            : "hide-dropdown-info h-0 "
        } lg:h-36  overflow-hidden text-sm`}
      >
        <li className="border-b-2 py-2 ps-10 "> Eau De Parfum Sprays</li>
        <li className="border-b-2 py-2 ps-10 "> Eau De Parfum Sprays</li>
        <li className="border-b-2 py-2 ps-10 "> Best Seller</li>
        <li className="border-b-2 py-2 ps-10 "> New Launches</li>
        <li className="border-b-2 py-2 ps-10 "> Discover More</li>
      </ul>
    </li>
    <li>
      <button
        onClick={() => setOilsDropdown(!oilsDropdown)}
        className="px-3 text-sm py-3 border-b-2 w-full text-left flex justify-between"
      >
        Perfume Oils <PlusBtnAnimation openClose={oilsDropdown}/>
      </button>
      <ul
        className={`${
          
          oilsDropdown
            ? "show-dropdown-info  h-36  "
            : "hide-dropdown-info h-0 "
        }  lg:h-36  overflow-hidden text-sm`}
      >
        <li className="border-b-2 py-2 ps-10 "> Best Sellers</li>
        <li className="border-b-2 py-2 ps-10 "> New Launches</li>
        <li className="border-b-2 py-2 ps-10 "> Discover More</li>
        <li className="border-b-2 py-2 ps-10 "> Dehn Al Oud</li>
        <li className="border-b-2 py-2 ps-10 "> Premium Range</li>
      </ul>
    </li>
    <li>
      <button
        onClick={() => setHomeDropdown(!homeDropdown)}
        className="px-3 text-sm py-3 border-b-2 w-full text-left flex justify-between"
      >
        {" "}
        Home and Ambiance<PlusBtnAnimation openClose={homeDropdown}/>
      </button>
      <ul
        className={`${
          
          homeDropdown
            ? "show-dropdown-info  h-36  "
            : "hide-dropdown-info h-0 "
        }  lg:h-36  overflow-hidden text-sm`}
      >
        <li className="border-b-2 py-2 ps-10 ">Bakhoor</li>
        <li className="border-b-2 py-2 ps-10 ">Oud Muattar</li>
        <li className="border-b-2 py-2 ps-10 ">Mahasin Air Fresheners</li>
        <li className="border-b-2 py-2 ps-10 ">Best Sellers</li>
        <li className="border-b-2 py-2 ps-10 ">New Launches</li>
        <li className="border-b-2 py-2 ps-10 ">Discover More</li>
      </ul>
    </li>
    <li>
      <button
        onClick={() => setGiftDropdown(!giftDropdown)}
        className="px-3 text-sm py-3 border-b-2 w-full text-left flex justify-between"
      >
        {" "}
        Gift Sets <PlusBtnAnimation openClose={giftDropdown}/>
      </button>
            <ul
        className={`${
          
          giftDropdown
            ? "show-dropdown-info  h-36  "
            : "hide-dropdown-info h-0 "
        }  lg:h-36  overflow-hidden text-sm`}
      >
       <li className="border-b-2 py-2 ps-10 ">New Launches</li>
       <li className="border-b-2 py-2 ps-10 ">Best Sellers</li>
       <li className="border-b-2 py-2 ps-10 ">Discover More</li>
        </ul>
    </li>
    <li className="px-3 text-sm py-3 border-b-2 ">
      {" "}
      <img src={""} alt="" />
      Wishlist
    </li>
    <li className="px-3 text-sm py-3 border-b-2 ">
      {" "}
      <img src={""} alt="" /> Search
    </li>
    <li className="px-3 text-sm py-3 border-b-2 ">
      {" "}
      <img src={""} alt="" /> Login / Register{" "}
    </li>
    AED
  </ul>
  )
}

export default Menu
