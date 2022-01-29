import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../Store.js";
import Input from "../../UI/Input.js";
import Button from "../../UI/Button.js";
import BackButton from "../../UI/BackButton.js";

const Education = () => {
  const [schoolName, setSchoolName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [nextDisabled, setNextDisabled] = useState(true);

  const { detail } = useContext(Context);
  const { updateEducation } = useContext(Context);

  const schoolNameChange = (e) => {
    setSchoolName(e.target.value);
  };

  const cityChange = (e) => {
    setCity(e.target.value);
  };

  const stateChange = (e) => {
    setState(e.target.value);
  };

  const degreeChange = (e) => {
    setDegree(e.target.value);
  };

  const startDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const endDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateEducation({
      schoolName: schoolName,
      city: city,
      state: state,
      degree: degree,
      startDate: startDate,
      endDate: endDate,
    });
    setNextDisabled(false);
  };

  return (
    <div>
      <BackButton to={"/work-experience"} />
      <p className="mb-8 text-xl font-semibold">Education</p>
      <form onSubmit={submitHandler}>
        <label>School Name</label>
        <Input
          html={"schoolName"}
          type={"text"}
          placeholder={"school name"}
          id={"schoolName"}
          onChange={schoolNameChange}
          defaultValue={detail.education.name}
          required
        />
        <label>City</label>
        <Input
          html={"city"}
          type={"text"}
          placeholder={"city"}
          id={"city"}
          onChange={cityChange}
          defaultValue={detail.education.number}
          required
        />
        <label>State</label>
        <Input
          html={"state"}
          type={"text"}
          placeholder={"state"}
          id={"state"}
          onChange={stateChange}
          defaultValue={detail.education.address}
          required
        />
        <label>Degree</label>
        <Input
          html={"degree"}
          type={"text"}
          placeholder={"degree"}
          id={"degree"}
          onChange={degreeChange}
          defaultValue={detail.education.address}
          required
        />
        <label>Start Date: </label>
        <Input
          html={"startDate"}
          id={"startDate"}
          type={"date"}
          onChange={startDateChange}
          required
        />
        <label>End Date: </label>
        <Input
          html={"endDate"}
          id={"endDate"}
          type={"date"}
          onChange={endDateChange}
          required
        />
        <div className="flex w-full justify-between">
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

export default Education;
