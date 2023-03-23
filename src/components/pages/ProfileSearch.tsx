import React, { useState } from "react";
import CardBox from "../Cards";
import NavbarHead from "../navbar";
import Footer from "./footer";
import "./ProfileSearch.css";

import { dummyData } from "../dummy";

import db from "../firebase";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";

type ProfileSearchProps = {
  gender: string;
  lessAge: string;
  greatAge: string;
  religion: string;
};

// interface filteredDataProps extends ProfileSearchProps {
//   born_year: string;
// }

const ProfileSearch = (props: ProfileSearchProps) => {
  const [myData, setMyData] = useState<any>([]);

  useEffect(() => {
    onSnapshot(collection(db, "userdata"), (snapshot) => {
      setMyData(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  console.log(myData);

  const filteredData = myData.filter(
    (data: any) =>
      (props.religion.toLowerCase() === 'any' ? data.religion.toLowerCase(): data.religion === props.religion.toLowerCase()) &&
      data.gender.toLowerCase() === props.gender.toLowerCase() &&
      data.born_year >= props.lessAge &&
      data.born_year <= props.greatAge
  );

  // return (
  //   data.gender === props.gender.toLowerCase() &&
  //   data.born_year >= props.lessAge &&
  //   data.born_year <= props.greatAge &&
  //   (props.religion === "any"
  //     ? data.religion
  //     : data.religion === props.religion.toLowerCase())
  // );

  console.log(filteredData);

  console.log(props.gender, props.lessAge, props.greatAge, props.religion);

  return (
    <div>
      <NavbarHead />
      <div className="text-center profilePage">
        * The profiles which appears here are members that match your partner
        preferences
      </div>
      {/* console.log(data); */}
      <div className="profileCard">
        {filteredData.map((profile: any) => (
          <CardBox
            name={profile.name}
            description={profile.born_year + " " + profile.religion}
            image={profile.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProfileSearch;
