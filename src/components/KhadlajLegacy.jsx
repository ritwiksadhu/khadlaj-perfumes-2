import React from "react";
import Heading from "./Heading";

const KhadlajLegacy = () => {
  return (
    <div className="px-3 md:w-full m-auto h-full max-w-screen-lg" >
      <Heading title="KHADLAJ LEGACY"/>
      <div className="khadlaj-legacy flex-col h-fit flex md:flex-row " >
        <img
          src="https://cdn.shopify.com/s/files/1/0626/6119/8023/files/IMG_6357_copy_720x.jpg?v=1670420325"
          alt=""
          className="md:w-1/2"
        />
        <div className="text-lg w-11/12 sm:w-full md:w-1/2 ms-5 sm:py-0 py-2 text-gray-400 h-max lg:w-1/2 ">
        <p >
          Established in 1997, Khadlaj Perfumes started out an extraordinary
          brand with one clear purpose of creating fragrances for people to love
          and cherish. Khadlaj Perfumes highly maintains the values of
          exceptional service and is built on the values of family, relationship
          with our esteemed team and highly valued customers.
          </p>
           <p>Khadlaj was
          started out as a passion and dream to create unique and unforgettable
          fragrances by Mr. Mohamed Iqbal Abdul Sattar, the founder and the
          master perfumer at Khadlaj. A man with more than 40 years of
          experience in the perfume industry, Mr Iqbal’s envisioned and strived
          to create a brand which caters to all fragrance preferences and
          diverse fragrance cultures globally. Fragrances at Khadlaj are a
          unique and innovative blend of Arabic, Occidental and Niche
          fragrances.
          </p>
          <p>Mr. Iqbal believes in the use of finest ingredients in
          "perfumery" that are encased in exclusive flacons to give an
          experience that engages the senses and provide an unmatchable
          experience. Following his principles and values in giving only the
          best to customers, he created world class perfumes using highest
          quality notes.
        </p>
        <button className="know-more-btn text-white py-2 my-5 px-3 text-sm font-medium" >KNOW MORE</button>
        </div>
      </div>
    </div>
  );
};

export default KhadlajLegacy;
