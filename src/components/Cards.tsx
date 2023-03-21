import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardBox() {
  const filteredData = localStorage.getItem("filteredData");
  console.log(filteredData);

  return (
    <Card style={{ width: "18rem", textAlign: "center" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Bride</Card.Title>
        <Card.Text>19 Years, Business, Mumbai, India</Card.Text>
        <Link to="/profileDetails">
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardBox;
