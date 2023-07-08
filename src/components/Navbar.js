import React, { useState } from "react";
import Logo from "../images/logo.jpeg";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import { Link, scroller } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSearch = () => {
    scroller.scrollTo("searchScroll", {
      smooth: true,
      duration: 1000,
      offset: -100,
    });
    setOpen(false);
  };

  return (
    <header className="w-full fixed z-10 bg-black bg-opacity-70">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <a
          href="/"
          className="flex items-center justify-center text-white text-lg cursor-pointer gap-2 w-[250px]"
        >
          <img
            src={Logo}
            alt="Logo"
            className="hidden md:block w-8 h-8 
          lg:w-14 lg:h-14 rounded-full"
          />
          Flavors of the
          <span className="text-green-500  ">Feast</span>
        </a>
        <ul className="hidden md:flex text-white gap-6 w-[250px]">
          <li className="transition-transform duration-300 hover:scale-125">
            <a href="/">Home</a>
          </li>
          <li className="transition-transform duration-300 hover:scale-125">
            <Link
              onClick={scrollToSearch}
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Search
            </Link>
          </li>
          <li className="transition-transform duration-300 hover:scale-125">
            <a href="#">Favorites</a>
          </li>
        </ul>
        <div className="w-[250px] flex justify-center">
          <Button
            title="Sign in"
            containerStyle="hidden md:block 
          bg-transparent border border-white text-white 
          hover:bg-white hover:bg-white hover:text-slate-700 
          rounded-full min-w-[100px] "
          />
        </div>
        <button
          className="block md:hidden 
        text-white text-xl "
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </nav>
      <div
        className={`${open ? "flex" : "hidden"}
      bg-black flex-col w-full px-4 pt-16 pb-10
      text-white gap-6 text-[14px] `}
      >
        <a href="/">Home</a>
        <Link
          onClick={scrollToSearch}
          smooth={true}
          duration={1000}
          className="cursor-pointer"
        >
          Search
        </Link>
        <a href="#">Favorites</a>
      </div>
    </header>
  );
};

export default Navbar;
