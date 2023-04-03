import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import classes from "./PersonalInfo.module.css";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import "./PrePart.css";
import PhotoCard from "./PhotoCard";

const PrePart = () => {
  const [ppAge1, setppAge1] = useState<any>(0);
  const [ppAge2, setppAge2] = useState<any>(0);
  const [ppHeight1, setppHeight1] = useState<any>("");
  const [ppHeight2, setppHeight2] = useState<any>("");
  const [ppPhyStatus, setppPhyStatus] = useState<any>("");
  const [ppFamStatus, setppFamStatus] = useState<any>("");
  const [ppCurrency, setppCurrency] = useState<any>("");
  const [ppAnnual, setppAnnual] = useState<any>("");
  const [ppMotherT, setppMotherT] = useState<any>("");
  const [ppreligion, setppreligion] = useState<any>("");
  const [ppCaste, setppCaste] = useState<any>("");
  const [ppdiet, setppdiet] = useState<any>("");

  const [ppEdu, setppEdu] = useState<any[]>([]);
  const [ppOcc, setppOcc] = useState<any>("");
  const [ppLoc, setppLoc] = useState<any>("");
  const [ppmStatus, setppmStatus] = useState<any>("");
  const [ppNative, setppNative] = useState<any>("");
  const [ppAboutPartner, setppAboutPartner] = useState<any>("");

  //For Errors
  const [error, setError] = useState<boolean>(false);

  const ppAgeHandler1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setppAge1(parseInt(e.target.value));
    setError(false);
  };
  const ppAgeHandler2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setppAge2(parseInt(e.target.value));
    setError(false);
  };
  const ppHeight1Handler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setppHeight1(e.target.value);
    setError(false);
  };
  const ppHeight2Handler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setppHeight2(e.target.value);
    setError(false);
  };

  const ppPhyStatusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setppPhyStatus(e.target.value);
    setError(false);
  };
  const ppFamStatusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setppFamStatus(e.target.value);
    setError(false);
  };
  const ppCurrencyHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setppCurrency(e.target.value);
    setError(false);
  };
  const ppAnnualHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setppAnnual(e.target.value);
    setError(false);
  };
  const ppMotherTHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setppMotherT(e.target.value);
    setError(false);
  };
  const ppreligionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setppreligion(e.target.value);
    setError(false);
  };
  const ppCasteHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setppCaste(e.target.value);
    setError(false);
  };
  const ppdietHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setppdiet(e.target.value);
    setError(false);
  };
  const ppeducationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (!(e.target.value === ""));
    // console.log(fname)
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setppEdu([...ppEdu, value]);
    } else {
      setppEdu(ppEdu.filter((box) => box !== value));
    }

    setError(false);
  };
  const ppOccHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setppOcc(e.target.value);
    setError(false);
  };
  const ppLocHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setppLoc(e.target.value);
    setError(false);
  };
  const ppmStatusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setppmStatus(e.target.value);
    setError(false);
  };
  const ppNativeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setppNative(e.target.value);
    setError(false);
  };
  const ppAboutPartnerHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!(e.target.value === "")) setppAboutPartner(e.target.value);
    setError(false);
  };

  const ppObject: any = {
    Age1: ppAge1,
    Age2: ppAge2,
    Height1: ppHeight1,
    Height2: ppHeight2,
    PhysicalStatus: ppPhyStatus,
    FamilyStatus: ppFamStatus,
    Currency: ppCurrency,
    AnnualIncome: ppAnnual,
    MotherTongue: ppMotherT,
    Religion: ppreligion,
    Caste: ppCaste,
    Diet: ppdiet,
    Education: ppEdu,
    Occupation: ppOcc,
    Location: ppLoc,
    MaritalStatus: ppmStatus,
    Native: ppNative,
    AboutMyPartner: ppAboutPartner,
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (
      (ppreligion &&
        ppCaste &&
        ppdiet &&
        ppEdu &&
        ppOcc &&
        ppLoc &&
        ppmStatus &&
        ppNative &&
        ppAboutPartner &&
        ppMotherT) === ""
    ) {
      setError(true);
    } else if ((ppAge1 && ppAge2) === 0) {
      setError(true);
    } else {
      console.log(ppObject);
    }
  };

  return (
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
        <form onSubmit={submitHandler} className="mx-2 my-2">
          <p
            className="fs-3 
 "
            style={{ color: "#6E6E6E" }}
          >
            Preferred Partner
          </p>
          <div
            className=" mb-3 px-2 py-2 text-white "
            style={{ backgroundColor: "#fb9232" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut,
            quisquam placeat cumque est accusantium, dicta ea blanditiis vero
            neque, quis ipsa nisi. Voluptate enim recusandae, aut ab tempora
            cupiditate!mt
          </div>
          {error ? (
            <small className="text-danger">
              {"Please enter the required (*) value"}
            </small>
          ) : null}
          <div className="row">
            <div className="col-lg">
              {/* <div className="form-group"> */}
              <label htmlFor="" className="">
                Age <span className="compalsory">*</span>
                <br />
              </label>
              <select
                // color:"#d9d9d9" for adding in below line for text color
                style={{ height: "50%", borderColor: "#d9d9d9" }}
                className="select form-control mt-1 rounded-2  form-select "
                value={ppAge1}
                onChange={ppAgeHandler1}
              >
                <option hidden value="">
                  From
                </option>
                {/* <option></option> */}
                <option value="">Select</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
              </select>
              {/* </div> */}
            </div>
            <div className="col-lg">
              {/* <div className="form-group"> */}
              {/* <label htmlFor="" className=""> */}
              {/* <span className="compalsory">*</span> */}
              <br />
              {/* </label> */}
              <select
                style={{ height: "50%", borderColor: "#d9d9d9" }}
                className="form-control  mt-1 rounded-2 form-select"
                value={ppAge2}
                onChange={ppAgeHandler2}
              >
                <option hidden value="">
                  To
                </option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
              </select>
            </div>
            <div className="col-lg">
              <label htmlFor="" className="">
                Height
                <br />
              </label>
              <select
                style={{ height: "50%", borderColor: "#d9d9d9" }}
                className="form-control  mt-1 rounded-2 form-select"
                value={ppHeight1}
                onChange={ppHeight1Handler}
              >
                <option value="">From</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              {/* </div> */}
            </div>
            <div className="col-lg">
              {/* <div className="form-group"> */}
              {/* <label htmlFor="" className=""> */}
              {/* <span className="compalsory">*</span> */}
              <br />
              {/* </label> */}
              <select
                style={{ height: "50%", borderColor: "#d9d9d9" }}
                className="form-control  mt-1 rounded-2 form-select"
                value={ppHeight2}
                onChange={ppHeight2Handler}
              >
                <option hidden value="">
                  To
                </option>
                {/* <option></option> */}
                <option value="4.5">4</option>
                <option value="5.5">5</option>
                <option value="6.5">6</option>
              </select>
              {/* </div> */}
            </div>
          </div>
          <Row>
            <Col className="mt-3">
              <label>
                Physical Status
                <br />
              </label>
              <select
                style={{ height: "50%", borderColor: "#d9d9d9" }}
                className="form-control  mt-1 rounded-2 form-select"
                value={ppPhyStatus}
                onChange={ppPhyStatusHandler}
              >
                <option hidden style={{ height: "50%" }} value="">
                  Choose
                </option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
                <option value="type4">Type 4</option>
              </select>
            </Col>
            <Col className="mt-3">
              <label>
                Family Status
                <br />
              </label>
              <select
                style={{ height: "50%", borderColor: "#d9d9d9" }}
                className="form-control  mt-1 rounded-2  form-select"
                value={ppFamStatus}
                onChange={ppFamStatusHandler}
              >
                <option hidden value="">
                  Please Select
                </option>
                <option value="unmarried">Unmarried</option>
                <option value="divorced">Divorced</option>
                <option value="preferred not to say">
                  Preferred not to say
                </option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3">
              {" "}
              <label>
                Currency
                <br />
              </label>
              <select
                style={{ height: "50%", borderColor: "#d9d9d9" }}
                className="form-control  mt-1 rounded-2  form-select"
                value={ppCurrency}
                onChange={ppCurrencyHandler}
              >
                <option hidden value="">
                  Select Any One
                </option>
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="Euro">Euro</option>
                <option value="CAD">CAD</option>
              </select>
            </Col>
            <Col className="mt-3">
              <label htmlFor="">
                Annual Income
                <br />
              </label>
              <select
                style={{ height: "50%", borderColor: "#d9d9d9" }}
                className="form-control  mt-1 rounded-2 form-select"
                value={ppAnnual}
                onChange={ppAnnualHandler}
              >
                <option hidden value="">
                  Select Any One
                </option>
                <option value="4">4 - Lakh</option>
                <option value="5">5 - Lakh</option>
                <option value="6">6 - Lakh</option>
                <option value="7">7 - Lakh</option>
              </select>
            </Col>
          </Row>
          <Row className="">
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1 ">
                Mother Tongue <span className="compalsory">*</span>
                <br />
              </label>
              <div
                className="px-3 form-control  mt-1 rounded-2 "
                style={{ borderColor: "#d9d9d9" }}
              >
                <select
                  style={{ height: "50%", borderColor: "#d9d9d9" }}
                  className="form-control  mt-1 rounded-2 form-select"
                  value={ppMotherT}
                  onChange={ppMotherTHandler}
                >
                  <option  hidden>select</option>
                  <option >Hindi</option>
                  <option >Gujarati</option>
                  <option >English</option>
                </select>
              </div>
            </Col>
            <Col className="mt-3 ">
              <label className="pt-1 mb-1 ">
                Religion <span className={classes.compalsory}>*</span>
                <br />
              </label>
              <div
                className="px-3 form-control  mt-1 rounded-2 "
                style={{ borderColor: "#d9d9d9" }}
              >
                <select
                  style={{ height: "50%", borderColor: "#d9d9d9" }}
                  className="form-control  mt-1 rounded-2 form-select"
                  value={ppreligion}
                  onChange={ppreligionHandler}
                >
                  <option hidden value="">
                    Select Any One
                  </option>
                  <option value="Hindi">Hindi</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Christian">Christian</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1 ">
                Cast / Denomination <span className="compalsory">*</span>
                <br />
              </label>
              <div
                className="px-3 form-control  mt-1 rounded-2 "
                style={{ borderColor: "#d9d9d9" }}
              >
                <input type="text" value={ppCaste} onChange={ppCasteHandler} />
              </div>
            </Col>
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1 ">
                Diet <span className="compalsory">*</span>
                <br />
              </label>
              <div
                className="px-3 form-control  mt-1 rounded-2 "
                style={{ borderColor: "#d9d9d9" }}
              >
                <select
                  style={{ height: "50%", borderColor: "#d9d9d9" }}
                  className="form-control  mt-1 rounded-2 form-select"
                  value={ppdiet}
                  onChange={ppdietHandler}
                >
                  <option hidden value="">
                    Select Any One
                  </option>
                  <option value="Veg">Veg</option>
                  <option value="Non-Veg">Non-Veg</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1 ">
                Education <span className="compalsory">*</span>
                <br />
              </label>
              <div
                className="px-3 form-control  mt-1 rounded-2 "
                style={{ borderColor: "#d9d9d9" }}
              >
                <input
                  type="checkbox"
                  value="M.E"
                  id="M.E"
                  name="education"
                  checked={ppEdu.includes("M.E")}
                  onChange={ppeducationHandler}
                />
                <label htmlFor="M.E">&nbsp;M.E</label>
                <br />
                <input
                  type="checkbox"
                  value="B.E"
                  id="B.E"
                  name="education"
                  checked={ppEdu.includes("B.E")}
                  onChange={ppeducationHandler}
                />
                <label htmlFor="B.E">&nbsp;B.E</label>
                <br />
                <input
                  type="checkbox"
                  id="MCA"
                  value="MCA"
                  name="education"
                  checked={ppEdu.includes("MCA")}
                  onChange={ppeducationHandler}
                />
                <label htmlFor="MCA">&nbsp;MCA</label>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1 ">
                Occupation <span className="compalsory">*</span>
                <br />
              </label>
              <div
                className="px-3 form-control  mt-1 rounded-2 "
                style={{ borderColor: "#d9d9d9" }}
              >
                <select
                  style={{ height: "50%", borderColor: "#d9d9d9" }}
                  className="form-control  mt-1 rounded-2 form-select"
                  value={ppOcc}
                  onChange={ppOccHandler}
                >
                  <option hidden value="">
                    Select Any One
                  </option>
                  <option value="Manager">Manager</option>
                  <option value="First Class">First Class</option>
                  <option value="Second Class">Second Class</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </Col>
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1 ">
                Location <span className="compalsory">*</span>
                <br />
              </label>
              <div
                className="px-3 form-control  mt-1 rounded-2 "
                style={{ borderColor: "#d9d9d9" }}
              >
                <select
                  style={{ height: "50%", borderColor: "#d9d9d9" }}
                  className="form-control  mt-1 rounded-2 form-select"
                  value={ppLoc}
                  onChange={ppLocHandler}
                >
                  <option hidden value="">
                    Select Any One
                  </option>
                  <option value="India">India</option>
                  <option value="NRI">NRI</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1 ">
                Marital Status <span className="compalsory">*</span>
                <br />
              </label>

              <div
                className="px-3 form-control  mt-1 rounded-2 "
                style={{ borderColor: "#d9d9d9" }}
              >
                <select
                  style={{ height: "50%", borderColor: "#d9d9d9" }}
                  className="form-control  mt-1 rounded-2 form-select"
                  value={ppmStatus}
                  onChange={ppmStatusHandler}
                >
                  <option hidden value="">
                    Select Any One
                  </option>
                  <option value="Divorced">Divorced</option>
                  <option value="Unmarried">Unmarried</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </Col>
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1 ">
                Native Place <span className="compalsory">*</span>
                <br />
              </label>
              <div
                className="px-3 form-control  mt-1 rounded-2 "
                style={{ borderColor: "#d9d9d9" }}
              >
                <select
                  style={{ height: "50%", borderColor: "#d9d9d9" }}
                  className="form-control  mt-1 rounded-2 form-select"
                  value={ppNative}
                  onChange={ppNativeHandler}
                >
                  <option hidden value="">
                    Select Any One
                  </option>
                  <option value="India">India</option>
                  <option value="Outofindia">Outofindia</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </Col>
          </Row>

          <Row className="mb-0">
            <div className="col mt-3">
              <label htmlFor="">
                About My Partner <span className={classes.compalsory}>*</span>
              </label>
              <br />
              <textarea
                value={ppAboutPartner}
                className="w-100 p-4 h-1 mt-2 "
                style={{ width: "800", borderColor: "#d9d9d9" }}
                onChange={ppAboutPartnerHandler}
              ></textarea>
            </div>
          </Row>

          <hr className="mb-5" />

          <Link to="/">
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
  );
};

export default PrePart;
