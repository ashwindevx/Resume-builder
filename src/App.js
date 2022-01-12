import React, { useState } from "react";
import PersonalInfoContext from "./Context/PersonalInfoContext.js";

import Layout from "./components/Layout/Layout.js";
import ObjectiveContext from "./Context/ObjectiveContext.js";
import SkillsContext from "./Context/SkillsContext.js";

function App() {
  const [personalInfo, setPersonalInfo] = useState([]);
  const [objective, setObjective] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <PersonalInfoContext.Provider value={[personalInfo, setPersonalInfo]}>
      <ObjectiveContext.Provider value={[objective, setObjective]}>
        <SkillsContext.Provider value={[skills, setSkills]}>
          <Layout />
        </SkillsContext.Provider>
      </ObjectiveContext.Provider>
    </PersonalInfoContext.Provider>
  );
}

export default App;
