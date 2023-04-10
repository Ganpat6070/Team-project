import React, { useState, useReducer } from "react";
import "./RegForm.css";
// import { collection, addDoc } from "firebase/firestore";
// import db from "../firebase";
import { Carousel } from "react-bootstrap";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarHead from "../navbar";
import { useNavigate } from "react-router-dom";
import { FaSmileWink } from "react-icons/fa";

const RegForm2 = () => {
  const navigate = useNavigate();
  // const [fullName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setNumber] = useState<number>();
  // const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);

  // Iniail State  types for use reducer
  type FormState = {
    fullName: string;
    email: string;
    phoneNumber: number;
    password: string;
  };

  type FormValidityState = {
    fullNameError: boolean;
    emailError: boolean;
    phoneNumberError: boolean;
    passwordError: boolean;
    isFormValid: boolean;
  };

  type FormAction = {
    type: string | number;
    payLoad: string | number;
  };

  type FormValidityAction = {
    type: string;
    payLoad: FormState;
  };

  // Iniail State for use reducer
  const initialState: FormState = {
    fullName: "",
    email: "",
    phoneNumber: 0,
    password: "",
  };

  // form reducer function
  const formReducer = (state: any, action: any): FormState => {
    switch (action.type) {
      case "UPDATE_FULL_NAME":
        return {
          ...state,
          fullName: action.payLoad,
        };
      case "UPDATE_EMAIL":
        return {
          ...state,
          email: action.payLoad,
        };
      case "UPDATE_PHONE_NUMBER":
        return {
          ...state,
          phoneNumber: action.payLoad,
        };

      case "UPDATE_PASSWORD":
        return {
          ...state,
          password: action.payLoad,
        };
      default:
        return state;
    }
  };

  const formValidityReducer = (state: any, action: any): FormValidityState => {
    let isValid: boolean = false;
    let regex = /^[a-zA-Z]*$/;
    switch (action.type) {
      case "VALIDATE_FULL_NAME":

        // isValid = action.payLoad.fullName.length > 4 ? true : false;
        if (regex.test(formData.fullName)){
          isValid = true 
        }
        if(formData.fullName.length > 4) {
          isValid = false;
        }
        else {
          isValid = false
        }
        return {
          ...state,
          ...{
            fullNameError: !isValid,
            isFormValid:
              isValid &&
              !state.lastNameError &&
            
              !state.emailError &&
              !state.passwordError,
          },
        };
      case "VALIDATE_PHONE_NUMBER":
        isValid = action.payLoad.phoneNumber.toString().length === 10 ? true : false;
        return {
          ...state,
          ...{
            phoneNumberError: !isValid,
            isFormValid:
              isValid &&
              !state.firstNameError &&
              !state.ageError &&
              !state.emailError &&
              !state.passwordError,
          },
        };
      case "VALIDATE_EMAIL":
        isValid =
          action.payLoad.email.length > 0 && action.payLoad.email.includes("@")
            ? true
            : false;
        return {
          ...state,
          ...{
            emailError: !isValid,
            isFormValid:
              isValid &&
              !state.firstNameError &&
              !state.lastNameError &&
              !state.ageError &&
              !state.passwordError,
          },
        };
      case "VALIDATE_PASSWORD":
        isValid = action.payLoad.password.length > 6 ? true : false;
        return {
          ...state,
          ...{
            passwordError: !isValid,
            isFormValid:
              isValid &&
              !state.firstNameError &&
              !state.lastNameError &&
              !state.ageError &&
              !state.emailError,
          },
        };
      default:
        return state;
    }
  };

  const initialValidityState: FormValidityState = {
    fullNameError: false,
    phoneNumberError: false,
    emailError: false,
    passwordError: false,
    isFormValid: false,
  };

  // use reducer functions
  const [formData, setFormData] = useReducer(formReducer, initialState);
  const [formValidityData, setFormValidityData] = useReducer(
    formValidityReducer,
    initialValidityState
  );

  //
  const reg = async () => {
    setIsLoading(true);
    setButtonLoading(true);
    let response = await fetch("http://localhost:8000/register", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
      }),
    });
    const res = await response.json();
    if (response.status === 200) {
      // setIsLoading(false);
      setButtonLoading(true);
    }
    let id = res.id;
    localStorage.setItem("id", id);

    if (res.msg) {
      if (res.msg === "Already registered") {
        // setIsLoading(false);
        setButtonLoading(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
      if (res.msg === "Registered") {
        // setIsLoading(false);
        setButtonLoading(true);
        setTimeout(() => {
          navigate("/otp");
        }, 2000);
      }
      toast.success(res.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error(res.errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    // console.log(res.msg);
    if (res.status === 422) {
      console.log(res.errorMessage);
    }

    setIsLoading(false);
  };
  const onRegister = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    reg();
  };

  return (
    <>
      <NavbarHead />
      <div className="register-photo">
        <div className="form-container imgdiv">
          <div className="image-hold" >
            <Carousel className="imgset" >
              <Carousel.Item >
                <img
                  style={{height:"800px"}}
                  className="d-block w-0  "
                  src="../../image/quick-reg.slideA.jpg"
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
                 style={{height:"800px"}}
                  className="d-block w-0  "
                  src="../../image/quick-reg.slideC.jpg"
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
                 style={{height:"800px"}}
                  className="d-block w-0"
                  src="../../image/quick-reg.slideA.jpg"
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
                 style={{height:"800px"}}
                  className="d-block w-0"
                  src="../../image/regimage.jpg"
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
              <label htmlFor="fullname">Your FullName</label>

              <input
                className="form-control"
                type="text"
                name="fullname"
                // required
                style={{
                  backgroundColor: formValidityData.fullNameError ? "pink" : "",
                }}
                placeholder="Shyam Dadhaniya"
                onChange={(e) =>
                  setFormData({
                    type: "UPDATE_FULL_NAME",
                    payLoad: e.target.value,
                  })
                }
                onBlur={(e) => setFormValidityData({type: "VALIDATE_FULL_NAME", payLoad: formData})}

              />

              {/* <span className="text-danger size-small">{firstError}</span> */}
              {formValidityData.fullNameError ? <span className="text-danger size-small">Name Should be only alphabets & not shorter then 4 latter</span> : ""}
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                // required
                placeholder="shyam.dadhani@gmail.com"
                // ref={email}
                // onChange={(e) => {
                //   setEmail(e.target.value);
                // }}

                style={{
                  backgroundColor: formValidityData.emailError ? "pink" : "",
                }}

                onChange={(e) =>
                  setFormData({ type: "UPDATE_EMAIL", payLoad: e.target.value })
                }
                onBlur={(e) => setFormValidityData({type: "VALIDATE_EMAIL", payLoad: formData})}

                // value={email}
              />
              {formValidityData.emailError ? <span className="text-danger size-small">Email Should Contain "@" and should be valid</span> : ""}

              {/* <span className="text-danger size-small">{emailError}</span> */}
            </div>
            <div className="form-group">
              <label htmlFor="number">Phone Number*</label>
              <div className="form-number">
                <br />
                <select
                

                  className="form-control"
                  style={{
                    width: "90px",
                    background: "0",
                    border: "0",
                    marginBottom: "30px",
                    borderLeft:"0px",
                    margin: "0", 
                    height:"48px",
                    borderBottomLeftRadius: "2px",
                    borderBottomRightRadius: "0px",
                    borderTopLeftRadius: "2px",
                    borderTopRightRadius: "0px" , 
                    
                    backgroundColor: formValidityData.phoneNumberError ? "pink" : ""
                  }}
                >
                  <option value="1">+91</option>
                  <option value="1">+92</option>
                  <option value="2">+198</option>
                  <option value="3">+701</option>
                </select>
                <input
                  // required
                  style={{ margin: "0", background: "0", border: "0" ,borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                  borderTopLeftRadius: "0px",
                  borderTopRightRadius: "0px" , backgroundColor: formValidityData.phoneNumberError ? "pink" : "",}}
                  className="form-control"
                  // type="tel"
                  type="tel"
                  name="number"
                  placeholder="1234567890"
                  minLength={10}
                  maxLength={10}
    
                  onChange={(e) =>
                    setFormData({
                      type: "UPDATE_PHONE_NUMBER",
                      payLoad: parseInt(e.target.value),
                    })
                  }
                onBlur={(e) => setFormValidityData({type: "VALIDATE_PHONE_NUMBER", payLoad: formData})}

                />
              </div>

            </div>
            {formValidityData.phoneNumberError ? <span className="text-danger size-small">Phone Number Should only Contains Digit & only 10 digits are allowed</span> : ""}

            <div className="form-group">
              <label htmlFor="email">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="******"
                style={{
                  backgroundColor: formValidityData.passwordError ? "pink" : "",
                }}

                onChange={(e) =>
                  setFormData({
                    type: "UPDATE_PASSWORD",
                    payLoad: e.target.value,
                  })
                }
                onBlur={(e) => setFormValidityData({type: "VALIDATE_PASSWORD", payLoad: formData})}

              />
            </div>
            {formValidityData.passwordError ? <span className="text-danger size-small">Password Should Contain alphabets, Numbers & Symbols and not be Shorter then 7 Letters</span> : ""}

            {/* '''''''''''''''''' */}
            <div className="form-group">
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />
                  I agree to the terms & conditions.
                </label>
              </div>
            </div>
            <div className="form-group text-center">
              <button
                className="btn btn-primary btn-block"
                type="submit"
                disabled={!formValidityData.isFormValid}

                value={""+formValidityData.isFormValid}
              >
                {/* {isLoading ? (
                ) : (
                  <p className="mb-0">Register</p>
                )} */}
                {/* Registration */}
                {isLoading ? <p className="mb-0"> In Process </p> : <p className="mb-0">Register</p>}

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
