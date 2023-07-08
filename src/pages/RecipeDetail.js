import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipe } from "../utils";
import Banner from "../images/banner3.jpeg";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState({});

  const { id } = useParams();

  const getRecipe = async (id) => {
    try {
      const data = await fetchRecipe(id);

      setRecipe(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRecipe(id);
  }, [id]);

  if (Object.keys(recipe).length === 0) {
    return <div>Loading...</div>;
  }

  const formattedCalories = recipe.calories.toFixed(2);

  return (
    <div className="w-full h-[100vh] ">
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
        <div>
          <div
            className="w-full h-full sm:w-[200px] 
          md:w-[400px] lg:w-[400px] 
           border border-gray-500 rounded-md
           bg-gradient-to-b from-black to-transparent"
          >
            <div className="flex flex-col justify-center gap-4 py-4">
              <div className="flex justify-center">
                <img
                  src={recipe.image}
                  alt="Resim"
                  className="rounded-lg sm:w-[200px] sm:h-[150px] 
          md:w-[200px] md:h-[150px] lg:w-[200px] lg:h-[150px]"
                />
              </div>
              <div className="flex justify-center text-white">
                <span>{recipe.label}</span>
              </div>

              <div className="flex justify-center text-green-500 text-[18px] font-bold ">
                <h2>Ingredients</h2>
              </div>
              <div>
                <ol className="list-disc md:w-[400px] sm:w-[200px] px-10 text-white">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                  ))}
                </ol>
              </div>
              <div className="flex justify-center text-white">
                <p>
                  <b>Calori:</b> {formattedCalories}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
