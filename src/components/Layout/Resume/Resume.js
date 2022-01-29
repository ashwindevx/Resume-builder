import React, { useContext } from "react";
import ResumeActions from "./ResumeActions.js";

import { Context } from "../../../Store.js";

const Resume = () => {
  const { detail } = useContext(Context);

  return (
    <div className="flex w-2/3 flex-col items-center justify-center bg-slate-100 p-4">
      <div className="w-595 h-842 bg-white shadow-xl shadow-gray-200">
        {/* personalInfo */}
        {Object.keys(detail.personalInfo).length ? (
          <div
            key={Math.random()}
            className="flex items-end justify-between border-b-2 border-gray-200 p-8"
          >
            <p className="text-3xl font-bold">{detail.personalInfo.name}</p>
            <div className="text-right">
              <p>{detail.personalInfo.number}</p>
              <p>{detail.personalInfo.email}</p>
              <p>{detail.personalInfo.address}</p>
            </div>
          </div>
        ) : null}
        {/* objective  */}
        {detail.objective ? (
          <div key={Math.random()} className="p-8 pb-0">
            <p className="pb-2 text-2xl font-bold">Objective</p>
            <p>{detail.objective}</p>
          </div>
        ) : null}
        {detail.skills.length ? (
          <div key={Math.random()} className="p-8 pb-0">
            <p className="pb-2 text-2xl font-bold">Skills</p>
            <ul className="ml-5 list-decimal">
              <li>{detail.skills[0]}</li>
              <li>{detail.skills[1]}</li>
              <li>{detail.skills[2]}</li>
            </ul>
          </div>
        ) : null}
        {/* work experience  */}
        {Object.keys(detail.workExperience).length ? (
          <div key={Math.random()} className="p-8 pb-0">
            <p className="pb-2 text-2xl font-bold">Work Experience</p>
            <p className="text-xl font-medium">
              {detail.workExperience.jobTitle}
            </p>
            <div className="text-md">
              <span>{detail.workExperience.companyName}, </span>
              <span>{detail.workExperience.city}, </span>
              <span>{detail.workExperience.state}</span>
              <p>
                {detail.workExperience.startDate.toLocaleString("en-IN")} to{" "}
                {detail.workExperience.endDate.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        ) : null}
        {/* education  */}
        {Object.keys(detail.education).length ? (
          <div key={Math.random()} className="p-8 pb-0">
            <p className="pb-2 text-2xl font-bold">Education</p>
            <div>
              <span className="text-xl font-medium">
                {detail.education.schoolName},{" "}
              </span>
              <span className="text-md">
                {detail.education.city}, {detail.education.state}
              </span>
            </div>
            <p className="text-md">{detail.education.degree}</p>
            <p className="text-md">
              ({detail.education.startDate} - {detail.education.endDate})
            </p>
          </div>
        ) : null}
      </div>
      <ResumeActions />
    </div>
  );
};

export default Resume;
