import React from "react";
import NavbarHead from "../navbar";
import Footer from "../pages/footer";
import PhotoCard from "./PhotoCard";
import ProgressBar from "./ProgressBar";

const Finished = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("../../image/Maskgroup.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "0 -300px",
          width: "100%",
          height: "100%",
        }}
      >
        <ProgressBar />
        <PhotoCard />
        <div
          style={{ width: "55%" }}
          className="container-sm mt-5 mb-5 m-auto bg-light border border-light p-3"
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <img
                className="d-block w-100"
                src="../../image/finished.png"
                alt=""
                height="100%"
                width="70%"
              />
            </div>
            <div className="p-3">
              <h1
                style={{
                  background: "linear-gradient(to right,#FE8A4D, #FA5847)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Poppins",
                }}
              >
                Congratulations
              </h1>
              <h5>You are now a member of PerfectMatch.com</h5>
              <p>
                Login to your account on your desktop or mobile with your email
                and password
              </p>
              <p>We wish you good luck in your search for the right partner!</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Finished;
