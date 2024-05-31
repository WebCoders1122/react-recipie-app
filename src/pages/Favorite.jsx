import React from "react";
import { useSelector } from "react-redux";
import RecipeCard from "../components/Reusable Components/RecipeCard";

const Favorite = () => {
  const favorites = useSelector((state) => state.recipe.favorites);

  return (
    <div className='flex justify-center items-center flex-wrap'>
      {favorites != null && favorites.length
        ? favorites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))
        : null}
    </div>
  );
};

export default Favorite;
