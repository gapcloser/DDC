import React from "react";

const MiniHero = ({ type }) => {
  return (
    <div
      className="w-full h-80 relative bg-left bg-cover bg-fixed md:bg-center flex flex-col text-white text-center md:text-left items-center md:items-start justify-end p-3 md:p-16"
      style={{
        backgroundImage: `url(${
          type === "shop"
            ? "https://html.nkdev.info/monsterplay/assets/images/dark/product-1280x820.jpg"
            : "https://html.nkdev.info/monsterplay/assets/images/dark/bg-banner-2.jpg"
        })`,
      }}
    >
      <h1 className="text-6xl mb-4 z-10">
        {type === "shop" ? "Shop" : "Blog"}
      </h1>
      <p className="text-2xl text-gray-300 p-4 md:w-9/12 mb-4 z-10">
        "Fruit moveth Lights may deep their, morning abundantly open first bring
        wherein. That over creeping Saying herb above, place wherein."
      </p>
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-40" />
    </div>
  );
};

export default MiniHero;
