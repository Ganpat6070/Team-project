import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <section
        className="page_404"
        style={{ padding: "40px 0", background: "#fff", margin:"0 auto", float: "none"}}
      >
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-12">
              <div
                className="col-sm-10 col-sm-offset-1 text-center"
                style={{
                    textAlign: "center",
                }}
              >
                <div
                  className="four_zero_four_bg"
                  style={{
                    backgroundImage:
                      "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
                    height: "400px",
                    backgroundPosition: "center",
                  }}
                >
                  <h1
                    className="text-center"
                    style={{
                      textAlign: "center",
                      fontSize: "80px",
                    }}
                  >
                    404
                  </h1>
                </div>
                <div style={{ marginTop: "-50px" }}>
                  <h3>Look like you're lost</h3>
                  <p>the page you are looking for not avaible!</p>
                  <Link to="/">Go to Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
