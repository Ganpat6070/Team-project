import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import BasicInfomation from "../fullProfile/BasicInfo";
import Contact from "../fullProfile/Contact";
import Education from "../fullProfile/Education";
import Interest from "../fullProfile/Interest";
import MyFamily from "../fullProfile/MyFamily";
import ReligiousInfo from "../fullProfile/ReligiousInfo";
import Subscribe from "../fullProfile/Subscribe";
import NavbarHead from "../navbar";

import { useParams } from "react-router-dom";

type Props = {};

const ProfileDetail = (props: Props) => {
  const [dummy, setDummy] = useState<Number>(1);
  const [data, setData] = useState<any>({});

  const params = useParams();

  console.log(params);

  const fetchUsersData = async () => {
    let response = await fetch(`http://localhost:8000/profile/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    setData(res.profile);
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  console.log("mera data", data);

  // Converts age based on date calendar
  const dateOfBirth = new Date(data.dateOfBirth);
  const ageInMilliseconds = Date.now() - dateOfBirth.getTime();
  const ageInYears = new Date(ageInMilliseconds).getUTCFullYear() - 1970;

  return (
    <>
      <NavbarHead />
      <div style={{ paddingTop: "2%" }}>
        <Card
          className="bg-dark text-white text-center"
          style={{
            width: "80%",
            marginLeft: "10%",
            borderTopLeftRadius: "35px",
            borderTopRightRadius: "35px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            boxShadow: "none",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Card.Img
            // src="../../image/png/girl31.png"
            src={
              data.image
                ? data.image
                : "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg"
            }
            style={{
              borderRadius: "20px",
              width: "400px",
              height: "400px",
              margin: "40px 60px",
            }}
            alt="Profile Image of the User"
          />

          <Card.ImgOverlay
            className="text-start"
            style={{ borderRadius: "20px", position: "relative" }}
          >
            <Card.Title className="my-4">
              Name : &nbsp;&nbsp;&nbsp;
              {data.firstName
                ? data.firstName
                : " " + " " + data.middleName
                ? data.firstName
                : " " + " " + data.lastName
                ? data.firstName
                : " "}
            </Card.Title>
            <Card.Text>Age : &nbsp;&nbsp;&nbsp;{ageInYears ? ageInYears : "N/A"}</Card.Text>
            <Card.Text>Religion : {data.religion ? data.religion : "N/A" }</Card.Text>
            <Card.Text>Profession : {data.designation ? data.designation : "N/A"}</Card.Text>
            <Card.Text>Marital Status : {data.maritalStatus ? data.maritalStatus : "N/A"}</Card.Text>
            <Card.Text>City : {data.cityState ? data.cityState : "N/A"}</Card.Text>
            <Card.Text>Bio Data : {data.aboutMe ? data.aboutMe : "N/A"}</Card.Text>
          </Card.ImgOverlay>
        </Card>

        <div
          style={{
            width: "80%",
            marginLeft: "10%",
            backgroundImage: "linear-gradient(to right, #ff7e47, #fb4d56)",
            textAlign: "center",
          }}
        >
          <li className="d-flex p-1">
            <ul className="mt-2" onClick={() => setDummy(1)}>
              Basic Info
            </ul>
            <ul className="mt-2" onClick={() => setDummy(2)}>
              Religious Info
            </ul>
            <ul className="mt-2" onClick={() => setDummy(3)}>
              Education and Career
            </ul>
            <ul className="mt-2" onClick={() => setDummy(4)}>
              My Family
            </ul>
            <ul className="mt-2" onClick={() => setDummy(5)}>
              My Interest and Hobbies
            </ul>
            <ul className="mt-2" onClick={() => setDummy(6)}>
              My Contact Info
            </ul>
            <ul className="mt-2" onClick={() => setDummy(7)}>
              Subscribe Now
            </ul>
          </li>
        </div>
        <div style={{ width: "80%", marginLeft: "9%", padding: "2%" }}>
          {dummy === 1 && <BasicInfomation data={data} />}
          {dummy === 2 && <ReligiousInfo data={data} />}
          {dummy === 3 && <Education data={data} />}
          {dummy === 4 && <MyFamily data={data} />}
          {dummy === 5 && <Interest data={data} />}
          {dummy === 6 && <Contact data={data} />}
          {dummy === 7 && <Subscribe />}
        </div>
      </div>
    </>
  );
};

export default ProfileDetail;
