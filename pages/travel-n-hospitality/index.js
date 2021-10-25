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
// import IndustriesImg2 from "../../public/images/img-30.jpg";
// import IndustriesImg3 from "../../public/images/img-31.jpg";
// import IndustriesImg4 from "../../public/images/img-32.jpg";
// import IndustriesImg5 from "../../public/images/img-33.jpg";

export default function index() {
  return (
    <div className="globalWrap">
      <Header />
      <section
        className={
          stylesIndustries["highlightContainer"] +
          " " +
          "blockPadding" +
          " " +
          stylesIndustries["industriesTopPadding"] +
          " " +
          stylesIndustries["industriesTopPadding2"]
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesIndustries.travelHosTitle}>
                <h1>Travel and Hospitality</h1>
              </div>
            </Col>
            <Col lg="12">
              <div
                className={
                  stylesIndustries["highlightBox"] +
                  " " +
                  stylesIndustries["traveltBox"]
                }
              >
                <div className={stylesIndustries.highlightBoxContent}>
                  <p>
                  The travel and hospitality industry is one of the most dynamic and fiercely competitive industries in the world, featuring both domestic and multi-national chains. Moreover, with the change in demands concerning technology, businesses in the industry need to explore innovative options to draw in guests and stand out from the crowd digitally. Taking advantage of high-end technologies and equipping your business’ website with custom <b>Virtual Tours</b> and <b>8k VR films</b> is one of the best ways to attract your target audience and increase your market reach. 
                  <br></br>
                    <br></br>

                   
                  </p>
                  {/* <Image src={IndustriesImg3} alt="Spaceshift" /> */}
<img src="/images/img-31.jpg" alt="Spaceshift"/>

                </div>
                <div className={stylesIndustries.highlightBoxImg}>
                  {/* <Image src={IndustriesImg2} alt="Spaceshift" /> */}
<img src="/images/img-30.jpg" alt="Spaceshift"/>

                </div>
              </div>
            </Col>
            <Col lg="12">
              <div className={stylesIndustries.travelContentP}>
                <p>
                Surveys reveal that a hotel listing with a <b>360 virtual tour</b> receives approximately 87% more views compared to those without one. Potential customers get a good sense of the space with <b>virtual walkthroughs</b>, which motivates them to get in touch with the brand and avail their services. SpaceShift has a team of experienced virtual tour specialists, who are capable of shooting interactive and<b> high-quality virtual tours</b> and <b>8k VR films</b>, making it a <b>top Virtual Reality company in India</b>.
                </p>
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
              <div
                className={
                  stylesIndustries["highlightBox"] +
                  " " +
                  stylesIndustries["traveltBox"]
                }
              >
                <div className={stylesIndustries.highlightBoxContent}>
                  <h2>
                    How Do Virtual Tours and 8K VR Films Benefit Your Business?
                  </h2>
                  <p>
                  For the travel and hospitality industry, <b>virtual reality</b> can be used in marketing to enhance the customers’ digital experience when viewing your business from any given place. <b>Virtual walkthroughs</b> allow potential customers to have a close to the real-life experience of the space, that they can witness during a physical visit. <b>Stereoscopic VR Films</b> are immersive and make a great medium for storytelling. They help you make an exceptional lasting impression on the viewers, who get immersed in the story without being present there. The continual decrease in the average attention span of the consumer is another reason <b>virtual tours </b>are better than classical pitches and descriptive content. <b>Virtual tours</b> can be integrated on your website for people to view them on the web, as well as, on VR headsets. These can be linked to your booking website, which works as a great Call-to-Action (CTA).
                  </p>
                </div>
                <div className={stylesIndustries.highlightBoxImg}>
                  {/* <Image src={IndustriesImg4} alt="Spaceshift" /> */}
<img src="/images/img-32.jpg" alt="Spaceshift"/>

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
                <h2>How Can SpaceShift Help Your Business?</h2>
                <p>
                <b>360 degree virtual tours</b>  perform much better than conventional photos and have yielded 45% more interactions, which reveals how <b>virtual tours</b> are thriving. According to TIG Global and Omni Hotels’ research, a <b>360 virtual tour</b> helps increase bookings and customer conversion rates by as much as 16 to 67%. This shows that <b>virtual tours</b> can help increase the revenue from website traffic massively. 
                </p>
              </div>
            </Col>
          </Row>
          <Row className={stylesIndustries.benefitList}>
            <Col lg="6" className={stylesIndustries.benefitListInner}>
              <div className={stylesIndustries.benefitBox}>
                <span>1</span>
                <h4>Ensures Superiority and Transparency</h4>
                <p>
                <b>Virtual walkthroughs </b>enable prospective guests to check every nook and corner of the rooms listed. Moreover, the tours also help captivate the various aesthetic and visually appealing aspects of the hotel, which seamlessly communicates the quality and high level of transparency maintained by them.
                </p>
              </div>
            </Col>
            <Col lg="6" className={stylesIndustries.benefitListInner}>
              <div className={stylesIndustries.benefitBox}>
                <span>2</span>
                <h4>Increases Web Retention</h4>
                <p>
                Virtual tours are interactive and rekindle a sense of curiosity. This lets users explore and navigate the space, which means that they stay more engaged with your website. Statistics reveal that websites with a  <b>360 View </b>receive 5 to 10 times longer website views and results in better SEO.
                </p>
              </div>
            </Col>
            <Col lg="6" className={stylesIndustries.benefitListInner}>
              <div className={stylesIndustries.benefitBox}>
                <span>3</span>
                <h4>Leaves a Long-Lasting Impression</h4>
                <p>
                SpaceShift, the <b>top VR company</b> in India, builds <b>high-quality virtual tours</b> that stimulate their visual senses and enable them to virtually move from one place to another using navigational hotspots. The memorable <b>360 photography</b> experience of the tour stays with prospective clients for a long time and encourages them to make bookings as they have already had a first-hand visual experience digitally.
                </p>
              </div>
            </Col>
            <Col lg="6" className={stylesIndustries.benefitListInner}>
              <div className={stylesIndustries.benefitBox}>
                <span>4</span>
                <h4>Key Marketing Element</h4>
                <p>
                Most businesses do not invest in <b>8K VR films</b> and <b>virtual tours</b> due to the lack of time, resources, and realization that it is a one-time investment, unlike other digital marketing methods. <b>Virtual tours</b> are excellent marketing elements that reap benefits over the years and keep on attracting potential customers. Being a <b>virtual tour</b> expert, SpaceShift shoots high-quality immersive content that helps captivate the attention of your audience.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <div className={stylesIndustries.travelBottomImg}>
          {/* <Image src={IndustriesImg5} alt="Spaceshift" /> */}
<img src="/images/img-33.jpg" alt="Spaceshift"/>

        </div>
      </section>
      <Footer />
    </div>
  );
}
