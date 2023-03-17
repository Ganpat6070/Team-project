import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import "../cssComponents/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="d-flex justify-content-evenly mt-xxl-5">
          <div className="mt-xxl-5">
            <h4 className="fs-6 fw-bold">Explore</h4>
            <ul className="list-unstyled fw-normal">
              <li>Home</li>
              <li>Advance Search</li>
              <li>Success Stories</li>
            </ul>
          </div>
          <div className="mt-xxl-5">
            <h4 className="fs-6 fw-bold">Service</h4>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>Success Stories</li>
              <li>Mobile Matrimony</li>
              <li>FAQs</li>
              <li>Payment Options</li>
              <li>Member Demo Graph</li>
            </ul>
          </div>
          <div className="mt-xxl-5">
            <h4 className="fs-6 fw-bold">Help</h4>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Report Misuse</li>
              <li>Terms & Condition</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="mt-xxl-5">
            <h4 className="fs-6 fw-bold">Legal</h4>
            <ul className="list-unstyled">
              <li>Register</li>
              <li>Login</li>
              <li>Vendor</li>
              <li>Advertise With Us</li>
            </ul>
          </div>
        </div>

        <div className="mt-2 d-flex justify-content-evenly">
          <div className="fs-6 fw-medium">App available on</div>
          <div className="fs-6 fw-medium">
            <h6>Follow us on</h6>
            <div className="d-flex justify-content-around">
              <FaFacebookSquare />
              <FaTwitterSquare />
              <FaInstagramSquare />
            </div>
          </div>
          <div className="fs-6 fw-medium">
            <h6>Customer Service</h6>
            <h6 className="fw-normal">help@perfectmatch.com</h6>
          </div>
        </div>

        <div className="text-center countryText">
          <p>
            INDIA | USA | CANADA | UK | EUROPE | AUSTRALIA | SINGAPORE | NEW
            ZEALAND | MIDDLE EAST | AFRICA
          </p>
        </div>
        <div className="text-center fw-bold">
          <div className="horline"></div>
          <p className="copyright">
            Copyright © 2019 Perfect Match | Maintained By TechnoMark Solutions
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
