import Head from "next/head";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  NavDropdown,
} from "react-bootstrap";
import Image from "next/image";
//import logo from "../../public/images/logo.png";
import "bootstrap/dist/css/bootstrap.css";

export default function Header() {
  return (
    <>
      <Head>
        <title>Spaceshift test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <Image src="/logo.png" alt="Spaceshift" width={164} height={40} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navBarTop">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="/google-street-view">
                  Google street view
                </NavDropdown.Item>
                <NavDropdown.Item href="/3d-tours">
                  3D Tours
                </NavDropdown.Item>
                <NavDropdown.Item href="/custom-virtual-tour">
                  Custom virtual tours
                </NavDropdown.Item>
                <NavDropdown.Item href="/vr-flims">
                  Professional VR films
                </NavDropdown.Item>
                <NavDropdown.Item href="/project-mapping">
                  3D Projection mapping
                </NavDropdown.Item>
                <NavDropdown.Item href="/photogrammetry">
                  Photogrammetry
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Industries" id="basic-nav-dropdown">
                <NavDropdown.Item href="/restaurants-n-cafes">
                  Restaraunts & Cafes
                </NavDropdown.Item>
                <NavDropdown.Item href="/travel-n-hospitality">
                  Travel & Hospitality
                </NavDropdown.Item>
                <NavDropdown.Item href="/real-estate"> 
                  Real Estate
                </NavDropdown.Item>

                <NavDropdown.Item href="/retails">
                  Retails & Showrooms
                </NavDropdown.Item>
                <NavDropdown.Item href="/tourism">Tourism</NavDropdown.Item>
                <NavDropdown.Item href="/educational-institutes">
                  Educational Institutes
                </NavDropdown.Item>
                <NavDropdown.Item href="/events">Events</NavDropdown.Item>
                <NavDropdown.Item href="/hospitals-n-clinic">
                  Hospials & Clinics
                </NavDropdown.Item>
                <NavDropdown.Item href="/restoration">
                  Restoration
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Blog</Nav.Link>
              <Nav.Link href="/contactus">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
