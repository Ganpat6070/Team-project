import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./PersonalInfo.module.css";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { useEffect, useRef } from "react";

const PersonalInfo = () => {
  // Birthday Data
  const DOB = useRef<HTMLInputElement>(null);
  const Height = useRef<HTMLSelectElement>(null);
  const Weight = useRef<HTMLSelectElement>(null);
  const MStatus = useRef<HTMLSelectElement>(null);
  const MTongue = useRef<HTMLSelectElement>(null);
  const Religion = useRef<HTMLSelectElement>(null);
  const Cast = useRef<HTMLInputElement>(null);
  const SubCast = useRef<HTMLInputElement>(null);
  const PStatus = useRef<HTMLInputElement>(null);
  const Education = useRef<HTMLInputElement>(null);
  const SLang = useRef<HTMLSelectElement>(null);
  const EducationDetails = useRef<HTMLInputElement>(null);
  const SchoolName = useRef<HTMLInputElement>(null);
  const SPlace = useRef<HTMLInputElement>(null);
  const SYOS = useRef<HTMLSelectElement>(null);
  const CollegeName = useRef<HTMLInputElement>(null);
  const Course = useRef<HTMLInputElement>(null);
  const CPlace = useRef<HTMLInputElement>(null);
  const CYOS = useRef<HTMLSelectElement>(null);
  const CompanyName = useRef<HTMLInputElement>(null);
  const Designation = useRef<HTMLInputElement>(null);
  const WLocation = useRef<HTMLInputElement>(null);
  const LCode = useRef<HTMLSelectElement>(null);
  const LArea = useRef<HTMLSelectElement>(null);
  const LNumber = useRef<HTMLInputElement>(null);

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (DOB.current) {
      console.log(DOB.current.value);
    }
    if (Cast.current) {
      console.log(Cast.current.value);
    }
    if (Height.current) {
      console.log(Height.current.value);
    }
  };

  return (
    <div
      className="background_img"
      style={{
        backgroundImage: `url("../../image/Maskgroup.png")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      <ProgressBar />
      <div
        style={{ width: "55%" }}
        className="container-sm my-5 bg-light rounded-5 border border-dark p-3"
      >
        <form onSubmit={submitHandler} className="mx-2 my-2">
          <p
            className="fs-3 
 "
            style={{ color: "#6E6E6E" }}
          >
            Personal Information
          </p>

          <div className="row">
            <div className="col-lg-4">
              {/* <div className="form-group"> */}
              <label htmlFor="" className="">
                Complexion <span className={classes.compalsory}>*</span>
                <br />
              </label>
              <select
                ref={Height}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select "
              >
                <option hidden>Select Any One</option>
                {/* <option></option> */}
                <option>Dark</option>
                <option>Light</option>
                <option>Medium</option>
                <option>White</option>
              </select>
              {/* </div> */}
            </div>
            {/* <div className="col-xl-">
            <label htmlFor="eid">Education in Detail</label>
            <br />
            <input type="text" id="eid" className="form-control" />
           </div> */}
            <div className="col">
              <label className="mb">
                Body Type<span className={classes.compalsory}>*</span>
                <br />
              </label>
              <select
                ref={Height}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select "
              >
                <option hidden>Select Any One</option>
                <option>ectomorph</option>
                <option>mesomorph</option>
                <option>endomorph</option>
                {/* <option>7ft</option>
                <option>7ft +</option> */}
              </select>
            </div>
            <div className="col">
              <label>
                Blood Group
                <br />
              </label>
              {/* <input type="number" className="form-control mt-1 rounded-2 border-secondary" /> */}
              <select
                ref={Weight}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select "
              >
                <option hidden>Select Any One</option>
                <option>A+</option>
                <option>B+</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
              </select>
            </div>
          </div>
          <Row>
            <Col className="mt-3">
              <label>
                Occupation<span className={classes.compalsory}>*</span>
                <br />
              </label>
              <select
                ref={MStatus}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option hidden>Select Any One</option>
                <option>Artist</option>
                <option>Designer</option>
                <option>Construction worker</option>
                <option>Business analyst</option>
              </select>
            </Col>
            <Col className="mt-3">
              <label>
                Empolyed In <span className={classes.compalsory}>*</span>
                <br />
              </label>
              <select
                ref={MTongue}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option hidden>Select Any One</option>
                <option>TechnoMark</option>
                <option>PathQuest</option>
                <option>Google</option>
              </select>
            </Col>
            <Col className="mt-3">
              {" "}
              <label>
                Currency <span className={classes.compalsory}>*</span>
                <br />
              </label>
              <select
                ref={Religion}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option hidden>Select Any One</option>
                <option>INR</option>
                <option>USD</option>
                <option>Euro</option>
                <option>CAD</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3">
              <label htmlFor="">
                Annual Income <span className={classes.compalsory}>*</span>
                <br />
              </label>
              <select
                ref={Religion}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option hidden>Select Any One</option>
                <option>4 - Lakh</option>
                <option>5 - Lakh</option>
                <option>6 - Lakh</option>
                <option>7 - Lakh</option>
              </select>
            </Col>
            <Col className="mt-3">
              {/* <label htmlFor="">
                Sub Caste <br />
              </label>
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              /> */}
            </Col>
            <Col className="mt-3">
              {/* <label htmlFor="">Physical Status</label>
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              /> */}
            </Col>
          </Row>
          <div
            className="px-2 my-3"
            style={{
              backgroundColor: "#E5E4E2",
              width: "100%",
              height: "25px",
              borderRadius: "2px",
            }}
          >
            Astro Details
          </div>
          <Row className="border border rounded-2 mx-1">
            <Col className="mt-3">
              <p style={{ color: "#6E6E6E", fontStyle: "strong" }}>Star</p>
              {/* <label htmlFor="">
                About me <span className={classes.compalsory}>*</span>
                <br />
                <textarea
                  name=""
                  id=""
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                ></textarea>
              </label> */}
              {/*               
              <label htmlFor="" className="pt-1 ">
                Education <span className={classes.compalsory}>*</span>
                <br />
              </label>
              <input
                type="text"
                className="w-100 p-5 form-control text-dark mt-1 rounded-2 border-secondary"
              /> */}
              {/* <label htmlFor="">
                Annual Income <span className={classes.compalsory}>*</span>
                <br />
              </label> */}
              <select
                style={{ height: "40%" }}
                ref={Religion}
                className="form-control text-dark mt-1 mb-4 rounded-2 border-secondary form-select"
              >
                <option hidden>Select Any One</option>
                <option>Sun</option>
                <option>Venus</option>
                <option>Moon</option>
                <option>Saturn</option>
              </select>
            </Col>
            <Col className="mt-3">
              {/* <label htmlFor="">
                Spoken Language(s) <span className={classes.compalsory}>*</span>
                <br />
                <span className="border border-dark w-5 p-2  h-1 d-inline-block spolang">
                  <label htmlFor="" className="py-2">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                      className=""
                    />
                    English
                  </label> */}
              <br />
              {/* <label htmlFor="" className="py-2">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    Gujarati
                  </label> */}
              <br />
              {/* <label htmlFor="" className="py-2">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    Hindi
                  </label> */}
              <br />
              {/* </span> */}
              {/* </label> */}
            </Col>
          </Row>
          <hr className="mt-4 " />

          <Row className="" style={{ height: "250px" }}>
            {/* <div className="row"> */}
            <div className="col mt-3">
              <label htmlFor="">
                About My Family <span className={classes.compalsory}>*</span>
              </label>
              <br />
              {/* <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              /> */}
              <textarea
                name=""
                id=""
                className="w-100 p-4 h-1 "
                style={{ width: "800" }}
              ></textarea>
              <p
                style={{
                  color: "#6E6E6E",
                  fontSize: "small",
                  fontStyle: "italic",
                }}
              >
                Please provide your valid address. We will not be displaying
                your address on the site and will be gathered only for internal
                purpose.
              </p>
            </div>
            <div className="col mt-3"></div>
            {/* </div> */}
            {/* <Col  className="mt-3">
              <label htmlFor="" className="pt-3">
                Education <span className={classes.compalsory}>*</span>
                <br />
              </label>
              <input
                type="text"
                className="w-5 p-5 form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </Col> */}
            <Col className="mt-3">
              <label htmlFor="" className="pt-3">
                Family Type
                <br />
              </label>
              <select
                style={{ height: "15%" }}
                ref={Religion}
                className="form-control text-dark mt-1 mb-4 rounded-2 border-secondary form-select"
              >
                <option hidden>Select Any One</option>
                <option>Joint Family</option>
                <option>Extended Family</option>
                <option>Nuclear Family</option>
                <option>Orphen</option>
              </select>
              <label htmlFor="" className="pt-3">
                Family Status
                <br />
              </label>
              <select
                style={{ height: "15%" }}
                ref={Religion}
                className="form-control text-dark mt-1 mb-4 rounded-2 border-secondary form-select"
              >
                <option hidden>Select Any One</option>
                <option>Alive</option>
                <option>Dead</option>
                <option>Living With Them</option>
                <option>Other Reason</option>
              </select>
              {/* <input
                type="text"
                className="w-5 p-5 form-control text-dark mt-1 rounded-2 border-secondary"
              /> */}
            </Col>
          </Row>
          <Row>
            <Col className="mt-3">
              {" "}
              <label>
                Currency <span className={classes.compalsory}>*</span>
                <br />
              </label>
              <select
                ref={Religion}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option hidden>Select Any One</option>
                <option>INR</option>
                <option>USD</option>
                <option>Euro</option>
                <option>CAD</option>
              </select>
            </Col>
            <Col className="mt-3">
              <label>
                Annual Family Income
                <span className={classes.compalsory}>*</span>
                <br />
              </label>
              <select
                ref={MStatus}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option hidden>Select Any One</option>
                <option>6Lakh</option>
                <option>7Lakh</option>
                <option>8Lakh</option>
                <option>9Lakh</option>
              </select>
            </Col>
            <Col className="mt-3">
              <label>
                Family Value <span className={classes.compalsory}>*</span>
                <br />
              </label>
              <select
                ref={MTongue}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option hidden>Select Any One</option>
                <option>Important</option>
                <option>Vary Important</option>
                <option>Not-Important</option>
              </select>
            </Col>
          </Row>
          {/* <div className="row">
            <div className="col-xl mt-3">
              <label htmlFor="eid">Education in Detail</label>
              <br />
              <input
                type="text"
                id="eid"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
          </div> */}
          <div className="row">
            <div className="col mt-3">
              <label htmlFor="">Farther's Name</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary twothree"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Farther's Family Name</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary twothree"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Farther's Home/Place</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary twothree"
              />
            </div>
            {/* <div className="col mt-3">
              <label htmlFor="">Year of Study</label>
              <br />
              <select className="form-control text-dark mt-1 rounded-2 border-secondary form-select twothree">
                <option></option>
                <option>2012</option>
                <option>2011</option>
                <option>2000</option>
              </select>
              <label htmlFor=""></label>
            </div> */}
          </div>
          <div className="row">
            <div className="col mt-3">
              <label htmlFor="">Father's Employed In</label>
              <br />
              <select className="form-control text-dark mt-1 rounded-2 border-secondary form-select twothree">
                <option></option>
                <option>ONGC</option>
                <option>Goverment</option>
                <option>UnEmployed</option>
              </select>
            </div>
            <div className="col mt-3">
              <label htmlFor="">Father's Occupation</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Father's Education</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            {/* <div className="col mt-3">
              <label htmlFor="">Year Of Study</label>
              <br />
              <select className="form-control text-dark mt-1 rounded-2 border-secondary form-select">
                <option></option>
                <option>2012</option>
                <option>2011</option>
                <option>2000</option>
              </select>
            </div> */}
          </div>
          <div className="row ">
            <div className="col mt-3">
              <label htmlFor="">Father's Company Name</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>

            <div className="col mt-3">
              <label htmlFor="">Father's Designation</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>

            <div className="col mt-3">
              <label htmlFor="">Father's Work Location</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
          </div>
          <div className="row">
            <div className="col mt-3">
              <label htmlFor="">Mother's Name</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary twothree"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Mother's Family Name</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary twothree"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Mother's Home/Place</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary twothree"
              />
            </div>
          </div>
          <div className="row">
            <div className="col mt-3">
              <label htmlFor="">Mother's Employed In</label>
              <br />
              <select className="form-control text-dark mt-1 rounded-2 border-secondary form-select twothree">
                <option></option>
                <option>ONGC</option>
                <option>Goverment</option>
                <option>UnEmployed</option>
              </select>
            </div>
            <div className="col mt-3">
              <label htmlFor="">Mother's Occupation</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Mother's Education</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
          </div>
          <div className="row ">
            <div className="col mt-3">
              <label htmlFor="">Mother's Company Name</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>

            <div className="col mt-3">
              <label htmlFor="">Mother's Designation</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>

            <div className="col mt-3">
              <label htmlFor="">Mother's Work Location</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
          </div>
          <div className="row">
            <div className="row"></div>
            <div className="col mt-3">
              <label htmlFor="">Countery Living In</label>
              <br />
              <select
                style={{ height: "50%" }}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option value="" hidden>
                  Please Select Any
                </option>
                <option value="">USA</option>
                <option value="">Germany</option>
                <option value="">Canada</option>
              </select>
            </div>
            <div className="col mt-3">
              <label htmlFor="">Current Location</label>
              <br />
              <select
                style={{ height: "50%" }}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option value="" hidden>
                  Please Select Any
                </option>
                <option value="">USA</option>
                <option value="">Germany</option>
                <option value="">Canada</option>
              </select>
            </div>
            <div className="col mt-3">
              {/* <label htmlFor="">Permanent Location</label> */}
              <br />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col mt-3">
              <label htmlFor="">Countery Living In</label>
              <br />
              <select
                style={{ height: "50%" }}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option value="" hidden>
                  Please Select Any
                </option>
                <option value="">USA</option>
                <option value="">Germany</option>
                <option value="">Canada</option>
              </select>
            </div>
            <div className="col mt-3">
              <label htmlFor="">Current Location</label>
              <br />
              <select
                style={{ height: "50%" }}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option value="" hidden>
                  Please Select Any
                </option>
                <option value="">USA</option>
                <option value="">Germany</option>
                <option value="">Canada</option>
              </select>
            </div>
            <div className="col mt-3">
              <label htmlFor="">Permanent Location</label>
              <br />
              <select
                style={{ height: "50%" }}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option value="" hidden>
                  Please Select Any
                </option>
                <option value="">USA</option>
                <option value="">Germany</option>
                <option value="">Canada</option>
              </select>
            </div>
            {/* <div className="col mt-3">
            <label htmlFor=""></label>
              <input
                type="tel"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div> */}
            {/* <div className="col mt-3">
            <label htmlFor=""></label>
              <input
                type="number"
                className=" form-control text-dark mt-1 rounded-2 border-secondary -webkit-appearance: none"
              />
            </div> */}
          </div>
          <div className="row">
            <div className="col mt-3">
              <label htmlFor="">Residential Statua</label>
              <br />
              <select
                style={{ height: "50%" }}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option value="" hidden>
                  Please Select Any
                </option>
                <option value="">living</option>
                <option value="">rental</option>
                <option value="">own</option>
              </select>
            </div>
            <div className="col mt-3">
              <label htmlFor="">Native Place</label>
              <br />
              <select
                style={{ height: "50%" }}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option value="" hidden>
                  Please Select Any
                </option>
                <option value="">gujarat</option>
                <option value="">mp</option>
                <option value="">delhi</option>
              </select>
            </div>
            <div className="col mt-3">
              {/* <label htmlFor="">Permanent Location</label> */}
              <br />
              {/* <select style={{ height: "50%"}} className="form-control text-dark mt-1 rounded-2 border-secondary form-select">
                <option value="" hidden>Please Select Any</option>
                <option value="">USA</option>
                <option value="">Germany</option>
                <option value="">Canada</option>
              </select> */}
            </div>
            {/* <div className="col mt-3">
            <label htmlFor=""></label>
              <input
                type="tel"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div> */}
            {/* <div className="col mt-3">
            <label htmlFor=""></label>
              <input
                type="number"
                className=" form-control text-dark mt-1 rounded-2 border-secondary -webkit-appearance: none"
              />
            </div> */}
          </div>
          {/* <div className="row">
            <div className="col mt-3">
              <label htmlFor="">Mobile Number</label>
              <br />
              <select
                name=""
                id=""
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option value=""></option>
                <option value="">+91</option>
                <option value="">+1</option>
                <option value="">+59</option>
              </select>
            </div>
            <div className="col mt-3">
            <label htmlFor=""></label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
              
            </div>
            <div className="col mt-5">
              <label htmlFor=""></label>
            <img className="" src="../../images/plus.png" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col mt-3">
              <label htmlFor="">
                Preferred Contact Type <span className={classes.compalsory}>*</span>
              </label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Convenient Time to Call</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">
                Contact Name <span className={classes.compalsory}>*</span>
              </label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
          </div>
          <div className="row">
            <div className="col mt-3">
              <label htmlFor="">
                Email <span className={classes.compalsory}>*</span>
              </label>
              <br />
              <input
                type="email"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">
                Profile Created By <span className={classes.compalsory}>*</span>
              </label>
              <br />
              <select
                name=""
                id=""
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option value=""></option>
                <option value="">Matrimonial Professtion</option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col mt-3">
              <label htmlFor="">Apartment Name / House Name</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Street / Locality</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
          </div>
          <div className="row">
            <div className="col mt-3">
              <p style={{color:"#6E6E6E" , fontSize:"small"}}>
                Please provide your valid address. We will not be displaying
                your address on the site and will be gathered only for internal
                purpose.
              </p>
            </div>
            <div className="col mt-3">
              <label htmlFor="">
                Country <span className={classes.compalsory}>*</span>
              </label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
          </div>
          <div className="row">
            <div className="col mt-3">
              <label htmlFor="">
                Pin Code <span className={classes.compalsory}>*</span>
              </label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">
                City / State <span className={classes.compalsory}>*</span>
              </label>
              <br />
              <select
                name=""
                id=""
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option value=""></option>
                <option value="">Ahmedabad/Gujarat</option>
                <option value=""></option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col mt-3">
              <label htmlFor="">Reference Name</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Address</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Contact Number</label>
              <br />
              <select
                name=""
                id=""
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select mobiledrop"
              >
                <option value=""></option>

                <option value="">+91</option>
                <option value="">+1</option>
                <option value="">+56</option>
              </select>
            </div>
            <div className="col mt-3">
            <label htmlFor=""></label>
              <br />
              <input
                type="text"
                className="form-control text-dark rounded-2 border-secondary"
              />
            </div> */}
          {/* </div> */}
          <Link to="\">
            <button
              className="btn btn-light btn-outline-secondary btn-xl mt-2"
              type="button"
              onClick={submitHandler}
            >
              Save and Continue
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

// export default BasicInfo;
export default PersonalInfo;
