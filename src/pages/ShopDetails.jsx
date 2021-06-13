import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import { DataContext } from "../state/DataProvider";

const ShopDetails = () => {
  const { productList } = useContext(DataContext);
  const { pathname } = useLocation();
  const ExactProduct = productList.filter(
    (product) => product.id === pathname.slice(6)
  );
  return (
    <div className="bg-primary px-6 py-40 text-white">
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <img className="rounded" src={ExactProduct[0].image} alt="" />
        </div>
        <div className="w-full md:p-6">
          <h1 className="text-2xl md:mt-0 my-5">{ExactProduct[0].title}</h1>
          <p>Price: ${ExactProduct[0].price}</p>
          <div className="text-gray-400 mt-4">{ExactProduct[0].text}</div>
          <button className="relative block w-max px-7 py-3 z-10 group mt-4">
            <div className="-z-10 group-hover:bg-white transition-all duration-200 bg-danger absolute top-0 left-0 w-full h-full rounded transform -skew-x-6" />
            <span className="z-10 group-hover:text-black"> Buy</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
