import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import { Context } from "../../../Store.js";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import moment from "moment";

import Input from "../../UI/Input.js";
import Button from "../../UI/Button.js";
import BackButton from "../../UI/BackButton.js";

const WorkExperience = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [nextDisabled, setNextDisabled] = useState(true);

  const {
    detail: { workExperience },
    updateWorkExperience,
  } = useContext(Context);

  const startDateChange = (date, e) => {
    setStartDate(date);
    // console.log(e);
  };

  const endDateChange = (date, e) => {
    setEndDate(date);
    // console.log(e.target);
  };

  const workExperienceChange = (e) => {
    const inputId = e.target.id;
    const value = e.target.value;

    updateWorkExperience({
      ...workExperience,
      [inputId]: value,
      startDateVal: moment
        .utc(JSON.stringify(startDate).replace(/["]+/g, ""))
        .format("MMM Do, YYYY"),
      endDateVal: moment
        .utc(JSON.stringify(endDate).replace(/["]+/g, ""))
        .format("MMM Do, YYYY"),
    });
  };

  useEffect(() => {
    const { jobTitle, companyName, city, state, startDateVal, endDateVal } =
      workExperience;
    if (
      jobTitle &&
      companyName &&
      city &&
      state &&
      startDateVal &&
      endDateVal
    ) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [
    workExperience.jobTitle,
    workExperience.companyName,
    workExperience.city,
    workExperience.state,
    workExperience.startDateVal,
    workExperience.endDateVal,
  ]);

  return (
    <div>
      <BackButton to={"/skill"} />
      <p className="mb-8 text-xl font-semibold">Work Experience</p>
      <form>
        <label>Job Title</label>
        <Input
          html={"jobTitle"}
          type={"text"}
          placeholder={"title"}
          id={"jobTitle"}
          onChange={workExperienceChange}
          defaultValue={workExperience.jobTitle}
          required
        />
        <label>Company Name</label>
        <Input
          html={"companyName"}
          type={"text"}
          placeholder={"company name"}
          id={"companyName"}
          onChange={workExperienceChange}
          defaultValue={workExperience.companyName}
          required
        />
        <label>City</label>
        <Input
          html={"city"}
          type={"text"}
          placeholder={"city"}
          id={"city"}
          onChange={workExperienceChange}
          defaultValue={workExperience.city}
          required
        />
        <label>State</label>
        <Input
          html={"state"}
          type={"text"}
          placeholder={"state"}
          id={"state"}
          onChange={workExperienceChange}
          defaultValue={workExperience.state}
          required
        />
        <label>Start Date:</label>
        <DatePicker
          placeholderText="Start Date"
          selected={startDate}
          dateFormat={"dd/MM/yy"}
          onChange={startDateChange}
          selectsStart
          startDate={startDate} //selects date in startDate
          endDate={endDate}
          maxDate={new Date()}
          className="my-2 mb-4 rounded-lg border-2 border-gray-300 p-2"
        />
        <label>End Date:</label>
        <DatePicker
          placeholderText="End Date"
          selected={endDate}
          dateFormat={"dd/MM/yy"}
          onChange={endDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          maxDate={new Date()}
          className="my-2 mb-4 rounded-lg border-2 border-gray-300 p-2"
        />
        <div className="flex w-full justify-between">
          <Link to={!nextDisabled ? "/education" : "#"}>
            <Button>Next</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default WorkExperience;
