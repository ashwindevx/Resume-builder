import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../../Store.js";

import Input from "../../UI/Input.js";
import Button from "../../UI/Button.js";
// import PersonalInfoContext from "../../../Context/PersonalInfoContext.js";

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const { state } = useContext(Context);
  const { updatePersonalInfo } = useContext(Context);

  const [nextDisabled, setNextDisabled] = useState(true);

  const nameChange = (e) => {
    setName(e.target.value);
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
    updatePersonalInfo({
      name: name,
      number: number,
      email: email,
      address: address,
    });
    if (name && number && email && address) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  };

  return (
    <div>
      <p className="text-xl font-semibold mb-8">Personal Information</p>
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <Input
          html={"name"}
          type={"text"}
          placeholder={"name"}
          id={"name"}
          onChange={nameChange}
          value={state.personalInfo.name}
        />
        <label>Number</label>
        <Input
          html={"number"}
          type={"number"}
          placeholder={"number"}
          id={"number"}
          onChange={numberChange}
          value={state.personalInfo.number}
        />
        <label>Email</label>
        <Input
          html={"email"}
          type={"text"}
          placeholder={"email"}
          id={"email"}
          onChange={emailChange}
          value={state.personalInfo.email}
        />
        <label>Address</label>
        <Input
          html={"address"}
          type={"text"}
          placeholder={"address"}
          id={"address"}
          onChange={addressChange}
          value={state.personalInfo.address}
        />
        <div className="flex justify-between w-full">
          <Button nextDisabled={nextDisabled}>Save</Button>
          {nextDisabled ? (
            <Button disabled={"disabled"}>Next</Button>
          ) : (
            <Button>
              <Link to="/objective">Next</Link>
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
