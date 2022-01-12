import React, { useState, useContext } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

import SkillsContext from "../../../Context/SkillsContext";

export default function Skills() {
  const [skill, setSkill] = useState("");
  const [add, setAdd] = useState(false);
  const [inputList, setInputList] = useState([]);

  const [skills, setSkills] = useContext(SkillsContext);

  const changeHandler = (e) => {
    setSkill(e.target.value);
    setAdd(true);
  };

  const addClickHandler = () => {
    if (skill && add) {
      setInputList(
        inputList
          .concat(
            <Input
              type={"text"}
              placeholder={"Skill"}
              id={"Skill"}
              htmlFor={"Skill"}
              labelVal={"Skill"}
              key={Math.random()}
              required
              onChange={changeHandler}
            />
          )
          .slice(0, 2)
      );
    }
    setAdd(false);
    setSkills([
      {
        SkillOne: skill,
        SkillTwo: skill,
        SkillThree: skill,
      },
    ]);
    console.log(skill);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(skills);
  };

  return (
    <div>
      <p className="text-xl font-semibold mb-8">Skills</p>
      <form onSubmit={submitHandler}>
        <Input
          type={"text"}
          placeholder={"Skill"}
          id={"Skill"}
          htmlFor={"Skill"}
          labelVal={"Skill"}
          required
          onChange={changeHandler}
        />
        {inputList}
        {/* switch statement for adding inputs */}

        {/* {(() => {
          switch (count) {
            case 2:
              return (
                <Input
                  type={"text"}
                  placeholder={"Skill 2"}
                  id={"Skill2"}
                  htmlFor={"Skill2"}
                  labelVal={"Skill 2"}
                  required
                />
              );
            case 3:
              return (
                <>
                  <Input
                    type={"text"}
                    placeholder={"Skill 2"}
                    id={"Skill2"}
                    htmlFor={"Skill2"}
                    labelVal={"Skill 2"}
                    required
                  />
                  <Input
                    type={"text"}
                    placeholder={"Skill 3"}
                    id={"Skill3"}
                    htmlFor={"Skill3"}
                    labelVal={"Skill 3"}
                    required
                  />
                </>
              );
            case 4:
              return (
                <>
                  <Input
                    type={"text"}
                    placeholder={"Skill 2"}
                    id={"Skill2"}
                    htmlFor={"Skill2"}
                    labelVal={"Skill 2"}
                    required
                  />
                  <Input
                    type={"text"}
                    placeholder={"Skill 3"}
                    id={"Skill3"}
                    htmlFor={"Skill3"}
                    labelVal={"Skill 3"}
                    required
                  />
                  <p>Cannot add more Skills</p>
                </>
              );
            default:
              return null;
          }
        })()} */}
        {inputList.length === 2 ? (
          <Button cta={"Save"} />
        ) : (
          <Button cta={"+"} onClick={addClickHandler} />
        )}
      </form>
    </div>
  );
}
