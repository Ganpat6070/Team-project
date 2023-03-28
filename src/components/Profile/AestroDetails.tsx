import "./AestroDetails.css";
import ProgressBar from "./ProgressBar";
// import ProgressBar from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import NavbarHead from "../navbar";

const AstroDetails = () => {
  const submitHandler = (e: any) => {
    e.preventDefault();
    //           if(DOB.current){
    //             console.log(DOB.current.value);
    //           }
    //           if(Cast.current){
    //             console.log(Cast.current.value);
    //           }
    //           if(Height.current){
    //             console.log(Height.current.value);
    //           }
  };

  return (
    <div
      className="background_image"
      style={{
        backgroundImage: `url("../../image/BG.png")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <NavbarHead />
      <ProgressBar />
      <div
        style={{ width: "55%" }}
        className="container-sm my-5 bg-light rounded-5 border border-dark p-3"
      >
        <form onSubmit={submitHandler} className="mx-2 my-2">
          <small
            className="mt-0 text-break font-italic"
            style={{ marginLeft: "78%", fontStyle: "italic" }}
          >
            <small className="text-danger">*</small>Mandatory Fields
          </small>
          <p
            className="fs-3 text-break
"
            style={{ color: "#6E6E6E" }}
          >
            Aestrological Informations
            <small
              className="p-3 text-sm text-break"
              style={{ fontSize: "15px" }}
            >
              ( You can create your free horoscope on PerfectMatch )
            </small>
          </p>
          <Row>
            <Col>
              <label htmlFor="">
                Date Of Birth<span className="text-danger">*</span>
              </label>
              <input type="date" />
            </Col>

            <Col>
              <label htmlFor="">Time Of Birth</label>
              <br />
              <select name="" id="">
                <option value="" hidden>
                  HH
                </option>
                <option value=""></option>
              </select>
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>

          <hr className="mb-5" />

          <Link to="\">
            <button
              className="btn btn-light text-white btn-xl mt-2"
              type="button"
              onClick={submitHandler}
              style={{ backgroundColor: "#fb9232" }}
            >
              Save & Continue
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AstroDetails;
