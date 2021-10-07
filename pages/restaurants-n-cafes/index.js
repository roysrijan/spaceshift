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
                  With restaurants and cafes popping up in every corner of the
                  world, the quality of the food and service along with the
                  ambiance has a major contribution to its goodwill. Most people
                  check the reviews and pictures of a restaurant/cafe when
                  deciding to book a table or directly visit. It is imperative
                  that you keep your customers engaged online and stay ahead of
                  the competition, and Google Virtual tours help you do that.
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

             <p>Surveys show that people are 130% more likely to book a table with businesses offering Google 360 virtual tours. Moreover, media-rich interactive map listings double one’s interest in a business, and on average, 41% of these searches result in a footfall. Google favors the 360 thumbnails of Google My Business listings with virtual tours and displays it in the search results, which can boost your restaurant’s visibility. SpaceShift has a team of experienced Google trusted photographers who use industry standard equipment to shoot high-quality interactive Google Street View 360 degree tours.</p>
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
                  <p>
                  Surveys suggest that virtual tours help increase one’s interest in a business by two times and attracting the attention of people is exactly what you need. Visiting the institute for in-depth scrutiny is not possible for every parent and virtual tours come in really handy. Parents and students analyze the location and accessibility of the institute, along with its facilities such as the hostel, library, playground, laboratory, art rooms, etc. before choosing an institute for their child. Always make sure that your virtual tour highlights these key components along with the location and surroundings. The visual experience becomes a key factor in their decision-making and helps provide as much visual information as possible, via the internet.
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
                360 degree virtual tours can be seamlessly embedded on your website and social media accounts like Facebook. Our brain processes visual content sixty times faster than text content, which is why social media is all about visuals now. Virtual tours are interactive and hold the attention of the users. Moreover, when you have a Google Street View for your business, it shows up in Google searches and prepares them for an experience before a physical visit.

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
                and reap benefits for years to come. Custom Virtual Tours helps increase the traffic to your site and keeps them engaged with your business. Surveys suggest that websites with a 360 View receive nearly 5 to 10 times longer views than those without, meaning Google 360 view results in better SEO and optimizes your online presence at a one-time cost. </p>
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
                In this era of the internet, visual experiences play an important role and high-quality virtual tours provide the same on digital platforms. Around 82% of consumers research online on Google before a physical visit, and Google Street View is one of the best solutions for attracting your target customers. Virtual walkthroughs are informative, easy to manipulate, and accessible across all devices, allowing customers to see the visuals your brand has to offer by themselves. Surveys suggest that Google virtual tours are effective in doubling a person’s interest in the business, which reinforces the potential Google 360 holds for attracting customers to your restaurant. Google 360 tour listings allow you to be transparent about your establishment and persuade them to book a table or visit.
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
