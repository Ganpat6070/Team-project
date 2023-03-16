import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Login() {
  return (
    <Container className="d-flex justify-content-center">
      <Row className="container-xl ">
        <Col className="container-xl" xs={6}>
          <div className="container-xl">
            <img
              className="container-xxl"
              src={require("../../images/login.png")}
              alt=""
            />
          </div>
        </Col>
        <Col className="container-xl" xs={6}>
          <div>
            <h2 className="text-center">Let’s get started now!</h2>
            <h5 className="text-center">Login and find your life partner</h5>
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
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <br />
              <Form.Text className="text-muted">Forgot Password ?</Form.Text>
              <p className="formFieldLink">
                New to PerfectMatch.com ? Register Free
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
