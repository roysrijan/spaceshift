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
import stylesTourism from "../../styles/Tourism.module.scss";
import Footer from "../components/footer";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";

// import tourismBannerImg from "../../public/images/tourism-banner.jpg";
// import tourismImg1 from "../../public/images/img-49.jpg";
// import tourismImg2 from "../../public/images/img-50.jpg";
// import tourismImg3 from "../../public/images/img-51.jpg";
// import tourismImg4 from "../../public/images/img-52.jpg";

export default function index() {
  return (
    <div className="globalWrap">
      <Header />
      <section
        className={stylesTourism["tourismTopContainer"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesTourism.tourismTopBox}>
                <div className={stylesTourism.tourismTopBoxImgWrap}>
                  <h1>Tourism</h1>
                  <div className={stylesTourism.tourismTopBoxImg}>
                    {/* <Image src={tourismBannerImg} alt="Spaceshift" /> */}
<img src="/images/vr-in-tourism-cover.webp" alt="Spaceshift"/>

                  </div>
                </div>
                <div className={stylesTourism.tourismTopBoxContent}>
                  <p>
                  Tourism is a multi-billion dollar industry that is continuously growing as more and more people travel. In this digital era, people have become more involved with technology and about 74% of people plan their trips using the Internet. As people are looking for different ways to explore the world around digitally, the tourism industry needs to adapt to these changes and developments to cater to everyone. The industry was also highly affected by the travel ban due to the COVID pandemic, which makes it all the more important to focus on using these advanced technologies to motivate people towards booking their next vacation. This is where Virtual Reality comes in. The technology can benefit the destination by providing an immersive experience that texts, photos, and videos don’t. Research shows that around 62% of people like to consider a virtual tour for travel planning, which shows exactly why stakeholders need to invest in it as soon as possible!
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="12">
              <div className={stylesTourism.tourismTopBox2}>
                <p>
                  
                   Virtual Reality Technology  offers a sense of being physically present at the location, which stimulates the urge to travel and experience the destination physically. Moreover, tourists can interact with and explore the projected surroundings, which motivates them to choose the place as their next travel destination. SpaceShift has a team of experienced photographers and virtual reality developers in India, who shoot engaging and high-quality virtual tours and 8k VR films to help you leverage these technologies and stand out among others.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className={
          stylesTourism["tourismBottomContainer"] + " " + "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesTourism.tourismBottomTitleWrap}>
                <div className={stylesTourism.whatWeOfferTitleCol1}>
                  <h2>Benefits of Virtual Reality Production</h2>
                </div>
                <div className={stylesTourism.whatWeOfferTitleCol2}>
                  <p>
                  The most common use of stereoscopic VR films and custom virtual tours in tourism is as a passive marketing element. A study by the University of Massachusetts Amherst showed that virtual walkthroughs generate positive emotions towards a travel destination, even if it is in the form of an advertisement. This is because 360 videography makes people feel involved and hold their attention more than a text description, photo, or video is capable of. Thus, it is imperative that you use Virtual Reality to draw in tourists.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="12">
              <div className={stylesTourism.tourismBottomContentWrap}>
                <div className={stylesTourism.tourismBottomContentBox}>
                  <div className={stylesTourism.tourismBottomContentWrapLeft}>
                    <h5>Helps With Decision Making</h5>
                    <p>
                    Custom virtual tours teleport you from one place to another digitally, to provide a 360 visual experience of the travel destination. This lets them explore and evaluate the information provided about the surroundings. If the destination appeals to their visual senses and fulfills all set criteria, they start planning the trip and book it.
                    </p>
                  </div>
                  <div className={stylesTourism.tourismBottomContentWrapRight}>
                    {/* <Image src={tourismImg1} alt="Spaceshift" /> */}
<img src="/images/vr-helps-with-decision-making.webp" alt="Spaceshift"/>
                    
                  </div>
                </div>
              
                <div className={stylesTourism["tourismBottomContentBox"]+ " " + stylesTourism["tourismBottomContentBoxRe"]}>
                <div className={stylesTourism.tourismBottomContentWrapRight}>
                    {/* <Image src={tourismImg2} alt="Spaceshift" /> */}
<img src="/images/hotspots-virtual-tours-finds-tourist-attractions.webp" alt="Spaceshift"/>

                  </div>
                  <div className={stylesTourism.tourismBottomContentWrapLeft}>
                    <h5>Find Tourist Attractions</h5>
                    <p>
                    Since any key point of an area can be highlighted in custom virtual tours, it becomes easier to create hotspots to indicate the different types of tourist attractions along with the details of any given space.
                    </p>
                  </div>
                  
                </div>
              

                <div className={stylesTourism.tourismBottomContentBox}>
                  <div className={stylesTourism.tourismBottomContentWrapLeft}>
                    <h5>Provide an Unforgettable and Unmatchable Experience</h5>
                    <p>
                    Virtual tours are immersive and let people move from one place to another using navigational hotspots, similar to movement during physical visits. This experience cannot be replicated by other traditional content forms and leave a lasting impression. Thus, they will be more motivated to book a trip to the destination in the future.

                    </p>
                  </div>
                  <div className={stylesTourism.tourismBottomContentWrapRight}>
                    {/* <Image src={tourismImg3} alt="Spaceshift" /> */}
<img src="/images/vr-provides-an-unforgettable-experience.webp" alt="Spaceshift"/>

                  </div>
                </div>
              
                <div className={stylesTourism["tourismBottomContentBox"]+ " " + stylesTourism["tourismBottomContentBoxRe"]}>
                <div className={stylesTourism.tourismBottomContentWrapRight}>
                    {/* <Image src={tourismImg4} alt="Spaceshift" /> */}
<img src="/images/virtual-tours-integrate-with-websites.webp" alt="Spaceshift"/>

                  </div>
                  <div className={stylesTourism.tourismBottomContentWrapLeft}>
                    <h5>Can be Integrated with Websites</h5>
                    <p>
                    360 degree virtual tours can be embedded into any website, which helps increase the look and quality. Moreover, they keep the user engaged with your content, keeping them on your website longer, which boosts your website’s SEO. You can also share these virtual tours on social media for wider exposure and to drive website traffic.

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
