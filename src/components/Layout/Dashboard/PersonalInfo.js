import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../Store.js";

import Input from "../../UI/Input.js";
import Button from "../../UI/Button.js";

const PersonalInfo = () => {
  // const [name, setName] = useState("");
  // const [number, setNumber] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");

  // const { detail } = useContext(Context);
  // const { updateObjective } = useContext(Context);

  // const nameChange = (e) => {
  //   detail(e.target.value);
  // };

  // const numberChange = (e) => {
  //   setNumber(e.target.value);
  // };

  // const emailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const addressChange = (e) => {
  //   setAddress(e.target.value);
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(nextDisabled);
  // };

  // destructured both updatePersonalInfo fn & detail state in one statement
  const {
    updatePersonalInfo,
    detail: { personalInfo },
  } = useContext(Context);

  const [nextDisabled, setNextDisabled] = useState(true);

  // instead of creating each state and onChange fn created a fn that gets input value and put it into personalInfo all when changing no need to submit
  const onPersonalInfoChange = (e) => {
    // Took the id of each of the input when changed
    let inputId = e.target.id;
    let value = e.target.value;

    // passed the data into updatePersonalInfo
    updatePersonalInfo({
      ...personalInfo, // spreaded the personalInfo incase their is data
      [inputId]: value, // passed the changed input value based on the input id
    });
  };

  useEffect(() => {
    const { name, number, email, address } = personalInfo;
    if (name && number && email && address) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [
    personalInfo.name,
    personalInfo.number,
    personalInfo.email,
    personalInfo.address,
  ]);

  return (
    <div>
      <p className="mb-8 text-xl font-semibold">Personal Information</p>
      <form>
        <label>Name</label>
        <Input
          html={"name"}
          type={"text"}
          placeholder={"name"}
          id={"name"}
          onChange={onPersonalInfoChange}
          value={personalInfo.name}
          required
        />
        <label>Number</label>
        <Input
          html={"number"}
          type={"number"}
          placeholder={"number"}
          id={"number"}
          onChange={onPersonalInfoChange}
          value={personalInfo.number}
          required
        />
        <label>Email</label>
        <Input
          html={"email"}
          type={"text"}
          placeholder={"email"}
          id={"email"}
          onChange={onPersonalInfoChange}
          value={personalInfo.email}
          required
        />
        <label>Address</label>
        <Input
          html={"address"}
          type={"text"}
          placeholder={"address"}
          id={"address"}
          onChange={onPersonalInfoChange}
          value={personalInfo.address}
          required
        />
        <div className="flex w-full justify-between">
          {/* <Button nextDisabled={nextDisabled}>Save</Button>
          {nextDisabled ? (
            <Button>
              <Link to="/objective">Next</Link>
            </Button>
          ) : (
            <Button disabled={"disabled"}>Next</Button>
          )} */}
          <Link to={!nextDisabled ? "/objective" : "#"}>
            <Button>Next</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
