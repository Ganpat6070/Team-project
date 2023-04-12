import { useEffect, useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
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
  BorderBottom,
} from "react-bootstrap-icons";
import { error } from "console";
import { Dropdown } from "react-bootstrap";

const NavbarHead = () => {
  const [islogedin, setIsLogedin] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [show, setShow] = useState<boolean>(false);
  const [image, setImage] = useState("");
  // eslint-disable-next-line
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const getlogin = localStorage.getItem("isAuthenticated");
  const token = localStorage.getItem("Token");

  // popup state
  const [popup, setPopup] = useState<boolean>(false);
  const handlePopupClose = () => setPopup(false);

  const logoutHandler = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("Token");
    localStorage.removeItem("uname");
    localStorage.removeItem("id");
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
      getProfile();
      setIsLogedin(true);
      // setPopup(true);
    } else {
      setIsLogedin(false);
      // setPopup(false);
    }
  }, [setIsLogedin, getlogin]);

  const getProfile = async () => {
    let response = await fetch("http://localhost:8000/profile", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });

    let res = await response.json();
    console.log(res);
    let image = res.profile[0].image;
    if (res.profile[0] === undefined) {
      return;
    } else {
      setImage(image);
    }
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const deleteProfile = async () => {
    let profileid = localStorage.getItem("Token");

    let response = await fetch(
      `http://localhost:8000/profile-delete/${profileid}`,
      {
        method: "GET",
      },
    );
    // if (!response.ok) {
    //   throw new Error("Something went wrong!");
    // }
    if (response.status === 200) {
      toast.error("Your profile data has been deleted!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setShow(false);
    }
    if (response.status === 404) {
      toast.error("Profile data not found!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setShow(false);
    }
  };

  return (
    <>
      <Modal show={popup} onHide={handlePopupClose}>
        <Modal.Header closeButton>
          <Modal.Title>Complete Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please complete your profile!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePopupClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
            height: "53px",
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

                <Dropdown id="dropdown-basic" className="custom-dropdown">
                  <Dropdown.Toggle
                    className="bg-transparent border-0 button dropdown-toggle"
                    id="dropdown-basic"
                  >
                    <img
                      className="imgpro rounded-circle"
                      style={{ width: "50px", height: "50px" }}
                      src={image ? image : "../../image/photocard.png"}
                      alt=""
                    ></img>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{
                      backgroundColor: "white",
                      width: "250",
                      left: "-86px",
                    }}
                  >
                    <h6 className="text-center ">{user}</h6>
                    <p className="text-center ">Type:Free</p>

                    <hr />
                    <div className="dropdown-item">
                      <button
                        className="list-group-item list-group-item-action px-4 text-light"
                        style={{ backgroundColor: "white" }}
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
                        style={{ backgroundColor: "white" }}
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
                        style={{ backgroundColor: "white" }}
                      >
                        <Trash color="black" size={20} />{" "}
                        <small className="text-black">Delete My Profile</small>
                      </button>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <button
                        className="list-group-item list-group-item-action px-4 text-light"
                        style={{ backgroundColor: "white" }}
                      >
                        <Lock color="black" size={20} />{" "}
                        <small className="text-black">Change My Password</small>
                      </button>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <button
                        className="list-group-item list-group-item-action px-4 text-light"
                        style={{ backgroundColor: "white" }}
                      >
                        <BoxArrowInRight color="black" size={20} />{" "}
                        <Link to="/" style={{ textDecoration: "none" }}>
                          <span onClick={logoutHandler} className="text-black">
                            Logout
                          </span>
                        </Link>
                      </button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className="text-danger">
                      Delete Profile
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Are you sure to delete your profile!
                    <br /> This will delete your profile data
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="danger" onClick={deleteProfile}>
                      Delete
                    </Button>
                  </Modal.Footer>
                </Modal>

                {/* <PopupMenu>
                  <button className="btn rounded-circle">
                    <img
                      className="rounded-circle"
                      style={{ width: "50px", height: "50px" }}
                      src={image ? image : "../../image/photocard.png"}
                      alt=""
                    ></img>
                  </button>

                  <div
                    style={{
                      width: "250px",
                      height: "300px",
                      marginTop: "70px",
                      marginRight: "10px",
                      marginLeft: "-80px",
                      boxShadow: "none",
                    }}
                    className="card text-start"
                  >
                    <div
                      className="card-body px-4 py-4 bg-white"
                      style={{ border: "1px solid black" }}
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
                          className="list-group-item list-group-item-action px-4  bg-white"
                          // style={{ backgroundColor: "#f6837d" }}
                        >
                          <House color="black" size={20} />{" "}
                          <small>
                            <Link
                              to="/basic-info"
                              className="text-dark"
                              style={{ textDecoration: "none" }}
                            >
                              My Profile
                            </Link>
                          </small>
                        </button>
                        <button
                          className="list-group-item list-group-item-action px-4  bg-white"
                          // style={{ backgroundColor: "#f6837d" }}
                        >
                          <Person color="black" size={20} />{" "}
                          <small>
                            <Link
                              to="/edit-profile"
                              className="text-dark"
                              style={{ textDecoration: "none" }}
                            >
                              Edit My Profile
                            </Link>
                          </small>
                        </button>
                        <button
                          onClick={handleShow}
                          className="list-group-item list-group-item-action px-4  bg-white"
                          style={{ backgroundColor: "#f6837d" }}
                        >
                          <Trash color="black" size={20} />{" "}
                          <small>Delete My Profile</small>
                        </button>

                        <button
                          className="list-group-item list-group-item-action px-4  bg-white"
                          style={{ backgroundColor: "#f6837d" }}
                        >
                          <Lock color="black" size={20} />{" "}
                          <small>Change My Password</small>
                        </button>
                        <button
                          className="list-group-item list-group-item-action px-4  bg-white"
                          style={{ backgroundColor: "#f6837d" }}
                        >
                          <BoxArrowInRight color="black" size={20} />{" "}
                          <Link to="/" style={{ textDecoration: "none" }}>
                            <span onClick={logoutHandler} className="text-dark">
                              Logout
                            </span>
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </PopupMenu> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default NavbarHead;
