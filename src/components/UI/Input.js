import React from "react";

const Input = ({ ...restProps }) => {
  return (
    <>
      <label {...restProps}></label>
      <input
        {...restProps}
        className="mt-1 mb-4 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
      />
    </>
  );
};

export default Input;
