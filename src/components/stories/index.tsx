import React from "react";

function Stories() {
  return (
    <>
      <div>
        <div className="text-center">
          <h1 className="font-weight-normal">Success Stories</h1>
        </div>
        <div className="text-center">
          <h3>
            <u className="font-weight-normal">
              Over thousand of success stories
            </u>
          </h3>
        </div>

        <div className="d-flex justify-content-center">
          <div>
            <img src={require("../../images/a1.png")} alt="a1" />
            <p>Deepak & Navya</p>
          </div>
          <div>
            <img src={require("../../images/a2.png")} alt="a1" />
            <p>Neeraj & Vismaya</p>
          </div>
          <div>
            <img src={require("../../images/a3.png")} alt="a1" />
            <p>Adarsh & Archana</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stories;
