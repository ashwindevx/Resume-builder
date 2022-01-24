import React from "react";

const Button = ({ ...restProps }) => {
  return (
    <>
      <button
        className="text-white w-24 p-2 rounded-full bg-blue-500"
        {...restProps}
      ></button>
    </>
  );
};

export default Button;
