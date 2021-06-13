import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//icons
import { FiSearch, FiUser } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";

import { DataContext } from "../state/DataProvider";
const Header = () => {
  const { isHeaderOpen, setIsHeaderOpen } = useContext(DataContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOnScroll, setIsOnScroll] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setIsOnScroll(true);
    } else {
      setIsOnScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`fixed z-50 top-0 left-0 flex items-center justify-between px-10 w-full text-white transition-all duration-300 ${
        isOnScroll ? "bg-secondary py-6" : "bg-transparent py-8"
      }`}
    >
      <div className="flex items-center">
        <div className="font-raggae mr-9">DDC</div>
        <div
          className={`flex flex-col absolute top-0 transition-all duration-200 ${
            isHeaderOpen ? "right-0 bg-primary" : "-right-full"
          } h-screen p-8 w-full sm:w-1/2 md:flex-row md:static md:h-auto md:p-0`}
        >
          <div className="flex items-center justify-between mb-16 text-2xl font-raggae md:hidden">
            <h1>DDC</h1>
            <button onClick={() => setIsHeaderOpen(false)}>
              <MdClose />
            </button>
          </div>
          <Link
            onClick={() => setIsHeaderOpen(false)}
            to="/"
            className="mr-7 mb-4 md:mb-0"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsHeaderOpen(false)}
            to="/blog"
            className="mr-7 mb-4 md:mb-0"
          >
            Blog
          </Link>
          <Link
            onClick={() => setIsHeaderOpen(false)}
            to="/shop"
            className="mr-7 mb-4 md:mb-0"
          >
            Shop
          </Link>
        </div>
      </div>
      <div className="flex">
        <button onClick={() => setIsSearchOpen(true)} className="text-lg mr-5">
          <FiSearch />
        </button>
        <button
          onClick={() => setIsHeaderOpen(true)}
          className="text-lg md:hidden"
        >
          <CgMenuRight />
        </button>
      </div>
      <div
        className={`absolute top-0 left-0 transition-all duration-200 ${
          isSearchOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } bg-secondary w-full h-screen flex items-center justify-center px-8`}
      >
        <input
          className="border-0 bg-transparent border-b focus:outline-none w-full p-3 md:text-2xl"
          type="text"
          placeholder="Search"
        />
        <button
          className="absolute top-5 right-5 text-3xl"
          onClick={() => setIsSearchOpen(false)}
        >
          <MdClose />
        </button>
      </div>
    </div>
  );
};

export default Header;
