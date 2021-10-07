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
import stylesRetails from "../../styles/Retails.module.scss";
import Footer from "../components/footer";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";

// import retailsBannerImg from "../../public/images/retails-banner-1.jpg";
// import retailsBannerImg2 from "../../public/images/retails-banner-2.jpg";
// import retailsBannerImg3 from "../../public/images/img-47.jpg";
// import retailsBannerImg4 from "../../public/images/img-48.jpg";
export default function index() {
  return (
    <div className="globalWrap">
      <Header />

      <section
        className={stylesRetails["retailTopContainer"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesRetails.retailTopBox}>
                <div className={stylesRetails.retailTopBoxContent}>
                  <h1>Retails, and Showrooms</h1>
                  <p>
                    Technology is transforming our lives, and every aspect of
                    the world, including the retail industry. It is imperative
                    for retailers to adapt and change, to meet the trends and
                    ways in which people shop. Moreover, technology has become
                    an important part of our lives, which makes it necessary for
                    retailers to implement these developments, to keep the
                    customers engaged digitally and stay up-to-date with the
                    recent innovations in technology. As of now, virtual tour
                    technologies such as Matterport 3D tours, Custom Virtual
                    tours, and Google Street View 360, are the most lucrative
                    and powerful marketing tools for the global retail market,
                    and the owners should start making use of it and get the
                    benefits as soon as possible.
                  </p>
                </div>
                <div className={stylesRetails.retailTopBoxImg}>
                  <div className={stylesRetails.retailTopBoxImg1}>
                    {/* <Image src={retailsBannerImg} alt="Spaceshift" /> */}
<img src="/images/retails-banner-1.jpg" alt="Spaceshift"/>

                  </div>
                  <div className={stylesRetails.retailTopBoxImg2}>
                    {/* <Image src={retailsBannerImg2} alt="Spaceshift" /> */}
<img src="/images/retails-banner-2.jpg" alt="Spaceshift"/>

                  </div>
                </div>
              </div>
            </Col>
            <Col lg="12">
              <p>
                Due to the pandemic, users shifted to the digital platform and
                do most of their shopping online. 70% of these consumers said
                that they missed the physical experience of browsing showrooms
                and walking around in the store, which can be easily replicated
                by Matterport 3D walkthroughs and 360 virtual tours. Nowadays,
                most people search for a business and look for new ones online,
                and Google 360 View is a great way to attract them. Google
                Street View tempts potential local customers to visit the store,
                which means wider reach and greater in-store visits. Our team
                specializes in creating and developing virtual tours, that help
                retails and showrooms showcase their space in a unique and
                interactive way.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className={
          stylesRetails["retailBottomContainer"] + " " + "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesRetails.retailBottomTitle}>
                <h2>How can Virtual Tours Benefit Retails and Showrooms?</h2>
                <p>
                  Day by day, consumers are becoming more focused on visual
                  experiences, which is why high-end retailers and luxury brands
                  invest in the decor of their showrooms. Does it directly
                  contribute to the possibility of making a purchase? Well, the
                  “Store Atmosphere, Mood, and Purchasing Behavior” Study in
                  1997 found that consumers rate establishments differently
                  based on the ambiance, and 360 Virtual Tours are a great way
                  to showcase the same online.{" "}
                </p>
              </div>
            </Col>
          </Row>

          <Row className={stylesRetails.whatWeOfferBoxMain}>
            <Col lg="6" sm="6" className={stylesRetails.whatWeOfferCol6}>
              <div className={stylesRetails.whatWeOfferBox}>
                <span>
                  <h5>01</h5> <h3>Help Generate Sales</h3>
                </span>

                <p>
                Custom Virtual Tours simulate the experience of store browsing and let consumers visualize the products. However, the best part is that your e-commerce store products can be embedded in these tours using clickable hotspots. This enables people to click on any product they are interested in, to be redirected to the product listing on your website or online shop, which makes the experience more seamless. The improved shopping experience puts your business in good light and motivates them to visit your store physically. Thus, Custom Tours helps generate and boost sales both online, as well as, offline.

                </p>
                {/* <Image src={retailsBannerImg3} alt="Spaceshift" /> */}
<img src="/images/img-47.jpg" alt="Spaceshift"/>

              </div>
            </Col>

            <Col lg="6" sm="6" className={stylesRetails.whatWeOfferCol6}>
              <div className={stylesRetails.whatWeOfferBox}>
                <span>
               
                  <h5>02</h5> <h3>Write & Understand</h3>
                </span>

                <p>
                Matterport tours and 360 virtual tours let users move from one space to another, and look around in 360 views, with just a few clicks. Moreover, Mattertags can be used to embed pop-up notes, links, videos, and e-commerce workflows in the 3D model, which helps provide more information than photographs. The immersive 3D models also deliver accurate visual representations of the showroom, including the exact measurements of the entire store, dimensions of the aisles, and other important details for the location. 

                </p>
                {/* <Image src={retailsBannerImg4} alt="Spaceshift" /> */}
<img src="/images/img-48.jpg" alt="Spaceshift"/>

                
              </div>
            </Col>

            <Col lg="6" sm="6" className={stylesRetails.whatWeOfferCol6}>
              <div className={stylesRetails.whatWeOfferBox}>
              <span>
                  <h5>03</h5>  <h3>Crucial Marketing Element</h3>
                </span>
              
                <p>
                  Custom virtual tours create an immersive experience that is
                  more powerful and effective than any other form of
                  advertising. It tends to create familiarity and ease among the
                  clients before they visit the physical premises.
                </p>
                {/* <Image src={retailsBannerImg3} alt="Spaceshift" /> */}
<img src="/images/img-47.jpg" alt="Spaceshift"/>

              </div>
            </Col>

            <Col lg="6" sm="6" className={stylesRetails.whatWeOfferCol6}>
              <div className={stylesRetails.whatWeOfferBox}>
                
                <span>
                  <h5>04</h5> <h3>Professional VR films</h3>
                </span>
                <p>
                Matterport 3D Tours are excellent marketing elements that are interactive and keep the potential clients engaged with the content online. This means that the tours help reduce the bounce rate of your website considerably, which results in better SEO and generates greater website revenue. Being a top Matterport Service Provider in India, SpaceShift shoots high-quality immersive content that helps captivate the attention of your audience.

                </p>
                {/* <Image src={retailsBannerImg4} alt="Spaceshift" /> */}
<img src="/images/img-48.jpg" alt="Spaceshift"/>

              </div>
            </Col>
          </Row>
        
        
        </Container>
      </section>
      <Footer />
    </div>
  );
}
