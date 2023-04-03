import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import NavbarHead from "../navbar";

const EditProfile = () => {
  const [dob, setdob] = useState("");
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [mStatus, setmStatus] = useState("");
  const [mTongue, setmTongue] = useState("");
  const [religion, setreligion] = useState("");
  const [cast, setcast] = useState("");
  const [subcast, setsubcast] = useState("");
  const [phyStatus, setphyStatus] = useState("");
  const [education, seteducation] = useState("");
  const [spokenLanguage, setspokenLanguage] = useState("");
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
  const [street, setstreet] = useState("");
  const [pin, setpin] = useState("");
  const [city, setcity] = useState("");
  const [refname, setrefname] = useState("");
  const [refaddress, setrefaddress] = useState("");
  const [refcontact, setrefcontact] = useState("");

  const [complexion, setComplexion] = useState("");
  const [bodytype, setbodytype] = useState("");
  const [bloodGroup, setbloodGroup] = useState("");
  const [occupation, setoccupation] = useState("");
  const [employedin, setemployedin] = useState("");
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
  const [motherOcc, setmotherOcc] = useState("");
  const [motherEdu, setmotherEdu] = useState("");
  const [currLoc, setcurrLoc] = useState("");
  const [resStatus, setresStatus] = useState("");
  const [native, setnative] = useState("");

  const [age, setAge] = useState("");

  console.log({
    dob,
    height,
    weight,
    mStatus,
    mTongue,
    religion,
    cast,
    subcast,
    phyStatus,
    education,
    spokenLanguage,
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
    street,
    pin,
    city,
    refname,
    refaddress,
    refcontact,
  });

  console.log({
    complexion,
    bodytype,
    bloodGroup,
    occupation,
    employedin,
    religion1,
    currency1,
    subcast1,
    annualInc,
    astro,
    aboutfam,
    famtype,
    famstatus,
    fatCurrency,
    fatAnnualInc,
    fatname,
    fatFamilyname,
    fatHome,
    fatEmp,
    fatOcc,
    fatEdu,
    fatCompName,
    fatDesig,
    fatWorkLoc,
    motherName,
    motherFamName,
    motherHome,
    motherOcc,
    motherEdu,
    currLoc,
    resStatus,
    native,
  });

  const [userData, setUserData] = useState<any>({
    mTongue1: "",
    religion1: "hindu",
  });

  const changeHandle = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  console.log(userData);

  return (
    <div>
      <NavbarHead/>
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
                  id="height"
                  name="Height"
                  value={height}
                  onChange={(e) => setheight(e.target.value)}
                >
                  <option value="4ft">4ft</option>
                  <option value="5ft">5ft</option>
                  <option value="6ft">6ft</option>
                  <option value="7ft">7ft</option>
                  <option value="7ft +">7ft +</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>
                <select
                  name="Weight"
                  onChange={(e) => setweight(e.target.value)}
                >
                  <option value="40-50">40-50</option>
                  <option value="50-60">50-60</option>
                  <option value="60-70">60-70</option>
                  <option value="70-80">70-80</option>
                  <option value="80-90">80-90</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Marital Status</td>
              <td>
                <select onChange={(e) => setmStatus(e.target.value)}>
                  <option value="single">Single</option>
                  <option value="inRelationship">In-Relationship</option>
                  <option value="devorced">Devorced</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Mother Tongue</td>
              <td>
                <input
                  type="text"
                  value={mTongue}
                  onChange={(e) => setmTongue(e.target.value)}
                />
                {/* <InputText
                  name="mTongue1"
                  value={userData.mTongue1}
                  onChange={changeHandle}
                /> */}
              </td>
            </tr>
            <tr>
              <td>Religion</td>
              <td>
                {/* <InputText
                  name="religion1"
                  value={userData.religion1}
                  onChange={changeHandle}
                /> */}
                <input
                  type="text"
                  value={religion}
                  onChange={(e) => setreligion(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Cast</td>
              <td>
                <input
                  type="text"
                  value={cast}
                  onChange={(e) => setcast(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>SubCast</td>
              <td>
                <input
                  type="text"
                  value={subcast}
                  onChange={(e) => setsubcast(e.target.value)}
                />
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
              <td>Education</td>
              <td>
                <input
                  type="text"
                  value={education}
                  onChange={(e) => seteducation(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Spoken Language</td>
              <td>
                <input
                  type="checkbox"
                  name="lang1"
                  value={spokenLanguage}
                  onChange={(e) => setspokenLanguage(e.target.value)}
                />
                <label htmlFor="lang1">English</label>&nbsp;&nbsp;
                <input
                  type="checkbox"
                  name="lang2"
                  value={spokenLanguage}
                  onChange={(e) => setspokenLanguage(e.target.value)}
                />
                <label htmlFor="lang2">Hindi</label>&nbsp;&nbsp;
                <input
                  type="checkbox"
                  name="lang3"
                  value={spokenLanguage}
                  onChange={(e) => setspokenLanguage(e.target.value)}
                />
                <label htmlFor="lang3">Gujarati</label>&nbsp;&nbsp;
              </td>
            </tr>
            <tr>
              <td>EducationDetails</td>
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
              <td>School Place</td>
              <td>
                <input
                  type="text"
                  value={splace}
                  onChange={(e) => setsplace(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Year of Study</td>
              <td>
                <input
                  type="text"
                  value={syos}
                  onChange={(e) => setsyos(e.target.value)}
                />
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
                <input
                  type="text"
                  value={cyos}
                  onChange={(e) => setcyos(e.target.value)}
                />
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
              <td>Location Code</td>
              <td>
                <input
                  type="text"
                  value={lcode}
                  onChange={(e) => setlcode(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Location Area</td>
              <td>
                <input
                  type="text"
                  value={larea}
                  onChange={(e) => setlarea(e.target.value)}
                />
              </td>
            </tr>
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
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setcity(e.target.value)}
                />
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
                    name="skinColor"
                    value={complexion}
                    onChange={(e) => setComplexion(e.target.value)}
                  >
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                    <option value="medium">Medium</option>
                    <option value="white">White</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Body type</td>
                <td>
                  <select
                    id="bodyType"
                    name="bodytype"
                    value={bodytype}
                    onChange={(e) => setbodytype(e.target.value)}
                  >
                    <option value="ectomorph">ectomorph</option>
                    <option value="mesomorph">mesomorph</option>
                    <option value="endomorph">endomorph</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Blood Group</td>
                <td>
                  <select
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
                  <input
                    type="text"
                    value={occupation}
                    onChange={(e) => setoccupation(e.target.value)}
                  />
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
                    name="currency"
                    value={currency1}
                    onChange={(e) => setcurrency1(e.target.value)}
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
                <td>SubCast</td>
                <td>
                  <input
                    type="text"
                    value={subcast1}
                    onChange={(e) => setsubcast1(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Annual Income</td>
                <td>
                  <select
                    name="AnnualIncome"
                    value={annualInc}
                    onChange={(e) => setannualInc(e.target.value)}
                  >
                    <option>4L</option>
                    <option>5L</option>
                    <option>6L</option>
                    <option>7L</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Astro Details</td>
                <td>
                  <select
                    name="AstroDetails"
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
                    value={fatAnnualInc}
                    onChange={(e) => setfatAnnualInc(e.target.value)}
                  >
                    <option>4L</option>
                    <option>5L</option>
                    <option>6L</option>
                    <option>7L</option>
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
                <td>Current Location</td>
                <td>
                  <select
                    name="CurrentLocation"
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
                    value={native}
                    onChange={(e) => setnative(e.target.value)}
                  >
                    <option></option>
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
                    name="Age"
                    // value={ppAge}
                    // onChange={(e) => setppAge(e.target.value)}
                  >
                    <option>18</option>
                    <option>22</option>
                    <option>30</option>
                  </select>
                  <select
                    name="Age"
                    // value={ppAge}
                    // onChange={(e) => setppAge(e.target.value)}
                  >
                    <option>23</option>
                    <option>28</option>
                    <option>40</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Height</td>
                <td>
                  <select
                    name="Height"
                    // value={ppAge}
                    // onChange={(e) => setppAge(e.target.value)}
                  >
                    <option>5</option>
                    <option>6</option>
                  </select>
                  <select
                    name="Height"
                    // value={ppAge}
                    // onChange={(e) => setppAge(e.target.value)}
                  >
                    <option>5.5</option>
                    <option>6.5</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Physical Status</td>
                <td>
                  <select
                    name="PhysicalStatus"
                    value={resStatus}
                    onChange={(e) => setresStatus(e.target.value)}
                  >
                    <option>Type1</option>
                    <option>Type2</option>
                    <option>Type3</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Family Status</td>
                <td>
                  <select
                    name="PhysicalStatus"
                    value={resStatus}
                    onChange={(e) => setresStatus(e.target.value)}
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
                    name="PhysicalStatus"
                    value={resStatus}
                    onChange={(e) => setresStatus(e.target.value)}
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
                    name="PhysicalStatus"
                    value={resStatus}
                    onChange={(e) => setresStatus(e.target.value)}
                  >
                    <option>1-3 L</option>
                    <option>3-5 L</option>
                    <option>5-7 L</option>
                    <option>7+ L</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Mother Tongue</td>
                <td>
                  <select
                    name="PhysicalStatus"
                    value={resStatus}
                    onChange={(e) => setresStatus(e.target.value)}
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
                    name="PhysicalStatus"
                    value={resStatus}
                    onChange={(e) => setresStatus(e.target.value)}
                  >
                    <option>Any</option>
                    <option>Hindu</option>
                    <option>Muslim</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Caste / Denomination</td>
                <td>
                  <select
                    name="PhysicalStatus"
                    value={resStatus}
                    onChange={(e) => setresStatus(e.target.value)}
                  >
                    <option>Any</option>
                    <option>Hindu</option>
                    <option>Muslim</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Diet</td>
                <td>
                  <select
                    name="PhysicalStatus"
                    value={resStatus}
                    onChange={(e) => setresStatus(e.target.value)}
                  >
                    <option>Vegetarian</option>
                    <option>Non-Vegetarian</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Education</td>
                <td>
                  <input
                    type="checkbox"
                    id="education"
                    name="eduOptions"
                    value="Graduate"
                  />
                  <label htmlFor="education">Graduate</label>
                  <input
                    type="checkbox"
                    id="education"
                    name="eduOptions"
                    value="Post-Graduate"
                  />
                  <label htmlFor="education">Post-Graduate</label>
                  <input
                    type="checkbox"
                    id="education"
                    name="eduOptions"
                    value="PH.D"
                  />
                  <label htmlFor="education">PH.D</label>
                  {/* <input type='checkbox' id="education" name="eduOptions" value='M.E'/>
                  <input type='checkbox' id="education" name="eduOptions" value='B.A'/> */}
                </td>
              </tr>
              <tr>
                <td>Location</td>
                <td>
                  <select
                    name="PhysicalStatus"
                    value={resStatus}
                    onChange={(e) => setresStatus(e.target.value)}
                  >
                    <option>India</option>
                    <option>USA</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Marital Status</td>
                <td>
                  <select
                    name="PhysicalStatus"
                    value={resStatus}
                    onChange={(e) => setresStatus(e.target.value)}
                  >
                    <option>Married</option>
                    <option>Un-Married</option>
                    <option>Divorced</option>
                    <option>Seperated</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Native Place</td>
                <td>
                  <select
                    name="PhysicalStatus"
                    value={resStatus}
                    onChange={(e) => setresStatus(e.target.value)}
                  >
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Marital Status</td>
                <td>
                  <input
                    type="text"
                    value={motherOcc}
                    onChange={(e) => setmotherOcc(e.target.value)}
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
                    // value={ppAge}
                    // onChange={(e) => setppAge(e.target.value)}
                  >
                    <option>Vegetarain</option>
                    <option>Non-Vegetarian</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Smoke</td>
                <td>
                  <select
                    name="Height"
                    // value={ppAge}
                    // onChange={(e) => setppAge(e.target.value)}
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
                    value={resStatus}
                    onChange={(e) => setresStatus(e.target.value)}
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Hobbies</td>
                <td>
                  <input
                    type="checkbox"
                    id="hobby"
                    name="hobbies"
                    value="Music"
                  />
                  <label htmlFor="Music">Music</label>
                  <input
                    type="checkbox"
                    id="hobby"
                    name="hobbies"
                    value="Games"
                  />
                  <label htmlFor="Games">Games</label>
                  <input
                    type="checkbox"
                    id="hobby"
                    name="hobbies"
                    value="Reading"
                  />
                  <label htmlFor="Reading">Reading</label>
                  {/* <input type='checkbox' id="education" name="eduOptions" value='M.E'/>
                  <input type='checkbox' id="education" name="eduOptions" value='B.A'/> */}
                </td>
              </tr>
              <tr>
                <td>Music</td>
                <td>
                  <input
                    type="checkbox"
                    id="music"
                    name="musics"
                    value="Film Music"
                  />
                  <label htmlFor="Film Music">Film Music</label>
                  <input
                    type="checkbox"
                    id="music"
                    name="musics"
                    value="Devotional"
                  />
                  <label htmlFor="Devotional">Devotional</label>
                  <input
                    type="checkbox"
                    id="music"
                    name="musics"
                    value="Albums"
                  />
                  <label htmlFor="Albums">Albums</label>
                  <input
                    type="checkbox"
                    id="music"
                    name="musics"
                    value="Hindi Song"
                  />
                  <label htmlFor="Hindi Song">Hindi Song</label>
                  <input
                    type="checkbox"
                    id="music"
                    name="musics"
                    value="Western"
                  />
                  <label htmlFor="Western">Western</label>
                </td>
              </tr>
              <tr>
                <td>Reading</td>
                <td>
                  <input
                    type="checkbox"
                    id="read"
                    name="reading"
                    value="Newspaper"
                  />
                  <label htmlFor="Newspaper">Newspaper</label>
                  <input
                    type="checkbox"
                    id="read"
                    name="reading"
                    value="Biographies"
                  />
                  <label htmlFor="Biographies">Biographies</label>
                  <input
                    type="checkbox"
                    id="read"
                    name="reading"
                    value="Any thing"
                  />
                  <label htmlFor="Any thing">Any thing</label>
                </td>
              </tr>
              <tr>
                <td>Sports</td>
                <td>
                  <input
                    type="checkbox"
                    id="sport"
                    name="sports"
                    value="Cricket"
                  />
                  <label htmlFor="Cricket">Cricket</label>
                  <input
                    type="checkbox"
                    id="sport"
                    name="sports"
                    value="Swimming"
                  />
                  <label htmlFor="Swimming">Swimming</label>
                </td>
              </tr>
              <tr>
                <td>Dress</td>
                <td>
                  <input
                    type="checkbox"
                    id="dress"
                    name="dresses"
                    value="Indian"
                  />
                  <label htmlFor="Indian">Indian</label>
                  <input
                    type="checkbox"
                    id="dress"
                    name="dresses"
                    value="Western"
                  />
                  <label htmlFor="Western">Western</label>
                  <input
                    type="checkbox"
                    id="dress"
                    name="dresses"
                    value="Traditional"
                  />
                  <label htmlFor="Traditional">Traditional</label>
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
                  <input type="date" name="" id="" value="" />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
