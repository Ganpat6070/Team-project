import React from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  Image,
  Card,
} from "react-bootstrap";
import "../cssComponents/Homepage.css";

const Home = () => {
  return (
    <>
      <div className="background_img">
        <div className="frontText">
          <p>Dream it... Believe it... Make it happen!</p>
        </div>
        <div className="selectData col-6">
          <Form className="float-left">
            <Row className="inputLabel">
              <Col>
                <Form.Group controlId="formGridState">
                  <Form.Label>I'm lookig for</Form.Label>
                  <Form.Select size="sm">
                    <option>Bride</option>
                    <option>Fair</option>
                    <option>Dark</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Label>Born Year </Form.Label>
                <Form.Select size="sm">
                  <option>1950</option>
                  <option>1980</option>
                  <option>2000</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Label>&nbsp;</Form.Label>
                <Form.Label>&nbsp;</Form.Label>
              </Col>
              <Col>
                {" "}
                <Form.Label>&nbsp;</Form.Label>
                <div style={{ fontSize: "20px" }}>TO</div>
              </Col>

              <Col>
                <Form.Label>&nbsp;</Form.Label>{" "}
                <Form.Select size="sm">
                  <option>1960</option>
                  <option>1990</option>
                  <option>2005</option>
                </Form.Select>
              </Col>
              <Col>
                {" "}
                <Form.Label>Religion</Form.Label>
                <Form.Select size="sm">
                  <option>Any</option>
                  <option>Hindu</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Label>&nbsp;</Form.Label>
                <Form.Label>&nbsp;</Form.Label>
                <Form.Label>&nbsp;</Form.Label>

                <Button
                  size="sm"
                  style={{ backgroundColor: "orange", width: "120px" }}
                >
                  Let's Find
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>

      <div className="intro">
        <h3 className="fw-bold text-center mt-5">
          PerfectMatch.com - Best Marriage Bureau in Ahmedabad{" "}
        </h3>
        <p className="textIntro text-start">
          PerfectMatch.com, No. 1 Trusted Matrimonial Bureau in India, was
          founded by Miss. Purvangi Shukla with a simple objective to help those
          people who are seeking for best matrimonial bureau service, we have
          lot's of verified brides and grooms profile which will helps you to
          find your real soulmate. we are not just a matrimonial service
          provider but the best specialising in matchmaking.
        </p>
      </div>

      <div className="textandimage">
        <div>
          <img
            src="../../image/joint.png"
            alt="weddingImage"
            style={{
              width: "480px",
              height: "446px",
              top: "1064px",
              left: "134px",
            }}
          />
        </div>
        <div className="combine">
          <p
            style={{
              height: "108px",
              width: "540px",
              left: "645px",
              top: "1063.999755859375px",
              fontSize: "36px",
            }}
          >
            No.1 Trusted Matrimonial Bureau in India
          </p>
          <p className="text2">
            Being from a privileged class there are many things that get sort
            out easily in life, but when it comes to marriage and finding the
            right soul mate, it is the most difficult task. Numerous Best
            Matrimonial Bureau in India are working day and night but their
            approach is the same. The software allows you to tick the checkbox
            and they present the prospective bride and groom to you. Being from
            the elite society, having a privileged background, won’t it be a
            better option than in place of a computer or software acting as an
            most exclusive matchmaking service, there should be a person
            listening constantly?
          </p>
        </div>
      </div>

      <Container>
        <div className="perfectpart">
          <p className="text-lg-center fs-3">Why Choose Perfect Match?</p>
        </div>
        <Row className="mt-5">
          <Col className="pt-xxl-5">
            <div className="">
              <div className="pngImg1"></div>
              <p className="fs-5 symbolText">No.1 & Trusted</p>
              <h6 className="fs-6 lh-1 symbolText">
                No.1 & most trusted matrimony service in India
              </h6>
            </div>
            <div>
              <div className="pngImg2"></div>
              <p className="fs-5 symbolText">100% Secure Payments</p>
              <h6 className="fs-6 lh-1 symbolText">
                Moving your card details to a much more secured place.{" "}
              </h6>
            </div>
            <div>
              <div className="pngImg3"></div>
              <p className="fs-5 symbolText">Trust Pay </p>
              <h6 className="fs-6 lh-1 symbolText">
                100% Payment Protection. Easy Return Policy.
              </h6>
            </div>
          </Col>

          <Col className="pt-xxl-5">
            <div>
              <div className="pngImg4"></div>
              <p className="fs-5 symbolText">Simple & Largest</p>
              <h6 className="fs-6 lh-1 symbolText">
                Increases your chances of meeting the right person.
              </h6>
            </div>
            <div>
              <div className="pngImg5"></div>
              <p className="fs-5 symbolText">Fast & Verified</p>
              <h6 className="fs-6 lh-1 symbolText">
                100% fast, secured, verified mobile numbers
              </h6>
            </div>
            <div>
              <div className="pngImg6"></div>
              <p className="fs-5 symbolText">24X7 Support</p>
              <h6 className="fs-6 lh-1 symbolText">
                Lakhs of Muslims have found their life partner here
              </h6>
            </div>
            <div style={{ width: "auto" }}></div>
          </Col>
        </Row>
      </Container>

      <div className="text-lg-center fs-3 setmargin">
        <p>Find Your Prefect Mate Today</p>
        <Button
          style={{
            backgroundColor: "#27C2D3",
            marginTop: "40px",
            padding: "10px, 16px, 10px, 16px",
          }}
        >
          Register Free
        </Button>
      </div>

      <div className="pt-xxl-5 mt-5">
        <div className="text-center">
          <p className="text-lg-center fs-3">Success Stories</p>
        </div>
        <div className="text-center">
          <p>
            <u className="text-lg-center fs-4">
              Over thousand of success stories
            </u>
          </p>
        </div>

        <div className="d-flex justify-content-center">
        <Card>
                <Card.Img
                    width="328.52px"
                    height="328.52px"
                src="../../public/image/joint.png"
                    alt="" />
                <Card.Body>
                    <Card.Title>Sample Card title</Card.Title>
                    <Button>Action Button</Button>
                </Card.Body>
            </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
