import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="d-flex footerdata justify-content-evenly jusfied mt-5 mx-5">
          <div style={{marginTop : "4%"}}>
            <i className="fs-6 fw-bold">Explore</i>
            <ul className="list-unstyled fw-normal my-2 lh-lg fst-italic">
              <li>Home</li>
              <li>Advance Search</li>
              <li>Success Stories</li>
            </ul>
          </div>
          <div style={{marginTop : "4%"}}>
            <i className="fs-6 fw-bold">Service</i>
            <ul className="list-unstyled my-2 lh-lg fst-italic">
              <li>Contact Us</li>
              <li>Success Stories</li>
              <li>Mobile Matrimony</li>
              <li>FAQs</li>
              <li>Payment Options</li>
              <li>Member Demo Graph</li>
            </ul>
          </div>
          <div style={{marginTop : "4%"}}>
            <i className="fs-6 fw-bold">Help</i>
            <ul className="list-unstyled my-2 lh-lg fst-italic">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Report Misuse</li>
              <li>Terms & Condition</li>
              <li>Blog</li>
            </ul>
          </div>
          <div style={{marginTop : "4%"}}>
            <i className="fs-6 fw-bold">Legal</i>
            <ul className="list-unstyled my-2 lh-lg fst-italic">
              <li>Register</li>
              <li>Login</li>
              <li>Vendor</li>
              <li>Advertise With Us</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 appdata d-flex justify-content-evenly">
          <i className="fs-6 fw-medium">App available on</i>
          <div className="fs-6 fw-medium">
            <i>Follow us on</i>
            <div className="d-flex icons justify-content-between mt-2 fs-5">
              <FaFacebookSquare />
              <FaTwitterSquare />
              <FaInstagramSquare />
            </div>
          </div>
          <div className="fs-6 fw-medium">
            <i>Customer Service</i>
            <h6 className="fw-normal mt-2" style={{textAlign: 'start'}}>help@perfectmatch.com</h6>
          </div>
        </div>

        <div className="text-center mt-3 countryText" style={{letterSpacing: '0.05em'}}>
          <i>
            INDIA &nbsp;&nbsp;|&nbsp;&nbsp; USA &nbsp;&nbsp;|&nbsp;&nbsp; CANADA &nbsp;&nbsp;|&nbsp;&nbsp; UK &nbsp;&nbsp;|&nbsp;&nbsp; EUROPE &nbsp;&nbsp;|&nbsp;&nbsp; AUSTRALIA &nbsp;&nbsp;| &nbsp;&nbsp;SINGAPORE &nbsp;&nbsp;| &nbsp;&nbsp;NEW&nbsp;&nbsp;
            ZEALAND &nbsp;&nbsp;|&nbsp;&nbsp; MIDDLE EAST &nbsp;&nbsp;|&nbsp;&nbsp; AFRICA&nbsp;&nbsp;
          </i>
        </div>
        <div className="text-center fw-bold">
          <div className="fw-light horline"></div>
          <i className="copyright fw-normal">
            Copyright © 2019 Perfect Match | Maintained By TechnoMark Solutions
          </i>
        </div>
      </div>
    </>
  );
};

export default Footer;
