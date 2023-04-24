import { useState } from "react";
import CardBox from "../Cards";
import NavbarHead from "../navbar";
import Footer from "./footer";
import "./ProfileSearch.css";
// import { dummyData } from "../dummy";

import db from "../firebase";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import Pagination from "react-bootstrap/Pagination";
// import loadingGif from '../../Pendulum.gif'
import { InfinitySpin } from "react-loader-spinner";

type ProfileSearchProps = {
  gender: string;
  lessAge: string;
  greatAge: string;
  religion: string;
};

const ProfileSearch = (props: ProfileSearchProps) => {
  const [myData, setMyData] = useState<any>([]);
  const [authorization, setauthorization] = useState("");
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    // onSnapshot(collection(db, "userdata"), (snapshot) => {
    //   setMyData(snapshot.docs.map((doc) => doc.data()));
    // });

    fetchdata();
  }, []);

  const tokenData = localStorage.getItem("login");
  // {tokenData ? "" : ""}

  let fetchdata = async () => {
    const response = await fetch("http://localhost:8000/get-profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let res = await response.json();
    console.log(res.msg);
    setMyData(res.profile);
    setLoader(false);
  };
  console.log("mydata", myData);

  const filteredData = myData.filter(
    (data: any) =>
      (props.religion === null ||
      props.religion === undefined ||
      props.religion.toLowerCase() === ""
        ? true
        : data.religion.toLowerCase() === props.religion.toLowerCase()) &&
      (props.gender === null ||
      props.gender === undefined ||
      props.gender.toLowerCase() === ""
        ? true
        : data.gender.toLowerCase() === props.gender.toLowerCase()) &&
      (props.lessAge === null ||
      props.lessAge === undefined ||
      props.lessAge.toLowerCase() === ""
        ? true
        : data.dateOfBirth.substring(0, 4) >= props.lessAge) &&
      (props.greatAge === null ||
      props.greatAge === undefined ||
      props.greatAge.toLowerCase() === ""
        ? true
        : data.dateOfBirth.substring(0, 4) <= props.greatAge),
  );

  console.log("filter data", filteredData);
  // console.log(filteredData.dateOfBirth.substring(0,4));

  const [currentpage, setCurrentpage] = useState(1);
  const recordsperpage = 6;
  const lastIndex = currentpage * recordsperpage;
  const firstIndex = lastIndex - recordsperpage;
  const records = filteredData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredData.length / recordsperpage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  console.log(props.gender, props.lessAge, props.greatAge, props.religion);

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
    <div>
      <NavbarHead />
      <div
        className="text-center profilePage fs-5 mt-4"
        style={{ color: "#ff874b" }}
      >
        * The profiles which appears here are members that match your partner
        preferences
      </div>

      {/* console.log(data); */}
      <div className="profileCard">
        {props.gender === "" &&
        props.greatAge === "" &&
        props.lessAge === "" &&
        props.religion === "" ? (
          myData.map((profile: any) => (
            <CardBox
              id={profile._id}
              name={
                (profile.firstName ? profile.firstName : " ") +
                " " +
                (profile.middleName ? profile.middleName : "") +
                " " +
                (profile.lastName ? profile.lastName : "")
              }
              ageAndReligion={
                profile.dateOfBirth.substring(0, 4) + " " + profile.religion
              }
              address={profile.address ? profile.address : ""}
              education={profile.education ? profile.education.join(", ") : ""}
              designation={profile.designation ? profile.designation : ""}
              image={
                profile.image
                  ? profile.image
                  : "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg"
              }
            />
          ))
        ) : filteredData.length > 0 ? (
          filteredData.map((profile: any) => (
            <>
              <CardBox
                id={profile._id}
                name={
                  (profile.firstName ? profile.firstName : " ") +
                  " " +
                  (profile.middleName ? profile.middleName : "") +
                  " " +
                  (profile.lastName ? profile.lastName : "")
                }
                ageAndReligion={
                  profile.dateOfBirth.substring(0, 4) + " " + profile.religion
                }
                address={profile.address ? profile.address : ""}
                education={
                  profile.education ? profile.education.join(", ") : ""
                }
                designation={profile.designation ? profile.designation : ""}
                image={
                  profile.image
                    ? profile.image
                    : "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg"
                }
              />
              {/* <nav>
                <ul className="pagination">
                  <li className="">
                    <a href="#" className="page-link">Prev</a>
                  </li>
                  {
                    numbers.map((n,i)=>(
                      <li className="page-item"></li>
                    ))
                  }
                </ul>
              </nav> */}
            </>
          ))
        ) : (
          <div className="text-center fs-1 text-danger">
            Sorry ! No Data Available
          </div>
        )}
      </div>
      {/* <Pagination size="lg">{items}</Pagination> */}
      <Footer />
    </div>
  );
};

export default ProfileSearch;
