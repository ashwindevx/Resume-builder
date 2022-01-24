import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../Store.js";
import Button from "../../UI/Button";
import BackButton from "../../UI/BackButton";
import Input from "../../UI/Input";

export default function Skills() {
  const { updateSkills } = useContext(Context);
  const [skillsList, setSkillsList] = useState([""]);
  const [nextDisabled, setNextDisabled] = useState(true);

  const changeHandler = (i, e) => {
    let skills = [...skillsList];
    skills[i] = e.target.value;
    setSkillsList(skills);
  };

  const addClickHandler = () => {
    let isNotEmpty = skillsList.every((skill) => !!skill);
    if (skillsList.length >= 3 || !isNotEmpty) {
      return;
    }
    setSkillsList([...skillsList, ""]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateSkills(skillsList);
    setNextDisabled(false);
  };

  return (
    <div>
      <BackButton to={"/objective"} />
      <p className="text-xl font-semibold mb-8">Skills</p>
      <form onSubmit={submitHandler}>
        {skillsList.map((skill, i) => {
          return (
            <>
              <label>Skill</label>
              <Input
                type={"text"}
                placeholder={"Skill"}
                id={`skill${i}`}
                htmlFor={`skill${i}`}
                key={i}
                required
                onChange={(e) => changeHandler(i, e)}
              />
            </>
          );
        })}
        {skillsList.length < 3 ? (
          <Button onClick={addClickHandler}>+</Button>
        ) : (
          <div className="flex justify-between w-full">
            <Button>Save</Button>
            {nextDisabled ? (
              <Button disabled={"disabled"}>Next</Button>
            ) : (
              <Button>
                <Link to="/skill">Next</Link>
              </Button>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
