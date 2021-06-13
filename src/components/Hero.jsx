import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-screen relative bg-left bg-cover bg-fixed md:bg-center flex flex-col text-white text-center md:text-left items-center md:items-start justify-end p-3 md:p-16"
      style={{
        backgroundImage: `url(https://html.nkdev.info/monsterplay/assets/images/dark/bg-banner-1.jpg)`,
      }}
    >
      <h1 className="text-6xl mb-4 z-10">Black Messa</h1>
      <p className="text-2xl text-gray-300 p-4 md:w-9/12 mb-4 z-10">
        "Have beginning wherein spirit. Bearing unto. To after light. Good image
        can't without hath fly beast him fish firmament fish Face waters fly
        unto spirit i doesn't one waters divide."
      </p>
      <button className="relative block w-max px-7 py-3 z-10 group">
        <div className="-z-10 group-hover:bg-white transition-all duration-200 bg-danger absolute top-0 left-0 w-full h-full rounded transform -skew-x-6" />
        <span className="z-10 group-hover:text-black"> Read more</span>
      </button>
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-40" />
    </div>
  );
};

export default Hero;
