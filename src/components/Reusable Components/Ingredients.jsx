import React from "react";

const Ingredients = ({ data }) => {
  return (
    <li>
      <span className='text-md font-semibold text-gray-60 uppercase '>
        {data.description}
      </span>
      :
      <span>
        {data.quantity} {data.unit}
      </span>
    </li>
  );
};

export default Ingredients;
