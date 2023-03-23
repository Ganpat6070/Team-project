import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegForm2 from "./Registration/RegForm2";
import Login from "./login";
import Otp from "./Registration/Otp/Otp"
import Pass from "./Registration/Pass/Pass";
import { Route, Routes } from "react-router";
import { BrowserRouter  } from "react-router-dom";
import BasicInfo from "./Profile/BasicInfo";
import PersonalInfo from "./Profile/PersonalInfo";
import Card from "./Profile/Card1";
import Card3 from "./Profile/Card3";
import PhotoCard from "./Profile/PhotoCard";
function App() {
  return (
    <div>
     <BrowserRouter>
          <div>
            
            <div>
              <Routes>
                
                <Route path="/login" element={<Login />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/pass" element={<Pass />} />
                <Route path="/register" element={<RegForm2 />} />
                <Route path="/personal-info" element={<PersonalInfo/>} />
                <Route path="/basic-info" element={<BasicInfo/>} />
                <Route path="/Card" element={<Card/>} />
                <Route path="/"  element={<PhotoCard/>}/>
                <Route path="/Card3" element={<Card3/>} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
    </div>
  );
} 
// import BasicInfo from "./Profile/BasicInfo";

export default App;
