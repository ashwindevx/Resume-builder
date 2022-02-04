import React, { useContext } from "react";
import ResumeActions from "./ResumeActions.js";

import { Context } from "../../../Store.js";

const Resume = () => {
  const {
    detail: { personalInfo, objective, skills, workExperience, education },
  } = useContext(Context);

  return (
    <div className="flex w-2/3 flex-col items-center justify-center bg-slate-100 p-4">
      <div className="w-595 h-842 bg-white shadow-xl shadow-gray-200">
        {/* personalInfo */}
        {Object.keys(personalInfo).length ? (
          <div
            key={Math.random()}
            className="flex items-end justify-between border-b-2 border-gray-200 p-8"
          >
            <p className="text-3xl font-bold">{personalInfo.name}</p>
            <div className="text-right">
              <p>{personalInfo.number}</p>
              <p>{personalInfo.email}</p>
              <p>{personalInfo.address}</p>
            </div>
          </div>
        ) : null}
        {/* objective  */}
        {objective ? (
          <div key={Math.random()} className="p-8 pb-0">
            <p className="pb-2 text-2xl font-bold">Objective</p>
            <p>{objective}</p>
          </div>
        ) : null}
        {skills.length ? (
          <div key={Math.random()} className="p-8 pb-0">
            <p className="pb-2 text-2xl font-bold">Skills</p>
            <ul className="ml-5 list-decimal">
              <li>{skills[0]}</li>
              <li>{skills[1]}</li>
              <li>{skills[2]}</li>
            </ul>
          </div>
        ) : null}
        {/* work experience  */}
        {Object.keys(workExperience).length ? (
          <div key={Math.random()} className="p-8 pb-0">
            <p className="pb-2 text-2xl font-bold">Work Experience</p>
            <p className="text-xl font-medium">{workExperience.jobTitle}</p>
            <div className="text-md">
              <span>
                {workExperience.companyName
                  ? workExperience.companyName + `,`
                  : ""}{" "}
              </span>
              <span>
                {workExperience.city ? workExperience.city + `,` : ""}{" "}
              </span>
              <span>{workExperience.state}</span>
              <p>
                ({workExperience.startDateVal} - {workExperience.endDateVal})
              </p>
            </div>
          </div>
        ) : null}
        {/* education  */}
        {Object.keys(education).length ? (
          <div key={Math.random()} className="p-8 pb-0">
            <p className="pb-2 text-2xl font-bold">Education</p>
            <div>
              <span className="text-xl font-medium">
                {education.schoolName ? education.schoolName + `,` : ""}{" "}
              </span>
              <span className="text-md">
                {education.city ? education.city + `,` : ""} {education.state}
              </span>
            </div>
            <p className="text-md">{education.degree}</p>
            <p className="text-md">
              ({education.startDateVal} - {education.endDateVal})
            </p>
          </div>
        ) : null}
      </div>
      <ResumeActions />
    </div>
  );
};

export default Resume;
