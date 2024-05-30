import React, { useState } from "react";

//react icons
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import {
  fetchRecipesAsync,
  setSearch,
} from "../../features/Recipe/recipeSlice";

const SearchWithButton = ({ children }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const handleSearch = (value) => {
    // if (value == "") return alert("Please Enter City Name to Search...");
    dispatch(fetchRecipesAsync(value));
    setInputValue("");
  };
  return (
    <form
      className='max-w-md mx-auto'
      onSubmit={(event) => {
        event.preventDefault();
      }}>
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <CiSearch className='text-gray-600 dark:text-gray-300' />
        </div>
        <input
          type='search'
          id='default-search'
          className='block w-full p-4 mr-5 ps-10 text-sm text-gray-900 border rounded-lg bg-gray-50 ring-gray-300 border-gray-300 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
          placeholder={children}
          required=''
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              if (inputValue == "")
                return alert("Please Enter City Name to Search...");
              handleSearch(inputValue);
            }
          }}
        />
        <button
          onClick={() => handleSearch(inputValue)}
          type='submit'
          className='text-white absolute end-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchWithButton;
