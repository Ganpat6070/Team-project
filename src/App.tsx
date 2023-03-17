import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegForm2 from "./Registration/RegForm2";
import Login from "./login";
import Otp from "./Registration/Otp/Otp"
import Pass from "./Registration/Pass/Pass";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Router>
      <Route path="/pass" element={<Pass />} />
      <Route path="/" element={<RegForm2 />} />
      <Route path="/otp" element={<Otp />} />
      </Router> */}

      <h1 className="d-flex justify-content-center p-2">Matrimony Site</h1>
      {/* <RegForm2/> */}
      {/* <Otp/> */}
      <Pass/>
      {/* <Login /> */}
    </div>
  );
}

export default App;
