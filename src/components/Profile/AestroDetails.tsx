import "./AestroDetails.css";
// import { ProgressBar } from "react-bootstrap";
// import ProgressBar from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Search } from "react-bootstrap-icons";
import PhotoCard from "./PhotoCard";
import ProgressBar from "./ProgressBar";

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
      backgroundPosition: "0 -350px",
      width: "100%",
    }}
    >
      {/* <ProgressBar /> */}
      <div className="">
      <ProgressBar/>
      <PhotoCard/>
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
            Aestrological Informations
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
                name=""
                id=""
                style={{ width: "22%", marginLeft: "2%" }}
              >
                <option value="" hidden>
                  HH
                </option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
                <option value="">11</option>
                <option value="">12</option>
              </select>
              <select
                className="bg-white border rounded"
                name=""
                id=""
                style={{ width: "22%" , marginLeft: "2%"  }}
              >
                <option value="" hidden>
                  MM
                </option>
                <option value="">Jan</option>
                <option value="">Feb</option>
                <option value="">Mar</option>
                <option value="">Apr</option>
                <option value="">May</option>
                <option value="">Jun</option>
                <option value="">Jul</option>
                <option value="">Aug</option>
                <option value="">Sep</option>
                <option value="">Oct</option>
                <option value="">Nov</option>
                <option value="">Dec</option>
              </select>
              <select
                className="bg-white border rounded"
                name=""
                id=""
                style={{ width: "22%" , marginLeft: "2%"  }}
              >
                <option value="" hidden>
                  SS
                </option>
                <option value="">1-10</option>
                <option value="">11-20</option>
                <option value="">21-30</option>
                <option value="">31-40</option>
                <option value="">41-50</option>
                <option value="">51-60</option>
              </select>
              <select
                className="bg-white border rounded"
                name=""
                id=""
                style={{ width: "22%", paddingLeft: "10px", marginLeft: "2%" }}
              >
                <option value="" hidden>
                  AM/PM
                </option>
                <option value="">AM</option>
                <option value="">PM</option>
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
                name=""
                id=""
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="">Yes</option>
                <option value="">No</option>
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
                className=" form-control p-2 text-dark mt-1 rounded-2 border-secondary form-input"
              />
            </Col>
            <Col>
              <label htmlFor="">Logitude</label>
              <br />

              <input
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
                type="text"
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
