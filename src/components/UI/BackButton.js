import React from "react";
import { Link } from "react-router-dom";

import arrow from "../../assets/arrow-left.svg";

const BackButton = ({ ...restprops }) => {
  return (
    <Link {...restprops} className="flex items-center text-xl mb-6">
      <img src={arrow} alt="left arrow" className="w-4 mr-1" />
      Back
    </Link>
  );
};

export default BackButton;
