import React from 'react'

const Mother = (props: any) => {
  const data = props.data;

  return (
    <div>
      {/* <div className="text-center fw-bold">Mother Information</div> */}
      <br />
      <br />
      <div className="d-flex justify-content-lg-evenly" style={{backgroundColor: 'rgb(238, 234, 234)', padding: "2rem", borderRadius: '4%'}}>
        <div className="text-start ml-4">
          <li style={{ listStyle: "none", fontWeight: '300' }}>
            <ul>Mother Name</ul>
            <ul>Mother Home Place</ul>
            <ul>Mother FamilyName</ul>
            <ul>Mother Designation</ul>
            <ul>Mother Education</ul>
            <ul>Mother EmployedIn</ul>
            <ul>Mother Occupation</ul>
            <ul>Mother Work Location</ul>
            <ul>Native Place</ul>
          </li>
        </div>
        <div className="text-start">
          <li style={{ listStyle: "none" }}>
            <ul>{data.motherName? data.motherName : "Not Available"}</ul>
            <ul>{data.motherHomePlace? data.motherHomePlace : "Not Available"}</ul>
            <ul>{data.motherFamilyName? data.motherFamilyName : "Not Available"}</ul>
            <ul>{data.motherDesignation? data.motherDesignation : "Not Available"}</ul>
            <ul>{data.motherEducation? data.motherEducation : "Not Available"}</ul>
            <ul>{data.motherEmployedIn? data.motherEmployedIn : "Not Available"}</ul>
            <ul>{data.motherOccupation? data.motherOccupation : "Not Available"}</ul>
            <ul>{data.motherWorkLocation? data.motherWorkLocation : "Not Available"}</ul>
            <ul>{data.nativePlace? data.nativePlace : "Not Available"}</ul>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Mother