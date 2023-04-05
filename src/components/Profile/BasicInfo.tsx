import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./BasicInfo.css";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { toast } from "react-toastify";
import PhotoCard from "./PhotoCard";


const BasicInfo = () => {
  // Error Statas for Validatoins
  const [errorbi, setErrorbi] = useState<boolean | string>(false);
  const [errorbi2, setErrorbi2] = useState<boolean | string>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);

  // States for storing enterd information
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setdob] = useState("");
  const [height, setheight] = useState<number>();
  const [weight, setweight] = useState<number>();
  const [mStatus, setmStatus] = useState("");
  const [mTongue, setmTongue] = useState("");
  const [religion, setreligion] = useState("");
  const [cast, setcast] = useState("");
  const [gender, setGender] = useState("");
  const [phyStatus, setphyStatus] = useState("");
  const [aboutme, setAboutme] = useState("");
  const [spokenLanguage, setspokenLanguage] = useState<string[]>([]);
  const [education, setEducation] = useState<string[]>([]);
  const [eduDetails, seteduDetails] = useState("");
  const [schoolName, setschoolName] = useState("");
  const [splace, setsplace] = useState("");
  const [syos, setsyos] = useState("");
  const [collegeName, setcollegeName] = useState("");
  const [course, setcourse] = useState("");
  const [cplace, setcplace] = useState("");
  const [cyos, setcyos] = useState("");
  const [compName, setcompName] = useState("");
  const [designation, setdesignation] = useState("");
  const [wLoc, setwLoc] = useState("");
  const [lcode, setlcode] = useState("");
  const [larea, setlarea] = useState("");
  const [lnum, setlnum] = useState("");
  const [mNumber, setmNumber] = useState("");
  const [email, setemail] = useState("");
  // const [street, setStreet] = useState("");
  const [countery, setCountery] = useState("");
  const [pin, setpin] = useState("");
  const [city, setcity] = useState("");
  const [refname, setrefname] = useState("");
  const [refaddress, setrefaddress] = useState("");
  const [refcontact, setRefcontact] = useState("");
  const [refmobile, setRefmobile] = useState("");
  const [precon, setPrecon] = useState("");
  const [time, setTime] = useState("");
  const [conname, setConname] = useState("");
  const [procre, setProcre] = useState("");
  const [homename, setHomename] = useState("");
  const [slocal, setSlocal] = useState("");

  //Input Value Handling Functions with Validations

  const [age, setAge] = useState("");

  // let token = Cookies.get("Token");
  let token = localStorage.getItem("Token")
  
  // let id = Cookies.get("id");

  const basicinfo: any = {
    fname,
    mname,
    lname,
    dob,
    height,
    weight,
    mStatus,
    mTongue,
    religion,
    cast,
    gender,
    phyStatus,
    aboutme,
    spokenLanguage,
    education,
    schoolName,
    splace,
    syos,
    collegeName,
    course,
    cplace,
    cyos,
    compName,
    designation,
    wLoc,
    lcode,
    larea,
    lnum,
    mNumber,
    email,
    // street,
    countery,
    pin,
    city,
    refname,
    refaddress,
    refcontact,
    refmobile,
    slocal,
    homename,
    procre,
    conname,
    time,
    precon,
  };
  // console.log(basicinfo);

  const fnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setFname(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const mnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setMname(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };
  const lnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setLname(e.target.value);
    // console.log(fname)
    // console.log(e);
    setErrorbi(false);
  };

  const dobHandler = (e: React.ChangeEvent<HTMLDataElement>) => {
    if (!(e.target.value === "")) setdob(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const heightHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setheight(parseInt(e.target.value));
    // console.log(fname)

    setErrorbi(false);
  };

  const weightHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setweight(parseInt(e.target.value));
    // console.log(fname)

    setErrorbi(false);
  };

  const mStatusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setmStatus(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const mTongueHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setmTongue(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const religionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setreligion(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };

  const castHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setcast(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };
  const genderHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setGender(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };
  const phyStatusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setphyStatus(e.target.value);
    // console.log(fname)

    setErrorbi(false);
  };
  const aboutmeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!(e.target.value === "")) setAboutme(e.target.value);
    // console.log(fname)
  };
  const educationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setEducation([...education, value]);
    } else {
      setEducation(education.filter((box) => box !== value));
    }
    // setErrorbi(false);
    setErrorbi(false);
  };
  const spokenLanguageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (!(e.target.value === ""));
    // console.log(fname)
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setspokenLanguage([...spokenLanguage, value]);
    } else {
      setspokenLanguage(spokenLanguage.filter((box) => box !== value));
    }

    setErrorbi(false);
  };
  const eduDetailsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) seteduDetails(e.target.value);

    setErrorbi(false);
  };
  const schoolNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setschoolName(e.target.value);

    setErrorbi(false);
  };
  const splaceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setsplace(e.target.value);

    setErrorbi(false);
  };
  const syosHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setsyos(e.target.value);

    setErrorbi(false);
  };
  const collegeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setcollegeName(e.target.value);

    setErrorbi(false);
  };
  const courseHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setcourse(e.target.value);

    setErrorbi(false);
  };

  const cplaceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setcplace(e.target.value);

    setErrorbi(false);
  };

  const cyosHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setcyos(e.target.value);

    setErrorbi(false);
  };

  const compNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setcompName(e.target.value);

    setErrorbi(false);
  };

  const designationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setdesignation(e.target.value);

    setErrorbi(false);
  };

  const wLocHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setwLoc(e.target.value);

    setErrorbi(false);
  };

  const lcodeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setlcode(e.target.value);

    setErrorbi(false);
  };

  const lareaHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setlarea(e.target.value);

    setErrorbi(false);
  };

  const lnumHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setlnum(e.target.value);

    setErrorbi(false);
  };

  const mNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setmNumber(e.target.value);

    setErrorbi(false);
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setemail(e.target.value);

    setErrorbi(false);
  };

  const pinHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setpin(e.target.value);

    setErrorbi(false);
  };

  const cityHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setcity(e.target.value);

    setErrorbi(false);
  };

  const refnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setrefname(e.target.value);

    setErrorbi(false);
  };

  const refaddressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setrefaddress(e.target.value);

    setErrorbi(false);
  };
  const refcontactHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setRefcontact(e.target.value);

    setErrorbi(false);
  };

  const refmobileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setRefmobile(e.target.value);

    setErrorbi(false);
  };

  const counteryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setCountery(e.target.value);

    setErrorbi(false);
  };

  const slocalHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setSlocal(e.target.value);

    setErrorbi(false);
  };

  const homenameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setHomename(e.target.value);

    setErrorbi(false);
  };

  const procreHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setProcre(e.target.value);

    setErrorbi(false);
  };

  const connameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setConname(e.target.value);

    setErrorbi(false);
  };

  const timeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setTime(e.target.value);

    setErrorbi(false);
  };

  const preconHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.value === "")) setPrecon(e.target.value);

    setErrorbi(false);
  };

  const mStatushandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setmStatus(e.target.value);
    setErrorbi(false);
  };
  const navigate = useNavigate();

  const saveData = async () => {
    let token = localStorage.getItem("Token")
    let response = await fetch("http://localhost:8000/basic-info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "token": `${token}`
      },
      body: JSON.stringify({
        firstName: fname,
        middleName: mname,
        lastName: lname,  
        dateOfBirth: dob,
        height: height,
        weight: weight,
        maritalStatus: mStatus,
        motherTongue: mTongue,
        religion: religion,
        caste: cast,
        gender: gender,
        physicalStatus: phyStatus,
        aboutMe: aboutme,
        spokenLanguages: spokenLanguage,
        education: education,
        educationInDetail: eduDetails,
        schoolName: schoolName,
        schoolPlace: splace,
        yearOfStudySchool: syos,
        collegeName: collegeName,
        course: course,
        placeCollege: cplace,
        yearOfStudyCollege: cyos,
        companyName: compName,
        designation: designation,
        workLocation: wLoc,
        landlineNumber: lcode,
        mobileNumber: mNumber,
        preferredContactType: precon,
        convenientTimeToCall: time,
        contactName: conname,
        email: email,
        profileCreatedBy: procre,
        apartmentName: homename,
        streetLocality: slocal,
        country: countery,
        pinCode: pin,
        cityState: city,
        referenceName: refname,
        address: refaddress,
        contactNumber: refcontact,
      }),
    });
    // const res = await response.json();
    console.log(response);
    let res = await response.json();
    let profileid = res.profileId;
    localStorage.setItem("profileID", profileid)
    if (response.status === 201) {
      setIsLoading(false)
      setButtonLoading(true)
      toast.success("Basic info saved!");
      // navigate("/personal-info");
      setTimeout(() => {
        navigate("/personal-info");
      }, 1500);
    }
    
  };


  const submitHandler = async (e: any) => {
    e.preventDefault();
    if (
      (fname &&
        mname &&
        lname &&
        dob &&
        height &&
        weight &&
        mStatus &&
        mTongue &&
        religion &&
        cast &&
        gender &&
        phyStatus) === ""
    ) {
      setErrorbi(true);
    } else {
      setErrorbi(false);
      console.log(basicinfo);
     saveData()
    };
  }
  
  
  return (
    <>
      <div
        className="background_image"
        style={{
          backgroundImage: `url("../../image/BG.png")`,
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <ProgressBar />
        <PhotoCard />
        <div
          style={{ width: "55%" }}
          className="container-sm my-5 bg-light rounded-5 border border-dark p-3"
        >
          <form className="mx-2 my-2">
            <p
              className="fs-3 
 "
              style={{ color: "#6E6E6E" }}
            >
              Basic Information
            </p>
            {errorbi ? (
              <small className="text-danger ">
                {"Below * filed are required"}
              </small>
            ) : null}
            <Row>
              <Col className="mt-3">
                <label htmlFor="">
                  Fisrt Name <span className="compalsory">*</span>
                  <br />
                </label>
                <input
                  // ref={Cast}

                  onChange={fnameHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </Col>
              <Col className="mt-3">
                <label htmlFor="">
                  Middle Name
                  {/* <span className="compalsory">*</span> <br /> */}
                </label>

                <input
                  type="text"
                  onChange={mnameHandler}

                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </Col>
              <Col className="mt-3">
                <label htmlFor="">Last Name</label>
                <span className="compalsory"> *</span> <br />
                <input
                  type="text"
                  onChange={lnameHandler}
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </Col>
            </Row>
            <div className="row">
              <div className="col-lg-4">
                {/* <div className="form-group"> */}
                <label htmlFor="" className="">
                  Date of Birth <span className="compalsory">*</span>
                  <br />
                </label>
                <input
                  // ref={DOB}
                  onChange={dobHandler}
                  value={dob}
                  // onChange={dobHanlder}
                  type="date"
                  placeholder=""
                  className="form-control text-dark input-xs  mt-1 rounded-2 border-secondary"
                />
              </div>

              <div className="col">
                <label className="mb">
                  Height (FT)<span className="compalsory">*</span>
                  <br />
                </label>
                <select
                  // ref={heightHandler}
                  onChange={heightHandler}
                  className="form-control text-dark mt-1 rounded-2 border-secondary form-select "
                >
                  <option value="" hidden>select</option>
                  <option>4</option>
                  <option>4.5</option>
                  <option>5</option>
                  <option>5.5</option>
                  <option>6</option>
                  <option>6.5</option>
                </select>
              </div>
              <div className="col">
                <label>
                  Weight (KG)
                  <br />
                </label>
                {/* <input type="number" className="form-control mt-1 rounded-2 border-secondary" /> */}
                <select
                  // ref={weightHandler}
                  onChange={weightHandler}
                  className="form-control text-dark mt-1 rounded-2 border-secondary form-select "
                >
                  <option value="" hidden>select</option>
                  <option>40</option>
                  <option>50</option>
                  <option>60</option>
                  <option>70</option>
                  <option>80</option>
                </select>
              </div>
            </div>
            <Row>
              <Col className="mt-3">
                <label>
                  Marital Status<span className="compalsory">*</span>
                  <br />
                </label>
                <select
                  // ref={MStatus}
                  onChange={mStatushandler}
                  className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
                >
                  <option value="" hidden>select</option>
                  <option>Single</option>
                  <option>In-Relationship</option>
                  <option>Devorced</option>
                </select>
              </Col>
              <Col className="mt-3">
                <label>
                  Mother Tongue <span className="compalsory">*</span>
                  <br />
                </label>
                <select
                  // ref={MTongue}
                  onChange={mTongueHandler}
                  className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
                >
                  <option value="" hidden>select</option>
                  <option>Hindi</option>
                  <option>Gujarati</option>
                  <option>English</option>
                </select>
              </Col>
              <Col className="mt-3">
                {" "}
                <label>
                  Religion <span className="compalsory">*</span>
                  <br />
                </label>
                <select
                  // ref={Religion}
                  onChange={religionHandler}
                  className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
                >
                  {" "}
                  <option value="" hidden>select</option>
                  <option>Hinduism</option>
                  <option>Islam</option>
                  <option>Christianity</option>
                  <option>Jainism</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col className="mt-3">
                <label htmlFor="">
                  Caste / Denomination <span className="compalsory">*</span>
                  <br />
                </label>
                <input
                  // ref={Cast}
                  onChange={castHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </Col>
              <Col className="mt-3">
                <label htmlFor="">
                  Gender <span className="compalsory">*</span> <br />
                </label>

                <select
                  onChange={genderHandler}
                  className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
                >
                  <option value="" hidden>select</option>

                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </Col>
              <Col className="mt-3">
                <label htmlFor="">Physical Status</label>
                <input
                  onChange={phyStatusHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </Col>
            </Row>
            <Row>
              <Col className="mt-3">
                <label htmlFor="" className="pt-1 ">
                  About Me <span className="compalsory">*</span>
                  <br />
                </label>
                {/* <input
                  onChange={aboutmeHandler}
                  type="text"
                  className="w-100 p-5 form-control text-dark mt-1 rounded-2 border-secondary"
                /> */}
                <textarea onChange={aboutmeHandler} className="form-control mb-2" id="exampleFormControlTextarea1" ></textarea>

                <p style={{ color: "#6E6E6E", fontStyle: "italic" }}>
                  (Characters Left : 600)
                </p>
              </Col>
              <Col className="mt-3">
                <label htmlFor="">
                  Spoken Language(s) <span className="compalsory">*</span>
                  <br />
                  <span style={{width: "100%"}} className="border border-dark w-5 p-2  h-1 d-inline-block spolang border rounded mt-1">
                    <Row>
                      <Col className="" style={{marginRight:"30px"}}>
                      <label htmlFor="english" className="py-2">
                      <input
                        type="checkbox"
                        id="english"
                        name="language"
                        value="english"
                        className=""
                        checked={spokenLanguage.includes("english")}
                        onChange={spokenLanguageHandler}
                      />
                      &nbsp; English
                    </label>
                    <br />
                    <label htmlFor="gujarati" className="py-2">
                      <input
                        type="checkbox"
                        id="gujarati"
                        name="language"
                        value="gujarati"
                        checked={spokenLanguage.includes("gujarati")}
                        onChange={spokenLanguageHandler}
                      />
                      &nbsp; Gujarati
                    </label>
                   
                    <label htmlFor="hindi" className="py-2">
                      <input
                        type="checkbox"
                        id="hindi"
                        name="language"
                        value="hindi"
                        checked={spokenLanguage.includes("hindi")}
                        onChange={spokenLanguageHandler}
                      />
                      &nbsp; Hindi
                    </label>
                    
                      </Col>
                      <Col style={{marginRight:"30px"}}>
                      <label htmlFor="Kanada" className="py-2">
                      <input
                        type="checkbox"
                        id="Kanada"
                        name="language"
                        value="Kanada"
                        className=""
                        checked={spokenLanguage.includes("Kanada")}
                        onChange={spokenLanguageHandler}
                      />
                      &nbsp; Kanada
                    </label>
                    <br />
                    <label htmlFor="Telugu" className="py-2">
                      <input
                        type="checkbox"
                        id="Telugu"
                        name="language"
                        value="Telugu"
                        checked={spokenLanguage.includes("Telugu")}
                        onChange={spokenLanguageHandler}
                      />
                      &nbsp; Telugu
                    </label>
                    <br />
                    <label htmlFor="Tamil" className="py-2">
                      <input
                        type="checkbox"
                        id="Tamil"
                        name="language"
                        value="Tamil"
                        checked={spokenLanguage.includes("Tamil")}
                        onChange={spokenLanguageHandler}
                      />
                      &nbsp; Tamil
                    </label>
                    
                      </Col>
                    </Row>
                    
                  </span>
                </label>
              </Col>
            </Row>
            <Row>
              <Col className="mt-3">
                <label htmlFor="" className="pt-3">
                  Education <span className="compalsory">*</span>
                  <br />
                </label>

                <span className="border border-dark w-5 p-2  h-1 d-inline-block spolang border rounded mt-1">
                  <Row>
                    <Col>
                      <label htmlFor="M.E" className="py-2">
                        <input
                          type="checkbox"
                          id="M.E"
                          name="education"
                          value="M.E"
                          className=""
                          checked={education.includes("M.E")}
                          onChange={educationHandler}
                        />
                        &nbsp; M.E
                      </label>
                      <br />
                      <label htmlFor="M.Tech" className="py-2">
                        <input
                          type="checkbox"
                          id="M.Tech"
                          name="education"
                          value="M.Tech"
                          checked={education.includes("M.Tech")}
                          onChange={educationHandler}
                        />
                        &nbsp; M.Tech
                      </label>
                      <br />
                      <label htmlFor="MCA" className="py-2">
                        <input
                          type="checkbox"
                          id="MCA"
                          name="education"
                          value="MCA"
                          checked={education.includes("MCA")}
                          onChange={educationHandler}
                        />
                        &nbsp; MCA
                      </label>
                    </Col>
                    <Col>
                      <label htmlFor="B.Tech" className="py-2">
                        <input
                          type="checkbox"
                          id="B.Tech"
                          name="education"
                          value="B.Tech"
                          className=""
                          checked={education.includes("B.Tech")}
                          onChange={educationHandler}
                        />
                        &nbsp; B.Tech
                      </label>
                      <br />
                      <label htmlFor="BCOM" className="py-2">
                        <input
                          type="checkbox"
                          id="BCOM"
                          name="education"
                          value="BCOM"
                          checked={education.includes("BCOM")}
                          onChange={educationHandler}
                        />
                        &nbsp; BCOM
                      </label>
                      <br />
                      <label htmlFor="BE" className="py-2">
                        <input
                          type="checkbox"
                          id="BE"
                          name="education"
                          value="BE"
                          checked={education.includes("BE")}
                          onChange={educationHandler}
                        />
                        &nbsp; BE
                      </label>
                    </Col>
                    <Col>
                      <label htmlFor="MCOM" className="py-2">
                        <input
                          type="checkbox"
                          id="MCOM"
                          name="education"
                          value="MCOM"
                          className=""
                          checked={education.includes("MCOM")}
                          onChange={educationHandler}
                        />
                        &nbsp; MCOM
                      </label>
                      <br />
                      <label htmlFor="BCA" className="py-2">
                        <input
                          type="checkbox"
                          id="BCA"
                          name="education"
                          value="BCA"
                          checked={education.includes("BCA")}
                          onChange={educationHandler}
                        />
                        &nbsp; BCA
                      </label>
                      <br />
                      <label htmlFor="MBA" className="py-2">
                        <input
                          type="checkbox"
                          id="MBA"
                          name="education"
                          value="MBA"
                          checked={education.includes("MBA")}
                          onChange={educationHandler}
                        />
                        &nbsp; MBA
                      </label>
                    </Col>
                  </Row>
                </span>
              </Col>
            </Row>
            <div className="row">
              <div className="col-xl mt-3">
                <label htmlFor="eid">Education in Detail</label>
                <br />
                <input
                  onChange={eduDetailsHandler}
                  type="text"
                  id="eid"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>
            </div>
            <div className="row">
              <div className="col mt-3">
                <label htmlFor="">School Name</label>
                <br />
                <input
                  onChange={schoolNameHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary twothree"
                />
              </div>
              <div className="col mt-3">
                <label htmlFor="">Place</label>
                <br />
                <input
                  onChange={splaceHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary twothree"
                />
              </div>
              <div className="col mt-3">
                <label htmlFor="">Year of Study</label>
                <br />
                <select
                  onChange={syosHandler}
                  className="form-control text-dark mt-1 rounded-2 border-secondary form-select twothree"
                >
                  <option  value="" hidden>select</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2000">2000</option>
                </select>
                <label htmlFor=""></label>
              </div>
            </div>
            <div className="row">
              <div className="col mt-3">
                <label htmlFor="">College Name</label>
                <br />
                <input
                  onChange={collegeNameHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>
              <div className="col mt-3">
                <label htmlFor="">Course</label>
                <br />
                <input
                  onChange={courseHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>
              <div className="col mt-3">
                <label htmlFor="">Place</label>
                <br />
                <input
                  onChange={cplaceHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>
              <div className="col mt-3">
                <label htmlFor="">Year Of Study</label>
                <br />
                <select
                  onChange={cyosHandler}
                  className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
                >
                  <option value="" hidden>select</option>
                  <option>2012</option>
                  <option>2011</option>
                  <option>2000</option>
                </select>
              </div>
            </div>
            <div className="row my-3    ">
              <div className="col mt-3">
                <label htmlFor="">Company Name</label>
                <br />
                <input
                  onChange={compNameHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>

              <div className="col mt-3">
                <label htmlFor="">Designation</label>
                <br />
                <input
                  onChange={designationHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>

              <div className="col mt-3">
                <label htmlFor="">Work Location</label>
                <br />
                <input
                  onChange={wLocHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>
            </div>
            <div className="row">
              <div className="col mt-3">
                <label htmlFor="">Landline Number</label>
                <br />
                <select
                  onChange={lcodeHandler}
                  className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
                >
                  <option hidden value="">select</option>

                  <option value="123">123</option>
                  <option value="456">456</option>
                  <option value="789">789</option>
                </select>
              </div>
              <div className="col mt-3">
                <label htmlFor="">Area Code</label>
                <input
                  onChange={lareaHandler}
                  type="tel"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>
              <div className="col mt-3">
                <label htmlFor="">Number</label>
                <input
                  onChange={lnumHandler}
                  type="number"
                  className=" form-control text-dark mt-1 rounded-2 border-secondary -webkit-appearance: none"
                />
              </div>
            </div>
            <div className="row">
              <div className="col mt-3">
                <label htmlFor="">Mobile Number</label>
                <br />
                <select
                  name=""
                  id=""
                  className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
                >
                  <option hidden value=""></option>
                  <option value="">+91</option>
                  <option value="">+1</option>
                  <option value="">+59</option>
                </select>
              </div>
              <div className="col mt-3">
                <label htmlFor=""></label>
                <br />
                <input
                  onChange={mNumberHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>
              <div className="col mt-5">
                <label htmlFor=""></label>
                <img className="" src="../../images/plus.png" alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col mt-3">
                <label htmlFor="">
                  Preferred Contact Type <span className="compalsory">*</span>
                </label>
                <br />
                <input
                  onChange={preconHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>
              <div className="col mt-3">
                <label htmlFor="">Convenient Time to Call</label>
                <br />
                <input
                  onChange={timeHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>
              <div className="col mt-3">
                <label htmlFor="">
                  Contact Name <span className="compalsory">*</span>
                </label>
                <br />
                <input
                  onChange={connameHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>
            </div>
            <div className="row">
              <div className="col mt-3">
                <label htmlFor="">
                  Email <span className="compalsory">*</span>
                </label>
                <br />
                <input
                  onChange={emailHandler}
                  type="email"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>
              <div className="col mt-3">
                <label htmlFor="">
                  Profile Created By <span className="compalsory">*</span>
                </label>
                <br />
                <select
                  onChange={procreHandler}
                  name=""
                  id=""
                  className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
                >
                  <option value="" hidden>
                    Select
                  </option>
                  <option value="Matrimonial Professtion">
                    Matrimonial Professtion
                  </option>
                  <option value="ME">ME</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col mt-3">
                <label htmlFor="">Apartment Name / House Name</label>
                <br />
                <input
                  onChange={homenameHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>
              <div className="col mt-3">
                <label htmlFor="">Street / Locality</label>
                <br />
                <input
                  onChange={slocalHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>
            </div>
            <div className="row">
              <div className="col mt-3">
                <p style={{ color: "#6E6E6E", fontSize: "small" }}>
                  Please provide your valid address. We will not be displaying
                  your address on the site and will be gathered only for
                  internal purpose.
                </p>
              </div>
              <div className="col mt-3">
                <label htmlFor="">
                  Country <span className="compalsory">*</span>
                </label>
                <br />
                <input
                  onChange={counteryHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>
            </div>
            <div className="row">
              <div className="col mt-3">
                <label htmlFor="">
                  Pin Code <span className="compalsory">*</span>
                </label>
                <br />
                <input
                  onChange={pinHandler}
                  minLength={6}
                  maxLength={6}
                  type="number"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>
              <div className="col mt-3">
                <label htmlFor="">
                  City / State <span className="compalsory">*</span>
                </label>
                <br />
                <select
                  onChange={cityHandler}
                  name=""
                  id=""
                  className="form-control text-dark mt-1 rounded-2 border-secondary form-select"
                >
                  <option value="" hidden>
                    Select
                  </option>
                  <option value="Ahmedabad/Gujarat">Ahmedabad/Gujarat</option>
                  <option value="Meshana/Gujarat">Meshana/Gujarat</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col mt-3">
                <label htmlFor="">Reference Name</label>
                <br />
                <input
                  style={{ height: "50%" }}
                  onChange={refnameHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>
              <div className="col mt-3">
                <label htmlFor="">Address</label>
                <br />
                <input
                  onChange={refaddressHandler}
                  type="text"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                />
              </div>
              <div className="col mt-3">
                <label htmlFor="">Contact Number</label>
                <br />
                <select
                  onChange={refcontactHandler}
                  name=""
                  id=""
                  className="form-control text-dark mt-1 rounded-2 border-secondary form-select mobiledrop"
                >
                  <option value="" hidden>select</option>

                  <option value="91">+91</option>
                  <option value="1">+1</option>
                  <option value="65">+56</option>
                </select>
              </div>
              <div className="col mt-3">
                {/* //refferenced mobile number */}
                <label htmlFor=""></label>
                <br />
                <input
                  onChange={refmobileHandler}
                  type="text"
                  className="form-control text-dark rounded-2 border-secondary"
                />
              </div>
            </div>
            <Link to="/personal-info">
              <button
                className="btn btn-light text-white btn-xl mt-2"
                type="button"
                onClick={submitHandler}
                disabled={buttonLoading}
                style={{ backgroundColor: "#fb9232" }}
              >
                {isLoading ? <p className="mb-0">Wait </p> : <p className="mb-0">Save & Continue</p>}

                
              </button>
            </Link>
          </form>
        </div>
      </div>
      {/* <p>{basicinfo:any}</p> */}
    </>
  );
};

// export default BasicInfo;
export default BasicInfo;
