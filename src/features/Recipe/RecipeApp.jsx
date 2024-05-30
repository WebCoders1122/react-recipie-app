import React from "react";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import RecipeCard from "../../components/Reusable Components/RecipeCard";
import Loading from "../../components/Reusable Components/Loading";

const RecipeApp = () => {
  const recipes = useSelector((state) => state.recipe.recipes);
  const loading = useSelector((state) => state.recipe.loading);
  return (
    <div className='flex justify-center items-center flex-wrap'>
      {loading ? (
        <Loading />
      ) : recipes != null && recipes.length ? (
        recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))
      ) : recipes == "[]" ? (
        <div className='flex flex-col items-center m-5 text-center mt-40'>
          <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
            No Recipe Found... Please Try Again!
          </h1>
        </div>
      ) : (
        <div className='flex flex-col items-center m-5 text-center mt-40'>
          <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
            Please Seach Recipes of your Choice
          </h1>
          <p className='mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
            We'll bring unique collection of recipes for you. You can search
            recipes of any category in above searchbar and we'll show you best
            possible results.
          </p>
        </div>
      )}
    </div>
  );
};

export default RecipeApp;
