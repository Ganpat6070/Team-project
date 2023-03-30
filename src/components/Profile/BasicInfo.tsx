import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./BasicInfo.css";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { useEffect, useRef } from "react";
import PhotoCard from "./PhotoCard";

const BasicInfo = () => {
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

  // Error Statas for Validatoins
  const [errorbi, setErrorbi] = useState<boolean | string>(false);

  // States for storing enterd information
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setdob] = useState("");
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [mStatus, setmStatus] = useState("");
  const [mTongue, setmTongue] = useState("");
  const [religion, setreligion] = useState("");
  const [cast, setcast] = useState("");
  const [gender, setGender] = useState("");
  const [phyStatus, setphyStatus] = useState("");
  const [aboutme, setAboutme] = useState("");
  const [spokenLanguage, setspokenLanguage] = useState<string[]>([]);
  const [education, seteducation] = useState("");
  const [eduDetails, seteduDetails] = useState("");
  const [schoolName, setschoolName] = useState("");
  const [splace, setsplace] = useState("");
  const [syos, setsyos] = useState("");
  const [collegeName, setcollegeName] = useState("");
  const [course, setcourse] = useState("");
  const [cplace, setcplace] = useState("");
  const [cyos, setcyos] = useState("");
  const [compName, setcompName] = useState("");
  const [designation, setdesignation] = useState("");
  const [wLoc, setwLoc] = useState("");
  const [lcode, setlcode] = useState("");
  const [larea, setlarea] = useState("");
  const [lnum, setlnum] = useState("");
  const [mNumber, setmNumber] = useState("");
  const [email, setemail] = useState("");
  const [street, setstreet] = useState("");
  const [pin, setpin] = useState("");
  const [city, setcity] = useState("");
  const [refname, setrefname] = useState("");
  const [refaddress, setrefaddress] = useState("");
  const [refcontact, setrefcontact] = useState("");

  //Input Value Handling Functions with Validations

  const [age, setAge] = useState("");

const basicinfo:any = {
  fname,
  mname,
  lname,
  dob,
  height,
  weight,
  mStatus,
  mTongue,
  religion,
  cast,
  gender,
  phyStatus,
  aboutme,
  spokenLanguage,
  education,
  schoolName,
  splace,
  syos,
  collegeName,
  course,
  cplace,
  cyos,
  compName,
  designation,
  wLoc,
  lcode,
  larea,
  lnum,
  mNumber,
  email,
  street,
  pin,
  city,
  refname,
  refaddress,
  refcontact,
}
  console.log(basicinfo);

  const fnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setFname(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const mnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setMname(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };
  const lnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setLname(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const dobHandler = (e: React.ChangeEvent<HTMLDataElement>) => {
    if (!(e.target.value === "")) setdob(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const heightHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setheight(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const weightHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setweight(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const mStatusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setmStatus(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const mTongueHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setmTongue(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const religionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setreligion(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const castHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setcast(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };
  const genderHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setGender(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };
  const phyStatusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setphyStatus(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };
  const aboutmeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setAboutme(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };
  const educationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) seteducation(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };
  const spokenLanguageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (!(e.target.value === ""));
    // console.log(fname)
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setspokenLanguage([...spokenLanguage, value]);
    } else {
      setspokenLanguage(spokenLanguage.filter((box) => box !== value));
    }

    setErrorbi(false);
  };
  const eduDetailsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) seteduDetails(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };
  const schoolNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setschoolName(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };
  const splaceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setsplace(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };
  const syosHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setsyos(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };
  const collegeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setcollegeName(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };
  const courseHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setcourse(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const cplaceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setcplace(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const cyosHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setcyos(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const compNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setcompName(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const designationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setdesignation(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const wLocHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setwLoc(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const lcodeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setlcode(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const lareaHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setlarea(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const lnumHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setlnum(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const mNumberHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setmNumber(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setemail(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const streetHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setstreet(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const pinHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setpin(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const cityHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setcity(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const refnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setrefname(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const refaddressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setrefaddress(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };
  const refcontactHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setrefcontact(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    // if (DOB.current) {
    //   console.log(DOB.current.value);
    // }
    // if (Cast.current) {
    //   console.log(Cast.current.value);
    // }
    // if (Height.current) {
    //   console.log(Height.current.value);
    // }
    if (
      fname ||
      mname ||
      lname ||
      dob ||
      height ||
      weight ||
      mStatus ||
      mTongue ||
      religion ||
      cast ||
      gender ||
      phyStatus ||
      aboutme || 
      spokenLanguage ||
      education ||
      eduDetails ||
      schoolName ||
      splace ||
      syos ||
      collegeName ||
      course ||
      cplace ||
      cyos ||
      compName ||
      designation ||
      wLoc ||
      lcode ||
      larea ||
      lnum ||
      mNumber ||
      email ||
      street ||
      pin ||
      city ||
      refname ||
      refaddress ||
      refcontact === ""
    ) {
      setErrorbi(true);

    }
  };

  return (
    <>
    <div
      className="background_image"
      style={{
        backgroundImage: `url("../../image/BG.png")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <ProgressBar />
      <PhotoCard />
      <div
        style={{ width: "55%" }}
        className="container-sm my-5 bg-light rounded-5 border border-dark p-3"
      >
        <form className="mx-2 my-2">
          <p
            className="fs-3 
 "
            style={{ color: "#6E6E6E" }}
          >
            Basic Information
          </p>
          {errorbi ? <small className="text-danger ">{123}</small> : null}
          <Row>
            <Col className="mt-3">
              <label htmlFor="">
                Fisrt Name <span className="compalsory">*</span>
                <br />
              </label>
              <input
                // ref={Cast}

                onChange={fnameHandler}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </Col>
            <Col className="mt-3">
              <label htmlFor="">
                Middle Name <span className="compalsory">*</span> <br />
              </label>

              <input
                type="text"
                onChange={mnameHandler}
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </Col>
            <Col className="mt-3">
              <label htmlFor="">Last Name</label>
              <span className="compalsory"> *</span> <br />
              <input
                type="text"
                onChange={lnameHandler}
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </Col>
          </Row>
          <div className="row">
            <div className="col-lg-4">
              {/* <div className="form-group"> */}
              <label htmlFor="" className="">
                Date of Birth <span className="compalsory">*</span>
                <br />
              </label>
              <input
                // ref={DOB}
                onChange={dobHandler}
                value={dob}
                // onChange={dobHanlder}
                type="date"
                placeholder=""
                className="form-control text-dark input-xs  mt-1 rounded-2 border-secondary"
              />
            </div>

            <div className="col">
              <label className="mb">
                Height<span className="compalsory">*</span>
                <br />
              </label>
              <select
                // ref={heightHandler}
                onChange={heightHandler}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select "
              >
                <option></option>
                <option>4ft</option>
                <option>5ft</option>
                <option>6ft</option>
                <option>7ft</option>
                <option>7ft +</option>
              </select>
            </div>
            <div className="col">
              <label>
                Weight (KG)
                <br />
              </label>
              {/* <input type="number" className="form-control mt-1 rounded-2 border-secondary" /> */}
              <select
                // ref={weightHandler}
                onChange={weightHandler}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select "
              >
                <option></option>
                <option>40-50KG</option>
                <option>50-60KG</option>
                <option>60-70KG</option>
                <option>70-80KG</option>
                <option>80-90KG</option>
              </select>
            </div>
          </div>
          <Row>
            <Col className="mt-3">
              <label>
                Marital Status<span className="compalsory">*</span>
                <br />
              </label>
              <select
                // ref={MStatus}
                // onChange={mStatushandler}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option></option>
                <option>Single</option>
                <option>In-Relationship</option>
                <option>Devorced</option>
              </select>
            </Col>
            <Col className="mt-3">
              <label>
                Mother Tongue <span className="compalsory">*</span>
                <br />
              </label>
              <select
                // ref={MTongue}
                onChange={mTongueHandler}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option></option>
                <option>Hindi</option>
                <option>Gujarati</option>
                <option>English</option>
              </select>
            </Col>
            <Col className="mt-3">
              {" "}
              <label>
                Religion <span className="compalsory">*</span>
                <br />
              </label>
              <select
                // ref={Religion}
                onChange={religionHandler}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option></option>
                <option>Hinduism</option>
                <option>Islam</option>
                <option>Christianity</option>
                <option>Jainism</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3">
              <label htmlFor="">
                Caste / Denomination <span className="compalsory">*</span>
                <br />
              </label>
              <input
                // ref={Cast}
                onChange={castHandler}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </Col>
            <Col className="mt-3">
              <label htmlFor="">
                Gender <span className="compalsory">*</span> <br />
              </label>

              <select 
              onChange={genderHandler}
              className="form-control text-dark mt-1 rounded-2 border-secondary form-select">
                <option>Please Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </Col>
            <Col className="mt-3">
              <label htmlFor="">Physical Status</label>
              <input
              onChange={phyStatusHandler}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </Col>
          </Row>
          <Row>
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 ">
                About Me <span className="compalsory">*</span>
                <br />
              </label>
              <input
              onChange={aboutmeHandler}
                type="text"
                className="w-100 p-5 form-control text-dark mt-1 rounded-2 border-secondary"
              />

              <p style={{ color: "#6E6E6E", fontStyle: "italic" }}>
                (Characters Left : 600)
              </p>
            </Col>
            <Col className="mt-3">
              <label htmlFor="">
                Spoken Language(s) <span className="compalsory">*</span>
                <br />
                <span className="border border-dark w-5 p-2  h-1 d-inline-block spolang">
                  <label htmlFor="" className="py-2">
                    <input
                      type="checkbox"
                      // id="vehicle1"
                      name="language"
                      value="english"
                      className=""
                      checked={spokenLanguage.includes('english')}
                      onChange={spokenLanguageHandler}
                    />
                    English
                  </label>
                  <br />
                  <label htmlFor="" className="py-2">
                    <input
                      type="checkbox"
                      // id="vehicle1"
                      name="language"
                      value="gujarati"
                      checked={spokenLanguage.includes('gujarati')}
                      onChange={spokenLanguageHandler}
                    />
                    Gujarati
                  </label>
                  <br />
                  <label htmlFor="" className="py-2">
                    <input
                      type="checkbox"
                      // id="vehicle1"
                      name="language"
                      value="hindi"
                      checked={spokenLanguage.includes('hindi')}
                      onChange={spokenLanguageHandler}
                    />
                    Hindi
                  </label>
                  <br />
                </span>
              </label>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3">
              <label htmlFor="" className="pt-3">
                Education <span className="compalsory">*</span>
                <br />
              </label>
              <input
              onChange={educationHandler}
                type="text"
                className="w-5 p-5 form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </Col>
            <Col className="mt-3">
              <label htmlFor="" className="pt-3">
                <br />
              </label>
              <input
            
                type="text"
                className="w-5 p-5 form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </Col>
          </Row>
          <div className="row">
            <div className="col-xl mt-3">
              <label htmlFor="eid">Education in Detail</label>
              <br />
              <input
              onChange={eduDetailsHandler}
                type="text"
                id="eid"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
          </div>
          <div className="row">
            <div className="col mt-3">
              <label htmlFor="">School Name</label>
              <br />
              <input
              onChange={schoolNameHandler}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary twothree"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Place</label>
              <br />
              <input
                onChange={splaceHandler}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary twothree"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Year of Study</label>
              <br />
              <select 
              onChange={syosHandler}
              className="form-control text-dark mt-1 rounded-2 border-secondary form-select twothree">
                <option></option>
                <option>2012</option>
                <option>2011</option>
                <option>2000</option>
              </select>
              <label htmlFor=""></label>
            </div>
          </div>
          <div className="row">
            <div className="col mt-3">
              <label htmlFor="">College Name</label>
              <br />
              <input
              onChange={collegeNameHandler}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Course</label>
              <br />
              <input
              onChange={courseHandler}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Place</label>
              <br />
              <input
              onChange={cplaceHandler}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Year Of Study</label>
              <br />
              <select onChange={cyosHandler} className="form-control text-dark mt-1 rounded-2 border-secondary form-select">
                <option></option>
                <option>2012</option>
                <option>2011</option>
                <option>2000</option>
              </select>
            </div>
          </div>
          <div className="row my-3    ">
            <div className="col mt-3">
              <label htmlFor="">Company Name</label>
              <br />
              <input
              onChange={compNameHandler}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>

            <div className="col mt-3">
              <label htmlFor="">Designation</label>
              <br />
              <input
              onChange={designationHandler}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>

            <div className="col mt-3">
              <label htmlFor="">Work Location</label>
              <br />
              <input
              onChange={wLocHandler}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
          </div>
          <div className="row">
            <div className="col mt-3">
              <label htmlFor="">Landline Number</label>
              <br />
              <select  
              onChange={lcodeHandler}
              className="form-control text-dark mt-1 rounded-2 border-secondary form-select">
                <option value="">1231</option>
                <option value="">12313</option>
                <option value=""></option>
              </select>
            </div>
            <div className="col mt-3">
              <label htmlFor="">Area Code</label>
              <input
              onChange={lareaHandler}
                type="tel"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Number</label>
              <input
              onChange={lnumHandler}
                type="number"
                className=" form-control text-dark mt-1 rounded-2 border-secondary -webkit-appearance: none"
              />
            </div>
          </div>
          <div className="row">
            <div className="col mt-3">
              <label htmlFor="">Mobile Number</label>
              <br />
              <select
              onChange={mNumberHandler}
                name=""
                id=""
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
              >
                <option value="" hidden>+91</option>
                <option value="">+91</option>
                <option value="">+1</option>
                <option value="">+59</option>
              </select>
            </div>
            <div className="col mt-3">
              <label htmlFor=""></label>
              <br />
              <input
              // onChange={emailHandler}
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
                Preferred Contact Type <span className="compalsory">*</span>
              </label>
              <br />
              <input
              // onChange={}
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
                Contact Name <span className="compalsory">*</span>
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
                Email <span className="compalsory">*</span>
              </label>
              <br />
              <input
                type="email"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">
                Profile Created By <span className="compalsory">*</span>
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
              <p style={{ color: "#6E6E6E", fontSize: "small" }}>
                Please provide your valid address. We will not be displaying
                your address on the site and will be gathered only for internal
                purpose.
              </p>
            </div>
            <div className="col mt-3">
              <label htmlFor="">
                Country <span className="compalsory">*</span>
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
                Pin Code <span className="compalsory">*</span>
              </label>
              <br />
              <input
              onChange={pinHandler}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">
                City / State <span className="compalsory">*</span>
              </label>
              <br />
              <select
              onChange={cityHandler}
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
              onChange={refnameHandler}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Address</label>
              <br />
              <input
              onChange={refaddressHandler}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">Contact Number</label>
              <br />
              <select
              onChange={refcontactHandler}
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
            </div>
          </div>
          <Link to="/personal-info">
            <button
              className="btn btn-light text-white btn-xl mt-2"
              type="button"
              onClick={submitHandler}
              style={{ backgroundColor: "#fb9232" }}
            >
              Save & Continue
            </button>
          </Link>
        </form>
      </div>
    </div>
    {/* <p>{basicinfo:any}</p> */}
    </>
  );
};

// export default BasicInfo;
export default BasicInfo;
