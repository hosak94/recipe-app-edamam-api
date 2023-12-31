import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipe } from "../utils";

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
      <div className="relative w-full h-[100vh]">
        <img
          src={process.env.PUBLIC_URL + "/project-images/banner3.jpeg"}
          alt="Recipes"
          className="w-full  h-[100vh] object-cover"
        />
      </div>
      <div
        className="absolute w-full  h-[100vh]
      bg-gradient-to-t from-black to-transparent
      top-0 z-8 flex flex-col items-center
      justify-center pt-40 2xl:pt-20 px-4 "
      >
        <div>
          <div
            className="w-full 
           border border-gray-500 rounded-md
           bg-gradient-to-b from-black to-transparent "
          >
            <div className="flex flex-col justify-center gap-4 py-4 ">
              <div className="flex justify-center">
                <img
                  src={recipe.image}
                  alt="Resim"
                  className="rounded-lg w-[300px] h-[200px] md:w-[300px] md:h[200px]"
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
                    <li className="text-sm md:text-base" key={index}>
                      {ingredient.text}
                    </li>
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
