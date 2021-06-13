import React from "react";

//components
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GameSlider from "../components/GameSlider";
import Hero from "../components/Hero";
import News from "../components/News";
import StoreSlider from "../components/StoreSlider";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <div>
      <Hero />
      <GameSlider />
      <StoreSlider />
      <News />
      <Contact />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
