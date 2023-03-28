import React, { useState } from "react";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/Aboutus";
import Faqs from "./components/pages/Faqs";
import Membership from "./components/pages/Membership";
import RegForm2 from "./components/Register/RegForm";
import Otp from "./components/Register/Otp/Otp";
import Pass from "./components/Register/Pass/Pass";
import ProfileSearch from "./components/pages/ProfileSearch";
import ProfileDetail from "./components/pages/ProfileDetail";
import PersonalInfo from "./components/Profile/PersonalInfo";
import BasicInfo from "./components/Profile/BasicInfo";
import ShowData from "./components/pages/showData";
import AddData from "./components/pages/AddDetails";
import Contactus from "./components/pages/Contactus";
import Mypersonality from "./components/Profile/Mypersonality";
import PrePart from "./components/Profile/PrePart";
import AstroDetails from "./components/Profile/AestroDetails";


function App() {
  const [gender, setGender] = useState<string>("");
  const [lessAge, setLessAge] = useState<string>("");
  const [greatAge, setGreatAge] = useState<string>("");
  const [religion, setReligion] = useState<string>("");

  const pass = (gender:string, lessAge: string, greatAge: string, religion: string) => {
      setGender(gender);
      setLessAge(lessAge);
      setGreatAge(greatAge);
      setReligion(religion);
  }
  return (
    <>
      {" "}
      <div>
        <BrowserRouter>
          <div>
            <div>
              <Routes>
                <Route path="/" element={<Home onPass={pass} />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/pass" element={<Pass />} />
                <Route path="/register" element={<RegForm2 />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/profileSearch" element={<ProfileSearch gender={gender} lessAge={lessAge} greatAge={greatAge} religion={religion} />}/>
                <Route path="/profileDetails" element={<ProfileDetail />} />
                <Route path="/personal-info" element={<PersonalInfo/>} />
                <Route path="/basic-info" element={<BasicInfo/>} />
                <Route path="/mypersonality" element={<Mypersonality/>} />
                <Route path="/prefpart"  element={<PrePart/>}/>
                <Route path="/astrodata" element={<AstroDetails/>} />
                <Route path="/data-info" element={<ShowData/>} />
                <Route path="/data-add" element={<AddData/>} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
