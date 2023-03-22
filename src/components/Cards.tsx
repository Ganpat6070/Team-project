import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function CardBox(props: string | any) {
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
  };;

  return (
    <Card  className="d-flex justify-content-between" style={{ width: "18rem", textAlign: "center" }}>
      <Card.Img variant="top" src={props.image} style={{ filter: 'blur(5px)'}}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
          <Button onClick={handleDetails} variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default CardBox;
