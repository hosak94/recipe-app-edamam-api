import React from "react";
import Banner from "../images/banner3.jpeg";

const Header = ({ image }) => {
  return (
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-full">
        <img
          src={Banner}
          alt="Recipes"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="absolute w-full h-full 
      bg-gradient-to-t from-black to-transparent
      top-0 z-8 flex flex-col items-center
      justify-center pt-40 2xl:pt-20 px-4 "
      >
        <div className="bg-black bg-opacity-60 rounded-full px-6 py-4">
          <h1 className="text-white text-4x1 md:text-5xl font-bold text-center">
            Flavors of the Feast
          </h1>
          <p
            className="text-sm mt-4 text-center 
       text-white  
         "
          >
            Discover a world of delicious recipes that will tantalize your taste
            buds and bring joy to your table.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
