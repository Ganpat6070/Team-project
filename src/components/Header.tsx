import React from 'react'
import { Routes, Route } from "react-router-dom";
import Aboutus from '../pages/Aboutus';
import Contactus from '../pages/Contactus';
import Faqs from '../pages/Faqs';
import Gallery from '../pages/Gallery';
import Home from '../pages/Home';
import Navbar from './NavbarHead';

const Header = () => {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<Contactus />} /> 
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/gallery" element={<Gallery />} />
      {/* <Route path="/aboutus" element={<Log />} /> */}
     

    </Routes>
  </div>
  )
}

export default Header