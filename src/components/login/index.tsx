import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { SetStateAction, useReducer, useState } from "react";
// import { auth } from "../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import NavbarHead from "../navbar";
import { signInWithGoogle } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [resetEmail, setResetEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleResetEmail = async () => {
    let response = await fetch("http://localhost:8000/forget-password", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `http://localhost:3000/reset-password/`,
      },
      body: JSON.stringify({
        email: resetEmail,
      }),
    });
    if (response.ok) {
      toast.success("Email Sent!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (response.status === 404) {
      toast.error("User not found!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    let res = await response.json();
    let token = res.forgetPasswordToken;

    localStorage.setItem("resetPasswordtkn", token);
    console.log(response);
    setShow(false);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    let response = await fetch("http://localhost:8000/login", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    const res = await response.json();
    const token = res.token;
    // const id = res.id;
    // localStorage.setItem("id", id);
    localStorage.setItem("Token", token);
    console.log(token);

    console.log(res);

    // if (response.status === 200) {
    //   toast.error(res.msg, {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    // }
    // if (response.status === 201) {
    //   const uname = email;
    //   localStorage.setItem("uname", JSON.stringify(uname));
    //   toast.success(res.msg, {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    //   localStorage.setItem("login", "true");
    //   setTimeout(() => {
    //     navigate("/");
    //   }, 1500);
    // }

    if (res.msg) {
      if (
        res.msg === "You are not verified user!" ||
        res.msg === "Email id is not registered" ||
        res.msg === "Password is incorrect!"
      ) {
        toast.error(res.msg, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (res.msg === "User found successfully!") {
        const uname = formData.email;
        localStorage.setItem("uname", JSON.stringify(uname));
        toast.success(res.msg, {
          position: toast.POSITION.TOP_RIGHT,
        });
        const isAuthenticated = true;
        localStorage.setItem("isAuthenticated", String(isAuthenticated));
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
      if (res.msg === "please verify your email") {
        toast.warning(res.msg, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          navigate("/otp");
        }, 1500);
      }
    } else {
      toast.error(res.errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // Iniail State  types for use reducer
  type FormState = {
    email: string;
    password: string;
  };

  type FormValidityState = {
    emailError: boolean;
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
    email: "",
    password: "",
  };

  // form reducer function
  const formReducer = (state: any, action: FormAction): FormState => {
    switch (action.type) {
      case "UPDATE_EMAIL":
        return {
          ...state,
          email: action.payLoad,
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

  const formValidityReducer = (
    state: any,
    action: FormValidityAction,
  ): FormValidityState => {
    let isValid: boolean = false;
    switch (action.type) {
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
    emailError: false,
    passwordError: false,
    isFormValid: false,
  };

  // use reducer functions
  const [formData, setFormData] = useReducer(formReducer, initialState);
  const [formValidityData, setFormValidityData] = useReducer(
    formValidityReducer,
    initialValidityState,
  );

  // const onSubmit = async (e: any) => {
  //   e.preventDefault();

  //   await signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log("login successfully");
  //       toast.success("Login Successful", {
  //         position: toast.POSITION.TOP_RIGHT,
  //       });
  //       // console.log(user.email);
  //       const uname = user.email;
  //       // console.log(uname);
  //       localStorage.setItem("uname", JSON.stringify(uname));
  //       localStorage.setItem("login", "true");
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       console.log(errorMessage);
  //       toast.error(errorMessage, {
  //         position: toast.POSITION.TOP_RIGHT,
  //       });
  //       setError(errorMessage);
  //     });
  // };

  return (
    <>
      <NavbarHead />
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card card-registration">
            <div className="row g-0">
              <div className="col-xl-6 d-none d-xl-block">
                {/* login Carousel */}
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="../../image/login.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption className="bg-white">
                      <h3 className="text-black">
                        Join the First Choice Site for Marriage
                      </h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="../../image/login2.jpg"
                      alt="Second slide"
                    />

                    <Carousel.Caption className="bg-white">
                      <h3 className="text-black">Way to Perfect Matches</h3>
                      <p className="text-black">
                        The unique matching tools on m4marry.com enables you to
                        find your perfect partner.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="../../image/login3.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption className="bg-white">
                      <h3 className="text-black">Safe and Secure </h3>
                      <p className="text-black">
                        PerfectMatch.com offers you enhanced security features
                        that creates a safe and secure platform for partner
                        search.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div
                className="col-xl-6"
                style={{ backgroundColor: "rgba(232, 221, 221, 0.66)" }}
              >
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-2 text-center text-dark">
                    Let’s get started now!
                  </h3>
                  <h5 className="mb-5 text-center text-dark">
                    Login and find your life partner
                  </h5>

                  <Form onSubmit={onSubmit}>
                    <Form.Group
                      className="mb-3 text-white"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Email ID</Form.Label>
                      <Form.Control
                        // ref={emailRef}
                        type="email"
                        placeholder="abc@xyz.com"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            type: "UPDATE_EMAIL",
                            payLoad: e.target.value,
                          })
                        }
                        onBlur={(e) =>
                          setFormValidityData({
                            type: "VALIDATE_EMAIL",
                            payLoad: formData,
                          })
                        }
                      />
                      {formValidityData.emailError ? (
                        <span className="text-danger size-small">
                          Email Should Contain "@" and should be valid
                        </span>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                    <Form.Group
                      className="mb-3 text-white"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        // ref={passwordRef}
                        type="password"
                        placeholder="********"
                        required
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({
                            type: "UPDATE_PASSWORD",
                            payLoad: e.target.value,
                          })
                        }
                        onBlur={(e) =>
                          setFormValidityData({
                            type: "VALIDATE_PASSWORD",
                            payLoad: formData,
                          })
                        }
                      />
                      {formValidityData.passwordError ? (
                        <span className="text-danger size-small">
                          Password Should Contain alphabets, Numbers & Symbols
                          not be shorter then 6 latter
                        </span>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                    <Form.Group
                      className="mb-3 text-white"
                      controlId="formBasicCheckbox"
                    >
                      <Form.Check
                        type="checkbox"
                        label="Remember me on this device"
                      />
                    </Form.Group>

                    <div className="d-grid gap-2 text-center">
                      <Button type="submit" variant="primary" size="lg">
                        Login
                      </Button>
                      {error && (
                        <span className="text-center text-danger">{error}</span>
                      )}
                      <ToastContainer />
                    </div>
                    <br />
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Reset Password</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="name@example.com"
                              value={resetEmail}
                              onChange={(e) => setResetEmail(e.target.value)}
                              autoFocus
                            />
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="success" onClick={handleResetEmail}>
                          Send Email
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <p
                      className="text-center text-primary"
                      onClick={handleShow}
                    >
                      Forgot Password ?
                    </p>
                    <p className="text-darks text-center formFieldLink">
                      New to PerfectMatch.com ?{" "}
                      <Link
                        to="/register"
                        className="text-primary"
                        style={{ textDecoration: "none" }}
                      >
                        Register Free
                      </Link>
                    </p>
                  </Form>
                  <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                    <div className="border-bottom w-100 ml-5"></div>
                    <span className="px-2 small text-light font-weight-bold text-muted">
                      OR
                    </span>
                    <div className="border-bottom w-100 mr-5"></div>
                  </div>
                  <div className="form-group text-center col-lg-12 mx-auto">
                    <a
                      className="btn btn-light btn-lg btn-google btn-block btn-outline"
                      href="/#"
                    >
                      <img
                        style={{ height: "18px", width: "18px" }}
                        src="../../image/google-logo.png"
                        alt=""
                      />{" "}
                      <span onClick={signInWithGoogle}>
                        Registration Using Google
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
