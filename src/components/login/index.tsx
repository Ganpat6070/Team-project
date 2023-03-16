import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";

function Login() {
  return (
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

                <Form>
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="abc@xyz.com" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="********" />
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
                    <Button variant="primary" size="lg">
                      Login
                    </Button>
                  </div>
                  <br />
                  <p className="text-center text-light">Forgot Password ?</p>
                  <p className="text-white text-center formFieldLink">
                    New to PerfectMatch.com ? Register Free
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
                    className="btn btn-primary btn-lg btn-google btn-block btn-outline"
                    href="/#"
                  >
                    <img src="../../image/google-logo.png" alt="" />{" "}
                    Registration Using Google
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
