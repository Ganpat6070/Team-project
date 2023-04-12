import "bootstrap/dist/css/bootstrap.min.css";
// import {stepper} from "bootstrap"
import "./ProgressBar.css";
// import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import NavbarHead from "../navbar";
import { useState } from "react";
// import BasicInfo from "./BasicInfo";

const ProgressBar = () => {
  // const [activeStep, setActiveStep] = useState(1);
  // const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // const steps = [
  //   { label: "Step 1" },
  //   { label: "Step 2" },
  //   { label: "Step 3" },
  //   { label: "Step 4" },
  //   { label: "Step 5" },
  // ];
  
  // interface StepProps {
  //   active: boolean;
  //   completed: boolean;
  //   label: string;
  // }

  // function Step({ active, completed, label }: StepProps) {
  //   return (
  //     <div
  //       className={`step ${active ? "active" : ""} ${
  //         completed ? "completed" : ""
  //       }`}
  //     >
  //       {label}
  //     </div>
  //   );
  // }

  // const handleStepClick = (step : number) => {
  //   if (completedSteps.includes(step)) {
  //     setActiveStep(step + 1);
  //   }
  // };

  return (
    <>
      <NavbarHead />

      {/* <div className="progress">
        {steps.map((step, index) => (
          <Step
            key={index}
            label={step.label}
            active={index + 1 === activeStep}
            completed={completedSteps.includes(index + 1)}
            onClick={() => handleStepClick(index + 1)}
          />
        ))}
      </div> */}
  <div className="progressLine"></div>
      <div className="buttons"></div>
      <div className="steps mt-4">
        <div className="step-item mx-4">
            <button
              className="px-2 btn-dark mx-5 mt-2 rounded-circle mb-1"
              type="button"
            >
              1
            </button>
          <div className="step-title">Basic Information</div>
        </div>
        <div className="step-item mx-4">
          <button
            className="px-2 btn-dark mx-5 mt-2 rounded-circle mb-1"
            type="button"
          >
            2
          </button>
          <div className="step-title">Personal Information</div>
        </div>
        <div className="step-item mx-4">
          <button
            className="px-2 btn-dark mx-5 mt-2 rounded-circle mb-1"
            type="button"
          >
            3
          </button>
          <div className="step-title">Preferred Partner</div>
        </div>
        <div className="step-item mx-4">
          <button
            className="px-2 btn-dark mx-5 mt-2 rounded-circle mb-1"
            type="button"
          >
            4
          </button>
          <div className="step-title">My Personality</div>
        </div>
        <div className="step-item mx-4">
          <button
            className="px-2 btn-dark mx-5 mt-2 rounded-circle mb-1"
            type="button"
          >
            5
          </button>
          <div className="step-title">Astrological Informations</div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
