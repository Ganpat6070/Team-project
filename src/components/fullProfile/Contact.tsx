import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="text-center fw-bold">Contact Information</div>
      <br />
      <br />
      <div className="d-flex justify-content-lg-evenly" style={{backgroundColor: 'rgb(238, 234, 234)', padding: "2rem", borderRadius: '4%'}}>
        <div className="text-start ml-4">
          <li style={{ listStyle: "none", fontWeight: '300' }}>
            <ul>Contact Name</ul>
            <ul>Contact Number</ul>
            <ul>Preferred Contact type</ul>
            <ul>Convenient time to call</ul>
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
  );
};

export default Contact;
