import { Carousel } from "react-bootstrap";
import "./Pass.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";

const Pass = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();
  const token = useParams();
  const resetPassword = async () => {
    // let token = localStorage.getItem("Token");
    // let id = localStorage.getItem("id");
    // console.log("id:", id);

    let response = await fetch(
      `http://localhost:8000/forget-password/${token.token}`,
      {
        credentials:"include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
        }),
      },
    );
    const res = await response.json();
    console.log(response);
    console.log(res);
    if(response.status === 200){
      toast.success("Password changed successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      toast.error("Your token has expired", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password === "") {
      console.log("Please enter password");
      toast.error("Please enter your password", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (!(password === confirmPassword)){
      toast.error("Password doesn't match!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } 
    else {
      resetPassword();
    }
  };

  return (
    <section className="myform-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="form-area login-form">
              <div className="form-content">
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
                        Easily accessible customer care centres and a committed
                        and professional service team ensure that help is just a
                        call or click away.
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
                        The unique matching tools on m4marry.com enables you to
                        find your perfect partner.
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
                        Easily accessible customer care centres and a committed
                        and professional service team ensure that help is just a
                        call or click away.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="form-input">
                <h2>Reset Your Password</h2>
                {/* <p>For Purpose of Your Registration Password is Compalsory</p> */}
                <form onSubmit={handleSubmit}>
                  {/* <div className="form-group">
                    <label>Enter Your OTP</label>
                    <input type="text" id="" name="name" required />
                  </div> */}
                  <div className="form-group">
                    <label className="password" htmlFor="password">
                      Enter Your Password
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        // aria-describedby="emailHelp"
                        placeholder="*******"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </label>
                    <label className="password" htmlFor="cpassword">
                      Confirm Your Password
                      <input
                        type="password"
                        className="form-control"
                        id="cpassword"
                        // aria-describedby="emailHelp"
                        placeholder="*******"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                      />{" "}
                    </label>
                    <small id="password" className="form-text text-muted">
                      We'll never share your details with anyone else.
                    </small>
                  </div>
                  <div className="myform-button">
                    <button className="myform-btn">Set Password</button>
                  </div>
                  <ToastContainer />
                  <p className="securitytext">
                    <img
                      className="securitylogo"
                      src="../../../image/security.png"
                      alt=""
                    />{" "}
                    Your info is safely secured
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pass;
