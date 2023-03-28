import React from "react";

const BasicInfomation = () => {
  return (
    <div>
      <div className="text-center fw-bold" >Basic Information</div><br/><br/>
      <div className="d-flex justify-content-around"  style={{backgroundColor: 'rgb(238, 234, 234)', padding: "2rem", borderRadius: '4%'}}>
        <div className="text-start ml-4 d-flex">
          <li style={{listStyle: 'none', fontWeight: '300'}}>
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

export default BasicInfomation;