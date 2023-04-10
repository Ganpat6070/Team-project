import React, { useState } from "react";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import Brother from "./Brother";
import Father from "./Father";
import Mother from "./Mother";
import Sister from "./Sister";

const MyFamily = (props: any) => {
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
            style={{textAlign:"center"}}
          >
            <img src="https://img.icons8.com/bubbles/200/null/business-man-with-beard.png"/>
           
            <p className="">About My Father</p>
          </ul>
          <ul
            onClick={() => {
              setGender(2);
            }}
            style={{textAlign:"center"}}
          >
            <img src="https://img.icons8.com/bubbles/200/null/brown-curly-hair-business-lady-with-bow.png"/> 
            <br />
            <p>About My Mother</p>
          </ul>
         
        </li>
      </div>

      <div style={{ padding: "2%" }}>
        {gender === 1 && <Father data={props.data}/>}
        {gender === 2 && <Mother data={props.data}/>}
      </div>
    </div>
  );
};

export default MyFamily;
