import React from "react";

const Ingredients = ({ data }) => {
  return (
    <li>
      <span className='text-md font-semibold text-gray-60 uppercase text-gray-600 dark:text-gray-400'>
        {data.description}
      </span>
      :
      <span className='text-gray-800 dark:text-white'>
        {data.quantity} {data.unit}
      </span>
    </li>
  );
};

export default Ingredients;
