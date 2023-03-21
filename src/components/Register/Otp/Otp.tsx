import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Otp.css";

const Otp = () => {
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
                <form>
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
                      // aria-describedby="emailHelp"
                      placeholder="000000"
                    />
                    <small id="otp" className="form-text text-muted">
                      We'll never share your details with anyone else.
                    </small>
                  </div>
                  {/* <div className="form-group">
                                <input type="password" id="" name="password" required/>
                                <label>password</label>
                            </div> */}
                  <div className="myform-button">
                    <button className="myform-btn">
                      <Link to="/pass">Sign In</Link>
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
