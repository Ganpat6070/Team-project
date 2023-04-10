import React from "react";

const BasicInfomation = (data: any) => {
  const data2 = data.data;

  const dateOfBirth = new Date(data2.dateOfBirth);
  const ageInMilliseconds = Date.now() - dateOfBirth.getTime();
  const ageInYears = new Date(ageInMilliseconds).getUTCFullYear() - 1970;


  return (
    <div>
      <div className="text-center fw-bold">Basic Information</div>
      <br />
      <br />
      <div
        className="d-flex justify-content-around"
        style={{
          backgroundColor: "rgb(238, 234, 234)",
          padding: "2rem",
          borderRadius: "4%",
        }}
      >
        <div className="text-start ml-4 d-flex">
          <li style={{ listStyle: "none", fontWeight: "300" }}>
            <ul>Age</ul>
            <ul>Gender</ul>
            <ul>Data of Birth</ul>
            <ul>Height</ul>
            <ul>weight</ul>
            <ul>Mother Tongue</ul>
            <ul>Marital Status</ul>
            <ul>Physical Status</ul>
            <ul>Spoken Languages</ul>
            <ul>Email</ul>
            <ul>Annual Income</ul>
            <ul>Blood Group</ul>
            <ul>Body Type</ul>
            <ul>Complexion</ul>
            <ul>Currency</ul>
            <ul>EmployedIn</ul>

            <ul>Country</ul>
            <ul>Current Location</ul>
            <ul>Permanenet Location</ul>
            <ul>Residential Status</ul>

            <ul>Drink</ul>
            <ul>Smoke</ul>
            <ul>My Diet</ul>

            <ul>Star</ul>
            <ul>Astro Date of Birth</ul>
            <ul>Birth Time Correction</ul>

            <ul>Place Of Birth</ul>
            <ul>Time Of Birth</ul>
            <ul>Time Zone</ul>




            {/* <ul>Age</ul> */}
          </li>
        </div>
        <div className="text-start">
          <li style={{ listStyle: "none" }}>
            <ul>{ageInYears ? ageInYears : "Not Available"}</ul>
            <ul>{data2.gender ? data2.gender : "Not Available"}</ul>
            <ul>{data2.dateOfBirth ? data2.dateOfBirth.slice(0,10) : "Not Available"}</ul>
            <ul>{data2.height ? data2.height +  "  C.M" : "Not Available"}</ul>
            <ul>{data2.weight ? data2.weight +  "  K.G" : "Not Available"}</ul>
            <ul>{data2.motherTongue ? data2.motherTongue : "Not Available"}</ul>
            <ul>{data2.maritalStatus ? data2.maritalStatus : "Not Available"}</ul>
            <ul>{data2.physicalStatus ? data2.physicalStatus : "Not Available"}</ul>
            <ul>{data2.spokenLanguages ? data2.spokenLanguages : "Not Available"}</ul>
            <ul>{data2.email ? data2.email : "Not Available"}</ul>
            <ul>{data2.annualIncome ? data2.annualIncome : "Not Available"}</ul>
            <ul>{data2.bloodGroup ? data2.bloodGroup : "Not Available"}</ul>
            <ul>{data2.bodyType ? data2.bodyType : "Not Available"}</ul>
            <ul>{data2.complexion ? data2.complexion : "Not Available"}</ul>
            <ul>{data2.currency ? data2.currency : "Not Available"}</ul>
            <ul>{data2.employedIn ? data2.employedIn : "Not Available"}</ul>

            <ul>{data2.country ? data2.country : "Not Available"}</ul>
            <ul>{data2.currentLocation ? data2.currentLocation : "Not Available"}</ul>
            <ul>{data2.permanentLocation ? data2.permanentLocation : "Not Available"}</ul>
            <ul>{data2.residentialStatus ? data2.residentialStatus : "Not Available"}</ul>

            <ul>{data2.drink ? data2.drink : "Not Available"}</ul>
            <ul>{data2.smoke ? data2.smoke : "Not Available"}</ul>
            <ul>{data2.myDiet ? data2.myDiet : "Not Available"}</ul>

            <ul>{data2.star ? data2.star : "Not Available"}</ul>
            <ul>{data2.astroDateOfBirth ? data2.astroDateOfBirth : "Not Available"}</ul>
            <ul>{data2.birthTimeCorrection ? data2.birthTimeCorrection : "Not Available"}</ul>

            <ul>{data2.placeOfBirth ? data2.placeOfBirth : "Not Available"}</ul>
            <ul>{data2.timeOfBirth ? data2.timeOfBirth : "Not Available"}</ul>
            <ul>{data2.timeZone ? data2.timeZone : "Not Available"}</ul>
            {/* <ul>{data2.gender ? data2.gender : "Not Available"}</ul> */}
          </li>
        </div>
      </div>
    </div>
  );
};

export default BasicInfomation;
