import React, { useContext } from "react";
import NewsItem from "./NewsItem";

import { DataContext } from "../state/DataProvider";

const News = () => {
  const { gameList } = useContext(DataContext);
  return (
    <div className="py-16 px-3 lg:px-28 bg-primary text-white">
      <h1 className="text-3xl mb-6">Latest News</h1>
      <div>
        {gameList.map((game) => (
          <NewsItem game={game} />
        ))}
      </div>
    </div>
  );
};

export default News;
