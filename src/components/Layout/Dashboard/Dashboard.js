import React from "react";

import { Routes, Route } from "react-router-dom";

import PersonalInfo from "./PersonalInfo.js";
import Objective from "./Objective.js";
import Skills from "./Skills.js";
import WorkExperience from "./WorkExperience.js";
import Education from "./Education.js";

const Dashboard = () => {
  return (
    <div className="w-1/3 bg-white p-4">
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="objective" element={<Objective />} />
        <Route path="skill" element={<Skills />} />
        <Route path="work-experience" element={<WorkExperience />} />
        <Route path="education" element={<Education />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
