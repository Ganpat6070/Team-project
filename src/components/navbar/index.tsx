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
            <Nav.Link href="/" style={{color: "white"}}>Home</Nav.Link>
            <Nav.Link href="#sucessStories" style={{color: "white"}}>Success Stories</Nav.Link>
            <Nav.Link href="#membership" style={{color: "white"}}>Membership</Nav.Link>
            <Nav.Link href="#gallery" style={{color: "white"}}>Gallery</Nav.Link>
            <Nav.Link href="/faqs" style={{color: "white"}}>FAQS</Nav.Link>
            <Nav.Link href="/aboutus"style={{color: "white"}}>Aboutus</Nav.Link>
            <Nav.Link href="#contactus"style={{color: "white"}}>Contact</Nav.Link>
            <Nav.Link href="/login" className="p-2 rounded bg-white" style={{color: "#FA4C55"}}>
              Login/Register
            </Nav.Link>

            <Nav.Link href="/profileSearch" style={{color: "white"}}></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarHead;


// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// function MyNavbar() {
//   return (
//     <>
//       <Navbar
//         className="justify-content-center p-3 bg-transparent text-white"
//         expand="lg"
//         style={{
//           backgroundImage: `url("./image/Maskgroup.png")`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <Container className="justify-content-center" >
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="/" className="text-white">
//                 Home
//               </Nav.Link>
//               <Nav.Link href="/stories" className="text-white">
//                 Success Stories
//               </Nav.Link>
//               <Nav.Link href="/membership" className="text-white">
//                 Membership
//               </Nav.Link>
//               <Nav.Link href="/gallery" className="text-white">
//                 Gallery
//               </Nav.Link>
//               <Nav.Link href="/faqs" className="text-white">
//                 FAQs
//               </Nav.Link>
//               <Nav.Link href="/aboutus" className="text-white">
//                 About Us
//               </Nav.Link>
//               <Nav.Link href="/contact" className="text-white">
//                 Contact Us
//               </Nav.Link>
//               <Nav.Link href="/contact" className=" p-2 rounded bg-white">
//               Register/Login
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       {/* <div>
//         <h1>Dream it... Believe it... Make it happen!</h1>
//       </div> */}
//     </>
//   );
// }

// export default MyNavbar;
