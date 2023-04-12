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
import { InfinitySpin } from "react-loader-spinner";

type Props = {};

const ProfileDetail = (props: Props) => {
  const [dummy, setDummy] = useState<Number>(1);
  const [data, setData] = useState<any>({});
  const [loader, setLoader] = useState<boolean>(true);

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
    setLoader(false);
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  console.log("mera data", data);

  // Converts age based on date calendar
  const dateOfBirth = new Date(data.dateOfBirth);
  const ageInMilliseconds = Date.now() - dateOfBirth.getTime();
  const ageInYears = new Date(ageInMilliseconds).getUTCFullYear() - 1970;

  if (loader) {
    return (
      <div
        style={{
          width: "120px",
          height: "120px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <InfinitySpin width="200" color="rgb(255, 85, 59)" />
      </div>
    );
  }
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
              {(data.firstName ? data.firstName : " ") +
                " " +
                (data.middleName ? data.middleName : " ") +
                " " +
                (data.lastName ? data.lastName : " ")}
            </Card.Title>
            <Card.Text>
              Age : &nbsp;&nbsp;&nbsp;{ageInYears ? ageInYears : "N/A"}
            </Card.Text>
            <Card.Text>
              Religion : {data.religion ? data.religion : "N/A"}
            </Card.Text>
            <Card.Text>
              Profession : {data.designation ? data.designation : "N/A"}
            </Card.Text>
            <Card.Text>
              Marital Status : {data.maritalStatus ? data.maritalStatus : "N/A"}
            </Card.Text>
            <Card.Text>
              City : {data.cityState ? data.cityState : "N/A"}
            </Card.Text>
            <Card.Text>
              Bio Data : {data.aboutMe ? data.aboutMe : "N/A"}
            </Card.Text>
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
          <ul className="d-flex p-1 mx-3" style={{ listStyle: "none", justifyContent: 'center' }}>
            <li
              className="mt-2 mx-2"
              onClick={() => setDummy(1)}
              style={{
                backgroundColor: dummy === 1 ? "#fff" : "transparent",
                borderRadius: "5px",
                color: dummy === 1 ? "#fb4d56" : "#fff",
                cursor: "pointer",
                padding: "10px",
              }}
            >
              Basic Info
            </li>
            <li
              className="mt-2 mx-2"
              onClick={() => setDummy(2)}
              style={{
                backgroundColor: dummy === 2 ? "#fff" : "transparent",
                borderRadius: "5px",

                color: dummy === 2 ? "#fb4d56" : "#fff",
                cursor: "pointer",
                padding: "10px",
              }}
            >
              Religious Info
            </li>
            <li
              className="mt-2 mx-2"
              onClick={() => setDummy(3)}
              style={{
                backgroundColor: dummy === 3 ? "#fff" : "transparent",
                borderRadius: "5px",

                color: dummy === 3 ? "#fb4d56" : "#fff",
                cursor: "pointer",
                padding: "10px",
              }}
            >
              Education and Career
            </li>
            <li
              className="mt-2 mx-2"
              onClick={() => setDummy(4)}
              style={{
                backgroundColor: dummy === 4 ? "#fff" : "transparent",
                borderRadius: "5px",

                color: dummy === 4 ? "#fb4d56" : "#fff",
                cursor: "pointer",
                padding: "10px",
              }}
            >
              My Family
            </li>
            <li
              className="mt-2 mx-2"
              onClick={() => setDummy(5)}
              style={{
                backgroundColor: dummy === 5 ? "#fff" : "transparent",
                borderRadius: "5px",

                color: dummy === 5 ? "#fb4d56" : "#fff",
                cursor: "pointer",
                padding: "10px",
              }}
            >
              My Interest and Hobbies
            </li>
            <li
              className="mt-2 mx-2"
              onClick={() => setDummy(6)}
              style={{
                backgroundColor: dummy === 6 ? "#fff" : "transparent",
                borderRadius: "5px",

                color: dummy === 6 ? "#fb4d56" : "#fff",
                cursor: "pointer",
                padding: "10px",
              }}
            >
              My Contact Info
            </li>
            <li
              className="mt-2 mx-2"
              onClick={() => setDummy(7)}
              style={{
                backgroundColor: dummy === 7 ? "#fff" : "transparent",
                borderRadius: "5px",

                color: dummy === 7 ? "#fb4d56" : "#fff",
                cursor: "pointer",
                padding: "10px",
              }}
            >
              Subscribe Now
            </li>
          </ul>
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
