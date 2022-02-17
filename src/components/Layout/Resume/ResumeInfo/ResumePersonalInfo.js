import React from "react";

const ResumePersonalInfo = ({ name, number, email, address }) => {
  return (
    <div
      key={Math.random()}
      className="flex items-end justify-between border-b-2 border-gray-200 p-8"
    >
      <p className="text-3xl font-bold">{name}</p>
      <div className="text-right">
        <p>{number}</p>
        <p>{email}</p>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default ResumePersonalInfo;
