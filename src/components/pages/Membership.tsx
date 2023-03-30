import React from "react";
import NavbarHead from "../navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Membership = () => {
  return (
    <div
      style={{
        backgroundImage: `url("../../image/Maskgroup.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NavbarHead />
      <h1 className="text-center text-white m-4 p-3 font-weight-normal">Membership</h1>
      <div className="d-flex justify-content-center">
        <Card className="m-3" style={{ width: "18rem" }}>
          <Card.Header as="h5">Free</Card.Header>
          <Card.Body>
            <Card.Title>Free</Card.Title>
            <Card.Text>
              View basic profile info
            </Card.Text>
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
  );
};

export default Membership;
