import React from "react";

const Education = () => {
  return (
    <div>
      <div className="text-center fw-bold">Education Details</div>
      <br />
      <br />
      <div className="d-flex justify-content-lg-evenly"  style={{backgroundColor: 'rgb(238, 234, 234)', padding: "2rem", borderRadius: '4%'}}>
        <div className="text-start ml-4">
          <li style={{ listStyle: "none", fontWeight: '300' }}>
            <ul>Education</ul>
            <ul>Schools</ul>
            <ul>Collages</ul>
            <ul>Employment Details</ul>
            <ul>career Details</ul>
          </li>
        </div>
        <div className="text-start">
          <li style={{ listStyle: "none" }}>
            <ul>Chartered Accountant ( CA )</ul>
            <ul>St. Xaviors</ul>
            <ul>St. Xaviors</ul>
            <ul>Accounts/Financial Professional</ul>
            <ul>--</ul>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Education;