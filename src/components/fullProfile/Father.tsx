import React from "react";

const Father = (props : any) => {
  const data = props.data;
  return (
    <div>
      <div className="text-center fw-bold">Father Information</div>
      <br />
      <br />
      <div
        className="d-flex justify-content-lg-evenly"
        style={{
          backgroundColor: "rgb(238, 234, 234)",
          padding: "2rem",
          borderRadius: "4%",
        }}
      >
        <div className="text-start ml-4">
          <li style={{ listStyle: "none", fontWeight: "300" }}>
            <ul>Father Name</ul>
            <ul>Father Designation</ul>
            <ul>Education</ul>
            <ul>fatherCompanyName</ul>
            <ul>fatherEmployedIn</ul>
            <ul>fatherFamilyName</ul>
            <ul>fatherHomePlace</ul>
            <ul>fatherWorkLocation</ul>
          </li>
        </div>
        <div className="text-start">
          <li style={{ listStyle: "none" }}>
            <ul>{data.fatherName? data.fatherName : "Not Available"}</ul>
            <ul>{data.fatherDesignation? data.fatherDesignation  : "Not Available"}</ul>
            <ul>{data.fatherEducation? data.fatherEducation : "Not Available"}</ul>
            <ul>{data.fatherCompanyName? data.fatherCompanyName : "Not Available"}</ul>
            <ul>{data.fatherEmployedIn? data.fatherEmployedIn : "Not Available"}</ul>
            <ul>{data.fatherFamilyName? data.fatherFamilyName : "Not Available"}</ul>
            <ul>{data.fatherHomePlace? data.fatherHomePlace : "Not Available"}</ul>
            <ul>{data.fatherWorkLocation? data.fatherWorkLocation  : "Not Available"}</ul>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Father;
