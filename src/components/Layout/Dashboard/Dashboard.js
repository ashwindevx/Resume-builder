import React from "react";
import { Routes, Route } from "react-router-dom";
import PersonalInfo from "./PersonalInfo.js";
import Objective from "./Objective.js";
import Skills from "./Skills.js";

const Dashboard = () => {
  return (
    <div className="bg-white w-1/3 p-4">
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="objective" element={<Objective />} />
        <Route path="skill" element={<Skills />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
