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
import stylesRealEstate from "../../styles/RealEstate.module.scss";
import Footer from "../components/footer";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";

// import RealestateBannerImg from "../../public/images/real-estate-banner.jpg";
// import realestateImg from "../../public/images/img-38.jpg";
// import realestateImg2 from "../../public/images/img-39.jpg";
// import realestateImg3 from "../../public/images/img-40.jpg";
// import realestateImg4 from "../../public/images/img-41.jpg";
// import realestateImg5 from "../../public/images/img-42.jpg";

export default function index() {
  return (
    <div className="globalWrap">
      <Header />
      <section
        className={
          stylesRealEstate["realestateTopContainer"] + " " + "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesRealEstate.realestateTop}>
                <div className={stylesRealEstate.realestateTopImgWrap}>
                  {/* <Image src={RealestateBannerImg} alt="Spaceshift" /> */}
<img src="/images/real-estate-banner.jpg" alt="Spaceshift"/>

                </div>
                <div className={stylesRealEstate.realestateTopInfo}>
                  <h1>Real Estate</h1>
                  <p>
                  The Real Estate industry is lucrative and has constant business growth, which creates great competition among realtors and makes it necessary for them to adopt new marketing strategies. Moreover, recent technological developments need to be introduced to the industries, so that they can keep the consumers engaged digitally and stay up-to-date. Currently, <b>Matterport 3D tours</b> and<b> 360 degree virtual tours</b> have emerged as effective and powerful marketing tools for the global market, and we suggest you start using them as soon as possible.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className={
          stylesRealEstate["realEstatePlainTextContainer"] +
          " " +
          "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <p>
              Surveys reveal that 74% of real estate agents using<b>  Matterport 3D walkthroughs</b> get more deals compared to those who haven’t taken advantage of the technology yet. Potential customers get a good sense of the space with <b>Matterport tours</b>, which motivates them to get in touch with the listed property agents. SpaceShift has a team of <b>Matterport</b> experts, who are capable of shooting and producing high-quality tours, making it a top <b>Matterport Service Provider in India.</b>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={stylesRealEstate["realEstateMiddleContainer"] + " " + ""}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesRealEstate.realEstateMiddle}>
                <div className={stylesRealEstate.realEstateMiddleImg}>
                  {/* <Image src={realestateImg} alt="Spaceshift" /> */}
<img src="/images/img-38.jpg" alt="Spaceshift"/>

                </div>
                <div className={stylesRealEstate.realEstateMiddleInfo}>
                  <h2>
                    How Do Virtual Tours and Matterport 3D Walkthroughs Help
                    You?
                  </h2>
                  <p>
                  Photographs play an important role in showcasing any property, but the biggest drawback is that they lack interactivity. This can be overcome with <b>360 Virtual Tours</b>, which gives your clients a realistic sense of the look of the property in high resolution, remotely. What’s better than this? Well, <b>Matterport 3D walkthroughs</b> help you navigate in between the floors and get a dollhouse view of the property. This lets you see how every room is connected, and the Inside View gives you an idea about how each room looks and its dimensions.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="12">
              <div
                className={
                  stylesRealEstate["realEstateMiddle"] +
                  " " +
                  stylesRealEstate["realEstateMiddleRight"]
                }
              >
                <div className={stylesRealEstate.realEstateMiddleInfo}>
                  <p>
                  Consumers are looking for easier ways to engage and research about the property before visiting. To achieve that, focusing on <b>Virtual tours</b> is important. Experiencing the location remotely as and when required, helps consumers conduct thorough research and schedule a visit only if the property fits their criteria. This saves both of your valuable time, that you can dedicate to other potential customers. Moreover, you can embed the <b>3D Matterport Virtual Tour</b> on your website and share it across all social media platforms for better reach.
                  </p>
                </div>

                <div className={stylesRealEstate.realEstateMiddleImg}>
                  {/* <Image src={realestateImg2} alt="Spaceshift" /> */}
                  <img src="/images/img-39.jpg" alt="Spaceshift"/>


                </div>
              </div>
            </Col>
            <Col lg="12">
              <div
                className={
                  stylesRealEstate["realEstateMiddle"] +
                  " " +
                  stylesRealEstate["realEstateMiddleLast"]
                }
              >
                <div className={stylesRealEstate.realEstateMiddleImg}>
                  {/* <Image src={realestateImg3} alt="Spaceshift" /> */}
                  <img src="/images/img-40.jpg" alt="Spaceshift"/>


                </div>
                <div className={stylesRealEstate.realEstateMiddleInfo}>
                  <p>
                  Real Estate listings with <b>Matterport tours</b> are clicked 40% times more often than those using only still photos, revealing the importance of <b>virtual reality</b> in standing out from the crowd. According to Realtor’s report in 2020, listings with <b>virtual tours</b> receive 87% more views than those without interactive tours. Hence, <b>Matterport 3D Virtual</b> Tours help you draw potential customers to your website and increases the revenue from it.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={
          stylesRealEstate["realEstateBottomContainer"] + " " + "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <h2>How can SpaceShift Help Your Business?</h2>
            </Col>
            <Col lg="12">
              <div className={stylesRealEstate.realEstateBottom}>
                <div className={stylesRealEstate.realEstateBottomImgWrap}>
                  <div className={stylesRealEstate.realEstateBottomImg}>
                    {/* <Image src={realestateImg4} alt="Spaceshift" /> */}
<img src="/images/img-41.jpg" alt="Spaceshift"/>

                  </div>
                  <div className={stylesRealEstate.realEstateBottomImg}>
                    {/* <Image src={realestateImg5} alt="Spaceshift" /> */}
<img src="/images/img-42.jpg" alt="Spaceshift"/>

                  </div>
                </div>
                <div className={stylesRealEstate.realEstateBottomContent}>
                  <div className={stylesRealEstate.realEstateBottomContentBox}>
                    <div
                      className={
                        stylesRealEstate.realEstateBottomContentBoxCol1
                      }
                    >
                      1
                    </div>
                    <div
                      className={
                        stylesRealEstate.realEstateBottomContentBoxCol2
                      }
                    >
                      <h5>Provides More Information than Pictures</h5>
                      <p>
                      <b>Matterport 3D Virtual Tours</b> are interactive and let the user explore the property digitally, by letting them move from one space to another, and enable them to look around in 360 degrees, with just a few clicks. Moreover, Mattertags can be used to embed pop-up notes, links, and videos to provide relevant and important information to potential clients.
                      </p>
                    </div>
                  </div>

                  <div className={stylesRealEstate.realEstateBottomContentBox}>
                    <div
                      className={
                        stylesRealEstate.realEstateBottomContentBoxCol1
                      }
                    >
                      2
                    </div>
                    <div
                      className={
                        stylesRealEstate.realEstateBottomContentBoxCol2
                      }
                    >
                      <h5>Excellent Customer Experience</h5>
                      <p>
                      <b>Matterport 3D Virtual</b> Tours offer the most transparent, informational, and immersive customer experience at the comfort of the client’s home. 99% of sellers say that a  <b>Matterport 3D Showcase </b> gave their property listing a competitive edge and 82% of them wanted to shift to a real estate agent offering 3D tours. The sellers said that 3D virtual tours give the client the control to manipulate the tour and see what they want to, instead of keeping complete control in the hands of the agent/seller.
                      </p>
                    </div>
                  </div>
                  <div className={stylesRealEstate.realEstateBottomContentBox}>
                    <div
                      className={
                        stylesRealEstate.realEstateBottomContentBoxCol1
                      }
                    >
                      3
                    </div>
                    <div
                      className={
                        stylesRealEstate.realEstateBottomContentBoxCol2
                      }
                    >
                      <h5>Leaves a Long-Lasting Impression</h5>
                      <p>
                      With a <b>Matterport 3D virtual tour</b>, prospective customers can perform their walkthrough of the property from anywhere and anytime. Statistics reveal that 9 out of 10 buyers are more compelled by a listing with a <b>Matterport 3D showcase</b>. This is because interactive media provides the users a close to the real-life experience of a physical tour of the property.
                      </p>
                    </div>
                  </div>
                  <div className={stylesRealEstate.realEstateBottomContentBox}>
                    <div
                      className={
                        stylesRealEstate.realEstateBottomContentBoxCol1
                      }
                    >
                      4
                    </div>
                    <div
                      className={
                        stylesRealEstate.realEstateBottomContentBoxCol2
                      }
                    >
                      <h5>Passive Marketing Element</h5>
                      <p>
                      <b>Matterport 3D Virtual Tours  </b>are excellent marketing elements that keep the potential clients engaged by letting them interact with the content online. This means that the bounce rate of your website is reduced considerably, which results in better SEO and greater website revenue. Being an experienced  <b>Matterport Service Provider </b>, SpaceShift shoots high-quality immersive content that helps captivate the attention of your audience.
                      </p>
                    </div>
                  </div>
                  <div className={stylesRealEstate.realEstateBottomContentBox}>
                    <div
                      className={
                        stylesRealEstate.realEstateBottomContentBoxCol1
                      }
                    >
                      5
                    </div>
                    <div
                      className={
                        stylesRealEstate.realEstateBottomContentBoxCol2
                      }
                    >
                      <h5>Get The Exact Dimensions of the Space</h5>
                      <p>
                      The Matterport 3D tour has a Measurement Mode, that lets users measure any part of the space, on any device. This helps eliminate the need for continuous physical visits and enables smarter space planning and utilization.
                      </p>
                    </div>
                  </div>
                  <div className={stylesRealEstate.realEstateBottomContentBox}>
                    <div
                      className={
                        stylesRealEstate.realEstateBottomContentBoxCol1
                      }
                    >
                      6
                    </div>
                    <div
                      className={
                        stylesRealEstate.realEstateBottomContentBoxCol2
                      }
                    >
                      <h5>Saves Time that You Can Dedicate on Genuine Leads</h5>
                      <p>
                      Digital tours help attract qualified and prospective clients by giving them a vivid and complete representation of the property. This helps the clients filter out properties according to their needs and pursue the listing only if it fulfills their criteria. Thus, you save time that you can dedicate to leads who are genuinely interested in the listing.
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
