import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./PersonalInfo.module.css";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { useEffect, useRef } from "react";
import NavbarHead from "../navbar";
import PhotoCard from "./PhotoCard";

const PersonalInfo = () => {
  //Error Status
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);

  // Set Data Status
  const [complexions, setComplexion] = useState("");
  const [bodytype, setBodytype] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const [occupation, setOccupation] = useState("");
  const [empolyedin, setEmpolyedin] = useState("");
  const [currency, setCurrency] = useState("");
  const [annualincome, setAnnualincome] = useState("");
  const [astrodetails, setAstrodetails] = useState("");
  const [aboutmyfamily, setAboutmyfamily] = useState("");
  const [familytype, setFamilytype] = useState("");
  const [familystatus, setFamilystatus] = useState("");
  const [familyvalue2, setFamilyvalue2] = useState("");
  const [annualfamilyincome2, setAnnualfamilyincome2] = useState("");
  const [currency2, setCurrency2] = useState("");
  const [fathername, setFathername] = useState("");
  const [fatherfamilyname, setFatherfamilyname] = useState("");
  const [fatherhome, setFatherhome] = useState("");

  const complexionHandler: any = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // let complexion: string = e.target.value;
    // console.log(complexion);

    if (!(e.target.value === "one")) {
      setComplexion(e.target.value);
      // console.log("this error")
      // setComplexion(e.target.value);
      // return "one";
      setError(false);
    }
  };

  const bodytypeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "one")) {
      setBodytype(e.target.value);
    }
  };

  const bloodgroupHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "one")) {
      setBloodgroup(e.target.value);
    }
  };
  const occupationHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "one")) {
      setOccupation(e.target.value);
    }
  };

  const employedinHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "one")) {
      setEmpolyedin(e.target.value);
    }
  };

  const currencyHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "one")) {
      setCurrency(e.target.value);
    }
  };

  const annualincomeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "one")) {
      setAnnualincome(e.target.value);
    }
  };

  const astrodetailsHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "one")) {
      setAstrodetails(e.target.value);
    }
  };

  const aboutmyfamilyHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!(e.target.value === "")) {
      setAboutmyfamily(e.target.value);
      // console.log(e.target.value)
    }
  };
  const familytypeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) {
      setFamilytype(e.target.value);
      // console.log(e.target.value)
    }
  };
  const familystatusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) {
      setFamilystatus(e.target.value);
      // console.log(e.target.value)
    }
  };
  const familyvalue2Handler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) {
      setFamilyvalue2(e.target.value);
      // console.log(e.target.value)
    }
  };

  const annualfamilyincome2Handler = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    if (!(e.target.value === "")) {
      setAnnualfamilyincome2(e.target.value);
      // console.log(e.target.value)
    }
  };

  const currency2Handler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) {
      setCurrency2(e.target.value);
      // console.log(e.target.value)
    }
  };
  const fathernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) {
      setCurrency2(e.target.value);
      // console.log(e.target.value)
    }
  };
  const fatherfamilynameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) {
      setCurrency2(e.target.value);
      // console.log(e.target.value)
    }
  };
  const fatherhomehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) {
      setCurrency2(e.target.value);
      // console.log(e.target.value)
    }
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    // let R:React.ChangeEvent<HTMLSelectElement>

    // if (DOB.current) {
    // console.log(DOB.current.value);
    // }
    // if (Cast.current) {
    // console.log(Cast.current.value);
    // }
    // if (Height.current) {
    // console.log(Height.current.value);
    // }
    // complexionHandler(R)
    if (
      complexions === "" ||
      bodytype === "" ||
      bloodgroup === "" ||
      occupation === "" ||
      empolyedin === "" ||
      currency === "" ||
      annualincome === ""
    ) {
      // setComplexion(complexion);
      // console.log("error")
      setError(true);
      // return "one";
    } else {
      setError(false);
    }
    if (aboutmyfamily === "") {
      setError2(true);
    } else {
      setError2(false);
    }
    if (familyvalue2 === "" || annualfamilyincome2 === "" || currency2 === "") {
      setError3(true);
    } else {
      setError3(false);
    }
  };
  // console.log(complexions);
  // console.log(aboutmyfamily)

  return (
    <div
      className="background_image"
      style={{
        backgroundImage: `url("../../image/BG.png")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <NavbarHead />
      <ProgressBar />
      <PhotoCard />

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
          {error ? (
            <span
              style={{
                marginBottom: "20px",
                // color: "red",
                textTransform: "capitalize",
              }}
              className="text-danger"
            >
              All Below Mentioned Field Are Required
            </span>
          ) : null}
          <div className="row">
            <div className="col-lg-4">
              {/* <div className="form-group"> */}
              <label htmlFor="" className="">
                Complexion <span className={classes.compalsory}>*</span>
                <br />
              </label>
              <select
                onChange={complexionHandler}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select "
                style={{ height: "50%" }}
              >
                <option hidden value="one">
                  Select Any One
                </option>
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
                style={{ height: "50%" }}
                onChange={bodytypeHandler}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select "
              >
                <option hidden value="one">
                  Select Any One
                </option>
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
                style={{ height: "50%" }}
                onChange={bloodgroupHandler}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select "
              >
                <option hidden value="one">
                  Select Any One
                </option>
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
                onChange={occupationHandler}
                style={{ height: "50%" }}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option hidden value="one">
                  Select Any One
                </option>
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
                onChange={employedinHandler}
                style={{ height: "50%" }}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option hidden value="one">
                  Select Any One
                </option>
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
                onChange={currencyHandler}
                style={{ height: "50%" }}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option hidden value="one">
                  Select Any One
                </option>
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
                onChange={annualincomeHandler}
                style={{ height: "50%" }}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option hidden value="one">
                  Select Any One
                </option>
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
                onChange={astrodetailsHandler}
                className="form-control text-dark mt-1 mb-4 rounded-2 border-secondary form-select"
              >
                <option value="one" hidden>
                  Select Any One
                </option>
                <option value="sun">Sun</option>
                <option value="venus">Venus</option>
                <option value="moon">Moon</option>
                <option value="saturn">Saturn</option>
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
              {error2 ? (
                <span className="text-danger">
                  plase tell us about your family
                </span>
              ) : null}
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
                onChange={aboutmyfamilyHandler}
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
                onChange={familytypeHandler}
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
                onChange={familystatusHandler}
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
            {error3 ? (
              <span className="text-danger">
                Please Select Below Mentio Fields
              </span>
            ) : null}
            <Col className="mt-3">
              <label>
                Currency <span className={classes.compalsory}>*</span>
                <br />
              </label>
              <select
                onChange={currency2Handler}
                style={{ height: "50%" }}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option hidden value="one">
                  Select Any One
                </option>
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
                onChange={annualfamilyincome2Handler}
                style={{ height: "50%" }}
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
                onChange={familyvalue2Handler}
                style={{ height: "50%" }}
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
          {error4 ? <span>below entered data in not valid</span> : null}
          <div className="row">
            <div className="col mt-3">
              <label htmlFor="">Father Name</label>
              <br />
              <input
                onChange={fathernameHandler}
                type="text"
                className={`form-control text-dark mt-1 rounded-2 border-secondary twothree ${classes.twothree}`}
                style={{ height: "50%" }}
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Father Family Name</label>
              <br />
              <input
                onChange={fatherfamilynameHandler}
                style={{ height: "50%" }}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary twothree"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Father Home/Place</label>
              <br />
              <input
                onChange={fatherhomehandler}
                //  style={{height:"50%"}}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary twothree"
              />
            </div>
          </div>
          <div className="row">
            <div className="col mt-3">
              <label htmlFor="">Father Employed In</label>
              <br />
              <select
                style={{ height: "50%" }}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select twothree"
              >
                <option></option>
                <option>ONGC</option>
                <option>Goverment</option>
                <option>UnEmployed</option>
              </select>
            </div>
            <div className="col mt-3">
              <label htmlFor="">Father Occupation</label>
              <br />
              <input
                style={{ height: "50%" }}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Father Education</label>
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
              <label htmlFor="">Father Company Name</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>

            <div className="col mt-3">
              <label htmlFor="">Father Designation</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>

            <div className="col mt-3">
              <label htmlFor="">Father Work Location</label>
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
              <label htmlFor="">Residential Status</label>
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
          {/* </div> */}
          <Link to="/">
            <button
              className="btn btn-light text-white btn-xl mt-2"
              type="button"
              onClick={submitHandler}
              style={{ backgroundColor: "#fb9232" }}
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
