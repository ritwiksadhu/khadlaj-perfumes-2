import React, { useState } from "react";
import PlusBtnAnimation from "./PlusBtnAnimation";
import mobile from "../Assets/svg/mobile.svg"
import email from "../Assets/svg/email.svg"
import location from "../Assets/svg/location.svg"
import card from "../Assets/svg/card.svg"
import bagofcash from "../Assets/svg/bagofcash.svg"
import truck from "../Assets/svg/truck.svg"
import perfume from "../Assets/svg/perfume.svg"
const Details = () => {
  const [getInTouch, setGetInTouch] = useState(false);
  const [productRange, setProductRange] = useState(false);
  const [information, setInformation] = useState(false);
  const [usefulLinks, setUsefulLinks] = useState(false);
  const icons=["facebook","twitter","instagram","linkedin","youtube"]
  return (
    <div className="m-auto w-full max-w-screen-lg mt-16 ">
      <div className="grid grid-cols-4 m-auto">
        <h3 style={{background:"rgb(75,46,110)"}} className="flex items-center col-span-4 md:col-span-2 lg:col-span-1 text-center py-3 bg-purple-800 m-2 text-white font-medium  ">
          {" "}
          <img src={card}className=" ms-5 lg:ms-2 h-8 w-10"/> <span className="grow">SECURE PAYMENTS</span>
        </h3>
        <h3 style={{background:"rgb(75,46,110)"}} className="flex items-center col-span-4 md:col-span-2 lg:col-span-1 text-center py-3 bg-purple-800 m-2 text-white font-medium  ">
          {" "}
          <img src={bagofcash}className=" ms-5 lg:ms-2 h-8 w-10"/> <span className="grow">CASH ON DELIVERY</span>
        </h3>
        <h3 style={{background:"rgb(75,46,110)"}} className="flex items-center col-span-4 md:col-span-2 lg:col-span-1 text-center py-3 bg-purple-800 m-2 text-white font-medium  ">
          {" "}
          <img src={perfume}className=" ms-5 lg:ms-2 h-8 w-10"/> <span className="grow">FREE SAMPLES</span>
        </h3>
        <h3 style={{background:"rgb(75,46,110)"}} className="flex items-center col-span-4 md:col-span-2 lg:col-span-1 text-center py-3 bg-purple-800 m-2 text-white font-medium  ">
          {" "}
          <img src={truck}className=" ms-5 lg:ms-2 h-8 w-10"/> <span className="grow">FAST AND FREE SHIPPING</span>
        </h3>
      </div>
      <ul className="grid grid-cols-4 mx-3 ">
        <li className=" col-span-4 md:col-span-2 lg:col-span-1 my-2">
          <button
            className="w-full text-xl font-medium flex justify-between  "
            onClick={() => setGetInTouch(!getInTouch)}
          >
            <span>GET IN TOUCH </span>
            <PlusBtnAnimation hidden="md" openClose={getInTouch} />{" "}
          </button>
          <ul
            className={`${
              getInTouch
                ? "show-dropdown-info  h-36  "
                : "hide-dropdown-info h-0 "
            }  md:h-44 mt-5 overflow-hidden text-sm`}
          >
            <li className=" col-span-4 md:col-span-2 lg:col-span-1 my-2">
              <img src={location} className="h-4 inline-block" alt="address KHADLAJ PERFUMES LLC Industrial Area 11, Sharjah, UAE" /> KHADLAJ PERFUMES LLC Industrial Area 11, Sharjah, UAE
            </li>
            <li className=" col-span-4 md:col-span-2 lg:col-span-1 my-2">
            <img src={email} className="h-4 inline-block" alt="email customercare@khadlaj-perfumes.com " /> customercare@khadlaj-perfumes.com
            </li>
            <li className=" col-span-4 md:col-span-2 lg:col-span-1 my-2">
            <img src={mobile} className="h-4 inline-block" alt="contact number +971 65340753" /> +971 65340753
            </li>
            <li className=" col-span-4 md:col-span-2 lg:col-span-1 my-2">
            <img src={mobile} className="h-4 inline-block" alt="contact number +971 521211992" /> +971 521211992
            </li>
          </ul>
        </li>
        <li className=" col-span-4 md:col-span-2 lg:col-span-1 my-2">
          <button
            className="w-full text-xl font-medium flex justify-between  "
            onClick={() => setProductRange(!productRange)}
          >
            <span>PRODUCTS RANGE </span>
            <PlusBtnAnimation hidden="md" openClose={productRange} />{" "}
          </button>
          <ul
            className={`${
              productRange
                ? "show-dropdown-info  h-36  "
                : "hide-dropdown-info h-0 "
            }  md:h-44 mt-5 overflow-hidden text-sm`}
          >
            <li className="mt-2 capitalize">Perfumeme Sprays</li>
            <li className="mt-2 capitalize">Perfumeme Oils</li>
            <li className="mt-2 capitalize">Home and Ambiance</li>
            <li className="mt-2 capitalize">Gift sets</li>
          </ul>
        </li>
        <li className=" col-span-4 md:col-span-2 lg:col-span-1 my-2">
          <button
            className="w-full text-xl font-medium flex justify-between  "
            onClick={() => setInformation(!information)}
          >
            <span>INFORMATION </span>
            <PlusBtnAnimation hidden="md" openClose={information} />{" "}
          </button>
          <ul
            className={`${
              information
                ? "show-dropdown-info  h-36  "
                : "hide-dropdown-info h-0 "
            }  md:h-44 mt-5 overflow-hidden text-sm`}
          >
            <li className="mt-2 capitalize">details</li>
            <li className="mt-2 capitalize">Home</li>
            <li className="mt-2 capitalize">Contact</li>
            <li className="mt-2 capitalize">About Us</li>
            <li className="mt-2 capitalize">Oman</li>
          </ul>
        </li>
        <li className=" col-span-4 md:col-span-2 lg:col-span-1 my-2">
          <button
            className="w-full text-xl font-medium flex justify-between  "
            onClick={() => setUsefulLinks(!usefulLinks)}
          >
            <span>USEFUL LINKS </span>
            <PlusBtnAnimation hidden="md" openClose={usefulLinks} />{" "}
          </button>
          <ul
            className={`${
              usefulLinks
                ? "show-dropdown-info h-36 "
                : "hide-dropdown-info  h-0"
            }  md:h-44 mt-5 overflow-hidden text-sm`}
          >
            <li className="mt-2 capitalize">Search</li>
            <li className="mt-2 capitalize">Terms and Conditions</li>
            <li className="mt-2 capitalize">Shipping Policy</li>
            <li className="mt-2 capitalize">Return Policy</li>
            <li className="mt-2 capitalize">Privacy Policy</li>
            <li className="mt-2 capitalize">Blogs</li>
          </ul>
        </li>
      </ul>
      <div className="lg:flex mt-5 h-12 items-center hidden">
            {icons.map((elem,index)=>{
            return <button key={index} className="icon-btn hover:text-blue-700 h-6 relative w-6 rounded-full grid place-content-center ms-2 hover:mb-3 transition-all duration-300 ease">
            <i className={`fa-brands fa-${elem}`}></i>
              <p className="box rotate-45 w-4 h-4 ms-1  absolute bg-black -top-5"></p>
              <p className="tooltip h-fit text-xs text-white py-2 mt-1 w-36 absolute bg-black -right-16 -top-12">Follow us on <span className="capitalize">{elem}</span></p>
            </button>
            })}

      </div>
      <div className=" hidden lg:flex w-full mt-10">
        <img
          className="h-20 w-20"
          src="https://cdn.shopify.com/s/files/1/0626/6119/8023/files/esma-emirates-authority-for-standardization-and-logo-EB3853B44B-seeklogo.com_bfc15cbf-f849-4747-b736-4fa998e4050d.png?v=1671101794"
          alt=""
        />
        <img
          className="h-20 w-20"
          src="https://cdn.shopify.com/s/files/1/0626/6119/8023/files/GMP_8f9267e9-8c36-4a83-bbd4-5bf184ad592e.jpg?v=1671101795"
          alt=""
        />
        <img
          className="h-20 w-20"
          src="https://cdn.shopify.com/s/files/1/0626/6119/8023/files/SEDEX_a6a5436c-3cda-4fa4-825f-6208e6f5fd7d.png?v=1671101794"
          alt=""
        />
        <img
          className="h-20 w-20"
          src="https://cdn.shopify.com/s/files/1/0626/6119/8023/files/ISO_eff8c534-77b8-48b6-b022-45df85d8c76f.png?v=1671101794"
          alt=""
        />
      </div>

    </div>
  );
};

export default Details;
