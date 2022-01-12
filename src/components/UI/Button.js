import React from "react";

const Button = ({ cta, disabled, onClick }) => {
  return (
    <>
      <button
        className="text-white w-24 p-2 rounded-full bg-blue-500"
        disabled={disabled}
        onClick={onClick}
      >
        {cta}
      </button>
    </>
  );
};

export default Button;
