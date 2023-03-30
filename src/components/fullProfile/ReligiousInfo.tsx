import React from "react";

const ReligiousInfo = () => {
  return (
    <div>
      <div className="text-center fw-bold">Religious Information</div>
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
            <ul>Religion</ul>
            <ul>Caste / Denomination</ul>
          </li>
        </div>
        <div className="text-start">
          <li style={{ listStyle: "none" }}>
            <ul>Hindu</ul>
            <ul>Chettier</ul>
          </li>
        </div>
      </div>
    </div>
  );
};

export default ReligiousInfo;
