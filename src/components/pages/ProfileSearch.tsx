import { useState } from "react";
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

const ProfileSearch = (props: ProfileSearchProps) => {
  const [myData, setMyData] = useState<any>([]);
  // const [myData1, setMyData1] = useState<any>([]);

  // useEffect(() => {
  //   onSnapshot(collection(db, "userdata"), (snapshot) => {
  //     setMyData(snapshot.docs.map((doc) => doc.data()));
  //   });

  // }, []);

  useEffect(() => {
    fetchdata();
  }, []);

  let fetchdata = async () => {
    const response = await fetch("http://localhost:8000/basic-info", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    let res = await response.json();
    console.log(res);
    setMyData(res.basicInfo);
  };
  console.log(myData);
  // console.log(myData1);

  const filteredData = myData.filter(
    (data: any) =>
      (props.religion.toLowerCase() === ""
        ? data.religion.toLowerCase()
        : data.religion.toLowerCase() === props.religion.toLowerCase()) &&
      (props.gender.toLowerCase() === ""
        ? data.gender.toLowerCase()
        : data.gender.toLowerCase() === props.gender.toLowerCase()) &&
      (props.lessAge.toLowerCase() === ""
        ? data.dateOfBirth.substring(0, 4) <= props.greatAge.toLowerCase()
        : data.dateOfBirth.substring(0, 4) >= props.lessAge.toLowerCase()) &&
      (props.greatAge.toLowerCase() === ""
        ? data.dateOfBirth.substring(0, 4) >= props.lessAge.toLowerCase()
        : data.dateOfBirth.substring(0, 4) <= props.greatAge.toLowerCase())
  );

  console.log(filteredData);

  // const myData1 = ["name", "fname"];

  // const filteredData = myData.filter(
  //   (data: any) =>
  //     // (props.gender === '' || props.religion=== '' || props.lessAge==='' || props.greatAge === '' ? data.gender: '') &&
  //     (props.religion.toLowerCase() === ""
  //       ? data.religion.toLowerCase()
  //       : data.religion === props.religion.toLowerCase()) &&
  //     (props.gender.toLowerCase() === ""
  //       ? data.gender.toLowerCase()
  //       : data.gender.toLowerCase() === props.gender.toLowerCase()) &&
  //     (props.lessAge.toLowerCase() === ""
  //       ? data.born_year <= props.greatAge.toLowerCase()
  //       : data.born_year >= props.lessAge) &&
  //     (props.greatAge.toLowerCase() === ""
  //       ? data.born_year >= props.lessAge.toLowerCase()
  //       : data.born_year <= props.greatAge)

  //       // (props.lessAge.toLowerCase() === "" || props.greatAge.toLowerCase() === '' ? data.born_year.toLowerCase(): '')
  //   // data.born_year >= props.lessAge &&
  //   // data.born_year <= props.greatAge
  // );
  // console.log(filteredData);

  console.log(props.gender, props.lessAge, props.greatAge, props.religion);
  return (
    <div>
      <NavbarHead />
      <div
        className="text-center profilePage fs-5 mt-4"
        style={{ color: "#ff874b" }}
      >
        * The profiles which appears here are members that match your partner
        preferences
      </div>
      <div className="profileCard">
        {props.gender === "" &&
        props.greatAge === "" &&
        props.lessAge === "" &&
        props.religion === "" ? (
          myData.map((profile: any) => (
            <CardBox
              _id={profile._id}
              name={profile.firstName + " " + profile.lastName}
              ageAndReligion={
                profile.dateOfBirth.substring(0, 4) + " " + profile.religion
              }
              address={profile.address}
              education={profile.education}
              designation={profile.designation}
              image={profile.image}
            />
          ))
        ) : filteredData.length > 0 ? (
          filteredData.map((profile: any) => (
            <CardBox
              _id={profile._id}
              name={profile.firstName + " " + profile.lastName}
              ageAndReligion={
                profile.dateOfBirth.substring(0, 4) + " " + profile.religion
              }
              address={profile.address}
              designation={profile.designation}
              image={profile.image}
            />
          ))
        ) : (
          <h1 style={{ color: "red" }}>Sorry, No Data Available</h1>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProfileSearch;
