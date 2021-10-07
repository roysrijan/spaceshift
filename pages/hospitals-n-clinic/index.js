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

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Image from "next/image";
import stylesHospitalsNClinic from "../../styles/HospitalsNClinic.module.scss";
import Footer from "../components/footer";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";

// import HospitalBannerImg from "../../public/images/hospitals-banner.png";
// import HospitalImg from "../../public/images/img-43.jpg";
// import HospitalImg2 from "../../public/images/img-44.jpg";


export default function index() {
  return (
    <div className="globalWrap">
      <Header />
      <section
        className={
          stylesHospitalsNClinic["hospitalsTopContainer"] + " " + "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesHospitalsNClinic.hospitalsTop}>
                <div className={stylesHospitalsNClinic.hospitalsTopContent}>
                  <h1>Hospitals and Clinics</h1>
                  <p>
                    Healthcare is a rapidly evolving industry, that utilizes the
                    most advanced technologies to its advantage. The web has the
                    answer to everything and lets patients search for
                    well-equipped and reputed local healthcare providers and
                    facilities. Previously, the only way that people could get
                    an idea of the facilities provided was by looking at the
                    pictures or by physically visiting the healthcare center.
                    Now, with the use of recent technologies like custom virtual
                    tours, patients can visit a facility virtually, right from
                    their computers or mobile devices. These tours help showcase
                    the high-end equipment and facilities a hospital provides to
                    assure patients and their families that they are in good
                    hands.
                  </p>
                </div>
                <div className={stylesHospitalsNClinic.hospitalsTopImg}>
                  {/* <Image src={HospitalBannerImg} alt="Spaceshift" /> */}
<img src="/images/hospitals-banner.png" alt="Spaceshift"/>

                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={
          stylesHospitalsNClinic["hospitalPlainTextContainer"] +
          " " +
          "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <p>
                Virtual walkthroughs are interactive and are accessible through
                all devices, which makes it easier for prospective patients to
                get more comfortable with the services. Most people feel
                uncomfortable visiting a new and unknown space, and custom
                virtual tours can help them relax by providing them an idea of
                what they can expect, by using an immersive 360 view of the
                complete facility.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={
          stylesHospitalsNClinic["hospitalBottomContainer"] +
          " " +
          "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <h2>Benefits of Virtual Tours for Hospitals and Clinics</h2>
            </Col>
            <Col lg="12">
            <div className={stylesHospitalsNClinic.hospitalBottomMain}>

              <div className={stylesHospitalsNClinic.hospitalBottomImgCol}>
                <div className={stylesHospitalsNClinic.hospitalBottomImg}>
                  {/* <Image src={HospitalImg} alt="Spaceshift" /> */}
<img src="/images/img-43.jpg" alt="Spaceshift"/>

                </div>
                <div className={stylesHospitalsNClinic.hospitalBottomImg2}>
                  {/* <Image src={HospitalImg2} alt="Spaceshift" /> */}
<img src="/images/img-44.jpg" alt="Spaceshift"/>

                </div>
              </div>
              <div className={stylesHospitalsNClinic.hospitalBottomInfo}>
                <div className={stylesHospitalsNClinic.hospitalBottomInfoBox}>
                  <h5>Visualize the Equipment Used and Services Offered</h5>
                  <p>
                    With interactive 360 virtual tours, it is easier for
                    patients to see the machines and rooms up close. This is
                    generally not possible during any physical visit as they are
                    mostly in use or aren’t available for patients to view as
                    per their will. In most cases, visualizing these features is
                    crucial for the patient and their family to help decide
                    whether the center is well-equipped to provide them with the
                    best possible treatment.
                  </p>
                </div>
                <div className={stylesHospitalsNClinic.hospitalBottomInfoBox}>
                  <h5>Long-Term Patients can View Cabins and Rooms</h5>
                  <p>
                  Staying in an unknown place for a long time can be scary for some patients. Virtual walkthroughs of the private cabins and rooms let the user explore the same, which can provide a sense of confidence and reassurance. It also provides a basic knowledge of what they can expect during their stay at the hospital.
                  </p>
                </div>
                <div className={stylesHospitalsNClinic.hospitalBottomInfoBox}>
                  <h5>Draws the Attention of the Local Community</h5>
                  <p>
                  High quality virtual tours on your website help keep your visitors engaged, which reduces the bounce rate of your website, helping you perform better from the SEO point of view. This helps improve your position in searches and also puts you in an advantageous position compared to your competitors. Moreover, virtual tours are accessible remotely 24/7, which makes it easier for people to check it out from the comfort of their homes.

                  </p>
                </div>
                <div className={stylesHospitalsNClinic.hospitalBottomInfoBox}>
                  <h5>Benefits New Staff Members</h5>
                  <p>
                  Staying in an unknown place for a long time can be scary for some patients. Virtual walkthroughs of the private cabins and rooms let the user explore the same, which can provide a sense of confidence and reassurance. It also provides a basic knowledge of what they can expect during their stay at the hospital.
                  </p>
                </div>
                <div className={stylesHospitalsNClinic.hospitalBottomInfoBox}>
                  <h5>Non-Local Patients Can Experience the Facility</h5>
                  <p>
                  Not all patients come from local areas and look further from home, for better and more complicated health care solutions. In some cases, doctors might transfer or refer the patient to some other hospital for better treatment. This is when high quality virtual tours become more than a visual experience and provide an opportunity for potential patients to examine the offered services and make well-informed decisions for their well-being.
                  </p>
                </div>
             
              
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
