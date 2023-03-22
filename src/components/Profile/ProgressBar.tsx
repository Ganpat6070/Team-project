import "bootstrap/dist/css/bootstrap.min.css";
// import {stepper} from "bootstrap"
import "./ProgressBar.css";
// import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import BasicInfo from "./BasicInfo";

const ProgressBar = () => {
  return (
    <>
      <div className="steps">
        <div className="step-item mx-4">
          <Link to="/basic-info">
            <button className="px-2 btn-dark  mt-2 rounded-circle mb-1" type="button">
              1
            </button>
          </Link>
          <div className="text-white step-title">Basic Information</div>
        </div>
        <div className="step-item mx-4">
          <Link to="/personal-info">
            <button className="px-2 btn-dark  mt-2 rounded-circle mb-1" type="button">
              2
            </button>
          </Link>
          <div className="text-white step-title">Personal Information</div>
        </div>
        <div className="step-item mx-4">
          <button className="px-2 btn-dark  mt-2 rounded-circle mb-1" type="button">
            3
          </button>
          <div className="text-white step-title">Finished</div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
