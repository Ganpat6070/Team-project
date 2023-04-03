import "./AestroDetails.css";
// import { ProgressBar } from "react-bootstrap";
// import ProgressBar from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Search } from "react-bootstrap-icons";
import PhotoCard from "./PhotoCard";
import ProgressBar from "./ProgressBar";
import NavbarHead from "../navbar";
import { useState } from "react";

const AstroDetails = () => {
  const [adob, setadob] = useState("");
  const [aHours, setaHours] = useState("");
  const [aMinutes, setaMinutes] = useState("");
  const [aSeconds, setaSeconds] = useState("");
  const [aAMPM, setaAMPM] = useState("");
  const [abirthtimeC, setabirthtimeC] = useState("");
  const [aplace, setaplace] = useState("");
  const [alongitude, setalongitude] = useState("");
  const [alatitude, setalatitude] = useState("");
  const [aTimezone, setaTimezone] = useState("");

  const [error, setError] = useState<boolean>(false);

  const astroObject = {
    adob,
    aHours,
    aMinutes,
    aSeconds,
    aAMPM,
    abirthtimeC,
    aplace,
    alongitude,
    alatitude,
    aTimezone,
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    // if (adob === "") {
    //   setError(true);
    // }else{
    //   console.log(astroObject);
    // }
    if (adob === "") {
      setError(true);
    } else {
      console.log(astroObject);
    }
  };

  return (
    <div
      className="background_image"
      style={{
        backgroundImage: `url("../../image/BG.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 -350px",
        width: "100%",
      }}
    >
      {/* <ProgressBar /> */}
      <div className="">
        <NavbarHead />
        <ProgressBar />
        <PhotoCard />
      </div>
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
            Astrological Informations
            <small
              className="p-3 text-sm text-break"
              style={{ fontSize: "15px" }}
            >
              ( You can create your free horoscope on PerfectMatch )
            </small>
          </p>
          <Row>
            {error ? (
              <small className="text-danger">
                {"Please enter the required (*) value"}
              </small>
            ) : null}{" "}
            
            <Col className="px-2 " style={{ marginRight: "-2%" }}>
              <label htmlFor="">
                Date Of Birth<span className="text-danger">*</span>
              </label>
              <br />
              <input
                type="date"
                value={adob}
                style={{ height: "50%" }}
                onChange={(e) => setadob(e.target.value)}
                className="form-control mt-1 py-0"
              />
            </Col>
            <Col
              className="p-1 mt-1 px-2 py-0 "
              style={{ marginLeft: "0%", marginRight: "0%" }}
            >
              <label htmlFor="">Time Of Birth</label>
              <br />
              <select
                className="from-control border rounded bg-white select"
                value={aHours}
                onChange={(e) => setaHours(e.target.value)}
                style={{ width: "22%", marginLeft: "2%" }}
              >
                <option value="" hidden>
                  HH
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                className="bg-white border rounded"
                value={aMinutes}
                onChange={(e) => setaMinutes(e.target.value)}
                style={{ width: "22%", marginLeft: "2%" }}
              >
                <option value="" hidden>
                  MM
                </option>
                {Array.from(Array(60), (_, i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
              <select
                className="bg-white border rounded"
                value={aSeconds}
                onChange={(e) => setaSeconds(e.target.value)}
                style={{ width: "22%", marginLeft: "2%" }}
              >
                <option value="" hidden>
                  SS
                </option>
                <option>1-10</option>
                <option>11-20</option>
                <option>21-30</option>
                <option>31-40</option>
                <option>41-50</option>
                <option>51-60</option>
              </select>
              <select
                className="bg-white border rounded"
                value={aAMPM}
                onChange={(e) => setaAMPM(e.target.value)}
                style={{ width: "22%", paddingLeft: "10px", marginLeft: "2%" }}
              >
                <option value="" hidden>
                  AM/PM
                </option>
                <option>AM</option>
                <option>PM</option>
              </select>
            </Col>
            <Col
              className="px-2 p-0"
              style={{ marginLeft: "0%", marginRight: "0%" }}
            >
              <label htmlFor="">Birth Time Correction</label>
              <br />
              <select
                style={{ height: "50%" }}
                className="form-control p-2 text-dark mt-1 rounded-2 border-secondary form-select bg-white "
                value={abirthtimeC}
                onChange={(e) => setabirthtimeC(e.target.value)}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <label htmlFor="" className="">
                Place of Birth
              </label>
              <br />
              <input
                type="text"
                value={aplace}
                onChange={(e) => setaplace(e.target.value)}
                className=" form-control p-2 text-dark mt-1 rounded-2 border-secondary form-input"
              />
            </Col>
            <Col>
              <label htmlFor="">Longitude</label>
              <br />

              <input
                type="text"
                value={alongitude}
                onChange={(e) => setalongitude(e.target.value)}
                style={{ height: "", backgroundColor: "#eeeeee" }}
                className=" form-control p-2 text-dark mt-1 rounded-2 border-secondary form-input"
              />
              {/* <Search/> */}
              {/* <div className="input-group">
  <span>
    <Search/>
  </span>
  <input type="text" className="form-control" placeholder="Username" />
</div> */}
            </Col>
            <Col>
              <label htmlFor="">Latitude</label>
              <br />
              <input
                type="text"
                value={alatitude}
                onChange={(e) => setalatitude(e.target.value)}
                style={{ height: "", backgroundColor: "#eeeeee" }}
                className="form-control p-2  text-dark mt-1 rounded-2 border-secondary form-input"
              />
            </Col>

            <Col>
              <label htmlFor="">Time Zone</label>
              <br />
              <input
                style={{ border: "1px solid blue", backgroundColor: "#eeeeee" }}
                className=" form-control p-2 text-dark mt-1 rounded-2 border-secondary form-input "
                type="text"
                value={aTimezone}
                onChange={(e) => setaTimezone(e.target.value)}
              />
            </Col>
          </Row>
          <p
            style={{ fontStyle: "italic", fontSize: "15px", color: "#6E6E6E" }}
            className="m1-2 text-secondery"
          >
            *Please Entered all the required field above mentioned
          </p>
          <hr className="mb-5" />

          <Link to="\">
            <button
              className="btn btn-light text-white btn-xl mt-2"
              type="button"
              onClick={submitHandler}
              style={{ backgroundColor: "#fb9232" }}
            >
              Finish
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AstroDetails;
