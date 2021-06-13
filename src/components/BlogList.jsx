import React, { useContext } from "react";
import BlogItem from "./BlogItem";

import { DataContext } from "../state/DataProvider";

const BlogList = () => {
  const { gameList } = useContext(DataContext);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 bg-primary py-24 px-5 lg:px-40">
      {gameList.map((game, idx) => (
        <BlogItem game={game} key={idx} />
      ))}
    </div>
  );
};

export default BlogList;
