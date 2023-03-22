import React from "react";
import CardBox from "../Cards";
import NavbarHead from "../navbar";
import Footer from "./footer";
import "./ProfileSearch.css";

import { dummyData } from "../dummy";

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
        {dummyData.map((profile) => (
          <CardBox name={profile.name} description={profile.born_year + " " + profile.religion} image={profile.image} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProfileSearch;
