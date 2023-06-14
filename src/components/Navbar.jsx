import React, { useEffect, useState } from "react";
import hamBtn from "../Assets/svg/hamBtn.svg";
import bag from "../Assets/svg/bag.svg";
import heart from "../Assets/svg/heart.svg";
import profileIcon from "../Assets/svg/profileIcon.svg";
import searchSVG from "../Assets/svg/searchSVG.svg";
import Indicator from "./Indicator";
const Navbar = ({
  leftOverlayActive,
  setLeftOverlayActive,
  rightOverlayActive,
  setRightOverlayActive,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isScrolled ? <div className="h-28"></div> : ""}
      <nav
        style={{
          position: isScrolled ? "fixed" : "static",
          top: "-2%",
          left: "0",
          backgroundColor: "white",
          transition: "top .5s ease",
        }}
        className={` ${
          isScrolled ? "drop-navbar" : ""
        } w-full h-28 flex justify-between px-4 my-1 z-30`}
      >
        {/* HAMBURGER BUTTON */}
        <div className="flex w-fit sm:w-28">
          <button
            onClick={() => setLeftOverlayActive(!leftOverlayActive)}
            className="lg:hidden"
          >
            <img src={hamBtn} alt="" />
          </button>
        </div>

        {/* NAV CENTER */}

        <div className="flex">
          {/* CENTER LEFT ICONS */}
          <div className="hoverable-btn hidden lg:flex relative">
            <button className="nav-button text-purple-900 font-bold mx-2 ">
              PERFUME SPRAY
            </button>
            <div
              className={`animated-dropdown spray pe-5 text-sm text-gray-400 font-bold drop-shadow-2xl  absolute flex bg-white z-10 justify-between `}
            >
              <div className="flex flex-col justify-center px-5">
                <h1 className="text-lg">KHADLAJ</h1>
                <button className="border-t-2 text-left ">
                  EU DE PARFULE SPRAY
                </button>
              </div>
              <div className="flex flex-col justify-center px-5">
                <h1 className="text-lg">LA FEDE</h1>
                <button className="border-t-2 text-left ">
                  EU DE PARFULE SPRAY
                </button>
              </div>
              <div className="flex items-start flex-col mt-20 overflow-hidden shrink-0">
                <button className="mt-2">BEST SELLER</button>
                <button className="mt-2">NEW LAUNCHES</button>
                <button className="mt-2">DISCOVER MORE</button>
              </div>
            </div>
          </div>

          <div className="hoverable-btn hidden lg:flex relative">
            <button className="nav-button text-purple-900 font-bold mx-2 ">
              PERFUME OILS
            </button>
            <div
              className={`animated-dropdown oil text-sm text-gray-400 font-bold drop-shadow-2xl  absolute p-3  bg-white z-10 flex justify-between`}
            >
              <div className="flex flex-col mx-2 mt-5 shrink-0 overflow-hidden">
                <h1 className="fs-1rem p-2 border-b-2 ">
                  CONCENTRATED PERFUME OILS
                </h1>
                <div className=" flex flex-col justify-left align-left">
                  <button className=" text-left mt-2">BEST SELLER</button>
                  <button className=" text-left mt-2">NEW LAUNCHES</button>
                  <button className=" text-left mt-2">DISCOVER MORE</button>
                </div>
              </div>
              <div className="flex flex-col mx-2 shrink-0 overflow-hidden ">
                <h1 className=" fs-1rem mt-5 p-2 font-bold border-b-2">
                  DEHN AL AUD
                </h1>
                <div className="flex flex-col">
                  <button className=" text-left mt-2 uppercase">Premium Range</button>
                </div>
              </div>
            </div>
          </div>

          {/* LOGO */}
          <button>
            {" "}
            <img
              className="object-contain h-16 md:h-16 lg:h-24  "
              src="https://cdn.shopify.com/s/files/1/0626/6119/8023/files/logo_130x.jpg?v=1678448226"
              alt=""
            />
          </button>

          {/* CENTER RIGHT OPTIONS */}
          <div className="hoverable-btn hidden lg:flex relative">
            <button className="nav-button text-purple-900 font-bold mx-2 ">
              HOME MADE AND AMBIENCE
            </button>
            <div
              className={` animated-dropdown homemade text-sm text-gray-400 font-bold drop-shadow-2xl  absolute bg-white z-10 flex flex-col h-max`}
            >
              <button className="fs-1rem py-2 ps-5 text-md text-left uppercase">Bakhoor</button>
              <button className="fs-1rem py-2 ps-5 text-md text-left uppercase">Oud Muattar</button>
              <button className="fs-1rem py-2 ps-5 text-md text-left uppercase">Mahasin Air Fresheners</button>
              <button className="fs-1rem py-2 ps-5 text-md text-left uppercase">Best Sellers</button>
              <button className="fs-1rem py-2 ps-5 text-md text-left uppercase">New Launches</button>
              <button className="fs-1rem py-2 ps-5 text-md text-left uppercase">Discover More</button>
            </div>
          </div>
          <div className="hoverable-btn hidden lg:flex relative">
            <button className="nav-button text-purple-900 text-lg font-bold mx-2 ">
              GIFT SET
            </button>
            <div
              className={`animated-dropdown pt-10 flex flex-col gift text-sm text-gray-400 font-bold drop-shadow-2xl  absolute bg-white z-10`}
            >
              <button className="text-left mx-5 py-2 text-lg border-b-2 uppercase ">
                New Launches
              </button>
              <button className="mx-5 text-left text-md pt-3 uppercase">
                Best Sellers
              </button>
              <button className="mx-5 text-left text-md pt-3 uppercase">
                Discover More
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE ICONS */}
        <div className="flex items-center justify-center">
          <button
            onClick={() => setRightOverlayActive("open-search")}
            className="w-5 mx-1"
          >
            <img src={searchSVG} alt="" />
          </button>
          <button
            onClick={() => setRightOverlayActive("open-account")}
            className=" hidden sm:block w-5 mx-1"
          >
            <img src={profileIcon} alt="" />
          </button>
          <button className=" hidden sm:block w-5 mx-1">
            <img src={heart} alt="" />
          </button>

          <button
            onClick={() => setRightOverlayActive("open-cart")}
            className="relative w-5 mx-1"
          >
            <img src={bag} alt="" />
            <Indicator value={0} position={"left-3"} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
