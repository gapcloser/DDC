import React from "react";
import BlogList from "../components/BlogList";
import MiniHero from "../components/MiniHero";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Blog = () => {
  return (
    <div>
      <MiniHero />
      <BlogList />
      <Contact />
      <Footer />
    </div>
  );
};

export default Blog;
