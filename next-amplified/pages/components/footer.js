import Image from "next/image";
import footerStyles from "../../styles/Footer.module.scss";
import footLogo from "../../public/images/logo.png";
import locationicon from "../../public/images/location-icon.png";
import contactIcon from "../../public/images/contact-info-icon.png";
import linkIcon from "../../public/images/link-icon.png";
import newsletterSendIcon from "../../public/images/newsletter-send.png";
import insta from "../../public/images/insta.png";
import google from "../../public/images/google.png";
import facebook from "../../public/images/facebook.png";
import twitter from "../../public/images/twitter.png";

import {
  Container,
  Row,
  Col,
  Form,
  Navbar,
  Nav,
  Button,
  NavDropdown,
} from "react-bootstrap";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <Container>
        <Row>
          <Col lg="4">
            <div className={footerStyles.footerBox}>
              <Image src={footLogo} alt="Spaceshift" />
              <ul>
                <li>
                  <p className={footerStyles.p1}>
                    Inspiration is what people at <b> SpaceShift</b> put in
                    their lives & work every day.
                  </p>
                </li>
                <li>
                  <Image src={locationicon} alt="Spaceshift" />
                  <p>Location</p>
                </li>

                <li>
                  <Image src={contactIcon} alt="Spaceshift" />
                  <p>Contact Info</p>
                </li>

                <li>
                  <Image src={linkIcon} alt="Spaceshift" />
                  <p>www.spaceshift.in</p>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg="5">
            <div className={footerStyles.footerBoxServices}>
              <h2>Services</h2>
              <span>
                <ul>
                  <li>
                    <a href="#">Virtual Tour</a>
                  </li>
                  <li>
                    <a href="#">Professional VR Films</a>
                  </li>
                  <li>
                    <a href="#">Photogrammetry</a>
                  </li>
                  <li>
                    <a href="#">3D Projection Mapping</a>
                  </li>
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href="#">Industries</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="/how-we-can-help">FAQ</a>
                  </li>
                </ul>
              </span>
            </div>
          </Col>

          <Col lg="3">
            <div className={footerStyles.footerBoxServices}>
              <h2>Get in touch</h2>
              <div className={footerStyles.newsletterWrap}>
                <Form className={footerStyles.newsletterForm}>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Enter your email"
                  />
                  <Button>
                    <Image src={newsletterSendIcon} alt="Spaceshift" />
                  </Button>
                </Form>
              </div>

              <div className={footerStyles.socialWrap}>
              <h2>Social networks</h2>
              <div>
                <a> <Image src={google} alt="Spaceshift" /></a>
                <a> <Image src={twitter} alt="Spaceshift" /></a>
                <a> <Image src={facebook} alt="Spaceshift" /></a>
                <a> <Image src={insta} alt="Spaceshift" /></a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
