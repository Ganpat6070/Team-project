import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function Login() {
  return (
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img
                src={require("../../images/login.jpg")}
                alt="Sample photo"
                className="img-fluid"
                // style={{border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;}}
              />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-2 text-center">Let’s get started now!</h3>
                <h5 className="mb-5 text-center">
                  Login and find your life partner
                </h5>

                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Remember me on this device"
                    />
                  </Form.Group>
                  <Button
                    className="mb-5 text-center"
                    variant="primary"
                    type="submit"
                  >
                    Submit
                  </Button>
                  <br />
                  <Form.Text className="text-muted">
                    Forgot Password ?
                  </Form.Text>
                  <p className="formFieldLink">
                    New to PerfectMatch.com ? Register Free
                  </p>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
