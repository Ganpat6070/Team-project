import React, { useRef, useState, useEffect } from "react";
import "@fortawesome/fontawesome-svg-core";
import "./RegForm.css";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";
import { Carousel } from "react-bootstrap";
// import { useRef, useEffect } from "react";

const RegForm2 = () => {
  // const [firstError, setFirstError] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [numError, setNumError] = useState("");

  const [fnamer, setFname] = useState("");
  const [emailr, setEmail] = useState("");
  const [numberr, setNumber] = useState("");
  const [pass , setPass] = useState("");

  const a = {
    fnamer: fnamer,
    emailr: emailr,
    numberr: numberr,
    pass:pass
  };

  console.log("RF", a);
  // setEmail("");
  // setFname("");
  // const [value, setValue] = useState()
  // const fname = useRef<HTMLInputElement>(null!);
  // const email = useRef<HTMLInputElement>(null!);
  // const number = useRef<HTMLInputElement>(null!);
  // const fname = useRef<HTMLInputElement>(null!)
  // const agree = useRef<HTMLInputElement>(null!);

  // const submitHandler = async (e: any) => {
  //   e.preventDefault();

  //   const docRef = await addDoc(collection(db, "User"), {});
  //   console.log(docRef.id);
  // };

  const regSubmitHandler = async (e: any) => {
    e.preventDefault();
    // Full Name Validation
    // if (fname.current.value == "") {
    //   setFirstError("Plase Enter Your FullName");
    // } else {
    //   setFname(fname.current.value);
    //   console.log(fnamer)
    // }
    // // Email Validation
    // if (email.current.value == "") {
    //   setEmailError("Plase Enter Your Email");
    // } else {
    //   setEmail(email.current.value);
    // }
    // // Number Validation
    // if (number.current.value == "") {
    //   setNumError("Plase Enter Your Number");
    // } else {
    //   setNumber(number.current.value);
    // }

    const docRef = await addDoc(collection(db, "User"), {
      fname: fnamer,
      email: emailr,
      number: numberr,
      pass: pass
    });
    console.log(docRef.id);
    console.log(emailr);
  };

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
        <form onSubmit={regSubmitHandler}>
          <h2 className="text-center">
            <strong>Registration</strong>
          </h2>
          <div className="form-group">
            <label htmlFor="fullname">Your Fullname</label>

            <input
              className="form-control"
              type="text"
              name="fullname"
              required
              placeholder="Shyam Dadhani"
              // ref={fname}
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
            {/* <span className="text-danger size-small">{firstError}</span> */}
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              required
              placeholder="shyam.dadhani@gmail.com"
              // ref={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {/* <span className="text-danger size-small">{emailError}</span> */}
          </div>
          <div className="form-group">
            <label htmlFor="number">Phone Number*</label>
            <div className="form-number">
              <br />
              <select
                className="form-control"
                style={{ width: "90px", background: "0", border: "0" }}
              >
                <option value="1">+971</option>
                <option value="1">+972</option>
                <option value="2">+198</option>
                <option value="3">+701</option>
              </select>
              <input
                required
                style={{ margin: "0", background: "0", border: "0" }}
                className="form-control"
                type="tel"
                name="number"
                placeholder="1234567890"
                // ref={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </div>
            {/* <span className="text-danger size-small pb-0">{numError}</span> */}
          </div>
          {/* <div className="form-control">
            <label htmlFor="password">
              Enter Your Password
            </label>
            <input
              type="password"
              className="form-control"
              id=""
              // aria-describedby="emailHelp"
              placeholder="***"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div> */}
             <div className="form-group">
            <label htmlFor="email">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              required
              // placeholder="shyam.dadhani@gmail.com"
              // ref={email}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            {/* <span className="text-danger size-small">{emailError}</span> */}
          </div>

          {/* '''''''''''''''''' */}
          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label">
                <input
                  required
                  className="form-check-input"
                  type="checkbox"
                  // ref={agree}
                />
                I agree to the terms & conditions.
              </label>
            </div>
          </div>
          <div className="form-group text-center">
            <button
              className="btn btn-primary btn-block"
              type="submit"
              disabled={false}
            >
              Registration
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
                src="../../images/chirag/google-logo.png "
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
