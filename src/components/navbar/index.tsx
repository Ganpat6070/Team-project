import React, { useEffect, useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavbarHead = () => {
  const [islogedin, setIsLogedin] = useState(false);
  // eslint-disable-next-line
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const getlogin = localStorage.getItem("login");
  const logoutHandler = () => {
    localStorage.removeItem("login");
    toast.error("You have logged out", {
      position: toast.POSITION.TOP_RIGHT,
    });
    forceUpdate();
  };
  useEffect(() => {
    if (getlogin === "true") {
      setIsLogedin(true);
    } else setIsLogedin(false);
  }, [setIsLogedin, getlogin]);
  return (
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
        <Nav className="justify-content-around flex-grow-1">
          <Nav.Link>
            <Link to="/" className="text-white">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link href="#sucessStories" className="text-white">
            Success Stories
          </Nav.Link>
          <Nav.Link>
            <Link to="/membership" className="text-white">
              Membership
            </Link>
          </Nav.Link>
          <Nav.Link href="#gallery" className="text-white">
            Gallery
          </Nav.Link>
          <Nav.Link>
            <Link to="/faqs" className="text-white">
              FAQS
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/aboutus" className="text-white">
              Aboutus
            </Link>
          </Nav.Link>
          <Nav.Link href="#contactFooter" className="text-white">
            Contact
          </Nav.Link>
          <ToastContainer />  
          {!islogedin && (
            <Nav.Link
              className="p-2 rounded bg-white"
              style={{ color: "#FA4C55" }}
            >
              <Link to="/login">Login/Register</Link>
            </Nav.Link>
          )}

          {islogedin && (
            <Nav.Link
              className="p-2 rounded bg-white"
              style={{ color: "#FA4C55" }}
            >
              <Link to="/">
                <span onClick={logoutHandler}>Logout</span>
              </Link>
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarHead;
