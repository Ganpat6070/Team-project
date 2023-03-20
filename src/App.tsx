import React from "react";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/Aboutus";
import Faqs from "./components/pages/Faqs";
import Membership from "./components/pages/Membership";
import RegForm2 from "./components/Register/RegForm";
import Otp from "./components/Register/Otp/Otp";
import Pass from "./components/Register/Pass/Pass";
import NavLogIN from "./components/pages/login-nav";

function App() {
  return (
    <>
      {" "}
      <div>
        <BrowserRouter>
          <div>
            
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/pass" element={<Pass />} />
                <Route path="/register" element={<RegForm2 />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/home" element={<NavLogIN/>} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
