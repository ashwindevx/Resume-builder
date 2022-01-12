import React, { useState, useContext } from "react";
import Input from "../../UI/Input.js";
import Button from "../../UI/Button.js";
import PersonalInfoContext from "../../../Context/PersonalInfoContext.js";

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [nextDisabled, setNextDisabled] = useState(true);

  const [personalInfo, setPersonalInfo] = useContext(PersonalInfoContext);

  const nameChange = (e) => {
    setName(e.target.value);
    if (e.target.value === "") {
      setNextDisabled(true);
    }
  };

  const numberChange = (e) => {
    setNumber(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const addressChange = (e) => {
    setAddress(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setPersonalInfo([
      {
        Name: name,
        Number: number,
        Email: email,
        Address: address,
      },
    ]);
    setNextDisabled(false);
  };

  return (
    <div>
      <p className="text-xl font-semibold mb-8">Personal Information</p>
      <form onSubmit={submitHandler}>
        <Input
          html={"name"}
          labelVal={"Name"}
          type={"text"}
          placeholder={"name"}
          id={"name"}
          onChange={nameChange}
        />
        <Input
          html={"number"}
          labelVal={"Phone Number"}
          type={"number"}
          placeholder={"number"}
          id={"number"}
          onChange={numberChange}
        />
        <Input
          html={"email"}
          labelVal={"Email"}
          type={"text"}
          placeholder={"email"}
          id={"email"}
          onChange={emailChange}
        />
        <Input
          html={"address"}
          labelVal={"Address"}
          type={"text"}
          placeholder={"address"}
          id={"address"}
          onChange={addressChange}
        />
        <div className="flex justify-between w-full">
          <Button cta={"Save"} nextDisabled={nextDisabled} />
          {nextDisabled ? (
            <Button cta={"Next"} disabled={"disabled"} />
          ) : (
            <Button cta={"Next"} />
          )}
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
