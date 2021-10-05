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

import IndustriesImg from "../../public/images/education-banner.jpg";
import IndustriesImg2 from "../../public/images/img-28.jpg";
import IndustriesImg3 from "../../public/images/img-29.jpg";

import retailsBannerImg from "../../public/images/retails-banner-1.jpg";
import retailsBannerImg2 from "../../public/images/retails-banner-2.jpg";
import retailsBannerImg3 from "../../public/images/img-47.jpg";
import retailsBannerImg4 from "../../public/images/img-48.jpg";
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
                <h1>Educational Institutes</h1>
                <p>
                  A picture is worth a thousand words, but a virtual tour is
                  worth more. Virtual tours are an interactive way to draw in
                  students and parents and provides an idea about the
                  infrastructure they can expect. The more effort you put in to
                  highlight your educational institute, the more obvious the
                  value and excellence of the establishment becomes. 360 virtual
                  tours enable parents across the world to have a direct virtual
                  experience of the space and helps them make the decision about
                  enrolling their children in the best school. SpaceShift
                  focuses on shooting quality virtual tours to help you
                  communicate the quality, potential, and value your institute
                  holds.
                </p>
                <div className={stylesIndustries.educationBoxImg}>
                  <Image src={IndustriesImg} alt="Spaceshift" />
                </div>
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
                  <Image src={IndustriesImg2} alt="Spaceshift" />
                </div>
                <div className={stylesIndustries.highlightBoxContent}>
                  <h2>What to Highlight in The Virtual Tour?</h2>
                  <p>
                    Surveys suggest that virtual tours help increase one’s
                    interest in a business by two times and attracting the
                    attention of people is exactly what you need. Visiting the
                    institute for in-depth scrutiny is not possible for every
                    parent and virtual tours come in really handy. Parents and
                    students analyze the location and accessibility of the
                    institute, along with its facilities such as the hostel,
                    library, playground, laboratory, art rooms, etc. before
                    choosing an institute for their child. Always make sure that
                    your virtual tour highlights these key components along with
                    the location and surroundings. The visual experience becomes
                    a key factor in their decision-making and helps provide as
                    much visual information as possible, via the internet.
                  </p>
                  <Image src={IndustriesImg3} alt="Spaceshift" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className={stylesIndustries["benefitContainer"] + " " + "blockPadding" + " " +stylesIndustries["eduBotContainer"]}
      >
        <Container>
          {/* <Row>
            <Col lg="12">
              <div className={stylesIndustries.benefitTitle}>
                <h2>Benefits of a Virtual Tour For Educational Industries</h2>
              </div>
            </Col>
            </Row>
            <Row className={stylesIndustries.benefitList}>
            <Col lg="6" className={stylesIndustries.benefitListInner}>
              <div className={stylesIndustries.benefitBox}>
                <span>1</span>
                <h4>Builds an Effective First Impression</h4>
                <p>
                  The students now are technologically advanced and due to the
                  wide exposure to technology, you need to go the extra mile.
                  Virtual tours are sophisticated, informative, and easily
                  accessible across several devices, which allows students and
                  parents to get a sense of the campus’ interior and exterior.
                  Moreover, virtual tours are interactive, which means that
                  parents and students will spend more time exploring your
                  institute’s website. The more time they spend knowing about
                  your institute, the more engaged they will be and it can
                  greatly impact their decision.
                </p>
              </div>
            </Col>
            <Col lg="6" className={stylesIndustries.benefitListInner}>
              <div className={stylesIndustries.benefitBox}>
                <span>2</span>
                <h4>Virtual Teleportation From One place to Another In a Click</h4>
                <p>
                The virtual tours have various navigational hotspots which help users navigate from one space to another. Parents can click on these arrows to move from one space to another, such as the auditorium to the music room or any other physical space of your property. This paints a better picture of your facilities and helps them visualize it. Students who might not have the convenience to visit the institute physically can check out the institute through virtual tours.
                </p>
              </div>
            </Col>
            <Col lg="6" className={stylesIndustries.benefitListInner}>
              <div className={stylesIndustries.benefitBox}>
                <span>3</span>
                <h4>Highlight your educational centers’ features</h4>
                <p>
                Photographs cannot truly convey the dimension of your institute’s interiors, but virtual tours help bridge the gap. You can highlight the key features of your institute, including the large playground or the auditorium, through virtual tours and help parents have an interactive experience of the same.

                </p>
              </div>
            </Col>
            <Col lg="6" className={stylesIndustries.benefitListInner}>
              <div className={stylesIndustries.benefitBox}>
                <span>4</span>
                <h4>Stay Ahead of the Competition</h4>
                <p>
                Around 21% of educational institutes feature virtual tours on their websites despite their importance. Most universities do not invest in virtual tours due to the lack of time, resources, and lack of realization that it is a one-time investment. Virtual tours are an excellent marketing tool and reap benefits over the years. Being a Google trusted photographer, we shoot exceptional virtual tours with professional equipment.
                </p>
              </div>
            </Col>
            <Col lg="6" className={stylesIndustries.benefitListInner}>
              <div className={stylesIndustries.benefitBox}>
                <span>5</span>
                <h4>Improves Website Performance</h4>
                <p>
                Virtual tours are interactive and keep the prospective parents/students engaged on your website longer. This significantly decreases the bounce rate which indicates that the website is engaging. Thus, search engines boost your website’s rank and help attract potential clients.
                </p>
              </div>
            </Col>
         
         
          </Row> */}
          <Row>
            <Col lg="12">
              <div className={stylesIndustries.benefitTitle}>
                <h2>Benefits of a Virtual Tour For Educational Industries</h2>
              </div>
            </Col>
            </Row>
          <Row className={stylesIndustries.whatWeOfferBoxMain}>
            <Col lg="6" sm="6" className={stylesIndustries.whatWeOfferCol6}>
              <div className={stylesIndustries.whatWeOfferBox}>
                <span>
                  <h5>01</h5> <h3>Help Generate Sales</h3>
                </span>

                <p>
                Custom Virtual Tours simulate the experience of store browsing and let consumers visualize the products. However, the best part is that your e-commerce store products can be embedded in these tours using clickable hotspots. This enables people to click on any product they are interested in, to be redirected to the product listing on your website or online shop, which makes the experience more seamless. The improved shopping experience puts your business in good light and motivates them to visit your store physically. Thus, Custom Tours helps generate and boost sales both online, as well as, offline.

                </p>
                <Image src={retailsBannerImg3} alt="Spaceshift" />
              </div>
            </Col>

            <Col lg="6" sm="6" className={stylesIndustries.whatWeOfferCol6}>
              <div className={stylesIndustries.whatWeOfferBox}>
                <span>
               
                  <h5>02</h5> <h3>Write & Understand</h3>
                </span>

                <p>
                Matterport tours and 360 virtual tours let users move from one space to another, and look around in 360 views, with just a few clicks. Moreover, Mattertags can be used to embed pop-up notes, links, videos, and e-commerce workflows in the 3D model, which helps provide more information than photographs. The immersive 3D models also deliver accurate visual representations of the showroom, including the exact measurements of the entire store, dimensions of the aisles, and other important details for the location. 

                </p>
                <Image src={retailsBannerImg4} alt="Spaceshift" />
              </div>
            </Col>

            <Col lg="6" sm="6" className={stylesIndustries.whatWeOfferCol6}>
              <div className={stylesIndustries.whatWeOfferBox}>
              <span>
                  <h5>03</h5>  <h3>Crucial Marketing Element</h3>
                </span>
              
                <p>
                  Custom virtual tours create an immersive experience that is
                  more powerful and effective than any other form of
                  advertising. It tends to create familiarity and ease among the
                  clients before they visit the physical premises.
                </p>
                <Image src={retailsBannerImg3} alt="Spaceshift" />
              </div>
            </Col>

            <Col lg="6" sm="6" className={stylesIndustries.whatWeOfferCol6}>
              <div className={stylesIndustries.whatWeOfferBox}>
                
                <span>
                  <h5>04</h5> <h3>Professional VR films</h3>
                </span>
                <p>
                Matterport 3D Tours are excellent marketing elements that are interactive and keep the potential clients engaged with the content online. This means that the tours help reduce the bounce rate of your website considerably, which results in better SEO and generates greater website revenue. Being a top Matterport Service Provider in India, SpaceShift shoots high-quality immersive content that helps captivate the attention of your audience.

                </p>
                <Image src={retailsBannerImg4} alt="Spaceshift" />
              </div>
            </Col>
          </Row>
        
        
        </Container>
      </section>
      <Footer />
    </div>
  );
}