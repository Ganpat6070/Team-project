import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardBox(props: string | any) {
  const filteredData = localStorage.getItem("filteredData");
  console.log(filteredData);

  return (
    <Card  className="d-flex justify-content-between" style={{ width: "18rem", textAlign: "center" }}>
      <Card.Img variant="top" src={props.image} style={{ filter: 'blur(5px)'}}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Link to="/profileDetails">
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardBox;
