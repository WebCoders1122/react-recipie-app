import React from "react";

const Loading = () => {
  return (
    <div className='flex items-center justify-center w-full h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 m-5'>
      <div className='px-5 py-2 text-2xl font-medium leading-none text-center text-purple-800 bg-purple-200 rounded-full animate-pulse dark:bg-purple-900 dark:text-purple-200'>
        loading...
      </div>
    </div>
  );
};

export default Loading;
