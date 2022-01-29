import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../Store.js";
import Input from "../../UI/Input.js";
import Button from "../../UI/Button.js";
import BackButton from "../../UI/BackButton.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WorkExperience = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [startDate, setStartDate] = useState(new Date("2022/01/28"));
  const [endDate, setEndDate] = useState(new Date("2022/01/28"));

  const [nextDisabled, setNextDisabled] = useState(true);

  const { detail } = useContext(Context);
  const { updateWorkExperience } = useContext(Context);

  const jobTitleChange = (e) => {
    setJobTitle(e.target.value);
  };

  const companyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const cityChange = (e) => {
    setCity(e.target.value);
  };

  const stateChange = (e) => {
    setState(e.target.value);
  };

  const startDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const endDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateWorkExperience({
      jobTitle: jobTitle,
      companyName: companyName,
      city: city,
      state: state,
      startDate: startDate,
      endDate: endDate,
    });
    setNextDisabled(false);
  };

  return (
    <div>
      <BackButton to={"/skill"} />
      <p className="mb-8 text-xl font-semibold">Work Experience</p>
      <form onSubmit={submitHandler}>
        <label>Job Title</label>
        <Input
          html={"jobTitle"}
          type={"text"}
          placeholder={"title"}
          id={"jobTitle"}
          onChange={jobTitleChange}
          defaultValue={detail.workExperience.jobTitle}
          required
        />
        <label>Company Name</label>
        <Input
          html={"companyName"}
          type={"text"}
          placeholder={"company name"}
          id={"companyName"}
          onChange={companyNameChange}
          defaultValue={detail.workExperience.companyName}
          required
        />
        <label>City</label>
        <Input
          html={"city"}
          type={"text"}
          placeholder={"city"}
          id={"city"}
          onChange={cityChange}
          defaultValue={detail.workExperience.city}
          required
        />
        <label>State</label>
        <Input
          html={"state"}
          type={"text"}
          placeholder={"state"}
          id={"state"}
          onChange={stateChange}
          defaultValue={detail.workExperience.state}
          required
        />
        <label>Start Date:</label>
        <DatePicker
          placeholderText="Start Date"
          selected={startDate}
          dateFormat={"dd/MM/yy"}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate} //selects date in startDate
          endDate={endDate}
          className="my-2 mb-4 rounded-lg border-2 border-gray-300 p-2"
        />
        <label>End Date:</label>
        <DatePicker
          selected={endDate}
          dateFormat={"dd/MM/yy"}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          maxDate={new Date()}
          className="my-2 mb-4 rounded-lg border-2 border-gray-300 p-2"
        />
        <div className="flex w-full justify-between">
          <Button nextDisabled={nextDisabled}>Save</Button>
          {nextDisabled ? (
            <Button disabled={"disabled"}>Next</Button>
          ) : (
            <Button>
              <Link to="/education">Next</Link>
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default WorkExperience;
