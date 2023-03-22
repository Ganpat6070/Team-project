import React, { useState } from "react";
import "./RegForm.css";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";
import { Carousel } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarHead from "../navbar";

const RegForm2 = () => {
  const [fnamer, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [numberr, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const a = {
  //   fnamer: fnamer,
  //   email: email,
  //   numberr: numberr,
  //   pass: password,
  // };

  const onRegister = async (e: any) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast.success("Registered successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setError(errorMessage);
      });
    const docRef = await addDoc(collection(db, "User"), {
      fname: fnamer,
      email: email,
      number: numberr,
      pass: password,
    });

    console.log(docRef.id);
  };

  return (
    <>
      <NavbarHead />
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
          <form onSubmit={onRegister}>
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
                  setFirstName(e.target.value);
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
                value={email}
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

            <div className="form-group">
              <label htmlFor="email">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="******"
                onChange={(e) => setPassword(e.target.value)}
                required
                value={password}
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
                Register
              </button>
              {error && (
                <span className="text-center text-danger">{error}</span>
              )}
              <ToastContainer />
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
                  src="../../image/google-logo.png"
                  alt=""
                />{" "}
                Registration Using Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegForm2;
