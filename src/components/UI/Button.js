import React from "react";

const Button = ({ ...restProps }) => {
  return (
    <>
      <button
        className="w-24 rounded-full bg-blue-500 p-2 text-white"
        {...restProps}
      ></button>
    </>
  );
};

export default Button;
