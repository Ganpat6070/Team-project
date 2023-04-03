import React, { useState } from "react";
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
        <div className="text-center fw-bold">About Family</div>
        <br />
        <br />
        <li
          className="d-flex justify-content-lg-evenly fw-normal"
          style={{
            backgroundColor: "rgb(238, 234, 234)",
            padding: "2rem",
            borderRadius: "4%",
          }}
        >
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
          {/* <ul
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
            <FaFemale style={{ width: "100px", height: "100px" }} /> <br />{" "}
            <br />
            <p>About My Sister</p>
          </ul> */}
        </li>
      </div>

      <div style={{ padding: "2%" }}>
        {gender === 1 && <Father />}
        {gender === 2 && <Mother />}
        {gender === 3 && <Brother />}
        {gender === 4 && <Sister />}
      </div>
    </div>
  );
};

export default MyFamily;
