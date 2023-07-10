import React, { useState } from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { image, label, cuisineType, ingredients, mealType, calories, uri } =
    recipe?.recipe;

  const id = uri?.split("#")[1];

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const formattedMealType =
    mealType[0].charAt(0).toUpperCase() + mealType[0].slice(1);

  return (
    <Link
      to={`/recipes/${id}`}
      className="w-full md:w-[220px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`bg-gradient shadow w-full rounded-full ${
          isHovered ? "transform scale-10" : ""
        }`}
      >
        <img
          src={image}
          alt={label}
          className={`rounded-lg h-[200px] md:h-[150px] w-full ${
            isHovered ? "transition duration-500" : ""
          }`}
        />
        <div
          className="p-3 bg-gradient-to-b from-slate-800 to-transparent
       rounded-lg"
        >
          <p className="text-white font-semibold">{label}</p>
          <div className="mt-2 w-[220px]">
            <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500">
              {cuisineType}
            </span>
            <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500">
              {formattedMealType}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
