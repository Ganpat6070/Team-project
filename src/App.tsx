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
              </Routes>
            </div>
          </div>
        </BrowserRouter>
    </div>
  );
} 
// import BasicInfo from "./Profile/BasicInfo";

export default App;
