import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
const ProfileForm = () => {
  return (
    <div className="container-sm bg-light rounded-4 lg w-100 p-3">
      <form>
        <p>Basic Information</p>
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
        <Row>
          <div className="col">
            <label htmlFor="" className="mb-">
              Date of Birth *<br />
              <input type="date" placeholder="" className="" />
            </label>
          </div>
          <div className="col">
            <label className="mb-3">
              Height
              <br />
              <input type="number" id="height"></input>
            </label>
          </div>
          <Col>
            <label>
              Weight (KG)
              <br />
              <input type="number" />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>
              Marital Status*
              <br />
              <select className="">
                <option></option>
                <option>Single</option>
                <option>In-Relationship</option>
                <option>Devorced</option>
              </select>
            </label>
          </Col>
          <Col>
            <label>
              Mother Tongue *<br />
              <select className="">
                <option></option>
                <option>Hindi</option>
                <option>Gujarati</option>
                <option>English</option>
              </select>
            </label>
          </Col>
          <Col>
            {" "}
            <label>
              Religion *<br />
              <select className="">
                <option></option>
                <option>Hinduism</option>
                <option>Islam</option>
                <option>Christianity</option>
                <option>Jainism</option>
              </select>
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="">
              Caste / Denomination *<br />
              <input type="text" />
            </label>
          </Col>
          <Col>
            <label htmlFor="">
              Sub Caste <br />
              <input type="text" />
            </label>
          </Col>
          <Col>
            <label htmlFor="">
              Physical Status
              <input type="text" />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="">
              About me *<br />
              <textarea name="" id=""></textarea>
            </label>
            <p>(Characters Left : 600)</p>
          </Col>
          <Col>
            <label htmlFor="">
              Spoken Language(s) *<br />
              <span className="border border-dark w-5 p-2  h-1 d-inline-block">
                <label htmlFor="" className="py-2">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
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
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="" className="pt-3">
              Education *<br />
              <input type="text" className="w-5 p-5 " />
            </label>
          </Col>
          <Col>
            <input type="text" className="w-5 p-5 mt-5" />
          </Col>
        </Row>
        <div className="row">
          <div className="col-xl-">
            <label htmlFor="eid">Education in Detail</label>
            <br />
            <input type="text" id="eid" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="">School Name</label>
            <br />
            <input type="text" />
          </div>
          <div className="col">
            <label htmlFor="">Place</label>
            <br />
            <input type="text" />
          </div>
          <div className="col">
            <label htmlFor="">Year of Study</label>
            <br />
            <select className="">
              <option></option>
              <option>2012</option>
              <option>2011</option>
              <option>2000</option>
            </select>
            <label htmlFor=""></label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="">College Name</label>
            <br />
            <input type="text" />
          </div>
          <div className="col">
            <label htmlFor="">Course</label>
            <br />
            <input type="text" />
          </div>
          <div className="col">
            <label htmlFor="">Place</label>
            <br />
            <input type="text" />
          </div>
          <div className="col">
            <label htmlFor="">Year Of Study</label>
            <br />
            <select className="">
              <option></option>
              <option>2012</option>
              <option>2011</option>
              <option>2000</option>
            </select>
          </div>
        </div>
        <div className="row my-3    ">
          <div className="col">
            <label htmlFor="">Company Name</label>
            <br />
            <input type="text" />
          </div>

          <div className="col">
            <label htmlFor="">Designation</label>
            <br />
            <input type="text" />
          </div>

          <div className="col">
            <label htmlFor="">Work Location</label>
            <br />
            <input type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Landline Number</label>
            <br />
            <select>
              <option value="">1231</option>
              <option value="">12313</option>
              <option value=""></option>
            </select>
          </div>
          <div className="col mt-3">
            <input type="tel" />
          </div>
          <div className="col mt-3">
            <input type="number" className=" -webkit-appearance: none" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Mobile Number</label>
            <br />
            <select name="" id="">
              <option value=""></option>
              <option value="">+91</option>
              <option value="">+1</option>
              <option value="">+59</option>
            </select>
          </div>
          <div className="col mt-4">
            <input type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Preferred Contact Type *</label>
            <br />
            <input type="text" />
          </div>
          <div className="col">
            <label htmlFor="">Convenient Time to Call</label>
            <br />
            <input type="text" />
          </div>
          <div className="col">
            <label htmlFor="">Contact Name *</label>
            <br />
            <input type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Email *</label>
            <br />
            <input type="email" />
          </div>
          <div className="col mt-2">
            <label htmlFor="">Profile Created By *</label>
            <br />
            <select name="" id="">
              <option value=""></option>
              <option value="">Matrimonial Professtion</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Apartment Name / House Name</label>
            <br />
            <input type="text" />
          </div>
          <div className="col">
            <label htmlFor="">Street / Locality</label>
            <br />
            <input type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              Please provide your valid address. We will not be displaying your
              address on the site and will be gathered only for internal
              purpose.
            </p>
          </div>
          <div className="col">
            <label htmlFor="">Country *</label>
            <br />
            <input type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Pin Code *</label>
            <br />
            <input type="text" />
          </div>
          <div className="col">
            <label htmlFor="">City / State *</label>
            <br />
            <select name="" id="">
              <option value="">Ahmedabad/Gujarat</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Reference Name</label>
            <br />
            <input type="text" />
          </div>
          <div className="col">
            <label htmlFor="">Address</label>
            <br />
            <input type="text" />
          </div>
          <div className="col">
            <label htmlFor="">Contact Number</label><br />
            <select name="" id="">
                <option value="">+91</option>
                <option value="">+1</option>
                <option value="">+56</option>
            </select>
          </div>
          <div className="col mt-4">

            <input type="text" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
