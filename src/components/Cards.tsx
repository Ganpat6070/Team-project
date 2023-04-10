import { useState } from "react";
import { Table } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function CardBox(props: string | any) {


  const navigate = useNavigate();
  const filteredData = localStorage.getItem("filteredData");
  const getlogin = localStorage.getItem("login");
  console.log(filteredData);

  const handleDetails = (id: any): any => {
    if (getlogin === "true") {
      navigate(`/profileDetails/${id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <Card
      className="d-flex justify-content-between"
      style={{ width: "25rem", textAlign: "center" }}
    >
      <Card.Img
        variant="top"
        src={props.image ? props.image: "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg"}
        style={{ filter: getlogin ? "none" : "blur(5px)" }}
      />

      <Card.Body>
        
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.ageAndReligion}</Card.Text>
        <p>
          {" "}
          <b>Address : </b>&nbsp;&nbsp;{props.address}
        </p>
        <Card.Text>{props.education}</Card.Text>

        <Card.Text>{props.designation}</Card.Text><br/>
        <p>
          {" "}
          <b>Profile_ID : </b>&nbsp;&nbsp;{props.id}
        </p>
        {/* <Card.Text>{props._id}</Card.Text> */}

        {/* {props.education.map((edu: string[]) => <Card.Text>{edu}</Card.Text>)} */}

        <Button
          onClick={() => {
            handleDetails(props.id);
          }}
          variant="primary"
          style={{
            cursor: "pointer",
            backgroundColor: "#ff553b",
            border: "none",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s, box-shadow 0.3s",
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = "#ff3300";
            target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = "#ff553b";
            target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
          }}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardBox;
