import React, { useContext } from "react";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import GameItem from "./GameItem";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { DataContext } from "../state/DataProvider";

const GameSlider = () => {
  const { gameList } = useContext(DataContext);
  return (
    <div className="md:px-16 py-14 bg-primary px-3 text-white">
      <Carousel
        plugins={[
          "infinite",
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: (
                <button className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full focus:outline-none">
                  <IoIosArrowBack />
                </button>
              ),
              arrowRight: (
                <button className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full focus:outline-none">
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
                    <button className="w-8 h-8 bg-secondary flex items-center justify-center rounded-full focus:outline-none">
                      <IoIosArrowBack />
                    </button>
                  ),
                  arrowRight: (
                    <button className="w-8 h-8 bg-secondary flex items-center justify-center rounded-full focus:outline-none">
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
                    <button className="w-10 h-10 bg-secondary flex items-center justify-center rounded-full focus:outline-none">
                      <IoIosArrowBack />
                    </button>
                  ),
                  arrowRight: (
                    <button className="w-10 h-10 bg-secondary flex items-center justify-center rounded-full focus:outline-none">
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
        {gameList.map((game, idx) => (
          <GameItem game={game} key={idx} />
        ))}
      </Carousel>
    </div>
  );
};

export default GameSlider;
