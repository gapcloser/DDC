import React from "react";
import { Link } from "react-router-dom";

const GameItem = ({ game }) => {
  return (
    <Link
      to={`/blog/${game.id}`}
      className="bg-cover group bg-no-repeat bg-center w-full h-44 md:h-50 lg:h-56 rounded flex items-end justify-between relative p-8 mx-4"
      style={{ backgroundImage: `url(${game.image})` }}
    >
      <h1 className="text-xl z-10">{game.title}</h1>
      <p className="z-10">{game.rate}</p>
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-30 group-hover:opacity-0 transition-all duration-300 hidden md:block" />
    </Link>
  );
};

export default GameItem;
