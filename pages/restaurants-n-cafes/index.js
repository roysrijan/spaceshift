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
import stylesIndustries from "../../styles/Industries.module.scss";
import Footer from "../components/footer";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";

// import IndustriesImg from "../../public/images/education-banner.jpg";
// import IndustriesImg2 from "../../public/images/img-34.jpg";
// import IndustriesImg3 from "../../public/images/img-35.jpg";
// import IndustriesImg4 from "../../public/images/img-36.jpg";
// import googleStreetviewImg4 from "../../public/images/img-9.png";

export default function index() {
  return (
    <div className="globalWrap">
      <Header />
      <section
        className={
          stylesIndustries["educationContainer"] +
          " " +
          "blockPadding" +
          " " +
          stylesIndustries["industriesTopPadding"] +
          " " +
          stylesIndustries["industriesTopPadding"]
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesIndustries.educationBox}>
                <h1>Restaurants and Cafes</h1>
                <p>
                With restaurants and cafes popping up in every corner of the world, the quality of the food and service along with the ambiance has a major contribution to its goodwill. Most people check the reviews and pictures of a restaurant/cafe when deciding to book a table or directly visit. It is imperative that you keep your customers engaged online and stay ahead of the competition, and <b>Google Virtual tours</b> help you do that. 
                </p>
                <div className={stylesIndustries.restaurantsImgWrap}>
                  <div className={stylesIndustries.restaurantsImgCol1}>
                    {/* <Image src={IndustriesImg2} alt="Spaceshift" /> */}
<img src="/images/img-34.jpg" alt="Spaceshift"/>

                  </div>
                  <div className={stylesIndustries.restaurantsImgCol1}>
                    {/* <Image src={IndustriesImg3} alt="Spaceshift" /> */}
<img src="/images/img-35.jpg" alt="Spaceshift"/>

                    
                  </div>
                </div>

             <p className={stylesIndustries.surveyText}>Surveys show that people are 130% more likely to book a table with businesses offering <b>Google 360 virtual tours.</b> Moreover, media-rich interactive map listings double one’s interest in a business, and on average, 41% of these searches result in a footfall. Google favors the 360 thumbnails of Google My Business listings with <b>virtual tours</b> and displays it in the search results, which can boost your restaurant’s visibility. SpaceShift has a team of experienced <b>Google trusted photographers </b>who use industry standard equipment to shoot high-quality interactive <b>Google Street View 360 degree</b> tours.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className={
          stylesIndustries["highlightContainer"] + " " + "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesIndustries.highlightBox}>
                <div className={stylesIndustries.highlightBoxImg}>
                  {/* <Image src={IndustriesImg4} alt="Spaceshift" /> */}
<img src="/images/img-36.jpg" alt="Spaceshift"/>

                </div>
                <div className={stylesIndustries.highlightBoxContent}>
                  <h2>How Can You Benefit With Google Street View?</h2>
                  <p className={stylesIndustries.surveyText}>
                  Your restaurant’s food quality plays an important role in its reputation, but in this era of aesthetics, the decor and ambiance are equally important. Unlike old times people consider the environment before they make their decision about visiting the place. <b>360 photos</b> can be used to create <b>Google virtual walkthroughs </b>with navigational hotspots that enable users to move from one space to another exploring the interior as well as the exterior. Moreover, these tours are also supported across multiple devices to help potential customers check out the listing at their convenience before a physical visit.
                  </p>
                  
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className={stylesIndustries["benefitContainer"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesIndustries.benefitTitle}>
                <h2>How can SpaceShift Help Your Business?</h2>
              </div>
            </Col>
          </Row>
          <Row className={stylesIndustries.benefitList}>
            <Col lg="6" className={stylesIndustries.benefitListInner}>
              <div className={stylesIndustries.benefitBox}>
                <span>1</span>
                <h4>Add Value to Your Social Media Accounts and Website</h4>
                <p>
                <b>360 degree virtual tours</b> can be seamlessly embedded on your website and social media accounts like Facebook. Our brain processes visual content sixty times faster than text content, which is why social media is all about visuals now. <b>Virtual tours</b> are interactive and hold the attention of the users. Moreover, when you have a <b>Google Street View</b> for your business, it shows up in Google searches and prepares them for an experience before a physical visit.

                </p>
              </div>
            </Col>
            <Col lg="6" className={stylesIndustries.benefitListInner}>
              <div className={stylesIndustries.benefitBox}>
                <span>2</span>
                <h4>
                High Return on Investment
                </h4>
                <p>
                Unlike other marketing methods, <b>Google Maps 360 virtual tours </b>are a one-time investment and reap benefits for years to come. <b>Custom Virtual Tours</b> helps increase the traffic to your site and keeps them engaged with your business. Surveys suggest that websites with a <b>360 View</b> receive nearly 5 to 10 times longer views than those without, meaning <b>Google 360 view </b>results in better SEO and optimizes your online presence at a one-time cost.</p>
              </div>
            </Col>
            <Col lg="6" className={stylesIndustries.benefitListInner}>
              <div className={stylesIndustries.benefitBox}>
                <span>3</span>
                <h4>Passive Marketing Element</h4>
                <p>
                User-generated content and word of the mouth are highly effective forms of marketing. Users can share virtual tours with their family, relatives, and friends to show what they have experienced or are looking at. The next time one of them decides to go to a restaurant, there are high chances that they will choose yours because they have an idea about your establishment and a more lasting visual impact.

                </p>
              </div>
            </Col>
            <Col lg="6" className={stylesIndustries.benefitListInner}>
              <div className={stylesIndustries.benefitBox}>
                <span>4</span>
                <h4>Build Trust and Relationships with Your Customers  </h4>
                <p>
                In this era of the internet, visual experiences play an important role and high-quality virtual tours provide the same on digital platforms. Around 82% of consumers research online on Google before a physical visit, and <b>Google Street View </b>is one of the best solutions for attracting your target customers. <b>Virtual walkthroughs </b>are informative, easy to manipulate, and accessible across all devices, allowing customers to see the visuals your brand has to offer by themselves. Surveys suggest that <b>Google virtual tours</b> are effective in doubling a person’s interest in the business, which reinforces the potential <b>Google 360</b> holds for attracting customers to your restaurant. <b>Google 360 tour </b>listings allow you to be transparent about your establishment and persuade them to book a table or visit.
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
