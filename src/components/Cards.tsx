import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

type ProfileSearchProps = {
  name: string;
  born_year: string;
  religion: string;
  image: string;
};

function CardBox(props: ProfileSearchProps) {
  const navigate = useNavigate();
  const filteredData = localStorage.getItem("filteredData");
  const getlogin = localStorage.getItem("login");

  console.log(filteredData);

  const handleDetails = () => {
    if (getlogin === "true") {
      navigate("/profileDetails");
    } else {
      navigate("/login");
    }
  };

  return (
    <Card
      className="d-flex justify-content-between text-center w-25"
      style={{ transition: ".7s all", borderRadius: "15px" }}
    >
      <Card.Img
        variant="top"
        src={props.image}
        style={{ filter: "blur(5px)" }}
      />

      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Born Year: &nbsp;{props.born_year}</Card.Text>
        <Card.Text>Religion: &nbsp;{props.religion}</Card.Text>
        <Button onClick={handleDetails} variant="primary">
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardBox;
