import React from "react";

const BasicInfomation = (data: any) => {
  const data2 = data.data;

  const dateOfBirth = new Date(data2.dateOfBirth);
  const ageInMilliseconds = Date.now() - dateOfBirth.getTime();
  const ageInYears = new Date(ageInMilliseconds).getUTCFullYear() - 1970;


  return (
    <div>
      <div className="text-center fw-bold">Basic Information</div>
      <br />
      <br />
      <div
        className="d-flex justify-content-around"
        style={{
          backgroundColor: "rgb(238, 234, 234)",
          padding: "2rem",
          borderRadius: "4%",
        }}
      >
        <div className="text-start ml-4 d-flex">
          <li style={{ listStyle: "none", fontWeight: "300" }}>
            <ul>Age</ul>
            <ul>Gender</ul>
            <ul>Data of Birth</ul>
            <ul>Height</ul>
            <ul>Mother Tongue</ul>
            <ul>Country</ul>
            <ul>current Location</ul>
            <ul>Permanenet Location</ul>
            <ul>Residential Status</ul>
            {/* <ul>Age</ul> */}
          </li>
        </div>
        <div className="text-start">
          <li style={{ listStyle: "none" }}>
            <ul>{ageInYears ? ageInYears : "Not Available"}</ul>
            <ul>{data2.gender ? data2.gender : "Not Available"}</ul>
            <ul>{data2.dateOfBirth ? data2.dateOfBirth.slice(0,10) : "Not Available"}</ul>
            <ul>{data2.height ? data2.height : "Not Available"}</ul>
            <ul>{data2.motherTongue ? data2.motherTongue : "Not Available"}</ul>
            <ul>{data2.country ? data2.country : "Not Available"}</ul>
            <ul>{data2.currentLocation ? data2.currentLocation : "Not Available"}</ul>
            <ul>{data2.permanentLocation ? data2.permanentLocation : "Not Available"}</ul>
            <ul>{data2.residentialStatus ? data2.residentialStatus : "Not Available"}</ul>
            {/* <ul>{data2.gender ? data2.gender : "Not Available"}</ul> */}
          </li>
        </div>
      </div>
    </div>
  );
};

export default BasicInfomation;
