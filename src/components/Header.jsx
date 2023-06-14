import React, { useEffect, useState } from "react";
import instagram from "../Assets/svg/instagram.svg";
import facebook from "../Assets/svg/facebook.svg";
import youtube from "../Assets/svg/youtube.svg";
import twitter from "../Assets/svg/twitter.svg";
import linkedin from "../Assets/svg/linkedin.svg";
import uae from "../Assets/images/UAE.png";
import usa from "../Assets/images/usa.png";

const Header = () => {
  const [activeText, setActiveText] = useState(0);
  const [select,setSelect] = useState("uae")
  const textArray = [
    "Welcome to Khadlaj Perfume Official E-Store",
    "Free Shipping Within The UAE Above 150 AED ",
    "Cash On Delivery Available",
    "",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      activeText < textArray.length - 1
        ? setActiveText(activeText + 1)
        : setActiveText(0);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeText,textArray.length]);

  const icons = [{icon:facebook,text:"Follow us on Facebook"}, {icon:twitter,text:"Follow us on Twitter "}, {icon:instagram,text:"Follow us on Instagram"}, {icon:linkedin,text:"Follow us on Linkedin"}, {icon:youtube,text:"Follow us on Youtube"}];
  

  return (
    <header className="w-full h-12 bg-purple-900 text-white font-700 text-xs font-medium flex justify-sm-center justify-between p-2 items-center">
      {/* ICONS SECTION */}
      <div className="lg:flex h-12 items-center hidden">
        {icons.map((elem,index) => {
          return (
            <button key={index} className="icon-btn h-6 relative w-6 rounded-full bg-black grid place-content-center ms-2 hover:mb-3 hover:bg-blue-500 transition-all duration-300 ease">
              <img className="h-3" src={elem.icon} alt="" />
              <p className="box rotate-45 w-4 h-4 ms-1  absolute bg-black top-7"></p>
              <p className="tooltip h-fit py-2 mt-1 w-36 absolute bg-black top-7">{elem.text}</p>
            </button>
          );
        })}
      </div>

      {/* ANIMATED TEXT SECTION */}
      <p className="w-full lg:w-80 h-4 overflow-hidden relative text-center lg:me-32">
        {textArray.map((text, index) => {
          return (
            <span
              key={index}
              className={`absolute  w-full ${
                activeText === index ? "active-text" : "inactive-text"
              }`}
            >
              {text}
            </span>
          );
        })}
      </p>
      {/* COUNTRY SELECTION */}
      <div className="select-country hidden w-12 h-5 me-3 relative lg:block ">
        <div className="w-4 text-md">
          {select === "uae" ? (
            <button className="flex">
              {" "}
              <img className="h-5 me-1" src={uae} alt="" /> UAE{" "} <i style={{marginTop:"2px"}} className="ms-1 fa-sharp fa-solid fa-chevron-down"></i>
            </button>
          ) : (
            <button className="flex items-center">
              {" "}
              <img className="h-3 me-1" src={usa} alt="" /> USD <i style={{marginTop:"2px"}} className=" ms-1 fa-sharp fa-solid fa-chevron-down"></i>
            </button>
          )}
        </div>
        <div  className="options absolute z-50 rounded-sm bg-gray-50 text-black w-20 -right-3">
          <button onClick={()=>setSelect("uae")} className="w-full p-2 flex items-center">
            {" "}
            <img className="h-5 me-1" src={uae} alt="" /> UAE
          </button>

          <button onClick={()=>setSelect("usa")} className="w-full p-2 flex items-center">
            {" "}
            <img className="h-3 me-1" src={usa} alt="" /> USD
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
