import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SearchWithButton from "./Reusable Components/SearchWithButton";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "flowbite";
import { initFlowbite } from "flowbite";
import { CiDark, CiLight } from "react-icons/ci";
import { fetchRecipesAsync, setDarkMode } from "../features/Recipe/recipeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.recipe.search);
  //to expand or collaps mobile menu
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };

  // to handle darkmode
  const darkMode = useSelector((state) => state.recipe.darkMode);
  const handleDarkMode = () => {
    darkMode == true ||
    (darkMode == null &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };
  useEffect(() => {
    initFlowbite();
    handleDarkMode();
  }, [darkMode]);

  return (
    // main container of recipe app
    <div>
      <nav className='bg-gray-100 border-gray-200 dark:bg-gray-900'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          {/* logo of navbar */}
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            React Recipe App
          </span>
          {/* search for large screens and mobile menu button */}
          <div className='flex md:order-2'>
            <div className='relative mt-3 hidden md:flex md:justify-center md:items-center md:gap-2'>
              <SearchWithButton>Enter Your Recipe Here...</SearchWithButton>
              <div className=''>
                {/* dark mode toggler */}
                {darkMode == true ||
                (darkMode == null &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
                  <button
                    className='text-3xl font-bold shadow bg-gray-200 dark:bg-gray-800 rounded-md p-2.5 hover:bg-gray-300 dark:hover:bg-red-700 dark:focus:ring-gray-600 dark:active:focus:ring-red-400 dark:text-white ease-linear duration-200'
                    onClick={() => dispatch(setDarkMode(false))}>
                    <CiLight />
                    {/* <CiDark /> */}
                  </button>
                ) : (
                  <button
                    className='text-3xl shadow bg-gray-50 hover:bg-gray-200 rounded-md p-2.5 hover:dark:bg-gray-700 dark:text-white ease-linear duration-200'
                    onClick={() => dispatch(setDarkMode(true))}>
                    <CiDark />
                    {/* <CiLight /> */}
                  </button>
                )}
                {/* dark mode toggler end */}
              </div>
            </div>
            {/* mobile navbar menu button */}
            <button
              data-collapse-toggle='navbar-search'
              type='button'
              onClick={handleExpand}
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-search'
              aria-expanded='false'>
              <span className='sr-only'>Open main menu</span>
              <div
                className={`block lg:hidden mx-5 text-violet-700 dark:text-white`}>
                {expand ? (
                  <AiOutlineClose
                    className='ease-linear duration-200'
                    size={25}
                  />
                ) : (
                  <AiOutlineMenu
                    className='ease-linear duration-200'
                    size={25}
                  />
                )}
              </div>
            </button>
          </div>

          <div
            className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-search'>
            {/* mobile search */}
            <div className='relative mt-3 md:hidden'>
              <SearchWithButton>Search Your Recipe Here...</SearchWithButton>
            </div>
            <ul className='flex flex-col md:justify-center md:items-center justify-center font-medium p-4 md:p-0 mt-4 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <NavLink
                  to='/'
                  className={(isActive) => {
                    return `block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
                      isActive.isActive
                        ? "text-blue-700 dark:text-red-500"
                        : "text-gray-900 dark:text-white"
                    } md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`;
                  }}
                  aria-current='page'>
                  Home
                </NavLink>
              </li>
              <NavLink
                to='favorites'
                className={(isActive) => {
                  return `block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
                    isActive.isActive
                      ? "text-blue-700 dark:text-red-500"
                      : "text-gray-900 dark:text-white"
                  } md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`;
                }}
                aria-current='page'>
                Favorites
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
