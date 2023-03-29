import React from "react";
import NavbarHead from "../navbar";
import Footer from "./footer";

function Contactus() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("../../image/Maskgroup.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize:"cover",
          backgroundPosition: "0 -350px",
          width: "100%",
          height: "100%",
        }}
      >
        <NavbarHead />

        {/* <h1 className="text-white text-center m-4 p-3 font-weight-normal">Conatact Us</h1> */}
        {/* <div className="p-3 m-4 bg-light border"> */}
        <div
          style={{ width: "65%" }}
          className="container-sm mt-5 mb-5 m-auto bg-light rounded-5 border border-dark p-3"
        >
          <form className="mx-2 my-2">
            <p className="fs-2" style={{ color: "#6E6E6E" }}>
              Conatact Us
            </p>
            <div className="row">
              <div className="col-xl mt-3">
                <label htmlFor="email">
                  Your Email ID <span className="text-danger">*</span>
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xl mt-3">
                <label htmlFor="subject">
                  Subject <span className="text-danger">*</span>
                </label>
                <br />
                <input
                  type="text"
                  id="subject"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xl mt-3">
                <label htmlFor="msg">
                  Message <span className="text-danger">*</span>
                </label>
                <br />
                <textarea
                  id="msg"
                  className="form-control text-dark mt-1 rounded-2 border-secondary"
                  required
                />
              </div>
            </div>
            <button
              className="btn btn-light btn-outline-secondary btn-xl mt-2"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contactus;
