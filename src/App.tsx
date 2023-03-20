import React from "react";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/Aboutus";
import Contactus from "./components/pages/Contactus";
import Faqs from "./components/pages/Faqs";
import Gallery from "./components/pages/Gallery";
import Membership from "./components/pages/Membership";
import SuccessStories from "./components/pages/SuccessStories";
import RegForm2 from "./components/Register/RegForm";
import Otp from "./components/Register/Otp/Otp";
import Pass from "./components/Register/Pass/Pass";
import NavbarHead from "./components/navbar";


function App() {
  return (
    <>
      {" "}
      <div>
        <BrowserRouter>
          <div>
            <NavbarHead />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/login" element={<Login />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/pass" element={<Pass/>} />
                <Route path="/register" element={<RegForm2/>} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/successstories" element={<SuccessStories />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
