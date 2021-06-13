import React from "react";
import MiniHero from "../components/MiniHero";
import ShopList from "../components/ShopList";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Shop = () => {
  return (
    <div>
      <MiniHero type="shop" />
      <ShopList />
      <Contact />
      <Footer />
    </div>
  );
};

export default Shop;
