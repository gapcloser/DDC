import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ game }) => {
  return (
    <Link to={`/blog/${game.id}`} className="flex flex-col group">
      <div
        className="bg-cover bg-center w-full h-44 rounded"
        style={{ backgroundImage: `url(${game.image})` }}
      />
      <h1 className="text-white text-xl mt-4 transition-all duration-200 group-hover:text-danger">
        {game.title}
      </h1>
    </Link>
  );
};

export default BlogItem;
