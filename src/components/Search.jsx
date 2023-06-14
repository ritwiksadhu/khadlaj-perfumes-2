import React from "react";
import cross from "../Assets/svg/cross.svg";
import search from "../Assets/svg/searchSVG.svg";

const Search = ({setRightOverlayActive}) => {
  return (
    <div className="w-full h-full">
      <div className="w-full m-auto flex py-3 text-lg border-b-2 px-2">
        <h2 className="inline-block grow text-center">SEARCH OUR SITE</h2>
        <button onClick={()=>setRightOverlayActive(false)} className="">
          <img
            className="h-5 hover:rotate-180 transition-all ease duration-500 "
            src={cross}
            alt=""
          />
        </button>
      </div>
      <select
        className="border-2 w-11/12 mx-3 px-3 py-2 my-5 h-fit text-sm"
        name=""
        id=""
      >
        <option value="">All categories</option>
        <option value="">AIR FRESHNER</option>
        <option value="">BAKHOOR</option>
        <option value="">CPO</option>
        <option value="">DEHN AL OUDH</option>
        <option value="">GIFT SET</option>
        <option value="">PERFUME SPRAY</option>
      </select>
      <div className="border-2 w-11/12 mx-3 px-3 py-2 my-2 h-fit text-sm flex">
        <input placeholder="Search for products" className="grow" />
        <button className="">
          <img
            className="h-4 hover:rotate-180 transition-all ease duration-500 "
            src={search}
            alt=""
          />
        </button>
      </div>
      <h4 className="shadow-md border-y-2 my-5 py-3 px-2 font-medium text-xs">
        Need some inspiration?
      </h4>
      <div>
        <div class="flex justify-center items-center text-sm px-2">
          <img className="h-24"
            src="https://cdn.shopify.com/s/files/1/0626/6119/8023/products/6297000645407-2_80x.jpg?v=1668163470"
            alt=""
          />
          <div className="">
            <h5>DEHNAL OUDH ASAL 3 ML</h5>
            <span> Dhs. 189.00</span>
          </div>
        </div>
        <div class="flex justify-center items-center text-sm px-2">
          <img className="h-24"
            src="https://cdn.shopify.com/s/files/1/0626/6119/8023/products/6291107973623-2_80x.jpg?v=1668165546"
            alt=""
          />
          <div className="">
            <h5>DEHNAL OUD TURAAS 3ML</h5>
            <span>Dhs. 90.00</span>
          </div>
        </div>
        <div class="flex justify-center items-center text-sm px-2">
          <img className="h-24"
            src="https://cdn.shopify.com/s/files/1/0626/6119/8023/products/6297000645407-2_80x.jpg?v=1668163470"
            alt=""
          />
          <div className="">
            <h5>DEHNAL OUDH COMBODI 3ML</h5>
            <span>Dhs. 65.00</span>
          </div>
        </div>
        <div class="flex justify-center items-center text-sm px-2">
          <img className="h-24"
            src="https://cdn.shopify.com/s/files/1/0626/6119/8023/products/6291107973647-2_80x.jpg?v=1668165688"
            alt=""
          />
          <div className="">
            <h5>DEHN AL OUD AQDAM 3ML</h5>
            <span>Dhs. 95.00</span>
          </div>
        </div>
        <button className="arrow-animation flex items-center border-2 w-full text-black py-2 px-2 font-medium text-xs text-left">
        View All <span className="arrow inline-block" >→</span>
        </button>
      </div>
    </div>
  );
};

export default Search;
