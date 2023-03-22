import React from "react";

const Father = () => {
  return (
    <div>
      <div className="text-center">Father Information</div>
      <br />
      <br />
      <div className="d-flex justify-content-lg-evenly">
        <div className="text-start ml-4">
          <li style={{ listStyle: "none" }}>
            <ul>Father Name</ul>
            <ul>Father Designation</ul>
            <ul>Education</ul>
          </li>
        </div>
        <div className="text-start">
          <li style={{ listStyle: "none" }}>
            <ul>---</ul>
            <ul>---</ul>
            <ul>---</ul>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Father;  