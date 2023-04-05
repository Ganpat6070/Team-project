import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import NavbarHead from "../navbar";
import { Col, Row } from "react-bootstrap";

const EditProfile = () => {
  const [apiData, setapiData] = useState<any[]>([]);

  // Basic Info States
  const [dob, setdob] = useState("");
  const [height, setheight] = useState<number>(0);
  const [weight, setweight] = useState<number>(0);
  const [mStatus, setmStatus] = useState("");
  const [mTongue, setmTongue] = useState("");
  const [religion, setreligion] = useState("");
  const [cast, setcast] = useState("");
  const [gender, setGender] = useState("");
  const [subcast, setsubcast] = useState("");
  const [phyStatus, setphyStatus] = useState("");
  const [about, setAbout] = useState("");
  const [education, seteducation] = useState<string[]>([]);
  const [spokenLanguage, setspokenLanguage] = useState<string[]>([]);
  const [eduDetails, seteduDetails] = useState("");
  const [schoolName, setschoolName] = useState("");
  const [splace, setsplace] = useState("");
  const [syos, setsyos] = useState("");
  const [collegeName, setcollegeName] = useState("");
  const [course, setcourse] = useState("");
  const [place, setPlace] = useState("");

  const [cplace, setcplace] = useState("");
  const [cyos, setcyos] = useState("");
  const [compName, setcompName] = useState("");
  const [designation, setdesignation] = useState("");
  const [wLoc, setwLoc] = useState("");
  const [lcode, setlcode] = useState("");
  const [larea, setlarea] = useState("");
  const [lnum, setlnum] = useState("");
  const [mNumber, setmNumber] = useState("");
  const [pct, setpct] = useState("");
  const [cttc, setCttc] = useState("");
  const [cName, setcName] = useState("");
  const [email, setemail] = useState("");
  const [street, setstreet] = useState("");
  const [country, setCountry] = useState("");
  const [pin, setpin] = useState("");
  const [city, setcity] = useState("");
  const [refname, setrefname] = useState("");
  const [refaddress, setrefaddress] = useState("");
  const [refcontact, setrefcontact] = useState("");

  // Personal Info States
  const [complexionState, setcomplexionState] = useState("");
  const [bodytype, setbodytype] = useState("");
  const [bloodGroup, setbloodGroup] = useState("");
  const [occupation, setoccupation] = useState("");
  const [employedin, setemployedin] = useState("");
  const [piCurrency, setpiCurrency] = useState("");
  const [religion1, setreligion1] = useState("");
  const [currency1, setcurrency1] = useState("");
  const [subcast1, setsubcast1] = useState("");
  const [annualInc, setannualInc] = useState("");
  const [astro, setastro] = useState("");
  const [aboutfam, setaboutfam] = useState("");
  const [famtype, setfamtype] = useState("");
  const [famstatus, setfamstatus] = useState("");
  const [fatCurrency, setfatCurrency] = useState("");
  const [fatAnnualInc, setfatAnnualInc] = useState("");
  const [fatname, setfatname] = useState("");
  const [fatFamilyname, setfatFamilyname] = useState("");
  const [fatHome, setfatHome] = useState("");
  const [fatEmp, setfatEmp] = useState("");
  const [fatOcc, setfatOcc] = useState("");
  const [fatEdu, setfatEdu] = useState("");
  const [fatCompName, setfatCompName] = useState("");
  const [fatDesig, setfatDesig] = useState("");
  const [fatWorkLoc, setfatWorkLoc] = useState("");
  const [motherName, setmotherName] = useState("");
  const [motherFamName, setmotherFamName] = useState("");
  const [motherHome, setmotherHome] = useState("");
  const [motEmpIn, setmotEmpIn] = useState("");
  const [motherOcc, setmotherOcc] = useState("");
  const [motherEdu, setmotherEdu] = useState("");
  const [countryLivingIn, setcountryLivingIn] = useState("");
  const [currLoc, setcurrLoc] = useState("");
  const [resStatus, setresStatus] = useState("");
  const [native, setnative] = useState("");

  // Preferred Partner States
  const [ppAge, setppAge] = useState("");
  const [ppHeight, setppHeight] = useState("");
  const [ppPhyStatus, setppPhyStatus] = useState("");
  const [ppFamilyStatus, setppFamilyStatus] = useState("");
  const [ppCurrency, setppCurrency] = useState("");
  const [ppAnnual, setppAnnual] = useState("");
  const [ppMotherT, setppMotherT] = useState("");
  const [ppReligion, setppReligion] = useState("");
  const [ppcaste, setppCaste] = useState("");
  const [ppDiet, setppDiet] = useState("");
  const [ppOcc, setppOcc] = useState("");
  const [ppLocation, setppLocation] = useState("");
  const [ppMStatus, setppMStatus] = useState("");
  const [ppNative, setppNative] = useState("");
  const [ppAboutPartner, setppAboutPartner] = useState("");
  const [ppeducation, setppEducation] = useState<string[]>([]);

  // My Personality States
  const [mpdiet, setmpdiet] = useState("");
  const [mpSmoke, setmpSmoke] = useState("");
  const [mpDrink, setmpDrink] = useState("");
  const [mpMusicrange, setmpMusicrange] = useState(0);
  const [music, setMusic] = useState<string[]>([]);
  const [mpReadingrange, setmpReadingrange] = useState(0);
  const [reading, setReading] = useState<string[]>([]);

  // Astro Details
  const [aDate, setaDate] = useState("");
  const [aTime, setaTime] = useState("");
  const [aBirthTime, setaBirthTime] = useState("");
  const [aPlace, setaPlace] = useState("");

  // Storing api data

  const [state, setState] = useState<boolean>(false);
  // const [age, setAge] = useState("");

  let token = localStorage.getItem("Token");

  // use effect calling
  const editProfileObject = async () => {
    let response = await fetch("http://localhost:8000/profile", {
      credentials: "include",
      method: "GET",
      headers: { "Content-Type": "application/json", token: `${token}` },
    });

    let res = await response.json();
    console.log("puradata", res);

    setapiData(res.profile);

    if (response.status === 200) {
      setState(true);
      setdob(res.profile[0].dateOfBirth);
      setheight(res.profile[0].height);
      setweight(res.profile[0].weight);
      setmStatus(res.profile[0].maritalStatus);
      setmTongue(res.profile[0].motherTongue);
      setreligion(res.profile[0].religion);
      setcast(res.profile[0].caste);
      setphyStatus(res.profile[0].physicalStatus);
      setAbout(res.profile[0].aboutMe);
      seteducation(res.profile[0].education);
      setspokenLanguage(res.profile[0].spokenLanguages);
      seteduDetails(res.profile[0].educationInDetail);

      setschoolName(res.profile[0].schoolName);
      setPlace(res.profile[0].schoolPlace);
      setsyos(res.profile[0].yearOfStudySchool);
      setcollegeName(res.profile[0].collegeName);
      setcourse(res.profile[0].course);
      setcplace(res.profile[0].placeCollege);
      setcyos(res.profile[0].yearOfStudyCollege);

      setcompName(res.profile[0].companyName);
      setdesignation(res.profile[0].designation);
      setwLoc(res.profile[0].workLocation);
      setlcode(res.profile[0].pinCode);
      // setlarea(res.profile[0].yearOfStudyCollege)
      setlnum(res.profile[0].landlineNumber);
      setmNumber(res.profile[0].mobileNumber);
      setpct(res.profile[0].preferredContactType);
      setCttc(res.profile[0].convenientTimeToCall);
      setcName(res.profile[0].contactName);

      setemail(res.profile[0].email);
      setstreet(res.profile[0].streetLocality);
      setCountry(res.profile[0].country);
      setpin(res.profile[0].pinCode);
      setcity(res.profile[0].cityState);
      setrefname(res.profile[0].referenceName);
      setrefaddress(res.profile[0].address);
      setrefcontact(res.profile[0].contactNumber);

      // Personal Info States set
      setcomplexionState(res.profile[0].complexion);
      setbodytype(res.profile[0].bodyType);
      setbloodGroup(res.profile[0].bloodGroup);
      setoccupation(res.profile[0].occupation);
      setemployedin(res.profile[0].employedIn);
      setpiCurrency(res.profile[0].currency);
      // setreligion1(res.profile[0].yearOfStudyCollege)
      // setcurrency1(res.profile[0].yearOfStudyCollege)
      // setsubcast1(res.profile[0].yearOfStudyCollege)
      setannualInc(res.profile[0].annualIncome);
      setastro(res.profile[0].star);
      setaboutfam(res.profile[0].aboutMyFamily);
      setfamtype(res.profile[0].familyValue);
      setfamstatus(res.profile[0].familyStatus); //////////////////////////////////////////////////////////////////
      // setfatCurrency(res.profile[0].yearOfStudyCollege)
      // setfatAnnualInc(res.profile[0].yearOfStudyCollege)
      setfatname(res.profile[0].fatherName);
      setfatFamilyname(res.profile[0].fatherFamilyName);
      setfatHome(res.profile[0].fatherHomePlace);
      setfatEmp(res.profile[0].fatherEmployedIn);
      setfatOcc(res.profile[0].fatherDesignation);
      setfatEdu(res.profile[0].fatherEducation);
      setfatCompName(res.profile[0].fatherCompanyName);
      setfatDesig(res.profile[0].fatherDesignation);
      setfatWorkLoc(res.profile[0].fatherWorkLocation);
      setmotherName(res.profile[0].motherName);
      setmotherFamName(res.profile[0].motherFamilyName);
      setmotherHome(res.profile[0].motherHomePlace);
      setmotEmpIn(res.profile[0].motherEmployedIn);
      setmotherOcc(res.profile[0].motherOccupation);
      setmotherEdu(res.profile[0].motherEducation);
      setcountryLivingIn(res.profile[0].countryLivingIn);
      setcurrLoc(res.profile[0].currentLocation);
      setresStatus(res.profile[0].residentialStatus);
      setnative(res.profile[0].nativePlace);

      // Preferred Partner States
      setppAge(res.profile[0].preferredAge);
      setppHeight(res.profile[0].preferredHeight);
      setppPhyStatus(res.profile[0].preferredPhysicalStatus); //////////////////////////////////////////////////////////////////
      setppFamilyStatus(res.profile[0].preferredFamilyStatus); //////////////////////////////////////////////////////////////////
      setppCurrency(res.profile[0].preferredCurrency);
      setppAnnual(res.profile[0].preferredAnnualIncome);
      setppMotherT(res.profile[0].preferredMotherTongue);
      setppReligion(res.profile[0].preferredReligion);
      setppCaste(res.profile[0].preferredCastDenomination);
      setppDiet(res.profile[0].preferredDiet);
      setppEducation(res.profile[0].preferredEducation);
      setppOcc(res.profile[0].preferredOccupation);
      setppLocation(res.profile[0].preferredLocation);
      setppMStatus(res.profile[0].preferredMaritalStatus);
      setppNative(res.profile[0].preferredNativePlace);
      setppAboutPartner(res.profile[0].preferredAboutMyPartner);

      // My Personality States
      setmpdiet(res.profile[0].myDiet);
      setmpSmoke(res.profile[0].smoke);
      setmpDrink(res.profile[0].drink);
      setMusic(res.profile[0].music);
      setmpMusicrange(res.profile[0].musicRange);
      setReading(res.profile[0].reading);
      setmpReadingrange(res.profile[0].readingRange);
      // Astro Details
      setaDate(res.profile[0].astroDateOfBirth);
      setaTime(res.profile[0].timeOfBirth);
      setaBirthTime(res.profile[0].birthTimeCorrection);
      setaPlace(res.profile[0].placeOfBirth);
    }
  };
  console.log("pasandida data", apiData);
  //
  useEffect(() => {
    editProfileObject();
  }, []);

  // console.log({
  //   dob,
  //   height,
  //   weight,
  //   mStatus,
  //   mTongue,
  //   religion,
  //   cast,
  //   subcast,
  //   phyStatus,
  //   education,
  //   spokenLanguage,
  //   schoolName,
  //   splace,
  //   syos,
  //   collegeName,
  //   course,
  //   cplace,
  //   cyos,
  //   compName,
  //   designation,
  //   wLoc,
  //   lcode,
  //   larea,
  //   lnum,
  //   mNumber,
  //   email,
  //   street,
  //   pin,
  //   city,
  //   refname,
  //   refaddress,
  //   refcontact,
  // });

  // console.log({
  //   complexion,
  //   bodytype,
  //   bloodGroup,
  //   occupation,
  //   employedin,
  //   religion1,
  //   currency1,
  //   subcast1,
  //   annualInc,
  //   astro,
  //   aboutfam,
  //   famtype,
  //   famstatus,
  //   fatCurrency,
  //   fatAnnualInc,
  //   fatname,
  //   fatFamilyname,
  //   fatHome,
  //   fatEmp,
  //   fatOcc,
  //   fatEdu,
  //   fatCompName,
  //   fatDesig,
  //   fatWorkLoc,
  //   motherName,
  //   motherFamName,
  //   motherHome,
  //   motherOcc,
  //   motherEdu,
  //   currLoc,
  //   resStatus,
  //   native,
  // });

  const [userData, setUserData] = useState<any>({
    mTongue1: "",
    religion1: "hindu",
  });

  const handleSpokenChange = (event: any) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setspokenLanguage([...spokenLanguage, value]);
    } else {
      setspokenLanguage(spokenLanguage.filter((box) => box !== value));
    }
  };

  const educationHandler = (event: any) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      seteducation([...education, value]);
    } else {
      seteducation(education.filter((box) => box !== value));
    }
  };

  const musicHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setMusic([...music, value]);
    } else {
      setMusic(music.filter((box) => box !== value));
    }
  };

  const readHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setReading([...reading, value]);
    } else {
      setReading(reading.filter((box) => box !== value));
    }
  };

  // const changeHandle = (e: any) => {
  //   setUserData({ ...userData, [e.target.name]: e.target.value });
  // };

  const ppeducationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setppEducation([...ppeducation, value]);
    } else {
      setppEducation(ppeducation.filter((box) => box !== value));
    }
  };

  console.log(userData);

  return (
    <div>
      <NavbarHead />
      {state && (
        <div>
          <div
            style={{ width: "85%" }}
            className="container-sm my-5 bg-light rounded-5 border border-dark p-3"
          >
            <div
              style={{ width: "80%" }}
              className="container-sm my-2 bg-light rounded-5 border border-dark p-2"
            >
              <p className="fs-1 text-center" style={{ color: "#6E6E6E" }}>
                Basic Information
              </p>
            </div>
            <Table striped="columns" className="mt-5">
              <thead>
                <tr>
                  <th>Fields</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Date of Birth</td>
                  <td>
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setdob(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>
                    <select
                      style={{ width: "135px" }}
                      id="height"
                      name="Height"
                      value={height}
                      onChange={(e) => setheight(parseInt(e.target.value))}
                    >
                      <option value="4">4ft</option>
                      <option value="5">5ft</option>
                      <option value="6">6ft</option>
                      <option value="7">7ft </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>
                    <select
                      style={{ width: "135px" }}
                      value={weight}
                      name="Weight"
                      onChange={(e) => setweight(parseInt(e.target.value))}
                    >
                      <option value="40">40</option>
                      <option value="50">50</option>
                      <option value="60">60</option>
                      <option value="70">70</option>
                      <option value="80">80</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Marital Status</td>
                  <td>
                    <select
                      style={{ width: "135px" }}
                      onChange={(e) => setmStatus(e.target.value)}
                      value={mStatus}
                    >
                      <option>Single</option>
                      <option>In-Relationship</option>
                      <option>Devorced</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Mother Tongue</td>
                  <td>
                    <select
                      style={{ width: "135px" }}
                      value={mTongue}
                      name="Weight"
                      onChange={(e) => setmTongue(e.target.value)}
                    >
                      <option>Hindi</option>
                      <option>Gujarati</option>
                      <option>English</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Religion</td>
                  <td>
                    <select
                      style={{ width: "135px" }}
                      value={religion}
                      name="Weight"
                      onChange={(e) => setreligion(e.target.value)}
                    >
                      <option>Hinduism</option>
                      <option>Islam</option>
                      <option>Christianity</option>
                      <option>Jainism</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Caste</td>
                  <td>
                    <input
                      type="text"
                      value={cast}
                      onChange={(e) => setcast(e.target.value)}
                    />
                  </td>
                </tr>
                {/* <tr>
              <td>SubCast</td>
              <td>
                <input
                  type="text"
                  value={subcast}
                  onChange={(e) => setsubcast(e.target.value)}
                />
              </td>
            </tr> */}
                <tr>
                  <td>Gender</td>
                  <td>
                    <select
                      style={{ width: "135px" }}
                      value={gender}
                      name="Weight"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Physical Status</td>
                  <td>
                    <input
                      type="text"
                      value={phyStatus}
                      onChange={(e) => setphyStatus(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>About Me</td>
                  <td>
                    <input
                      type="text"
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Spoken Language</td>
                  <td>
                    <input
                      type="checkbox"
                      id="lang1"
                      name="language"
                      value="English"
                      checked={spokenLanguage.includes("English")}
                      onChange={handleSpokenChange}
                      // checked
                    />
                    <label htmlFor="lang1">&nbsp;English</label>&nbsp;&nbsp;
                    <input
                      type="checkbox"
                      id="lang2"
                      name="language"
                      value="Hindi"
                      checked={spokenLanguage.includes("Hindi")}
                      onChange={handleSpokenChange}
                    />
                    <label htmlFor="lang2">&nbsp;Hindi</label>&nbsp;&nbsp;
                    <input
                      type="checkbox"
                      id="lang3"
                      name="language"
                      value="Gujarati"
                      checked={spokenLanguage.includes("Gujarati")}
                      onChange={handleSpokenChange}
                    />
                    <label htmlFor="lang3">&nbsp;Gujarati</label>&nbsp;&nbsp;
                    <input
                      type="checkbox"
                      id="lang4"
                      name="language"
                      value="Kanada"
                      checked={spokenLanguage.includes("Kanada")}
                      onChange={handleSpokenChange}
                    />
                    <label htmlFor="lang4">&nbsp;Kanada</label>&nbsp;&nbsp;
                    <input
                      type="checkbox"
                      id="lang5"
                      name="language"
                      value="Telugu"
                      checked={spokenLanguage.includes("Telugu")}
                      onChange={handleSpokenChange}
                    />
                    <label htmlFor="lang5">&nbsp;Telugu</label>&nbsp;&nbsp;
                    <input
                      type="checkbox"
                      id="lang6"
                      name="language"
                      value="Tamil"
                      checked={spokenLanguage.includes("Tamil")}
                      onChange={handleSpokenChange}
                    />
                    <label htmlFor="lang6">&nbsp;Tamil</label>&nbsp;&nbsp;
                  </td>
                </tr>
                <tr>
                  <td>Education Details</td>
                  <td>
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
                  </td>
                </tr>
                <tr>
                  <td>Education in Detail</td>
                  <td>
                    <input
                      type="text"
                      value={eduDetails}
                      onChange={(e) => seteduDetails(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>School Name</td>
                  <td>
                    <input
                      type="text"
                      value={schoolName}
                      onChange={(e) => setschoolName(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Place</td>
                  <td>
                    <input
                      type="text"
                      // value={}
                      onChange={(e) => setPlace(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Year of Study</td>
                  <td>
                    <select
                      style={{ width: "135px" }}
                      value={syos}
                      name="yos"
                      onChange={(e) => setsyos(e.target.value)}
                    >
                      <option hidden>select</option>
                      <option>2012</option>
                      <option>2011</option>
                      <option>2000</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>CollegeName</td>
                  <td>
                    <input
                      type="text"
                      value={collegeName}
                      onChange={(e) => setcollegeName(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Course</td>
                  <td>
                    <input
                      type="text"
                      value={course}
                      onChange={(e) => setcourse(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Course Place</td>
                  <td>
                    <input
                      type="text"
                      value={cplace}
                      onChange={(e) => setcplace(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td> Course Year of Study</td>
                  <td>
                    <select
                      style={{ width: "135px" }}
                      value={cyos}
                      name="yos"
                      onChange={(e) => setcyos(e.target.value)}
                    >
                      <option hidden>select</option>
                      <option>2012</option>
                      <option>2011</option>
                      <option>2000</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Company Name</td>
                  <td>
                    <input
                      type="text"
                      value={compName}
                      onChange={(e) => setcompName(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Designation</td>
                  <td>
                    <input
                      type="text"
                      value={designation}
                      onChange={(e) => setdesignation(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Work Location</td>
                  <td>
                    <input
                      type="text"
                      value={wLoc}
                      onChange={(e) => setwLoc(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Area Code</td>
                  <td>
                    <input
                      type="text"
                      value={lcode}
                      onChange={(e) => setlcode(e.target.value)}
                    />
                  </td>
                </tr>
                {/* <tr>
              <td>Location Area</td>
              <td>
                <input
                  type="text"
                  value={larea}
                  onChange={(e) => setlarea(e.target.value)}
                />
              </td>
            </tr> */}
                <tr>
                  <td>Landline Number</td>
                  <td>
                    <input
                      type="text"
                      value={lnum}
                      onChange={(e) => setlnum(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Mobile Number</td>
                  <td>
                    <input
                      type="text"
                      value={mNumber}
                      onChange={(e) => setmNumber(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <td>Preferred Contact Type</td>
                  <td>
                    <input
                      type="text"
                      value={pct}
                      onChange={(e) => setpct(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Convenient Time to Call</td>
                  <td>
                    <input
                      type="text"
                      value={cttc}
                      onChange={(e) => setCttc(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Contact Name</td>
                  <td>
                    <input
                      type="text"
                      value={cName}
                      onChange={(e) => setcName(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Street / Locality</td>
                  <td>
                    <input
                      type="text"
                      value={street}
                      onChange={(e) => setstreet(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Pincode</td>
                  <td>
                    <input
                      type="number"
                      minLength={6}
                      maxLength={6}
                      value={pin}
                      onChange={(e) => setpin(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>
                    <select
                      style={{ width: "135px" }}
                      onChange={(e) => setcity(e.target.value)}
                      value="city"
                    >
                      <option value="Ahmedabad/Gujarat">
                        Ahmedabad/Gujarat
                      </option>
                      <option value="Meshana/Gujarat">Meshana/Gujarat</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Reference Name</td>
                  <td>
                    <input
                      type="text"
                      value={refname}
                      onChange={(e) => setrefname(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Reference Address</td>
                  <td>
                    <input
                      type="text"
                      value={refaddress}
                      onChange={(e) => setrefaddress(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Reference Contact</td>
                  <td>
                    <input
                      type="number"
                      maxLength={10}
                      minLength={10}
                      value={refcontact}
                      onChange={(e) => setrefcontact(e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div>
            <div
              style={{ width: "85%" }}
              className="container-sm my-5 bg-light rounded-5 border border-dark p-3"
            >
              <div
                style={{ width: "80%" }}
                className="container-sm my-2 bg-light rounded-5 border border-dark p-2"
              >
                <p className="fs-1 text-center" style={{ color: "#6E6E6E" }}>
                  Personal Information
                </p>
              </div>
              <Table striped="columns" className="mt-5">
                <thead>
                  <tr>
                    <th>Fields</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Complexion</td>
                    <td>
                      <select
                        id="complexionState"
                        name="skinColor"
                        style={{ width: "135px" }}
                        value={complexionState}
                        onChange={(e) => setcomplexionState(e.target.value)}
                      >
                        <option value="Light">Light</option>
                        <option value="Dark">Dark</option>
                        <option value="Medium">Medium</option>
                        <option value="White">White</option>
                        <option value="fair">Fair</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Body type</td>
                    <td>
                      <select
                        id="bodyType"
                        style={{ width: "135px" }}
                        name="bodytype"
                        value={bodytype}
                        onChange={(e) => setbodytype(e.target.value)}
                      >
                        <option value="ectomorph">ectomorph</option>
                        <option value="mesomorph">mesomorph</option>
                        <option value="endomorph">endomorph</option>
                        <option value="thin">Thin</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Blood Group</td>
                    <td>
                      <select
                        style={{ width: "135px" }}
                        name="bloodGroup"
                        value={bloodGroup}
                        onChange={(e) => setbloodGroup(e.target.value)}
                      >
                        <option>A+</option>
                        <option>B+</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Occupation</td>
                    <td>
                      <select
                        value={occupation}
                        style={{ width: "135px" }}
                        onChange={(e) => setoccupation(e.target.value)}
                      >
                        <option hidden value="one">
                          Select Any One
                        </option>
                        <option>Artist</option>
                        <option>Designer</option>
                        <option>Construction worker</option>
                        <option>Business analyst</option>
                        <option></option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Currency</td>
                    <td>
                      <select
                        style={{ width: "135px" }}
                        value={piCurrency}
                        onChange={(e) => setpiCurrency(e.target.value)}
                      >
                        <option hidden value="one">
                          Select Any One
                        </option>
                        <option>USD</option>
                        <option>Euro</option>
                        <option>INR</option>
                        <option>CAD</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Employed in</td>
                    <td>
                      <input
                        type="text"
                        value={employedin}
                        onChange={(e) => setemployedin(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Religion</td>
                    <td>
                      <input
                        type="text"
                        value={religion1}
                        onChange={(e) => setreligion1(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Currency</td>
                    <td>
                      <select
                        style={{ width: "135px" }}
                        name="currency"
                        value={currency1}
                        onChange={(e) => setcurrency1(e.target.value)}
                      >
                        <option>USD</option>
                        <option>EURO</option>
                        <option>INR</option>
                        <option>CAD</option>
                        <option>OTHER</option>
                      </select>
                    </td>
                  </tr>
                  {/* <tr>
                <td>Annual Income</td>
                <td>
                  <input
                    type="text"
                    value={subcast1}
                    onChange={(e) => setsubcast1(e.target.value)}
                  />
                </td> 
              </tr>*/}
                  <tr>
                    <td>Annual Income</td>
                    <td>
                      <select
                        name="AnnualIncome"
                        style={{ width: "135px" }}
                        value={annualInc}
                        onChange={(e) => setannualInc(e.target.value)}
                      >
                        <option value="5">5L</option>
                        <option value="6">6L</option>
                        <option value="4">4L</option>
                        <option value="7">7L</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Astro Details</td>
                    <td>
                      <select
                        name="AstroDetails"
                        style={{ width: "135px" }}
                        value={astro}
                        onChange={(e) => setastro(e.target.value)}
                      >
                        <option>Sun</option>
                        <option>Venus</option>
                        <option>Moon</option>
                        <option>Saturn</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>About My Family</td>
                    <td>
                      <input
                        type="text"
                        value={aboutfam}
                        onChange={(e) => setaboutfam(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Family Type</td>
                    <td>
                      <select
                        name="FamilyType"
                        value={famtype}
                        style={{ width: "135px" }}
                        onChange={(e) => setfamtype(e.target.value)}
                      >
                        <option>Joint Family</option>
                        <option>Extended Family</option>
                        <option>Nuclear Family</option>
                        <option>Orphen</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Family Status</td>
                    <td>
                      <select
                        name="FamilyStatus"
                        style={{ width: "135px" }}
                        value={famstatus}
                        onChange={(e) => setfamstatus(e.target.value)}
                      >
                        <option>Alive</option>
                        <option>Dead</option>
                        <option>Living With Them</option>
                        <option>Other Reason</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Father Currency</td>
                    <td>
                      <select
                        style={{ width: "135px" }}
                        name="FatherCurrency"
                        value={fatCurrency}
                        onChange={(e) => setfatCurrency(e.target.value)}
                      >
                        <option>INR</option>
                        <option>USD</option>
                        <option>EURO</option>
                        <option>CAD</option>
                        <option>OTHER</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Father Annual Income</td>
                    <td>
                      <select
                        name="FatherAnnualIncome"
                        style={{ width: "135px" }}
                        value={fatAnnualInc}
                        onChange={(e) => setfatAnnualInc(e.target.value)}
                      >
                        <option value="6">6L</option>
                        <option value="7">7L</option>
                        <option value="8">8L</option>
                        <option value="9">9L</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Father Name</td>
                    <td>
                      <input
                        type="text"
                        value={fatname}
                        onChange={(e) => setfatname(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Father Family Name</td>
                    <td>
                      <input
                        type="text"
                        value={fatFamilyname}
                        onChange={(e) => setfatFamilyname(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Father Home</td>
                    <td>
                      <input
                        type="text"
                        value={fatHome}
                        onChange={(e) => setfatHome(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Father Employed In</td>
                    <td>
                      <select
                        style={{ width: "135px" }}
                        name="FatherEmployedIn"
                        value={fatEmp}
                        onChange={(e) => setfatEmp(e.target.value)}
                      >
                        <option>Government</option>
                        <option>Private</option>
                        <option>Un-Emploted</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Father Occupation</td>
                    <td>
                      <input
                        type="text"
                        value={fatOcc}
                        onChange={(e) => setfatOcc(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Father Education</td>
                    <td>
                      <input
                        type="text"
                        value={fatEdu}
                        onChange={(e) => setfatEdu(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Father Company Name</td>
                    <td>
                      <input
                        type="text"
                        value={fatCompName}
                        onChange={(e) => setfatCompName(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Father Designation</td>
                    <td>
                      <input
                        type="text"
                        value={fatDesig}
                        onChange={(e) => setfatDesig(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Father Work Location</td>
                    <td>
                      <input
                        type="text"
                        value={fatWorkLoc}
                        onChange={(e) => setfatWorkLoc(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Mother Name</td>
                    <td>
                      <input
                        type="text"
                        value={motherName}
                        onChange={(e) => setmotherName(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Mother Family Name</td>
                    <td>
                      <input
                        type="text"
                        value={motherFamName}
                        onChange={(e) => setmotherFamName(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Mother Home / Place</td>
                    <td>
                      <input
                        type="text"
                        value={motherHome}
                        onChange={(e) => setmotherHome(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Mother Employed In</td>
                    <td>
                      <select
                        value={motEmpIn}
                        style={{ width: "135px" }}
                        onChange={(e) => setmotEmpIn(e.target.value)}
                      >
                        <option></option>
                        <option>ONGC</option>
                        <option>Goverment</option>
                        <option>UnEmployed</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Mother Occupation</td>
                    <td>
                      <input
                        type="text"
                        value={motherOcc}
                        onChange={(e) => setmotherOcc(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Mother Education</td>
                    <td>
                      <input
                        type="text"
                        value={motherEdu}
                        onChange={(e) => setmotherEdu(e.target.value)}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Country Living In</td>
                    <td>
                      <select
                        value={countryLivingIn}
                        style={{ width: "135px" }}
                        onChange={(e) => setcountryLivingIn(e.target.value)}
                      >
                        <option></option>
                        <option value="">USA</option>
                        <option value="">Germany</option>
                        <option value="">Canada</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td>Current Location</td>
                    <td>
                      <select
                        name="CurrentLocation"
                        style={{ width: "135px" }}
                        value={currLoc}
                        onChange={(e) => setcurrLoc(e.target.value)}
                      >
                        <option>India</option>
                        <option>USA</option>
                        <option>Germany</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Residentail Status</td>
                    <td>
                      <select
                        name="ResidentailStatus"
                        value={resStatus}
                        style={{ width: "135px" }}
                        onChange={(e) => setresStatus(e.target.value)}
                      >
                        <option>Living</option>
                        <option>Rental</option>
                        <option>Own</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Native Place</td>
                    <td>
                      <select
                        name="NativePlace"
                        style={{ width: "135px" }}
                        value={native}
                        onChange={(e) => setnative(e.target.value)}
                      >
                        <option value="">gujarat</option>
                        <option value="">mp</option>
                        <option value="">delhi</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div
              style={{ width: "85%" }}
              className="container-sm my-5 bg-light rounded-5 border border-dark p-3"
            >
              <div
                style={{ width: "80%" }}
                className="container-sm my-2 bg-light rounded-5 border border-dark p-2"
              >
                <p className="fs-1 text-center" style={{ color: "#6E6E6E" }}>
                  Preferred Partner
                </p>
              </div>
              <Table striped="columns" className="mt-5">
                <thead>
                  <tr>
                    <th>Fields</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Age</td>
                    <td>
                      <select
                        style={{ width: "135px" }}
                        name="Age"
                        value={ppAge}
                        onChange={(e) => setppAge(e.target.value)}
                      >
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                      </select>
                      {/* <select
                    name="Age"
                    // value={ppAge}
                    // onChange={(e) => setppAge(e.target.value)}
                  >
                    <option>23</option>
                    <option>28</option>
                    <option>40</option>
                  </select> */}
                    </td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td>
                      <select
                        style={{ width: "135px" }}
                        name="Height"
                        value={ppHeight}
                        onChange={(e) => setppHeight(e.target.value)}
                      >
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                      </select>
                      {/* <select
                    name="Height"
                    // value={ppAge}
                    // onChange={(e) => setppAge(e.target.value)}
                  >
                    <option>5.5</option>
                    <option>6.5</option>
                  </select> */}
                    </td>
                  </tr>
                  <tr>
                    <td>Physical Status</td>
                    <td>
                      <select
                        name="PhysicalStatus"
                        style={{ width: "135px" }}
                        value={ppPhyStatus}
                        onChange={(e) => setppPhyStatus(e.target.value)}
                      >
                        <option>Type1</option>
                        <option>Type2</option>
                        <option>Type3</option>
                        <option>Type4</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Family Status</td>
                    <td>
                      <select
                        style={{ width: "135px" }}
                        name="Family Status"
                        value={ppFamilyStatus}
                        onChange={(e) => setppFamilyStatus(e.target.value)}
                      >
                        <option>With Family</option>
                        <option>Alone</option>
                        {/* <option>Type3</option> */}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Currency</td>
                    <td>
                      <select
                        name="Currency"
                        style={{ width: "135px" }}
                        value={ppCurrency}
                        onChange={(e) => setppCurrency(e.target.value)}
                      >
                        <option>INR</option>
                        <option>USD</option>
                        <option>EURO</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Annual Income</td>
                    <td>
                      <select
                        name="Annual Income"
                        style={{ width: "135px" }}
                        value={ppAnnual}
                        onChange={(e) => setppAnnual(e.target.value)}
                      >
                        <option value="4">4 L</option>
                        <option value="5">5 L</option>
                        <option value="6">6 L</option>
                        <option value="7">7 L</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Mother Tongue</td>
                    <td>
                      <select
                        style={{ width: "135px" }}
                        name="Mother Tongue"
                        value={ppMotherT}
                        onChange={(e) => setppMotherT(e.target.value)}
                      >
                        <option>Hindi</option>
                        <option>Gujarati</option>
                        <option>English</option>
                        <option>Other</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Religion</td>
                    <td>
                      <select
                        name="Religion"
                        style={{ width: "135px" }}
                        value={ppReligion}
                        onChange={(e) => setppReligion(e.target.value)}
                      >
                        <option value="Hindu">Hindu</option>
                        <option value="Muslim">Muslim</option>
                        <option value="Christian">Christian</option>
                        <option value="Other">Other</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Caste / Denomination</td>
                    <td>
                      <input
                        type="text"
                        value={ppcaste}
                        onChange={(e) => setppCaste(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Diet</td>
                    <td>
                      <select
                        name="Diet"
                        style={{ width: "135px" }}
                        value={ppDiet}
                        onChange={(e) => setppDiet(e.target.value)}
                      >
                        <option>Veg</option>
                        <option>Non-Veg</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Education</td>
                    <td>
                      <span className="border border-dark w-5 p-2  h-1 d-inline-block spolang border rounded mt-1">
                        <Row>
                          <Col>
                            <label htmlFor="M.E." className="py-2">
                              <input
                                type="checkbox"
                                id="M.E."
                                name="ppeducation"
                                value="M.E."
                                checked={ppeducation.includes("M.E.")}
                                onChange={ppeducationHandler}
                              />
                              &nbsp; M.E
                            </label>
                            <br />
                            <label htmlFor="M.Tech." className="py-2">
                              <input
                                type="checkbox"
                                id="M.Tech."
                                name="ppeducation"
                                value="M.Tech."
                                checked={ppeducation.includes("M.Tech.")}
                                onChange={ppeducationHandler}
                              />
                              &nbsp; M.Tech
                            </label>
                            <br />
                            <label htmlFor="MCA." className="py-2">
                              <input
                                type="checkbox"
                                id="MCA."
                                name="ppeducation"
                                value="MCA."
                                checked={ppeducation.includes("MCA.")}
                                onChange={ppeducationHandler}
                              />
                              &nbsp; MCA
                            </label>
                          </Col>
                          <Col>
                            <label htmlFor="B.Tech." className="py-2">
                              <input
                                type="checkbox"
                                id="B.Tech."
                                name="ppeducation"
                                value="B.Tech."
                                className=""
                                checked={ppeducation.includes("B.Tech.")}
                                onChange={ppeducationHandler}
                              />
                              &nbsp; B.Tech
                            </label>
                            <br />
                            <label htmlFor="BCOM." className="py-2">
                              <input
                                type="checkbox"
                                id="BCOM."
                                name="ppeducation"
                                value="BCOM."
                                checked={ppeducation.includes("BCOM.")}
                                onChange={ppeducationHandler}
                              />
                              &nbsp; BCOM
                            </label>
                            <br />
                            <label htmlFor="B.E." className="py-2">
                              <input
                                type="checkbox"
                                id="B.E."
                                name="ppeducation"
                                value="B.E."
                                checked={ppeducation.includes("B.E.")}
                                onChange={ppeducationHandler}
                              />
                              &nbsp; BE
                            </label>
                          </Col>
                          <Col>
                            <label htmlFor="M.COM" className="py-2">
                              <input
                                type="checkbox"
                                id="M.COM"
                                name="ppeducation"
                                value="M.COM"
                                className=""
                                checked={ppeducation.includes("M.COM")}
                                onChange={ppeducationHandler}
                              />
                              &nbsp; MCOM
                            </label>
                            <br />
                            <label htmlFor="BCA." className="py-2">
                              <input
                                type="checkbox"
                                id="BCA."
                                name="ppeducation"
                                value="BCA."
                                checked={ppeducation.includes("BCA.")}
                                onChange={ppeducationHandler}
                              />
                              &nbsp; BCA
                            </label>
                            <br />
                            <label htmlFor="MBA." className="py-2">
                              <input
                                type="checkbox"
                                id="MBA."
                                name="ppeducation"
                                value="MBA."
                                checked={ppeducation.includes("MBA.")}
                                onChange={ppeducationHandler}
                              />
                              &nbsp; MBA
                            </label>
                          </Col>
                        </Row>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Occupation</td>
                    <td>
                      <select
                        style={{ width: "135px" }}
                        value={ppOcc}
                        onChange={(e) => setppOcc(e.target.value)}
                      >
                        <option hidden value="">
                          Select Any One
                        </option>
                        <option value="Manager">Manager</option>
                        <option value="First Class">First Class</option>
                        <option value="Second Class">Second Class</option>
                        <option value="Other">Other</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>
                      <select
                        name="Location"
                        style={{ width: "135px" }}
                        value={ppLocation}
                        onChange={(e) => setppLocation(e.target.value)}
                      >
                        <option>India</option>
                        <option>NRI</option>
                        <option>Other</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Marital Status</td>
                    <td>
                      <select
                        name="Marital Status"
                        style={{ width: "135px" }}
                        value={ppMStatus}
                        onChange={(e) => setppMStatus(e.target.value)}
                      >
                        <option>Other</option>
                        <option>Un-Married</option>
                        <option>Divorced</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Native Place</td>
                    <td>
                      <select
                        name="Native"
                        style={{ width: "135px" }}
                        value={ppNative}
                        onChange={(e) => setppNative(e.target.value)}
                      >
                        <option>India</option>
                        <option>Out of India</option>
                        <option>Other</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>About My Partner</td>
                    <td>
                      <input
                        type="text"
                        value={ppAboutPartner}
                        onChange={(e) => setppAboutPartner(e.target.value)}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div
              style={{ width: "85%" }}
              className="container-sm my-5 bg-light rounded-5 border border-dark p-3"
            >
              <div
                style={{ width: "80%" }}
                className="container-sm my-2 bg-light rounded-5 border border-dark p-2"
              >
                <p className="fs-1 text-center" style={{ color: "#6E6E6E" }}>
                  My Personality
                </p>
              </div>
              <Table striped="columns" className="mt-5">
                <thead>
                  <tr>
                    <th>Fields</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Diet</td>
                    <td>
                      <select
                        name="Age"
                        style={{ width: "135px" }}
                        value={mpdiet}
                        onChange={(e) => setmpdiet(e.target.value)}
                      >
                        <option>Veg</option>
                        <option>Non-Veg</option>
                        <option>Other</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Smoke</td>
                    <td>
                      <select
                        name="Height"
                        style={{ width: "135px" }}
                        value={mpSmoke}
                        onChange={(e) => setmpSmoke(e.target.value)}
                      >
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Drink</td>
                    <td>
                      <select
                        name="PhysicalStatus"
                        style={{ width: "135px" }}
                        value={mpDrink}
                        onChange={(e) => setmpDrink(e.target.value)}
                      >
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td>Music Likes</td>
                    <td>
                      <input
                        type="range"
                        min="1"
                        max="101"
                        className="slider"
                        id="myRange"
                        step="20"
                        value={mpMusicrange}
                        onChange={(e) =>
                          setmpMusicrange(parseInt(e.target.value))
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Music Category</td>
                    <td>
                      <Row>
                        <Col className="mt-3">
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="music"
                              value="Film Music"
                              checked={music.includes("Film Music")}
                              onChange={musicHandler}
                            />
                            &nbsp;Film Music
                          </label>
                          <br />
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="music"
                              value="Devotional"
                              checked={music.includes("Devotional")}
                              onChange={musicHandler}
                            />
                            &nbsp;Devotional
                          </label>
                          <br />
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="music"
                              value="Albums"
                              checked={music.includes("Albums")}
                              onChange={musicHandler}
                            />
                            &nbsp;Albums
                          </label>
                        </Col>
                        <Col className="mt-3">
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="music"
                              value="Western"
                              checked={music.includes("Western")}
                              onChange={musicHandler}
                            />
                            &nbsp;Western
                          </label>
                          <br />
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="music"
                              value="Hindi Songs"
                              checked={music.includes("Hindi Songs")}
                              onChange={musicHandler}
                            />
                            &nbsp;Hindi Songs
                          </label>
                          <br />
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="music"
                              value="Gujrati Songs"
                              checked={music.includes("Gujrati Songs")}
                              onChange={musicHandler}
                            />
                            &nbsp;Gujrati Songs
                          </label>
                        </Col>
                        <Col className="mt-3">
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="music"
                              value="Music Is My Life"
                              checked={music.includes("Music Is My Life")}
                              onChange={musicHandler}
                            />
                            &nbsp;Music Is My Life
                          </label>
                          <br />
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="music"
                              value="Tamil Songs"
                              checked={music.includes("Tamil Songs")}
                              onChange={musicHandler}
                            />
                            &nbsp;Tamil Songs
                          </label>
                          <br />
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="music"
                              value="Don't Listen To Music"
                              checked={music.includes("Don't Listen To Music")}
                              onChange={musicHandler}
                            />
                            &nbsp;Don't Listen To Music
                          </label>
                        </Col>
                      </Row>
                    </td>
                  </tr>

                  {/* </tr> */}

                  <tr>
                    <td>Reading likes</td>
                    <td>
                      <input
                        type="range"
                        min="1"
                        max="101"
                        className="slider"
                        id="myRange"
                        step="20"
                        value={mpReadingrange}
                        onChange={(e) =>
                          setmpReadingrange(parseInt(e.target.value))
                        }
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Reading</td>
                    <td>
                      <Row>
                        <Col className="mt-3">
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="reading"
                              value="Newspapers"
                              checked={reading.includes("Newspapers")}
                              onChange={readHandler}
                            />
                            &nbsp;Newspapers
                          </label>
                          <br />
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="reading"
                              value="Trade Journals"
                              checked={reading.includes("Trade Journals")}
                              onChange={readHandler}
                            />
                            &nbsp;Trade Journals
                          </label>
                          <br />
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="reading"
                              value="Self Help Books"
                              checked={reading.includes("Self Help Books")}
                              onChange={readHandler}
                            />
                            &nbsp;Self Help Books
                          </label>
                        </Col>
                        <Col className="mt-3">
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="reading"
                              value="Management Books"
                              checked={reading.includes("Management Books")}
                              onChange={readHandler}
                            />
                            &nbsp;Management Books
                          </label>
                          <br />
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="reading"
                              value="Comedy"
                              checked={reading.includes("Comedy")}
                              onChange={readHandler}
                            />
                            &nbsp;Comedy
                          </label>
                          <br />
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="reading"
                              value="Biographies"
                              checked={reading.includes("Biographies")}
                              onChange={readHandler}
                            />
                            &nbsp;Biographies
                          </label>
                        </Col>
                        <Col className="mt-3">
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="reading"
                              value="Devotional Books"
                              checked={reading.includes("Devotional Books")}
                              onChange={readHandler}
                            />
                            &nbsp;Devotional Books
                          </label>
                          <br />
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="reading"
                              value="Romance"
                              checked={reading.includes("Romance")}
                              onChange={readHandler}
                            />
                            &nbsp;Romance
                          </label>
                          <br />
                          <label htmlFor="">
                            <input
                              type="checkbox"
                              name="reading"
                              value="I Don't Read Much"
                              checked={reading.includes("I Don't Read Much")}
                              onChange={readHandler}
                            />
                            &nbsp;I Don't Read Much
                          </label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div
              style={{ width: "85%" }}
              className="container-sm my-5 bg-light rounded-5 border border-dark p-3"
            >
              <div
                style={{ width: "80%" }}
                className="container-sm my-2 bg-light rounded-5 border border-dark p-2"
              >
                <p className="fs-1 text-center" style={{ color: "#6E6E6E" }}>
                  Astro Details
                </p>
              </div>
              <Table striped="columns" className="mt-5">
                <thead>
                  <tr>
                    <th>Fields</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Date of Birth</td>
                    <td>
                      <input
                        type="date"
                        value={aDate}
                        onChange={(e) => setaDate(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Time of Birth</td>
                    <td>
                      <input
                        type="string"
                        value={aTime}
                        onChange={(e) => setaTime(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Birth Time Correction</td>
                    <td>
                      <select
                        name="Birth Time Correction"
                        style={{ width: "135px" }}
                        value={aBirthTime}
                        onChange={(e) => setaBirthTime(e.target.value)}
                      >
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Place of Birth</td>
                    <td>
                      <input
                        type="string"
                        value={aPlace}
                        onChange={(e) => setaPlace(e.target.value)}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
