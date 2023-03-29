import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Mypersonality.css";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { useEffect, useRef } from "react";
import PhotoCard from "./PhotoCard";

const Mypersonality = () => {
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
      className="background_image"
      style={{
        backgroundImage: `url("../../image/BG.png")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <ProgressBar />
      <PhotoCard/>
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
            My Personality
          </p>
          {/* 
        <label>
          Marital Status*
          <select className="">
            <option></option>
            <option>Single</option>
            <option>In-Relationship</option>
            <option>Devorced</option>
          </select>
        </label> */}
          <div className="row">
            <div className="col">
              <label className="mb">
                Diet
                <br />
              </label>
              <select
                style={{ height: "50%" }}
                ref={Height}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select "
              >
                <option hidden>Please Select</option>
                <option>4ft</option>
                <option>5ft</option>
                <option>6ft</option>
                <option>7ft</option>
                <option>7ft +</option>
              </select>
            </div>
            {/* <div className="col-xl-">
            <label htmlFor="eid">Education in Detail</label>
            <br />
            <input type="text" id="eid" className="form-control" />
          </div> */}
            <div className="col">
              <label className="mb">
                Smoke
                <br />
              </label>
              <select
                style={{ height: "50%" }}
                ref={Height}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select "
              >
                <option hidden>Please Select</option>
                <option>4ft</option>
                <option>5ft</option>
                <option>6ft</option>
                <option>7ft</option>
                <option>7ft +</option>
              </select>
            </div>
            <div className="col">
              <label>
                Drink
                <br />
              </label>
              {/* <input type="number" className="form-control mt-1 rounded-2 border-secondary" /> */}
              <select
                style={{ height: "50%" }}
                ref={Weight}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select "
              >
                <option hidden>Please Select</option>
                <option>40-50KG</option>
                <option>50-60KG</option>
                <option>60-70KG</option>
                <option>70-80KG</option>
                <option>80-90KG</option>
              </select>
            </div>
          </div>
          <div
            className="mt-2"
            style={{
              width: "100",
              height: "40%",
              color: "black",
              backgroundColor: "#eeeeee",
              fontSize: "larger",
            }}
          >
            Hobbies
          </div>
          <Row>
            <Col className="mt-3 mb-2">
              <label>
                Let your parter know your Hobbies & interests.
                <br />
              </label>
              <br />
              <span style={{ fontStyle: "italic", fontSize: "small" }}>
                Impedit nisi assumenda eligendi corporis ex veniam quibusdam
                sunt provident quam eaque? Sint quasi ea ad quod dolorum soluta
                autem! Fugiat, itaque.
              </span>
              <br />
              <select
                style={{ height: "50%" }}
                ref={MStatus}
                className="form-control text-dark mt-1 mb-4 rounded-2 border-secondary form-select"
              >
                <option hidden>Please Select</option>
                <option>Single</option>
                <option>In-Relationship</option>
                <option>Devorced</option>
              </select>
            </Col>
            {/* <Col  className="mt-3">
              <label>
                Mother Tongue <span className="compalsory">*</span>
                <br />
              </label>
              <select ref={MTongue} className="form-control text-dark mt-1 rounded-2 border-secondary form-select">
                <option></option>
                <option>Hindi</option>
                <option>Gujarati</option>
                <option>English</option>
              </select>
            </Col> */}
            {/* <Col  className="mt-3">
              {" "}
              <label>
                Religion <span className="compalsory">*</span>
                <br />
              </label>
              <select ref={Religion} className="form-control text-dark mt-1 rounded-2 border-secondary form-select">
                <option></option>
                <option>Hinduism</option>
                <option>Islam</option>
                <option>Christianity</option>
                <option>Jainism</option>
              </select>
            </Col> */}
          </Row>
          <Row>
            <div
              className="mt-2 slidecontainer"
              style={{
                width: "100",
                height: "40%",
                color: "black",
                backgroundColor: "#eeeeee",
                fontSize: "larger",
              }}
            >
              Music
              <input
                type="range"
                min="1"
                max="100"
                
                className="slider"
                id="myRange"
              />
            </div>

            <Col className="mt-3">
              {/* <label htmlFor="">
                Caste / Denomination <span className="compalsory">*</span>
                <br />
              </label>
              <input
                ref={Cast}
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              /> */}
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
            </Col>
            <Col className="mt-3">
              {/* <label htmlFor="">
                Sub Caste <br />
              </label>
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              /> */}
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
            </Col>
            <Col className="mt-3">
              {/* <label htmlFor="">Physical Status</label>
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              /> */}
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
            </Col>
          </Row>
          <Row>
            <div
              className="mt-2 slidecontainer"
              style={{
                width: "100",
                height: "40%",
                color: "black",
                backgroundColor: "#eeeeee",
                fontSize: "larger",
              }}
            >
              Reading
              <input
                type="range"
                min="1"
                max="100"
                
                className="slider"
                id="myRange"
              />
            </div>
            <Col className="mt-3">
              {/* <label htmlFor="">
                About me <span className="compalsory">*</span>
                <br />
                <textarea
                  name=""
                  id=""
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                ></textarea>
              </label> */}

              {/* <label htmlFor="" className="pt-1 ">
                Education <span className="compalsory">*</span>
                <br />
              </label>
              <input
                type="text"
                className="w-100 p-5 form-control text-dark mt-1 rounded-2 border-secondary"
              />

              <p style={{ color: "#6E6E6E", fontStyle: "italic" }}>
                (Characters Left : 600)
              </p> */}
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
            </Col>
            <Col className="mt-3">
              {/* <label htmlFor="">
                Spoken Language(s) <span className="compalsory">*</span>
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
                  </label>
                  <br />
                  <label htmlFor="" className="py-2">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    Gujarati
                  </label>
                  <br />
                  <label htmlFor="" className="py-2">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    Hindi
                  </label>
                  <br />
                </span>
              </label> */}
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
            </Col>
          </Row>
          <Row>
            <div
              className="mt-2 slidecontainer"
              style={{
                width: "100",
                height: "40%",
                color: "black",
                backgroundColor: "#eeeeee",
                fontSize: "larger",
              }}
            >
              Movies
              <input
                type="range"
                min="1"
                max="100"
                
                className="slider"
                id="myRange"
              />
            </div>
            <Col className="mt-3">
              {/* <label htmlFor="" className="pt-3">
                Education <span className="compalsory">*</span>
                <br />
              </label>
              <input
                type="text"
                className="w-5 p-5 form-control text-dark mt-1 rounded-2 border-secondary"
              /> */}
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
            </Col>
            <Col className="mt-3">
              {/* <label htmlFor="" className="pt-3">
                <br />
              </label>
              <input
                type="text"
                className="w-5 p-5 form-control text-dark mt-1 rounded-2 border-secondary"
              /> */}
            </Col>
          </Row>
          <div className="row">
            <div
              className="mt-2 slidecontainer"
              style={{
                width: "100",
                height: "40%",
                color: "black",
                backgroundColor: "#eeeeee",
                fontSize: "larger",
              }}
            >
              Sports
              <input
                type="range"
                min="1"
                max="100"
                
                className="slider"
                id="myRange"
              />
            </div>
            <div className="col-xl mt-3">
              {/* <label htmlFor="eid">Education in Detail</label>
              <br />
              <input
                type="text"
                id="eid"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              /> */}
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
            </div>
          </div>
          <div className="row">
            <div
              className="mt-2 slidecontainer"
              style={{
                width: "100",
                height: "40%",
                color: "black",
                backgroundColor: "#eeeeee",
                fontSize: "larger",
              }}
            >
              Foods
              <input
                type="range"
                min="1"
                max="100"
                className="slider"
                id="myRange"
              />
            </div>
            <div className="col mt-3">
              {/* <label htmlFor="">School Name</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary twothree"
              /> */}
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
            </div>
            <div className="col mt-3">
              {/* <label htmlFor="">Place</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary twothree"
              /> */}
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
            </div>
            <div className="col mt-3">
              {/* <label htmlFor="">Year of Study</label>
              <br />
              <select className="form-control text-dark mt-1 rounded-2 border-secondary form-select twothree">
                <option></option>
                <option>2012</option>
                <option>2011</option>
                <option>2000</option>
              </select>
              <label htmlFor=""></label> */}
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
            </div>
          </div>
          <div className="row">
            <div
              className="mt-2 slidecontainer"
              style={{
                width: "100",
                height: "40%",
                color: "black",
                backgroundColor: "#eeeeee",
                fontSize: "larger",
              }}
            >
              Dress
              <input
                type="range"
                min="1"
                max="100"
                className="slider"
                id="myRange"
              />
            </div>
            <div className="col mt-3">
              {/* <label htmlFor="">College Name</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              /> */}
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
            </div>
            <div className="col mt-3">
              {/* <label htmlFor="">Course</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              /> */}
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
            </div>
            <div className="col mt-3">
              {/* <label htmlFor="">Place</label>
              <br />
              <input
                type="text"
                className="form-control text-dark mt-1 rounded-2 border-secondary"
              /> */}
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" />
                Music
              </label>
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
  );
};

// export default BasicInfo;
export default Mypersonality;
