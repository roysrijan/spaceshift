import Head from "next/head";
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
import stylesVirtualTours from "../../styles/VirtualTours.module.scss";
import Footer from "../components/footer";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";

// import customVirtualTourImg from "../../public/images/custom-virtual-tour.jpg";
// import customVirtualTourImg2 from "../../public/images/img-10.png";
// import customVirtualTourImg3 from "../../public/images/img-11.png";

export default function index() {
  return (
    <div className="globalWrap">
      <Header />
      <div className="innerPageHeaderWrap black-bg">
        {/* <Image src={customVirtualTourImg} alt="Spaceshift" /> */}
<img src="/images/custom-virtual-tours-cover.webp" alt="Spaceshift"/>

        <div className="innerPageHeaderTitle black-bg">
          <h2>Custom Virtual Tours</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At at amet
            tortor viverra.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
      </div>

      <section
        className={
          stylesVirtualTours["customVirtualTourContainer"] +
          " " +
          "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesVirtualTours.customVirtualTourContentBox}>
                <div
                  className={stylesVirtualTours.customVirtualTourContentBoxImg}
                >
                  {/* <Image src={customVirtualTourImg2} alt="Spaceshift" /> */}
<img src="/images/img-10.png" alt="Spaceshift"/>
               
                </div>
                <p>
                &#34;Aim of every virtual tour production company should be to help the potential audience get a customized digital tour so that maximum customer engagement can take place&#34;<br></br><br></br>
                <b>Custom virtual tours</b> are way more interactive and creative as compared to <b>Google 360 tour </b>or<b>Google Virtual Tour</b> , however, have a progression of customizable features that make it significantly more interactive and function as extraordinary marketing material. Furthermore, these custom virtual tours are an excellent choice as they are profoundly adjustable to the particular necessities of businesses. These tours are, actually, in the form of an html format and they tend to be embedded as another page of a website rather than being embedded as a portion of a page.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={
          stylesVirtualTours["virtualToursForBussinessContainer"] +
          " " +
          "blockPadding"
        }
      >
        <div className={stylesVirtualTours.virtualToursForBussinessBox1}>
          <div className="tinyTitle">
            <h5>Custom Virtual Tours for Business</h5>
          </div>
          <h2>Why should you go for Custom Virtual Tours for your Business?</h2>

          <div className={stylesVirtualTours.ToursForBussinessAccor}>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Greater Permeability</Accordion.Header>
                <Accordion.Body>
                Considering that these tours are extremely interactive, they further increment site traffic, and time spent on a page. While businesses should try to showcase their custom tour on their main website, these tours can likewise be effortlessly installed to online media for an additional lift in engagement.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Organized Spaces</Accordion.Header>
                <Accordion.Body>
                With <b>custom virtual tours</b>, we help you display different parts of your space and connect them to a custom navigation menu within the tour where the client can teleport from one part to the other by a click of a button. If you look at the floorplan image of the business outlet on the<b> [right or left]</b>, you can see that it has labeled its different rooms so the viewers can easily move from one space to another by accessing them from the navigation menu.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Added Features</Accordion.Header>
                <Accordion.Body>
                The virtual tour stages support customized features for every business, like a FAQ for clients or showing an organization&#39;s contact data to make it open for expected customers. 
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>More Intuitive</Accordion.Header>
                <Accordion.Body>
                Businesses that sell items can without much of a stretch add data labels, which show item data when clicked, with media types including video, photograph, text, and hotspots. Viewers can explore the hotspots to know more about the product offerings in terms of images, videos, external links, and more.<br></br><br></br>

                SpaceShift works with your business to provide the best possible option and results for your needs. For more info <a href="#!">click here</a>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className={stylesVirtualTours.virtualToursForBussinessBox2}>
          {/* <Image src={customVirtualTourImg3} alt="Spaceshift" /> */}
<img src="/images/img-11.png" alt="Spaceshift"/>

        </div>
      </section>

      <Footer />
    </div>
  );
}
