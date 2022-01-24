import React, { useState } from "react";

export const Context = React.createContext();

const Store = ({ children }) => {
  const [state, setState] = useState({
    personalInfo: {},
    objective: "",
    skills: [],
  });
  console.log(state.skills);

  function updatePersonalInfo(data) {
    return setState({ ...state, personalInfo: data });
  }

  function updateObjective(data) {
    return setState({ ...state, objective: data });
  }

  function updateSkills(data) {
    return setState({ ...state, skills: data });
  }

  const value = { state, updatePersonalInfo, updateObjective, updateSkills };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Store;
