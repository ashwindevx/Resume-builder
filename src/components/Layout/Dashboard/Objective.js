import React, { useState, useEffect, useContext } from "react";

import { Context } from "../../../Store.js";
import { Link } from "react-router-dom";

import Button from "../../UI/Button.js";
import BackButton from "../../UI/BackButton.js";

const Objective = () => {
  const { updateObjective, detail } = useContext(Context);
  const [nextDisabled, setNextDisabled] = useState(true);

  const onObjectiveChange = (e) => {
    updateObjective(e.target.value);
  };

  useEffect(() => {
    if (detail.objective) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [detail.objective]);

  return (
    <div>
      <BackButton to={"/"} />
      <p className="mb-8 text-xl font-semibold">Objective</p>
      <form>
        <label htmlFor="objective">Objective</label>
        <textarea
          id="objective"
          type={"textarea"}
          rows="10"
          maxLength="250"
          required
          value={detail.objective}
          onChange={onObjectiveChange}
          placeholder={
            "Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector."
          }
          className="mt-1 mb-4 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        />
        <div className="flex w-full justify-between">
          <Link to={!nextDisabled ? "/skill" : "#"}>
            <Button>Next</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Objective;
