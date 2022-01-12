import React, { useState, useContext } from "react";
import ObjectiveContext from "../../../Context/ObjectiveContext.js";
import PersonalInfoContext from "../../../Context/PersonalInfoContext.js";
import ResumeActions from "./ResumeActions.js";

const Resume = () => {
  const [personalInfo, setPersonalInfo] = useContext(PersonalInfoContext);
  const [objective, setObjectiveText] = useContext(ObjectiveContext);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-slate-100 w-2/3">
      <div className="w-595 h-842 bg-white shadow-xl shadow-gray-200">
        {personalInfo.map((info) => {
          return (
            <div
              key={Math.random()}
              className="flex justify-between items-end p-8 border-b-2 border-gray-200"
            >
              <p className="text-3xl font-bold">{info.Name}</p>
              <div className="text-right">
                <p>{info.Number}</p>
                <p>{info.Email}</p>
                <p>{info.Address}</p>
              </div>
            </div>
          );
        })}
        {objective.map((objText) => {
          return (
            <div key={Math.random()} className="p-8">
              <p className="text-2xl font-bold pb-2">Objective</p>
              <p>{objText.Text}</p>
            </div>
          );
        })}
      </div>
      <ResumeActions />
    </div>
  );
};

export default Resume;
