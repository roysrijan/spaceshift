import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Accordion,
} from "react-bootstrap";
import Image from "next/image";
import stylesContact from "../../styles/Contact.module.scss";
import Footer from "../components/footer";
import Header from "../components/header";

// import contactIcon1 from "../../public/images/contact-icon-1.png";
// import contactIcon2 from "../../public/images/contact-icon-2.png";
// import contactIcon3 from "../../public/images/contact-icon-3.png";

export default function Home() {
  return (
    <div className="globalWrap">
      <Header />

      <section
        className={stylesContact["contactUsContainer"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesContact.contactUsBox}>
                <h1>Contact Us</h1>
                <p>
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit
                  amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className={stylesContact.addressEmailwrap}>
                  <ul>
                    <li>
                      {/* <Image src={contactIcon1} alt="Spaceshift" /> */}
<img src="/images/contact-icon-1.png" alt="Spaceshift"/>

                      <h3>Address</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur </p>
                    </li>

                    <li>
                      {/* <Image src={contactIcon2} alt="Spaceshift" /> */}
<img src="/images/contact-icon-2.png" alt="Spaceshift"/>

                      <h3>Call Us</h3>
                      <p>(236) 236-6236 </p>
                    </li>

                    <li>
                      {/* <Image src={contactIcon3} alt="Spaceshift" /> */}
<img src="/images/contact-icon-3.png" alt="Spaceshift"/>

                      <h3>Email</h3>
                      <p>Info@Spaceshift.in </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <div className={stylesContact.contactGenQuesMain}>


      <section
        className={stylesContact["contactGenQues"] + " " + "blockPadding"}
      >

     
              <div className={stylesContact.contactGenQuesBoxContainer}>
                <div className={stylesContact.contactGenQuesBox1}>
                  <span>Get In Touch</span>
                  <h2>Have a General Question? Send Us an email</h2>
                </div>
                <div className={stylesContact.contactGenQuesBox2}>
                  <input
                    type="text"
                    id="lname"
                    name="name"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    id="lname"
                    name="name"
                    placeholder="Email"
                  />
                  <textarea
                    id=""
                    name=""
                    rows="4"
                    cols="50"
                    placeholder="Message"
                  ></textarea>

                  <Button className="btn">Submit</Button>
                </div>
              </div>
           
      </section>

      </div>
      <Footer />
    </div>
  );
}
