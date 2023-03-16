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
        }}
      >
        <Container>
        <Nav className="justify-content-around flex-grow-1">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/successstories">Success Stories</Nav.Link>
            <Nav.Link href="/membership">Membership</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/faqs">FAQS</Nav.Link>
            <Nav.Link href="/aboutus">Aboutus</Nav.Link>
            <Nav.Link href="/contactus">Contact</Nav.Link>
            <Nav.Link href="/loginregister" className="p-2 rounded bg-white">LoginRegister</Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarHead;
