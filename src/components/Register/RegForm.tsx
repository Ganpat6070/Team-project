import React, { useState } from "react";
// import "@fortawesome/fontawesome-svg-core";
import "./RegForm.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegForm2 = () => {
  // const [value, setValue] = useState()
  return (
    <div className="register-photo">
      <div className="form-container imgdiv">
        <div className="image-hold">
          <Carousel className="imgset">
            <Carousel.Item>
              <img
                className="d-block w-0  "
                src="https://static.m4marry.com/ui/images/quick-reg.slideA.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Easily accessible customer care centres and a committed and
                  professional service team ensure that help is just a call or
                  click away.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-0"
                src="https://static.m4marry.com/ui/images/quick-reg.slideE.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>
                  The unique matching tools on m4marry.com enables you to find
                  your perfect partner.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-0"
                src="https://static.m4marry.com/ui/images/quick-reg.slideC.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Easily accessible customer care centres and a committed and
                  professional service team ensure that help is just a call or
                  click away.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          {/* <Carousel className="imgset">
         
          </Carousel> */}
        </div>
        <form method="post">
          <h2 className="text-center">
            <strong>Registration</strong>
          </h2>
          <div className="form-group">
            <label htmlFor="fullname">Your Fullname</label>
            <input
              className="form-control"
              type="text"
              name="fullname"
              placeholder="Shyam Dadhani"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="shyam.dadhani@gmail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="number">Phone Number*</label>
            <div className="form-number">
              <br />
              <select className="form-control" style={{width: "90px", background: "0", border: "0"}}>
                <option value="1">+971</option>
                <option value="1">+972</option>
                <option value="2">+198</option>
                <option value="3">+701</option>
              </select>
              <input style={{margin:  "0",background: "0", border: "0"}}
                className="form-control"
                type="tel"
                name="number"
                placeholder="1234567890"
              />
            </div>
          </div>

          {/* '''''''''''''''''' */}
          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" />I agree to
                the terms & conditions.
              </label>
            </div>
          </div>
          <div className="form-group text-center">
            <button className="btn btn-primary btn-block" type="submit">
              <Link to='/otp' >Registration</Link>
            </button>
          </div>
          {/* <hr />  */}
          <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
            <div className="border-bottom w-100 ml-5"></div>
            <span className="px-2 small text-muted font-weight-bold text-muted">
              or
            </span>
            <div className="border-bottom w-100 mr-5"></div>
          </div>
          <div className="form-group text-center">
            <button
              className="btn btn-white btn-block border-dark "
              type="submit"
            >
              <img
                style={{ height: "18px", width: "18px" }}
                src="../../../image/google-logo.png "
              />{" "}
              Registration Using Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegForm2;
