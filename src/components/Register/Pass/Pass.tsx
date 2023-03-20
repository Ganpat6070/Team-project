import { Carousel } from "react-bootstrap";
import "./Pass.css";

const Pass = () => {
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
                <h2>Complete Your Registration</h2>
                <p>For Purpose of Your Registration Password is Compalsory</p>
                <form>
                  {/* <div className="form-group">
                    <label>Enter Your OTP</label>
                    <input type="text" id="" name="name" required />
                  </div> */}
                  <div className="form-group">
                    <label className="password" htmlFor="password">Enter Your Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id=""
                      // aria-describedby="emailHelp"
                      placeholder="*******"
                    />
                    <label className="password" htmlFor="cpassword">Confirm Your Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="cpassword"
                      // aria-describedby="emailHelp"
                      placeholder="*******"
                    />
                    <small id="password" className="form-text text-muted">
                      We'll never share your details with anyone else.
                    </small>
                  </div>
                  <div className="myform-button">
                    <button className="myform-btn">Set Password</button>
                  </div>
                  <p className="securitytext">
                    <img
                      className="securitylogo"
                      src="../../../image/security.png"
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
