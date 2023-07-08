import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Searchbar from "./Searchbar";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "../utils";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("vegan");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const fetchRecipe = async () => {
    try {
      const data = await fetchRecipes({ query });

      setRecipes(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  const handleSearchedRecipe = (e) => {
    e.preventDefault();
    fetchRecipe();
  };

  return (
    <div className="w-full">
      <div
        className="w-full flex items-center 
        justify-center pt-10 pb-5 px-0 md:px-10"
      >
        <form onSubmit={handleSearchedRecipe} className=" lg:w-2/4'">
          <Searchbar
            placeholder="eg. Cake, Vegan, Chicken"
            handleInputChange={handleChange}
            rightIcon={
              <BiSearch
                onClick={handleSearchedRecipe}
                className="text-gray-600"
              />
            }
          />
        </form>
      </div>
      {recipes?.length > 0 ? (
        <>
          <div className="w-full justify-center flex flex-wrap gap-10 px-0 lg:px-10 py-10">
            {recipes?.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-white w-full items-center justify-center py-10">
          <p className="text-center">No Recipe Found</p>
        </div>
      )}
    </div>
  );
};

export default Recipes;
