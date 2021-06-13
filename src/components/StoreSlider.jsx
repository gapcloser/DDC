import React, { useContext } from "react";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import StoreItem from "./StoreItem";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { DataContext } from "../state/DataProvider";
const StoreSlider = () => {
  const { productList } = useContext(DataContext);
  return (
    <div className="md:px-16 py-14 bg-secondary px-3 text-white">
      <h1 className="text-center text-2xl capitalize mb-8 font-semibold">
        From our store
      </h1>
      <div>
        <Carousel
          plugins={[
            "infinite",
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <button className="w-12 h-12 bg-primary flex items-center justify-center rounded-full focus:outline-none">
                    <IoIosArrowBack />
                  </button>
                ),
                arrowRight: (
                  <button className="w-12 h-12 bg-primary flex items-center justify-center rounded-full focus:outline-none">
                    <IoIosArrowForward />
                  </button>
                ),
                addArrowClickHandler: true,
              },
            },
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                "infinite",
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: (
                      <button className="w-8 h-8 bg-primary flex items-center justify-center rounded-full focus:outline-none">
                        <IoIosArrowBack />
                      </button>
                    ),
                    arrowRight: (
                      <button className="w-8 h-8 bg-primary flex items-center justify-center rounded-full focus:outline-none">
                        <IoIosArrowForward />
                      </button>
                    ),
                    addArrowClickHandler: true,
                  },
                },
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                "infinite",
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: (
                      <button className="w-10 h-10 bg-primary flex items-center justify-center rounded-full focus:outline-none">
                        <IoIosArrowBack />
                      </button>
                    ),
                    arrowRight: (
                      <button className="w-10 h-10 bg-primary flex items-center justify-center rounded-full focus:outline-none">
                        <IoIosArrowForward />
                      </button>
                    ),
                    addArrowClickHandler: true,
                  },
                },
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        >
          {productList.map((product) => (
            <StoreItem product={product} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default StoreSlider;
