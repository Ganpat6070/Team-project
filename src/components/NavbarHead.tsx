import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarHead = () => {
  return (
    <div>
      <Navbar
        className="justify-content-center bg-transparent"
        expand="lg"
        style={{
          backgroundImage: `url("../../image/Background1.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: '60px',
        }}
      >
        <Container>
        <Nav className="justify-content-around flex-grow-1">
            <Nav.Link href="/" style={{color: "white"}}>Home</Nav.Link>
            <Nav.Link href="#sucessStories" style={{color: "white"}}>Success Stories</Nav.Link>
            <Nav.Link href="#membership" style={{color: "white"}}>Membership</Nav.Link>
            <Nav.Link href="#gallery" style={{color: "white"}}>Gallery</Nav.Link>
            <Nav.Link href="/faqs" style={{color: "white"}}>FAQS</Nav.Link>
            <Nav.Link href="/aboutus" style={{color: "white"}}>Aboutus</Nav.Link>
            <Nav.Link href="#contactFooter" style={{color: "white"}}>Contact</Nav.Link>
            <Nav.Link href="/loginregister" className="p-2 rounded bg-white" style={{color: "#FA4C55"}}>Login/Register</Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarHead;
