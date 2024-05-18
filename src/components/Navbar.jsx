import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SearchWithButton from "./Reusable Components/SearchWithButton";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  //to expand or collaps mobile menu
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    // main container of recipie app
    <div>
      <nav className='bg-white border-grey-200 dark:bg-grey-900'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          {/* logo of navbar */}
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            React Recipie App
          </span>
          {/* search for large screens and mobile menu button */}
          <div className='flex md:order-2'>
            <div className='relative mt-3 hidden md:block'>
              <SearchWithButton>Enter Your Recipie Here...</SearchWithButton>
            </div>
            {/* mobile navbar menu button */}
            <button
              data-collapse-toggle='navbar-search'
              type='button'
              onClick={handleExpand}
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-grey-500 rounded-lg md:hidden hover:bg-grey-100 focus:outline-none focus:ring-2 focus:ring-grey-200 dark:text-grey-400 dark:hover:bg-grey-700 dark:focus:ring-grey-600'
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
            <ul className='flex flex-col md:justify-center md:items-center justify-center font-medium p-4 md:p-0 mt-4 border border-grey-100 rounded-lg bg-grey-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-grey-800 md:dark:bg-grey-900 dark:border-grey-700'>
              <li>
                <NavLink
                  to='/'
                  className={(isActive) => {
                    return `block py-2 px-3  rounded hover:bg-grey-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 ${
                      isActive.isActive
                        ? "text-purple-700 dark:text-red-500"
                        : "text-grey-900 dark:text-white"
                    } md:dark:hover:text-red-500 dark:hover:bg-grey-700 dark:hover:text-white md:dark:hover:bg-transparent`;
                  }}
                  aria-current='page'>
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
