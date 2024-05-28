import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5'>
      <img
        className='p-3 rounded-t-lg object-cover h-52 w-96'
        src={recipe.image_url}
        alt='product image'
      />
      <div className='px-5 pb-5'>
        <a href='#'>
          <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2'>
            {recipe.title}
          </h5>
        </a>

        <div className='flex items-center justify-between'>
          <span className='text-lg font-bold text-purple-400 dark:text-gray-500'>
            {recipe.publisher}
          </span>
          <button className='text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800'>
            Full Recipe ...
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
