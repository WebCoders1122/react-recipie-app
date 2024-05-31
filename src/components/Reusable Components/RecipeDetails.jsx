import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Ingredients from "./Ingredients";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../features/Recipe/recipeSlice";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const fetchRecipe = async () => {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await response.json();
    setRecipe(data.data.recipe);
  };
  // console.log(recipe);
  useEffect(() => {
    fetchRecipe();
  }, [id]);
  //favorites code
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.recipe.favorites);
  const recipes = useSelector((state) => state.recipe.recipes);
  const favoriteIndex = recipes.findIndex((recipe) => recipe.id == id);
  const handleFavorites = () => {
    const recipeIndex = recipes.findIndex((recipe) => recipe.id == id);
    if (favorites.findIndex((recipe) => recipe.id == id) == -1) {
      dispatch(addFavorite(recipes[recipeIndex]));
    } else {
      dispatch(removeFavorite(favoriteIndex));
    }
  };
  console.log(favoriteIndex, favorites);
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
          <h2 className='text-2xl font-extrabold text-gray-800 dark:text-gray-100'>
            {recipe.title}
          </h2>
          {/* publisher */}
          <p className='text-gray-400 text-lg mt-2 flex justify-around dark:text-gray-500'>
            <span className=''>{recipe.publisher}</span>
            <span className=''>Cooking Time: {recipe.cooking_time}</span>
            <span className=''>Servings: {recipe.servings}</span>
          </p>
          <div className='mt-3'>
            <h3 className='text-xl font-bold text-gray-800 dark:text-gray-200'>
              Ingredients{" "}
            </h3>
            <ul className='space-y-2 list-decimal mt-2 pl-4 text-sm'>
              {recipe?.ingredients?.map((ing, index) => (
                <Ingredients
                  key={`ing-${index}`}
                  data={ing}
                />
              ))}
            </ul>
            <button
              type='button'
              onMouseDown={handleFavorites}
              className='focus:outline-none mt-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg text-sm font-semibold px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
              {favoriteIndex != -1
                ? "Add to Favorites"
                : "Remove from Favorites"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
