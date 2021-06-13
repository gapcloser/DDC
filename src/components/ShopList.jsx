import React, { useContext } from "react";
import StoreItem from "./StoreItem";

import { DataContext } from "../state/DataProvider";

const ShopList = () => {
  const { productList } = useContext(DataContext);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 bg-primary py-24 px-5 lg:px-40">
      {productList.map((product, idx) => (
        <StoreItem type="shop" product={product} key={idx} />
      ))}
    </div>
  );
};

export default ShopList;
