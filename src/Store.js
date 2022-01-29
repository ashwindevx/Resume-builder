import React, { useState } from "react";

export const Context = React.createContext();

const Store = ({ children }) => {
  const [detail, setDetail] = useState({
    personalInfo: {},
    objective: "",
    skills: [],
    workExperience: {},
    education: {},
  });

  function updatePersonalInfo(data) {
    return setDetail({ ...detail, personalInfo: data });
  }

  function updateObjective(data) {
    return setDetail({ ...detail, objective: data });
  }

  function updateSkills(data) {
    return setDetail({ ...detail, skills: data });
  }

  function updateWorkExperience(data) {
    return setDetail({ ...detail, workExperience: data });
  }

  function updateEducation(data) {
    return setDetail({ ...detail, education: data });
  }

  const value = {
    detail,
    updatePersonalInfo,
    updateObjective,
    updateSkills,
    updateWorkExperience,
    updateEducation,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Store;
