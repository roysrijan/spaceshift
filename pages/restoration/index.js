import React from "react";
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
import stylesRestoration from "../../styles/Restoration.module.scss";
import Footer from "../components/footer";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";

// import restorationBannerImg from "../../public/images/restoration-banner.jpg";
// import restorationImg from "../../public/images/img-45.jpg";
// import restorationImg2 from "../../public/images/img-46.jpg";

export default function index() {
  return (
    <div className="globalWrap">
      <Header />

      <section
        className={
          stylesRestoration["restorationContainer"] + " " + "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesRestoration.restorationTopPartWrap}>
                <h1>Restoration</h1>
                <p>
                Restoration, be it ecological or architectural, is important to preserve our history, culture, and earth for future generations. One of the important prerequisites for successful restoration is forming measurable goals, that also help measure success in a standardized way. Traditionally, restorers had to perform extensive groundwork to properly survey and get the measurements, following which the workflow was carried out. A small degree of uncertainty in the measurements of the original physical structure in any of the consecutive steps in these traditional methods could lead to a large measure of calibration errors in the measurements of the digital 3D form. To avoid this, restorers use<b>3D photogrammetry</b> for a high degree of precision, which eliminates the time spent to trace these errors. SpaceShift has an experienced team of experts who can perform accurate <b>photogrammetry 3D </b>scanning to help ease the restoration process.
                </p>

                {/* <Image src={restorationBannerImg} alt="Spaceshift" /> */}
<img src="/images/restoration-banner.jpg" alt="Spaceshift"/>


                <p className={stylesRestoration.technolgytext}>
                Technology has helped transform every aspect of the human world, including the restoration industry. <b>3D photogrammetry</b> is one of the most complete and flexible techniques available for collecting precise 3D data. It helps expand the understanding about the physical space to be restored and clears any confusion which helps speed the workflow.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={
          stylesRestoration["restorationBottomPartContainer"] +
          " " +
          "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesRestoration.restorationBottomPartBox}>
                <div className={stylesRestoration.restorationBottomPartLeft}>
                  <h2>Benefits of 3D Photogrammetry</h2>

                  <div
                    className={stylesRestoration.restorationBottomPartLeftImg1}
                  >
                    {/* <Image src={restorationImg} alt="Spaceshift" /> */}
<img src="/images/img-45.jpg" alt="Spaceshift"/>
                    
                  </div>
                  <div
                    className={stylesRestoration.restorationBottomPartLeftImg2}
                  >
                    {/* <Image src={restorationImg2} alt="Spaceshift" /> */}
<img src="/images/img-46.jpg" alt="Spaceshift"/>
                    
                  </div>
                </div>
                <div className={stylesRestoration.restorationBottomPartRight}>
                  <div
                    className={stylesRestoration.restorationBottomPartRightBox}
                  >
                    <div
                      className={
                        stylesRestoration.restorationBottomPartRightCol1
                      }
                    >
                      <h5>Highly Accurate</h5>
                    </div>
                    <div
                      className={
                        stylesRestoration.restorationBottomPartRightCol2
                      }
                    >
                      <p>
                      One of the main reasons for the use of <b>3D photogrammetry</b> for the restoration of the ecosystem or architecture is that it is precise and is comparable to other highly accurate coordinate measurement systems. The accuracy depends on several factors like - camera resolution and measured area size, but an average accuracy of 25 to 50 microns is easily achievable. SpaceShift’s expert scanning team uses high-end equipment and plans before the shoot, to control the variables as much as possible and deliver the most accurate <b>3D models</b>.
                      </p>
                    </div>
                  </div>

                  <div
                    className={stylesRestoration.restorationBottomPartRightBox}
                  >
                    <div
                      className={
                        stylesRestoration.restorationBottomPartRightCol1
                      }
                    >
                      <h5>Quicker Re-Evaluation</h5>
                    </div>
                    <div
                      className={
                        stylesRestoration.restorationBottomPartRightCol2
                      }
                    >
                      <p>
                      Restoration is considered successful when the final restored product has the exact measurements as the original. To achieve this, restorers need to constantly refer to the recorded measurements and dictate operations based on them. With photogrammetry, expensive fieldwork does not need to be repeated, as the previously captured images can be used to re-measure and re-evaluate in a convenient manner.
                      </p>
                    </div>
                  </div>

                  <div
                    className={stylesRestoration.restorationBottomPartRightBox}
                  >
                    <div
                      className={
                        stylesRestoration.restorationBottomPartRightCol1
                      }
                    >
                      <h5>Provides a Wide Mapping Area</h5>
                    </div>
                    <div
                      className={
                        stylesRestoration.restorationBottomPartRightCol2
                      }
                    >
                      <p>
                      <b>3D photogrammetry</b> can be used to get a wider view of the space since <b>aerial scanning</b> can provide information about the topographical features, that can be combined with the ground scanning details for a better understanding of the overall physical place. Moreover, areas like confined roofs and high buildings are hard to reach without the use of platforms or consecutive levels closer to these areas. In these cases, photogrammetry is a more appropriate choice, as it provides the exact measurements of these areas without many complications.
                      </p>
                    </div>
                  </div>
                  <div
                    className={stylesRestoration.restorationBottomPartRightBox}
                  >
                    <div
                      className={
                        stylesRestoration.restorationBottomPartRightCol1
                      }
                    >
                      <h5>Affordable</h5>
                    </div>
                    <div
                      className={
                        stylesRestoration.restorationBottomPartRightCol2
                      }
                    >
                      <p>
                      Light Detection and Ranging Systems are widely used for measurements during restoration and are difficult to obtain. However, with recent technological developments, laser scanners such as Faro, are easier to manipulate and have helped make <b>Photogrammetry 3D scanning </b>more affordable compared to traditional methods. These scanners also provide accurate measurements without compromising the quality.
                      </p>
                    </div>
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
