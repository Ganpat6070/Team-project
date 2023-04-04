import { useEffect, useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PopupMenu } from "react-simple-widgets";
import "./index.css";
import {
  BoxArrowInRight,
  Trash,
  House,
  ArrowCounterclockwise,
  Lock,
  Person,
} from "react-bootstrap-icons";

const NavbarHead = () => {
  const [islogedin, setIsLogedin] = useState(false);
  const [user, setUser] = useState<any>();
  // eslint-disable-next-line
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const getlogin = localStorage.getItem("login");

  const logoutHandler = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("Token");
    localStorage.removeItem("uname");
    toast.error("You have logged out", {
      position: toast.POSITION.TOP_RIGHT,
    });
    forceUpdate();
  };
  useEffect(() => {
    if (getlogin === "true") {
      setUser(localStorage.getItem("uname"));

      setIsLogedin(true);
    } else setIsLogedin(false);
  }, [setIsLogedin, getlogin]);
  return (
    <>
      {!islogedin && (
        <Navbar
          className="justify-content-center bg-transparent"
          expand="lg"
          style={{
            backgroundImage: `url("../../image/Background1.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            height: "60px",
          }}
        >
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-around navbar flex-grow-1 me-auto">
                <Link
                  to="/"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>

                <Nav.Link href="#sucessStories" className="text-white">
                  Success Stories
                </Nav.Link>

                <Link
                  to="/membership"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Membership
                </Link>

                <Nav.Link href="#gallery" className="text-white">
                  Gallery
                </Nav.Link>

                <Link
                  to="/faqs"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  FAQS
                </Link>

                <Link
                  to="/aboutus"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Aboutus
                </Link>

                <Link
                  to="/contactus"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </Link>
                <ToastContainer />

                <Link
                  to="/login"
                  className="p-2 rounded bg-white"
                  style={{ textDecoration: "none", color: "#FA4C55" }}
                >
                  Login/Register
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
      {islogedin && (
        <Navbar
          className="justify-content-center bg-transparent"
          expand="lg"
          style={{
            backgroundImage: `url("../../image/Background1.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "sticky",
            // paddingBottom:"20px",
            top: 0,
            zIndex: 1,
            width: "100%",
            height: "60px",
          }}
        >
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-around flex-grow-1">
                <Link
                  to="/"
                  className="text-white pt-4"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
                <Link
                  to="/membership"
                  className="text-white pt-4"
                  style={{ textDecoration: "none" }}
                >
                  Membership
                </Link>

                <Link
                  to="/faqs"
                  className="text-white pt-4"
                  style={{ textDecoration: "none" }}
                >
                  FAQS
                </Link>
                <Link
                  to="/aboutus"
                  className="text-white pt-4"
                  style={{ textDecoration: "none" }}
                >
                  Aboutus
                </Link>

                <Link
                  to="/contactus"
                  className="text-white pt-4"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </Link>
                <ToastContainer />

           
                  <PopupMenu>
                    <button className="btn rounded-circle">
                      <img
                        className="imgpro rounded-circle"
                        style={{ width: "50px" }}
                        src={
                          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                        }
                        alt=""
                      ></img>
                    </button>

                    <div
                      style={{
                        width: "250px",
                        height: "400px",
                        marginTop: "70px",
                        marginRight: "10px",
                        marginLeft: "-80px",
                      }}
                      className="card text-start"
                    >
                      <div
                        className="card-body px-4 py-4 "
                        style={{ backgroundColor: "#f6837d" }}
                      >
                        <div
                          id="circle-avatar"
                          className="text-center mx-auto mb-4"
                        ></div>

                        <h6 className="text-center ">{user}</h6>
                        <p className="text-center ">Type:Free</p>

                        <hr />

                        <div
                          className="list-group list-group-flush "
                          style={{ margin: "0 -24px 0" }}
                        >
                          <button
                            className="list-group-item list-group-item-action px-4 text-light"
                            style={{ backgroundColor: "#f6837d" }}
                          >
                            <House color="white" size={20} />{" "}
                            <small>
                              <Link
                                to="/basic-info"
                                className="text-white"
                                style={{ textDecoration: "none" }}
                              >
                                My Account
                              </Link>
                            </small>
                          </button>
                          <button
                            className="list-group-item list-group-item-action px-4 text-light"
                            style={{ backgroundColor: "#f6837d" }}
                          >
                            <Person color="white" size={20} />{" "}
                            <small>
                              <Link
                                to="/edit-profile"
                                className="text-white"
                                style={{ textDecoration: "none" }}
                              >
                                Edit My Profile
                              </Link>
                            </small>
                          </button>
                          <button
                            className="list-group-item list-group-item-action px-4 text-light"
                            style={{ backgroundColor: "#f6837d" }}
                          >
                            <ArrowCounterclockwise color="white" size={20} />{" "}
                            <small>My Activity Log</small>
                          </button>
                          <button
                            className="list-group-item list-group-item-action px-4 text-light"
                            style={{ backgroundColor: "#f6837d" }}
                          >
                            <Trash color="white" size={20} />{" "}
                            <small>Delete My Profile</small>
                          </button>
                          <button
                            className="list-group-item list-group-item-action px-4 text-light"
                            style={{ backgroundColor: "#f6837d" }}
                          >
                            <Lock color="white" size={20} />{" "}
                            <small>Change My Password</small>
                          </button>
                          <button
                            className="list-group-item list-group-item-action px-4 text-light"
                            style={{ backgroundColor: "#f6837d" }}
                          >
                            <BoxArrowInRight color="white" size={20} />{" "}
                            <Link to="/" style={{ textDecoration: "none" }}>
                              <span
                                onClick={logoutHandler}
                                className="text-white"
                              >
                                Logout
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </PopupMenu>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default NavbarHead;
