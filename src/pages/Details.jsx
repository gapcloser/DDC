import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import { DataContext } from "../state/DataProvider";

const Details = () => {
  const { gameList } = useContext(DataContext);
  const { pathname } = useLocation();
  const ExactGame = gameList.filter((game) => game.id === pathname.slice(6));
  return (
    <div className="bg-primary text-white">
      <div
        className="bg-cover bg-center w-full h-96 flex items-end p-5 sm:p-24"
        style={{ backgroundImage: `url(${ExactGame[0].image})` }}
      >
        <h1 className="text-3xl">{ExactGame[0].title}</h1>
      </div>
      <div className="py-20 px-6 sm:px-20 lg:px-40">
        <h1>{ExactGame[0].title}</h1>{" "}
        <p className="text-gray-300 mt-4">{ExactGame[0].text}</p>
        <div className="bg-secondary p-4 rounded items-center justify-between flex mt-4">
          <span>Rating:</span>
          <span>{ExactGame[0].rate}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
