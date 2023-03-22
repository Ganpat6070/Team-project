import React from "react";

const Interest = () => {
  return (
    <div>
      <div>
        <div className="text-center">My Contact Details</div>
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div className="text-start ml-4">
            <li style={{ listStyle: "none" }}>
              <ul>Contact Name</ul>
              <ul>Profile Created By</ul>
              <ul>Education</ul>
              <ul>Preffered Contact type</ul>
            </li>
          </div>
          <div className="text-start">
            <li style={{ listStyle: "none" }}>
              <ul>---</ul>
              <ul>---</ul>
              <ul>---</ul>
              <ul>---</ul>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interest;
