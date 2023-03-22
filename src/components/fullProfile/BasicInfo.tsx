import React from "react";

const BasicInfo = () => {
  return (
    <div>
      <div className="text-center">Basic Information</div><br/><br/>
      <div className="d-flex justify-content-lg-evenly">
        <div className="text-start ml-4 d-flex">
          <li style={{listStyle: 'none'}}>
            <ul>Age</ul>
            <ul>Gender</ul>
            <ul>Data of Birth</ul>
            <ul>Height</ul>
            <ul>Mother Tongue</ul>
            <ul>Country</ul>
            <ul>current Location</ul>
            <ul>Permanenet Location</ul>
            <ul>Residential Status</ul>
            <ul>Age</ul>
          </li>
        </div>
        <div className="text-start">
          <li style={{listStyle: 'none'}}>
            <ul>18</ul>
            <ul>Female</ul>
            <ul>Nov, 02, 2004</ul>
            <ul>5ft</ul>
            <ul>Hindi</ul>
            <ul>India</ul>
            <ul>Tripura</ul>
            <ul>India</ul>
            <ul>Citizen</ul>
            <ul>Unmarried</ul>  
          </li>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;