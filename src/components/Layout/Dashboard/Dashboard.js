import React, { useState, useContext } from "react";
import PersonalInfo from "./PersonalInfo.js";
import Objective from "./Objective.js";
import Skills from "./Skills.js";

// import ObjectiveContext from "../../../Context/ObjectiveContext.js";
// import PersonalInfoContext from "../../../Context/PersonalInfoContext.js";

const Dashboard = () => {
  // const [personalInfo, setPersonalInfo] = useContext(PersonalInfoContext);
  // const [objective, setObjectiveText] = useContext(ObjectiveContext);

  // const [togglePersonalInfo, setTogglePersonalInfo] = useState(true);
  // const [toggleObjective, setToggleObjective] = useState(false);

  return (
    <div className="bg-white w-1/3 p-4">
      <PersonalInfo />
      <Objective />
      <Skills />
    </div>
  );
};

export default Dashboard;
