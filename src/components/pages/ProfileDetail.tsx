import React, { useState } from "react";
import { Card } from "react-bootstrap";
import BasicInfomation from "../fullProfile/BasicInfo";
import Contact from "../fullProfile/Contact";
import Education from "../fullProfile/Education";
import Interest from "../fullProfile/Interest";
import MyFamily from "../fullProfile/MyFamily";
import ReligiousInfo from "../fullProfile/ReligiousInfo";
import Subscribe from "../fullProfile/Subscribe";
import NavbarHead from "../navbar";

type Props = {};

const ProfileDetail = (props: Props) => {
  const [dummy, setDummy] = useState<Number>(1);

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
          }}
        >
          <Card.Img
            src="../../image/png/girl31.png"
            style={{
              borderRadius: "20px",
              width: "400px",
              height: "400px",
              padding: "40px 80px 60px",
            }}
            alt="Full Detail"
          />
          <Card.ImgOverlay
            className="text-start"
            style={{ margin: "5% 29%", borderRadius: "20px" }}
          >
            <Card.Title className="my-4">Name : {}</Card.Title>
            <Card.Text>Age : {}</Card.Text>
            <Card.Text>Religion : {}</Card.Text>
            <Card.Text>Profession : {}</Card.Text>
            <Card.Text>Bio Data : {}</Card.Text>
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
              Subscribe Now to contact this member
            </ul>
          </li>
        </div>
        <div style={{ width: "80%", marginLeft: "9%", padding: "2%" }}>
          {dummy === 1 && <BasicInfomation />}
          {dummy === 2 && <ReligiousInfo />}
          {dummy === 3 && <Education />}
          {dummy === 4 && <MyFamily />}
          {dummy === 5 && <Interest />}
          {dummy === 6 && <Contact />}
          {dummy === 7 && <Subscribe />}
        </div>
      </div>
    </>
  );
};

export default ProfileDetail;
