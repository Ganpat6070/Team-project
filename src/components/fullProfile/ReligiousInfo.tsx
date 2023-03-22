import React from "react";

const ReligiousInfo = () => {
  return (
    <div>
      <div className="text-center">Basic Information</div><br/><br/>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <div className="text-start ml-4">
          <li style={{listStyle: 'none'}}>
            <ul>Religion</ul>
            <ul>Caste / Denomination</ul>
          </li>
        </div>
        <div className="text-start">
          <li style={{listStyle: 'none'}}>
            <ul>Hindu</ul>
            <ul>Chettier</ul>
          </li>
        </div>
      </div>
    </div>
  );
};

export default ReligiousInfo;