import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import Brother from "./Brother";
import Father from "./Father";
import Mother from "./Mother";
import Sister from "./Sister";

const MyFamily = () => {
  const [gender, setGender] = useState<Number>(1);

  return (
    <div>
      <div>
        <div className="text-center">About Family</div>
        <br />
        <br />
        <li style={{ display: "flex", justifyContent: "space-evenly" }}>
          <ul
            onClick={() => {
              setGender(1);
            }}
          >
            <FaMale style={{ width: "100px", height: "100px" }} /> <br /> <br />
            <p>About My Father</p>
          </ul>
          <ul
            onClick={() => {
              setGender(2);
            }}
          >
            <FaFemale style={{ width: "100px", height: "100px" }} /> <br />{" "}
            <br />
            <p>About My Mother</p>
          </ul>
          <ul
            onClick={() => {
              setGender(3);
            }}
          >
            <FaMale style={{ width: "100px", height: "100px" }} /> <br /> <br />
            <p>About My Brother</p>
          </ul>
          <ul
            onClick={() => {
              setGender(4);
            }}
          >
            <FaFemale style={{ width: "100px", height: "100px" }} /> <br /> <br />
            <p>About My Sister</p>
          </ul>
        </li>
      </div>

      <div style={{backgroundColor: '#f94c505e', padding: '2%'}}>
        {gender === 1 && <Father />}
        {gender === 2 && <Mother />}
        {gender === 3 && <Brother />}
        {gender === 4 && <Sister />}
      </div>
    </div>
  );
};

export default MyFamily;