import React, { useContext } from "react";
import ResumeActions from "./ResumeActions.js";

import { Context } from "../../../Store.js";

const Resume = () => {
  const { state } = useContext(Context);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-slate-100 w-2/3">
      <div className="w-595 h-842 bg-white shadow-xl shadow-gray-200">
        {/* personalInfo */}
        {state.personalInfo ? (
          <div
            key={Math.random()}
            className="flex justify-between items-end p-8 border-b-2 border-gray-200"
          >
            <p className="text-3xl font-bold">{state.personalInfo.name}</p>
            <div className="text-right">
              <p>{state.personalInfo.number}</p>
              <p>{state.personalInfo.email}</p>
              <p>{state.personalInfo.address}</p>
            </div>
          </div>
        ) : null}
        {/* objective  */}
        {state.objective ? (
          <div key={Math.random()} className="p-8 pb-0">
            <p className="text-2xl font-bold pb-2">Objective</p>
            <p>{state.objective}</p>
          </div>
        ) : null}
        {state.skills.length ? (
          <div key={Math.random()} className="p-8 pb-0">
            <p className="text-2xl font-bold pb-2">Skills</p>
            <ul className="list-decimal ml-5">
              <li>{state.skills[0]}</li>
              <li>{state.skills[1]}</li>
              <li>{state.skills[2]}</li>
            </ul>
          </div>
        ) : null}
      </div>
      <ResumeActions />
    </div>
  );
};

export default Resume;
