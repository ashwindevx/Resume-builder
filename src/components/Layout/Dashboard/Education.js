import React, { useState, useEffect, useContext } from "react";

import { Context } from "../../../Store.js";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

import Input from "../../UI/Input.js";
import Button from "../../UI/Button.js";
import BackButton from "../../UI/BackButton.js";

const Education = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [nextDisabled, setNextDisabled] = useState(true);

  const {
    detail: { education },
    updateEducation,
  } = useContext(Context);

  const startDateChange = (date, e) => {
    setStartDate(date);
    // console.log(e);
  };

  const endDateChange = (date, e) => {
    setEndDate(date);
    // console.log(e.target);
  };

  const onEducationChange = (e) => {
    let inputId = e.target.id;
    let value = e.target.value;

    updateEducation({
      ...education,
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
    const { schoolName, city, state, degree, startDate, endDate } = education;
    if (schoolName && city && state && degree && startDate && endDate) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [
    education.schoolName,
    education.city,
    education.state,
    education.degree,
    education.startDate,
    education.endDate,
  ]);

  return (
    <div>
      <BackButton to={"/work-experience"} />
      <p className="mb-8 text-xl font-semibold">Education</p>
      <form>
        <label>School Name</label>
        <Input
          html={"schoolName"}
          type={"text"}
          placeholder={"school name"}
          id={"schoolName"}
          onChange={onEducationChange}
          defaultValue={education.name}
          required
        />
        <label>City</label>
        <Input
          html={"city"}
          type={"text"}
          placeholder={"city"}
          id={"city"}
          onChange={onEducationChange}
          defaultValue={education.number}
          required
        />
        <label>State</label>
        <Input
          html={"state"}
          type={"text"}
          placeholder={"state"}
          id={"state"}
          onChange={onEducationChange}
          defaultValue={education.address}
          required
        />
        <label>Degree</label>
        <Input
          html={"degree"}
          type={"text"}
          placeholder={"degree"}
          id={"degree"}
          onChange={onEducationChange}
          defaultValue={education.address}
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
          <a href={!nextDisabled ? "working" : "#"}>
            <Button>Generate PDF</Button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Education;
