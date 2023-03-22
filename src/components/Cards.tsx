import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function CardBox() {
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
    <Card style={{ width: "18rem", textAlign: "center" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Bride</Card.Title>
        <Card.Text>19 Years, Business, Mumbai, India</Card.Text>

        <Button onClick={handleDetails} variant="primary">
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardBox;
