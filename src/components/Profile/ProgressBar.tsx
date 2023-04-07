import "bootstrap/dist/css/bootstrap.min.css";
// import {stepper} from "bootstrap"
import "./ProgressBar.css";
// import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import NavbarHead from "../navbar";
// import BasicInfo from "./BasicInfo";

const ProgressBar = () => {
  return (
    <>
      <NavbarHead/>
      <div className="steps mt-4">
        <div className="step-item mx-4">
          <Link to="/basic-info">
            <button
              className="px-2 btn-dark mx-5 mt-2 rounded-circle mb-1"
              type="button"
            >
              1
            </button>
          </Link>
          <div className="step-title">Basic Information</div>
        </div>
        <div className="step-item mx-4">
          <Link to="/personal-info">
            <button
              className="px-2 btn-dark mx-5 mt-2 rounded-circle mb-1"
              type="button"
            >
              2
            </button>
          </Link>
          <div className="step-title">Personal Information</div>
        </div>
        <div className="step-item mx-4">
          <Link to="/prefpart">
            <button
              className="px-2 btn-dark mx-5 mt-2 rounded-circle mb-1"
              type="button"
            >
              3
            </button>
          </Link>
          <div className="step-title">Preferred Partner</div>
        </div>
        <div className="step-item mx-4">
          <Link to="/mypersonality">
            <button
              className="px-2 btn-dark mx-5 mt-2 rounded-circle mb-1"
              type="button"
            >
              4
            </button>
          </Link>
          <div className="step-title">My Personality</div>
        </div>
        <div className="step-item mx-4">
          <Link to="/astrodata">
            <button
              className="px-2 btn-dark mx-5 mt-2 rounded-circle mb-1"
              type="button"
            >
              5
            </button>
          </Link>
          <div className="step-title">Astrological Informations</div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
