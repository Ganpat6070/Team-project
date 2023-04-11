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

import Dropdown from "react-bootstrap/Dropdown";

const NavbarHead = () => {
  const [islogedin, setIsLogedin] = useState(false);
  const [user, setUser] = useState<string | null>(null);
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
      let username: any = localStorage.getItem("uname");
      const name = username.substring(1, username.indexOf("@"));
      const capitalizedName =
        name.charAt(0).toUpperCase() + name.slice(1).replace(/\./g, " ");
      setUser(capitalizedName);

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
                <Dropdown id="dropdown-basic" >
                  <Dropdown.Toggle className="bg-transparent border-0 button dropdown-toggle" id="dropdown-basic">
                    <img
                      className="imgpro rounded-circle"
                      style={{ width: "50px" }}
                      src={
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      }
                      alt=""
                    ></img>
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{backgroundColor:"#f6837d" , width:"250" }}>
                  <h6 className="text-center ">{user}</h6>
                      <p className="text-center ">Type:Free</p>

                      <hr />
                       <div className="dropdown-item">  
                          <button
                          className="list-group-item list-group-item-action px-4 text-light"
                          style={{ backgroundColor: "#f6837d" }}
                           >
                          <House color="black" size={20} />{" "}
                          <small>
                            <Link
                              to="/basic-info"
                              className="text-black"
                              style={{ textDecoration: "none" }}
                            >
                              Complete Profile
                            </Link>
                          </small>
                           </button>
                        </div>
                    <Dropdown.Item href="/edit-profile">
                    <button
                          className="list-group-item list-group-item-action px-4 text-light"
                          style={{ backgroundColor: "#f6837d" }}
                        >
                          <Person color="black" size={20} />{" "}
                          <small>
                            <Link
                              to="/edit-profile"
                              className="text-black"
                              style={{ textDecoration: "none" }}
                            >
                              Edit My Profile
                            </Link>
                          </small>
                        </button>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                    <button
                          className="list-group-item list-group-item-action px-4 text-light"
                          style={{ backgroundColor: "#f6837d" }}
                        >
                          <Trash color="black" size={20} />{" "}
                          <small className="text-black">Delete My Profile</small>
                        </button>
                    </Dropdown.Item>
                    <Dropdown.Item>
                    <button
                          className="list-group-item list-group-item-action px-4 text-light"
                          style={{ backgroundColor: "#f6837d" }}
                        >
                          <Lock color="black" size={20} />{" "}
                          <small className="text-black">Change My Password</small>
                        </button>
                    </Dropdown.Item>
                    <Dropdown.Item><button
                          className="list-group-item list-group-item-action px-4 text-light"
                          style={{ backgroundColor: "#f6837d" }}
                        >
                          <BoxArrowInRight color="black" size={20} />{" "}
                          <Link to="/" style={{ textDecoration: "none" }}>
                            <span
                              onClick={logoutHandler}
                              className="text-black"
                            >
                              Logout
                            </span>
                          </Link>
                        </button></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default NavbarHead;
