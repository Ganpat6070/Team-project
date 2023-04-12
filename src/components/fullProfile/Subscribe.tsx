import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Subscribe = () => {
  return (
    <>
      <div>
        {/* <div className="text-center fw-bold">Subscribe Now to contact this member</div> */}
       
        <div
          className="d-flex justify-content-lg-evenly"
          style={{
            backgroundColor: "rgb(238, 234, 234)",
            padding: "2rem",
            borderRadius: "4%",
          }}
        >
          <Card className="m-3" style={{ width: "18rem" }}>
            <Card.Header as="h5">Free</Card.Header>
            <Card.Body>
              <Card.Title>Free</Card.Title>
              <Card.Text>View basic profile info</Card.Text>
              <Button className="align-items-center" variant="primary">
                Choose Plan
              </Button>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "18rem" }}>
            <Card.Header as="h5">Gold</Card.Header>
            <Card.Body>
              <Card.Title>₹3,813.80</Card.Title>
              <Card.Text>
                Boost your profile on top in the search results with our Prime
                package.{" "}
              </Card.Text>
              <Button variant="primary">Choose Plan</Button>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "18rem" }}>
            <Card.Header as="h5">Premium</Card.Header>
            <Card.Body>
              <Card.Title>₹5,932.20</Card.Title>
              <Card.Text>
                Make your profile stand out from the rest with our profile
                highlighter.
              </Card.Text>
              <Card.Text>
                Find horoscope compatibility between matching profiles online
              </Card.Text>
              <Button variant="primary">Choose Plan</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
