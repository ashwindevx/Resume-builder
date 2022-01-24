import React, { useState, useContext } from "react";

import { Context } from "../../../Store.js";

import { Link } from "react-router-dom";

import Button from "../../UI/Button.js";
import BackButton from "../../UI/BackButton.js";

const Objective = () => {
  const { state } = useContext(Context);
  const { updateObjective } = useContext(Context);

  const [objectiveText, setObjectiveText] = useState("");
  const [nextDisabled, setNextDisabled] = useState(true);

  const objChange = (e) => {
    setObjectiveText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateObjective(objectiveText);
    setNextDisabled(false);
  };

  return (
    <div>
      <BackButton to={"/"} />
      <p className="text-xl font-semibold mb-8">Objective</p>
      <form onSubmit={submitHandler}>
        <label htmlFor="objective">Objective</label>
        <textarea
          id="objective"
          type={"textarea"}
          rows="10"
          maxLength="250"
          required
          value={state.objective || objectiveText}
          onChange={objChange}
          placeholder={
            "Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector."
          }
          className="mt-1 mb-4 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        />
        <div className="flex justify-between w-full">
          <Button nextDisabled={nextDisabled}>Save</Button>
          {nextDisabled ? (
            <Button disabled={"disabled"}>Next</Button>
          ) : (
            <Button>
              <Link to="/skill">Next</Link>
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Objective;
