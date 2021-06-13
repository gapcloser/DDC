import React from "react";
import { Link } from "react-router-dom";

const StoreItem = ({ product, type }) => {
  return (
    <Link
      to={`/shop/${product.id}`}
      className={`w-full ${type === "shop" ? "mx-0" : "mx-4"} text-white group`}
    >
      <div
        className="bg-cover group bg-no-repeat bg-center w-full h-48 lg:h-56 rounded transform -skew-x-3 relative overflow-hidden"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        {product.stock > 0 && (
          <span className="absolute top-3 left-3 bg-danger px-4 text-sm rounded transform -skew-x-3 ">
            -{product.stock}%
          </span>
        )}
      </div>
      <div className="px-2">
        <h1 className="text-xl font-bold my-4 group-hover:text-danger transition-all duration-200">
          {product.title}
        </h1>
        <p className="text-gray-300">${product.price}</p>
      </div>
    </Link>
  );
};

export default StoreItem;
