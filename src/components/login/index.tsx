import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { auth } from "../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import NavbarHead from "../navbar";
import { signInWithGoogle } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const onSubmit = async (e: any) => {
    e.preventDefault();

    let response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const res = await response.json();
    console.log(res);
    if (res.msg) {
      if (res.msg === "You are not verified user!") {
        toast.error(res.msg, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (res.msg === "User found successfully!") {
        toast.success(res.msg, {
          position: toast.POSITION.TOP_RIGHT,
        });
        localStorage.setItem("login", "true");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
      // toast.success(res.msg, {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
    } else {
      toast.error(res.errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    
  };
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
              <div className="col-xl-6" style={{ backgroundColor: "#FE8A4D" }}>
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-2 text-center text-white">
                    Let’s get started now!
                  </h3>
                  <h5 className="mb-5 text-center text-white">
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
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        value={email}
                      />
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
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        value={password}
                      />
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
                    <p className="text-center text-light">Forgot Password ?</p>
                    <p className="text-white text-center formFieldLink">
                      New to PerfectMatch.com ?{" "}
                      <Link to="/register" className="text-light" style={{textDecoration:"none"}}>Register Free</Link>
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
}

export default Login;
