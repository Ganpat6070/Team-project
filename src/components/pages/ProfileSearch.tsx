import React from "react";
import CardBox from "../Cards";
import NavbarHead from "../navbar";
import Footer from "./footer";
import "./ProfileSearch.css";

const ProfileSearch = () => {
  return (
    <div>
      <NavbarHead />
      <div className="text-center profilePage">
        * The profiles which appears here are members that match your partner
        preferences
      </div>
      {/* console.log(data); */}
      <div className="profileCard">
        <CardBox />
      </div>
      <Footer />
    </div>
  );
};

export default ProfileSearch;
