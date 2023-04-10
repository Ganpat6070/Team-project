import React from "react";

const Education = (props: any) => {
  const data2 = props.data;
  return (
    <div>
      <div className="text-center fw-bold">Education Details</div>
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
            <ul>Education</ul>
            <ul>Detail of Education</ul>
            <ul>College Name</ul>
            <ul>Course</ul>
            <ul>Place of College</ul>
            <ul>year Of Study College</ul>

            <ul>School Name</ul>
            <ul>School Place</ul>
            <ul>Study Year of School</ul>
            <ul>Collages</ul>
            <ul>Employment Details</ul>
            <ul>career Details</ul>
          </li>
        </div>
        <div className="text-start">
          <li style={{ listStyle: "none" }}>
            <ul>{data2.education? data2.education.join(", ")  : "Not Available"}</ul>
            <ul>{data2.educationInDetail ? data2.educationInDetail : "Not Available"}</ul>
            <ul>{data2.collegeName ? data2.collegeName : "Not Available"}</ul>
            <ul>{data2.course ? data2.course : "Not Available"}</ul>
            <ul>{data2.placeCollege ? data2.placeCollege : "Not Available"}</ul>
            <ul>{data2.yearOfStudyCollege ? data2.yearOfStudyCollege : "Not Available"}</ul>
            
            <ul>{data2.schoolName ? data2.schoolName : "Not Available"}</ul>
            <ul>{data2.schoolPlace ? data2.schoolPlace : "Not Available"}</ul>
            <ul>{data2.yearOfStudySchool ? data2.yearOfStudySchool : "Not Available"}</ul>

            <ul>{data2.gender ? data2.gender : "Not Available"}</ul>
            <ul>{data2.gender ? data2.gender : "Not Available"}</ul>
            <ul>{data2.gender ? data2.gender : "Not Available"}</ul>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Education;
