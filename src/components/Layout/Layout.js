import React from "react";
import Dashboard from "./Dashboard/Dashboard.js";
import Resume from "./Resume/Resume.js";

const Layout = ({ personalInfo, setPersonalInfo, objective, setObjective }) => {
  return (
    <div className="flex justify-between">
      <Dashboard
      // setPersonalInfo={setPersonalInfo}
      // setObjective={setObjective}
      />
      <Resume
      // personalInfo={personalInfo} objective={objective}
      />
    </div>
  );
};

export default Layout;
