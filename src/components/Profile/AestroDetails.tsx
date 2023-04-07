import "./AestroDetails.css";
// import { ProgressBar } from "react-bootstrap";
// import ProgressBar from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "react-bootstrap-icons";
import PhotoCard from "./PhotoCard";
import ProgressBar from "./ProgressBar";
import NavbarHead from "../navbar";
import { useState } from "react";
import { toast } from "react-toastify";
import { useReducer } from "react";
import AstroDetailValidation ,{ astroformreducer,astroinitialState , astroFormValidityReducer , astroInitialValidityState} from "../../Validations/AstroDetailValidation";

const AstroDetails = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);

  // User Reducer State for Storing data
  const [astroDetailFormData, setAstroDetailFormData] = useReducer(astroformreducer, astroinitialState);
  const [formValidityData, setFormValidityData] = useReducer(
    astroFormValidityReducer,
    astroInitialValidityState
  );
  
  const [dob, setDob] = useState("");
  const [aHours, setaHours] = useState("");
  const [aMinutes, setaMinutes] = useState("");
  const [aSeconds, setaSeconds] = useState("");
  const [aAMPM, setaAMPM] = useState("AM");
  // const [timeofBirth, setTimeofBirth] = useState("");
  const [timeCorrection, setTimeCorrection] = useState("");
  const [placeofBirth, setPlaceofBirth] = useState("");
  const [logitude, setLogitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [timeZone, setTimeZone] = useState("");

  const atime = aHours + "H " + aMinutes + "M " + aSeconds + "S " + aAMPM;

  const [error, setError] = useState<boolean>(false);

  const astrodata = {
    dob,
    atime,
    timeCorrection,
    placeofBirth,
    logitude,
    latitude,
    timeZone,
  };

  // const time = hours + ":" + minute

  const dobHandler = (e: React.ChangeEvent<HTMLDataElement>) => {
    if (!(e.target.value === "")) {
      setError(false);
      setDob(e.target.value);
    }
    if (e.target.value === "") {
      setError(true);
    }
  };

  let profileid: string | null = localStorage.getItem("profileID");
  const saveData = async () => {
    let response = await fetch("http://localhost:8000/astro-info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        profileid: `${profileid}`,
      },
      body: JSON.stringify({
        dateOfBirth: dob,
        timeOfBirth: atime,
        birthTimeCorrection: timeCorrection,
        placeOfBirth: placeofBirth,
        longitude: logitude,
        latitude: latitude,
        timeZone: timeZone,
      }),
    });
    const res = await response.json();
    if (response.status === 201) {
      setIsLoading(false)
      setButtonLoading(true)
      toast.success("Astro info saved!");
      setTimeout(() => {
        navigate("/finished");
      }, 1500);
    }
    console.log(res);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (dob === "") {
      setError(true);
    } else {
      setError(false);
      saveData();
      console.log(astrodata);
      
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
            <Col className="px-2 " style={{ marginRight: "-2%" }}>
              <label htmlFor="">
                Date Of Birth<span className="text-danger">*</span>
              </label>
              <br />
              <input
                type="date"
                style={{ height: "50%" }}
                // onChange={dobHandler}
                onChange={(e) =>
                  setAstroDetailFormData({ type: "UPDATE_DATE_OF_BIRTH", payLoad: e.target.value })
                }
                // onBlur={(e) => setFormValidityData({type: "VALIDATE_DATE_OF_BIRTH", payLoad: formData})}

                value={dob}
                className="form-control mt-1 py-0"
              />
              {error ? (
                <small className="text-danger ">
                  Date of birth is required
                </small>
              ) : null}
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
                {Array.from(Array(12), (_, i) => (
                  <option key={i}>{i + 1}</option>
                ))}
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
                {Array.from(Array(60), (_, i) => (
                  <option key={i}>{i}</option>
                ))}
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
                onChange={(e) => {
                  setTimeCorrection(e.target.value);
                }}
                style={{ height: "50%" }}
                className="form-control p-2 text-dark mt-1 rounded-2 border-secondary form-select bg-white "
                name=""
                id=""
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
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
                onChange={(e) => {
                  setPlaceofBirth(e.target.value);
                }}
                type="text"
                className="icon form-control p-2 text-dark mt-1 rounded-2 border-secondary form-input"
              />
            </Col>
            <Col>
              <label htmlFor="">Logitude</label>
              <br />

              <input
                onChange={(e) => {
                  setLogitude(e.target.value);
                }}
                type="text"
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
                onChange={(e) => {
                  setLatitude(e.target.value);
                }}
                type="text"
                style={{ height: "", backgroundColor: "#eeeeee" }}
                className="form-control p-2  text-dark mt-1 rounded-2 border-secondary form-input"
              />
            </Col>

            <Col>
              <label htmlFor="">Time Zone</label>
              <br />
              <input
                onChange={(e) => {
                  setTimeZone(e.target.value);
                }}
                style={{ border: "1px solid blue", backgroundColor: "#eeeeee" }}
                className=" form-control p-2 text-dark mt-1 rounded-2 border-secondary form-input "
                type="text"
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

          <Link to="/finished">
            <button
              className="btn btn-light text-white btn-xl mt-2"
              type="button"
              onClick={submitHandler}
              disabled={buttonLoading}

              style={{ backgroundColor: "#fb9232" }}
            >
                {isLoading ? <p className="mb-0">Wait </p> : <p className="mb-0">Finish</p>}

            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AstroDetails;
