import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import classes from "./PersonalInfo.module.css";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import "./PrePart.css";
import NavbarHead from "../navbar";

const PrePart = () => {
  // Birthday Data
  //   const DOB  = useRef<HTMLInputElement>(null);
  //   const Height = useRef<HTMLSelectElement>(null);
  //   const Weight = useRef<HTMLSelectElement>(null);
  //   const MStatus = useRef<HTMLSelectElement>(null);
  //   const MTongue = useRef<HTMLSelectElement>(null);
  //   const Religion = useRef<HTMLSelectElement>(null);
  //   const Cast = useRef<HTMLInputElement>(null);
  //   const SubCast = useRef<HTMLInputElement>(null);
  //   const PStatus = useRef<HTMLInputElement>(null);
  //   const Education = useRef<HTMLInputElement>(null);
  //   const SLang = useRef<HTMLSelectElement>(null);
  //   const EducationDetails = useRef<HTMLInputElement>(null);
  //   const SchoolName = useRef<HTMLInputElement>(null);
  //   const SPlace = useRef<HTMLInputElement>(null);
  //   const SYOS = useRef<HTMLSelectElement>(null);
  //   const CollegeName = useRef<HTMLInputElement>(null);
  //   const Course = useRef<HTMLInputElement>(null);
  //   const CPlace  = useRef<HTMLInputElement>(null);
  //   const CYOS = useRef<HTMLSelectElement>(null);
  //   const CompanyName = useRef<HTMLInputElement>(null);
  //   const Designation = useRef<HTMLInputElement>(null);
  //   const WLocation = useRef<HTMLInputElement>(null);
  //   const LCode = useRef<HTMLSelectElement>(null);
  //   const LArea = useRef<HTMLSelectElement>(null);
  //   const LNumber = useRef<HTMLInputElement>(null);

  const submitHandler = (e: any) => {
    e.preventDefault();
    //           if(DOB.current){
    //             console.log(DOB.current.value);
    //           }
    //           if(Cast.current){
    //             console.log(Cast.current.value);
    //           }
    //           if(Height.current){
    //             console.log(Height.current.value);
    //           }
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
      <NavbarHead />
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

          <div className="row">
            <div className="col-lg">
              {/* <div className="form-group"> */}
              <label htmlFor="" className="">
                Age <span className="compalsory">*</span>
                <br />
              </label>
              <select
                style={{ height: "50%" ,borderColor:"#d9d9d9" , color:"#d9d9d9" }}
                className="select form-control mt-1 rounded-2  form-select "
              >
                <option hidden>18</option>
                {/* <option></option> */}
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
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
                style={{ height: "50%" ,borderColor:"#d9d9d9" }}
                className="form-control  mt-1 rounded-2 form-select "
              >
                <option hidden>21</option>
                {/* <option></option> */}
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
              </select>
              {/* </div> */}
            </div>
            <div className="col-lg">
              {/* <div className="form-group"> */}
              <label htmlFor="" className="">
                Height
                <br />
              </label>
              <select
                style={{ height: "50%" ,borderColor:"#d9d9d9" }}
                className="form-control  mt-1 rounded-2 form-select "
              >
                <option hidden>From</option>
                {/* <option></option> */}
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
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
                style={{ height: "50%" , borderColor:"#d9d9d9" }}
                className="form-control  mt-1 rounded-2 form-select "
              >
                <option hidden>To</option>
                {/* <option></option> */}
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
              </select>
              {/* </div> */}
            </div>
          </div>
          <Row>
            <Col className="mt-3">
              <label>
                Physical Stutus
                <br />
              </label>
              <select
                style={{ height: "50%" ,borderColor:"#d9d9d9" }}
                className="form-control  mt-1 rounded-2 form-select"
              >
                <option hidden style={{ height: "50%" }}>
                  Choose
                </option>
                <option>Type 1</option>
                <option>Type 2</option>
                <option>Type 3</option>
                <option>Type 4</option>
              </select>
            </Col>
            <Col className="mt-3">
              <label>
                Family Status
                <br />
              </label>
              <select
                style={{ height: "50%" , borderColor:"#d9d9d9" }}
                className="form-control  mt-1 rounded-2  form-select"
                >
                <option hidden>Please Select</option>
                <option>Unmerried</option>
                <option>Divorced</option>
                <option>Preferred not to say</option>
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
                style={{ height: "50%" , borderColor:"#d9d9d9"}}
                className="form-control  mt-1 rounded-2  form-select"
              >
                <option hidden>Select Any One</option>
                <option>INR</option>
                <option>USD</option>
                <option>Euro</option>
                <option>CAD</option>
              </select>
            </Col>
            <Col className="mt-3">
              <label htmlFor="">
                Annual Income
                <br />
              </label>
              <select
                style={{ height: "50%" , borderColor:"#d9d9d9"}}
                className="form-control  mt-1 rounded-2 form-select"
              >
                <option hidden>Select Any One</option>
                <option>4 - Lakh</option>
                <option>5 - Lakh</option>
                <option>6 - Lakh</option>
                <option>7 - Lakh</option>
              </select>
            </Col>
          </Row>
          <Row className="">
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1 ">
                Mother Tongue <span className="compalsory">*</span>
                <br />
              </label>
              <div className="px-3 form-control  mt-1 rounded-2 " style={{borderColor:"#d9d9d9"}}>
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">M.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">B.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">MCA</label>
              </div>
              {/* <input
                type="text"
                className="w-100 p-5 form-control  mt-1 rounded-2 border-secondary"
              /> */}
            </Col>
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1">
                {/* Mother Tongue <span className="compalsory">*</span> */}
                <br />
              </label>
              <div className=" px-3 form-control  mt-1 rounded-2 " style={{borderColor:"#d9d9d9"}}>
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">M.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">B.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">MCA</label>
              </div>
            </Col>
          </Row>
        
          <Row>
            <Col className="mt-3">
              {" "}
              <label>
                Religion <span className={classes.compalsory}>*</span>
                <br />
              </label>
              <select style={{height:"50%" , borderColor:"#d9d9d9"}} className="form-control  mt-1 rounded-2 form-select">
                <option hidden>Select Any One</option>
                <option>Hindi</option>
                <option>Muslim</option>
                <option>Christian</option>
                <option>Other</option>
              </select>
            </Col>
      
            <Col className="mt-3">
              {/* <label>
                Family Value <span className={classes.compalsory}>*</span>
                <br />
              </label>
              <select className="form-control  mt-1 rounded-2 border-secondary form-select">
                <option hidden>Select Any One</option>
                <option>Important</option>
                <option>Vary Important</option>
                <option>Not-Important</option>
              </select> */}
            </Col>
          </Row>
          <Row className="">
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1 ">
                Cast / Denomination <span className="compalsory">*</span>
                <br />
              </label>
              <div className="px-3 form-control  mt-1 rounded-2 " style={{borderColor:"#d9d9d9"}}>
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">M.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">B.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">MCA</label>
              </div>
              {/* <input
                type="text"
                className="w-100 p-5 form-control  mt-1 rounded-2 border-secondary"
              /> */}
            </Col>
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1">
                {/* Mother Tongue <span className="compalsory">*</span> */}
                <br />
              </label>
              <div className=" px-3 form-control  mt-1 rounded-2 " style={{borderColor:"#d9d9d9"}}>
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">M.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">B.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">MCA</label>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1 ">
                Diet <span className="compalsory">*</span>
                <br />
              </label>
              <div className="px-3 form-control  mt-1 rounded-2 " style={{borderColor:"#d9d9d9"}}>
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">M.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">B.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">MCA</label>
              </div>
              {/* <input
                type="text"
                className="w-100 p-5 form-control  mt-1 rounded-2 border-secondary"
              /> */}
            </Col>
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1">
                {/* Mother Tongue <span className="compalsory">*</span> */}
                <br />
              </label>
              <div className=" px-3 form-control  mt-1 rounded-2 " style={{borderColor:"#d9d9d9"}}>
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">M.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">B.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">MCA</label>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1 ">
                Education <span className="compalsory">*</span>
                <br />
              </label>
              <div className="px-3 form-control  mt-1 rounded-2 " style={{borderColor:"#d9d9d9"}}>
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">M.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">B.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">MCA</label>
              </div>
              {/* <input
                type="text"
                className="w-100 p-5 form-control  mt-1 rounded-2 border-secondary"
              /> */}
            </Col>
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1">
                {/* Mother Tongue <span className="compalsory">*</span> */}
                <br />
              </label>
              <div className=" px-3 form-control  mt-1 rounded-2 " style={{borderColor:"#d9d9d9"}}>
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">M.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">B.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">MCA</label>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1 ">
                Occupation <span className="compalsory">*</span>
                <br />
              </label>
              <div className="px-3 form-control  mt-1 rounded-2 " style={{borderColor:"#d9d9d9"}}>
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">M.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">B.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">MCA</label>
              </div>
              {/* <input
                type="text"
                className="w-100 p-5 form-control  mt-1 rounded-2 border-secondary"
              /> */}
            </Col>
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1">
                {/* Mother Tongue <span className="compalsory">*</span> */}
                <br />
              </label>
              <div className=" px-3 form-control  mt-1 rounded-2 " style={{borderColor:"#d9d9d9"}}>
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">M.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">B.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">MCA</label>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1 ">
                Location <span className="compalsory">*</span>
                <br />
              </label>
              <div className="px-3 form-control  mt-1 rounded-2 " style={{borderColor:"#d9d9d9"}}>
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">M.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">B.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">MCA</label>
              </div>
              {/* <input
                type="text"
                className="w-100 p-5 form-control  mt-1 rounded-2 border-secondary"
              /> */}
            </Col>
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1">
                {/* Mother Tongue <span className="compalsory">*</span> */}
                <br />
              </label>
              <div className=" px-3 form-control  mt-1 rounded-2 " style={{borderColor:"#d9d9d9"}}>
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">M.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">B.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">MCA</label>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1 ">
                Marital Status <span className="compalsory">*</span>
                <br />
              </label>
              <div className="px-3 form-control  mt-1 rounded-2 " style={{borderColor:"#d9d9d9"}}>
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">M.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">B.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">MCA</label>
              </div>
              {/* <input
                type="text"
                className="w-100 p-5 form-control  mt-1 rounded-2 border-secondary"
              /> */}
            </Col>
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1">
                {/* Mother Tongue <span className="compalsory">*</span> */}
                <br />
              </label>
              <div className=" px-3 form-control  mt-1 rounded-2 " style={{borderColor:"#d9d9d9"}}>
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">M.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">B.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">MCA</label>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1 ">
                Native Place <span className="compalsory">*</span>
                <br />
              </label>
              <div className="px-3 form-control  mt-1 rounded-2 " style={{borderColor:"#d9d9d9"}}>
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">M.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">B.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">MCA</label>
              </div>
              {/* <input
                type="text"
                className="w-100 p-5 form-control  mt-1 rounded-2 border-secondary"
              /> */}
            </Col>
            <Col className="mt-3">
              <label htmlFor="" className="pt-1 mb-1">
                {/* Mother Tongue <span className="compalsory">*</span> */}
                <br />
              </label>
              <div className=" px-3 form-control  mt-1 rounded-2 " style={{borderColor:"#d9d9d9"}}>
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">M.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">B.E</label>
                <br />
                <input type="checkbox" id="horns" name="horns" />
                <label htmlFor="horns">MCA</label>
              </div>
            </Col>
          </Row>     
          <Row className="mb-0">
       
            <div className="col mt-3">
              <label htmlFor="">
                About My Partner <span className={classes.compalsory}>*</span>
              </label>
              <br />
              <textarea name="" id="" className="w-100 p-4 h-1 mt-2 " style={{width:"800" ,borderColor:"#d9d9d9"}}></textarea>
              <p style={{color:"#6E6E6E" , fontStyle:"italic"}} className="mb-0">(Characters Left : 600)</p>
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

// export default BasicInfo;
export default PrePart;
