import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Otp.css";

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<any>("");
  const [errorotp, setErrorotp] = useState<any>();

  const otpHandler: any = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      // cosnt val = e.target.value;
      // setErrorotp(true)
      setErrorotp(true);
      // setErrorotp(false)
    } else {
      setOtp(e.target.value);
    }
  };
  // const verifyOtp  =  (e: any) => {
  //   e.preventDefault();

  const verifyOtp = async (e: any) => {
    e.preventDefault();

    if (otp === "") {
      setErrorotp(true);
    } else {
      setErrorotp(false);
    }
    if (otp > 4 || otp < 4) {
      setErrorotp(true);
    } else {
      setErrorotp(false);
    }

    let response = await fetch("http://localhost:8000/otp", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        otp: otp,
      }),
    });

    const res = await response.json();
    console.log(res);
    console.log(res.errorMessage);
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
                <h2>Enter OTP</h2>
                <p>OTP has been send to your Registered email address</p>
                <form onSubmit={verifyOtp}>
                  {/* <div className="form-group">
                    <label>Enter Your OTP</label>
                    <input type="text" id="" name="name" required />
                  </div> */}
                  <div className="form-group">
                    <label className="labelotp" htmlFor="otp">
                      Enter Your OTP
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="otp"
                      onWheel={(e) => e.currentTarget.blur()}
                      onChange={otpHandler}
                      placeholder="0000"
                      // max={4}
                      // min={4}
                    />
                    <small id="otp" className="form-text text-muted">
                      We'll never share your details with anyone else.
                    </small>
                  </div>
                  {errorotp ? (
                    <small className="text-danger">Please Enter Your OTP</small>
                  ) : null}
                  {/* <div className="form-group">
                                <input type="password" id="" name="password" required/>
                                <label>password</label>
                            </div> */}
                  <div className="myform-button">
                    <button type="submit" className="myform-btn">
                      Submit
                    </button>
                  </div>
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

export default Otp;
