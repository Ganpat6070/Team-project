import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <>
      <Navbar
        className="justify-content-center p-3 bg-transparent text-white"
        expand="lg"
        style={{
          backgroundImage: `url("./image/Maskgroup.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="/stories" className="text-white">
                Success Stories
              </Nav.Link>
              <Nav.Link href="/membership" className="text-white">
                Membership
              </Nav.Link>
              <Nav.Link href="/gallery" className="text-white">
                Gallery
              </Nav.Link>
              <Nav.Link href="/faqs" className="text-white">
                FAQs
              </Nav.Link>
              <Nav.Link href="/aboutus" className="text-white">
                About Us
              </Nav.Link>
              <Nav.Link href="/contact" className="text-white">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Brand href="#home" className="p-2 rounded bg-white">
            Register/Login
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/* <div>
        <h1>Dream it... Believe it... Make it happen!</h1>
      </div> */}
    </>
  );
}

export default MyNavbar;
