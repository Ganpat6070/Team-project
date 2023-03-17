import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Home from "./pages/Home";
import Faqs from "./pages/Faqs";
import Gallery from "./pages/Gallery";
import LoginRegister from "./pages/LoginRegister";
import Membership from "./pages/Membership";
import SuccessStories from "./pages/SuccessStories";
import NavbarHead from "./components/NavbarHead";

function App() {
  return (
    <>
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
                <Route path="/loginregister" element={<LoginRegister />} />
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
