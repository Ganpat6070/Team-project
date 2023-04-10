import React from "react";

const Contact = (props: any) => {
  const data = props.data;
  return (
    <div>
      <div className="text-center fw-bold">Contact Information</div>
      <br />
      <br />
      <div
        className="d-flex justify-content-lg-evenly"
        style={{
          backgroundColor: "rgb(238, 234, 234)",
          padding: "2rem",
          borderRadius: "4%",
        }}
      >
        <div className="text-start ml-4">
          <li style={{ listStyle: "none", fontWeight: "300" }}>
            <ul>mobileNumber</ul>
            <ul>landlineNumber</ul>
            <ul>Preferred Contact type</ul>
            <ul>Convenient time to call</ul>
            <ul>contactName</ul>
            <ul>email</ul>
            <ul>apartmentName</ul>
            <ul>profileCreatedBy</ul>
            <ul>streetLocality</ul>
            <ul>pinCode</ul>
            <ul>country</ul>
            <ul>cityState</ul>
            <ul>referenceName</ul>
            <ul>contactNumber</ul>
            <ul>address</ul>
          </li>
        </div>
        <div className="text-start">
          <li style={{ listStyle: "none" }}>
            <ul>{data.mobileNumber? data.mobileNumber : "Not Available"}</ul>
            <ul>{data.landlineNumber? data.landlineNumber : "Not Available"}</ul>
            <ul>{data.preferredContactType? data.preferredContactType : "Not Available"}</ul>
            <ul>{data.convenientTimeToCall? data.convenientTimeToCall : "Not Available"}</ul>
            <ul>{data.contactName? data.contactName : "Not Available"}</ul>
            <ul>{data.email? data.email : "Not Available"}</ul>
            <ul>{data.apartmentName? data.apartmentName : "Not Available"}</ul>
            <ul>{data.profileCreatedBy? data.profileCreatedBy : "Not Available"}</ul>
            <ul>{data.streetLocality? data.profilestreetLocalityCreatedBy : "Not Available"}</ul>
            <ul>{data.pinCode? data.pinCode : "Not Available"}</ul>
            <ul>{data.country? data.country : "Not Available"}</ul>
            <ul>{data.cityState? data.cityState : "Not Available"}</ul>
            <ul>{data.referenceName? data.referenceName : "Not Available"}</ul>
            <ul>{data.contactNumber? data.contactNumber : "Not Available"}</ul>
            <ul>{data.address? data.address : "Not Available"}</ul>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Contact;
