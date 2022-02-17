import React from "react";

import { Link } from "react-router-dom";

import arrow from "../../assets/arrow-left.svg";

const BackButton = ({ ...restprops }) => {
  return (
    <Link {...restprops} className="mb-6 flex items-center text-xl">
      <img src={arrow} alt="left arrow" className="mr-1 w-4" />
      Back
    </Link>
  );
};

export default BackButton;
