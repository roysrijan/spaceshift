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

import Image from "next/image";
// import vrFlimsBanner from "../../public/images/vrfilms-banner.jpg";
import stylesVrFlims from "../../styles/VrFlims.module.scss";
import Footer from "../components/footer";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";

// import vrFlimsImg1 from "../../public/images/img-17.jpg";
// import vrFlimsImg2 from "../../public/images/img-18.jpg";
// import vrFlimsImg3 from "../../public/images/img-18.jpg";
// import vrFlimsImg4 from "../../public/images/img-19.jpg";

export default function index() {
  return (
    <div className="globalWrap">
      <Header />
      <div className="innerPageHeaderWrap">
        {/* <Image src={vrFlimsBanner} alt="Spaceshift" /> */}
        <img src="/images/vrfilms-banner.jpg" alt="Spaceshift" />

        <div className="innerPageHeaderTitle">
          <h2>VR Films</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At at amet
            tortor viverra.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
      </div>

      <section
        className={stylesVrFlims["vrFlimsContainer1"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesVrFlims.vrFlimsContainer1Box}>
                <div className={stylesVrFlims.vrFlimsContainer1Img}>
                  {/* <Image src={vrFlimsImg1} alt="Spaceshift" /> */}
                  <img src="/images/img-17.jpg" alt="Spaceshift" />
                </div>
                <div className={stylesVrFlims.vrFlimsContainer1Content}>
                  <h2>Professional VR Films</h2>
                  <p>
                    Virtual Reality films (commonly known as VR videos) allude
                    to videos that are captured utilizing expert omnidirectional
                    cameras which empower the shooting of a whole 360 degrees
                    simultaneously. In the finished video, the client is allowed
                    to check out the entire location. Contrary to standard
                    recordings, VR videos give a vivid, interactive experience.
                    The client often encounters the sensation of really being
                    there. 
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="12">
              <div
                className={
                  stylesVrFlims["vrFlimsContainer1Box"] +
                  " " +
                  stylesVrFlims["vrFlimsContainer1BoxRe"]
                }
              >
                <div className={stylesVrFlims.vrFlimsContainer1Content}>
                  <h2>Why should you choose VR films?</h2>
                  <h5>Door to another advertising platform</h5>
                  <p>
                    As a general marketing rule, you should keep testing new
                    platforms regularly. On the off chance that you use Facebook
                    for your business, you will develop while Facebook itself is
                    developing.
                    <br></br>
                    <br></br>
                    70% of advertisers who have utilized 360 videos say it has
                    expanded engagement for them. If you distribute 360 pictures
                    and videos on renowned social media platforms you are
                    entering another surge of attention. Using VR content on
                    such platforms that acknowledge it will nearly guarantee
                    more eyes on your posts. 
                    <br></br>
                    <br></br>
                    Observe this use case of vivid VR promoting: Try before you
                    FLY by Thomas Cook is a program that utilizes virtual
                    reality to allow potential clients to investigate their
                    dream destinations. By and large, the travel service saw an
                    increment in their ROI by 40% and a 190% increment in
                    appointments in New York City.
                  </p>
                  <h5>Consumer Loyalty</h5>
                  <p>
                    At the point when organizations put forth a noticeable
                    attempt to post new types of media and substance, they ask
                    for customers' consideration; on that note, investing a
                    little energy does go a long way.  <br></br>
                    <br></br>
                    Posting new content tells your crowd you are continually
                    developing. As a rule, continually innovating means you will
                    be here and not vanish tomorrow. It's a decent pointer of a
                    marvelous brand that has most people's consideration. 
                    <br></br>
                    <br></br>
                    New research recommends putting resources into VR
                    (360-degree media) will pay off in brand value and increment
                    purchases over 2-3 years. 
                  </p>
                </div>

                <div className={stylesVrFlims.vrFlimsContainer1Img}>
                  {/* <Image src={vrFlimsImg3} alt="Spaceshift" /> */}
                  <img src="/images/img-18.jpg" alt="Spaceshift" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={stylesVrFlims["vrFlimsContainer2"] + " " + ""}>
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesVrFlims.vrFlimsContainer2Box}>
                <h2>Observe this use case of vivid VR promoting</h2>
                <div className={stylesVrFlims.vrFlimsContainer2Img}>
                  {/* <Image src={vrFlimsImg4} alt="Spaceshift" /> */}
                  <img src="/images/img-19.jpg" alt="Spaceshift" />
                </div>
                <div className={stylesVrFlims.vrFlimsContainer2Content}>
                  <p>
                    Try before you FLY by Thomas Cook is a program that utilizes
                    virtual reality to allow potential clients to investigate
                    their dream destinations. By and large, the travel service
                    saw an increment in their ROI by 40% and a 190% increment in
                    appointments in New York City.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={stylesVrFlims["vrFlimsContainer3"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesVrFlims.vrFlimsContainer3Box}>
                <h2>Virtual Reality technology is the Future</h2>
                <p>
                  Wearing the hat of a brand builder, Spaceshift aims at
                  experimenting and inventing new ways to involve customers in
                  the organizations it works with. Utilizing VR, it becomes easy
                  to communicate necessary branding information through a direct
                  and profoundly immersive experience for the viewer. Marketing
                  and VR, now, go hand in hand. Through the unique VR
                  experiences, companies can establish a stronger and better
                  relationship with their customers.
                  <br></br>
                  <br></br>
                  VR technology, when juxtaposed with your marketing strategy,
                  can make your message stand apart from and above the
                  competition, providing the potential audience an enhanced
                  version of your product offering. VR demos provided during
                  trade shows or board meetings tend to be the ideal example in
                  this case. Virtual Reality adds to your arsenal of
                  storytelling, granting endless opportunities to engage with
                  customers and form strategic engagement.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
