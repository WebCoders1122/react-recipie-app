import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ingredients from "./Ingredients";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  console.log(id);
  const fetchRecipe = async () => {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await response.json();
    setRecipe(data.data.recipe);
  };
  console.log(recipe);
  useEffect(() => {
    fetchRecipe();
  }, [id]);
  return (
    <div className='font-sans p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto'>
      <div className='grid items-start grid-cols-1 lg:grid-cols-5 gap-12'>
        {/* main product image */}
        <div className='lg:col-span-3 bg-gray-100 rounded-sm w-full lg:sticky top-0 text-center p-2'>
          <img
            src={recipe.image_url}
            alt='Product'
            className='w-full rounded object-cover mx-auto'
          />
        </div>
        <div className='lg:col-span-2'>
          {/* title */}
          <h2 className='text-2xl font-extrabold text-gray-800'>
            {recipe.title}
          </h2>
          {/* publisher */}
          <p className='text-gray-400 text-lg mt-2 flex justify-around'>
            <span className=''>{recipe.publisher}</span>
            <span className=''>Cooking Time: {recipe.cooking_time}</span>
            <span className=''>Servings: {recipe.servings}</span>
          </p>
          <div className='mt-3'>
            <h3 className='text-xl font-bold text-gray-800'>Ingredients </h3>
            <ul className='space-y-2 list-decimal mt-2 pl-4 text-sm text-gray-800'>
              {recipe?.ingredients?.map((ing, index) => (
                <Ingredients
                  key={`ing-${index}`}
                  data={ing}
                />
              ))}
            </ul>
            <button
              type='button'
              class='focus:outline-none mt-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg text-sm font-semibold px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>
              Add To Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
