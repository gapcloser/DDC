import React from "react";
import { Link } from "react-router-dom";

import { IoCalendarOutline } from "react-icons/io5";

const NewsItem = ({ game }) => {
  return (
    <div className="flex flex-col mb-14 sm:flex-row">
      <Link
        to={`/blog/${game.id}`}
        className="bg-cover bg-center w-full h-44 rounded flex items-end p-6 mr-5 lg:w-1/4"
        style={{ backgroundImage: `url(${game.image})` }}
      >
        <span>9.1</span>
      </Link>
      <div className="lg:w-3/4">
        <Link
          to={`/blog/${game.id}`}
          className="text-2xl my-4 sm:m-0 block hover:text-danger transition-all duration-200"
        >
          {game.title}
        </Link>
        <p className="flex text-gray-400 items-center mt-2">
          <IoCalendarOutline className="mr-3" />
          {game.date.toString().slice(4, 16)}
        </p>
        <p className="text-gray-300 my-5 ">{game.text.slice(0, 250)}...</p>
        <Link
          to={`/blog/${game.id}`}
          className="hover:text-danger transition-all duration-200"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
