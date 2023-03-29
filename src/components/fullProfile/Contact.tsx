import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="text-center">Contact Information</div>
      <br />
      <br />
      <div className="d-flex justify-content-lg-evenly">
        <div className="text-start ml-4">
          <li style={{ listStyle: "none" }}>
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
