import Head from "next/head";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Tabs,
  Tab,
  Sonnet,
} from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import stylesHome from "../styles/Home.module.scss";
import Footer from "./components/footer";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.css";
//import aboutVideo from "../public/images/about-video.png";

import whatWeOfferImg1 from "../public/images/img-1.jpg";
import whatWeOfferImg2 from "../public/images/img-2.jpg";
import whatWeOfferImg3 from "../public/images/img-3.jpg";
import whatWeOfferImg4 from "../public/images/img-4.jpg";
import whatWeOfferImg5 from "../public/images/img-5.jpg";
import whatWeOfferImg6 from "../public/images/img-6.jpg";
import indusTabImage from "../public/images/industries.jpg";
import rightArrow from "../public/images/right-arrow.png";
import indusTabBg from "../public/images/industries-bg.png";
import testimonialAuthor from "../public/images/testimonial-img.jpg";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default function Home() {
  return (
    <div className="globalWrap">
      <Header />
      <section className={stylesHome.topPartContainer}>
        <Container>
          <Row>
            <Col lg="6" sm="8">
              <section className={stylesHome.topPart}>
                <h1>Sparks of imagination light up every design</h1>
                <p>
                  Through the realms of technology and the immersive experience
                  was born the concept of virtual reality. SpaceShift has been
                  the pioneer of providing world-class services in the virtual
                  reality domain.
                </p>
              </section>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={stylesHome["aboutUsContainer"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="7">
              <div className={stylesHome.aboutUscontent}>
                <div className="tinyTitle">
                  <h5>About Us</h5>
                </div>
                <h2>India’s leading Virtual Tour Company</h2>
                <p>
                  Through the realms of technology and the immersive experience
                  was born the concept of virtual reality. SpaceShift has been
                  the pioneer of providing world-class services in the virtual
                  reality domain. <br></br> <br></br>
                  Through the collaboration of in-house talent, SpaceShift aims
                  at striving towards the best possible solutions for the
                  clients. Inspiration is what people at SpaceShift put in their
                  lives and work every day.
                </p>

                <a className="coloredBt">Explore more projects</a>
              </div>
            </Col>

            <Col lg="5">
              <div className={stylesHome.aboutUsVideo}>
                <Image src="/images/about-video.png" alt="Spaceshift" width={388} height={357}  />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={stylesHome["whatWeOfferContainer"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesHome.whatWeOfferTitle}>
                <div className="tinyTitle">
                  <h5>What we offer</h5>
                </div>
                <h2>Our wide range of VR services</h2>
              </div>
            </Col>
          </Row>
          <Row className={stylesHome.whatWeOfferBoxMain}>
            <Col lg="6" sm="6" className={stylesHome.whatWeOfferCol6}>
              <div className={stylesHome.whatWeOfferBox}>
                <Image src={whatWeOfferImg1} alt="Spaceshift" />
                <h3>Google street view</h3>
                <p>
                  Your customers can find you pretty easily with high-quality
                  photos on your business listing. Thanks to the 360 virtual
                  tour of your business, clients know exactly what to expect at
                  the comfort of their home and fingertips.
                </p>
                <a className="coloredBt">Know more</a>
              </div>
            </Col>

            <Col lg="6" sm="6" className={stylesHome.whatWeOfferCol6}>
              <div className={stylesHome.whatWeOfferBox}>
                <Image src={whatWeOfferImg2} alt="Spaceshift" />
                <h3>3D Tours</h3>
                <p>
                  3D tours would ensure that it becomes easier & time-friendly
                  for the clients to witness the products of any business
                  seamlessly. A 360 view of your business would equally
                  contribute to your marketing efforts.
                </p>
                <a className="coloredBt">Know more</a>
              </div>
            </Col>

            <Col lg="6" sm="6" className={stylesHome.whatWeOfferCol6}>
              <div className={stylesHome.whatWeOfferBox}>
                <Image src={whatWeOfferImg3} alt="Spaceshift" />
                <h3>Custom virtual tours</h3>
                <p>
                  Custom virtual tours create an immersive experience that is
                  more powerful and effective than any other form of
                  advertising. It tends to create familiarity and ease among the
                  clients before they visit the physical premises.
                </p>
                <a className="coloredBt">Know more</a>
              </div>
            </Col>

            <Col lg="6" sm="6" className={stylesHome.whatWeOfferCol6}>
              <div className={stylesHome.whatWeOfferBox}>
                <Image src={whatWeOfferImg4} alt="Spaceshift" />
                <h3>Professional VR films</h3>
                <p>
                  Virtual reality production showcases the benefits when you
                  include it in your marketing strategy. It ensures 3 times the
                  conversion of traditional video content and encourages
                  engagement. Clients respond better if they have an immersive,
                  360-degree video to interact with.
                </p>
                <a className="coloredBt">Know more</a>
              </div>
            </Col>

            <Col lg="6" sm="6" className={stylesHome.whatWeOfferCol6}>
              <div className={stylesHome.whatWeOfferBox}>
                <Image src={whatWeOfferImg5} alt="Spaceshift" />
                <h3>3D Projection mapping</h3>
                <p>
                  Posters, banners, lights, and other stuff for an occasion can
                  be time-consuming since you need to set up, transport, and
                  dismantle each of them. 3D projection mapping removes all such
                  issues. All you need is an image or a theme developed by the
                  apt software and a projector, and you are ready for a highly
                  immersive and entertaining display.
                </p>
                <a className="coloredBt">Know more</a>
              </div>
            </Col>

            <Col lg="6" sm="6" className={stylesHome.whatWeOfferCol6}>
              <div className={stylesHome.whatWeOfferBox}>
                <Image src={whatWeOfferImg6} alt="Spaceshift" />
                <h3>Photogrammetry</h3>
                <p>
                  Photogrammetry helps to create a 3D model of the object which
                  ensures a better output workflow. A replica, as we can say, in
                  the form of a 3D model would always come in handy when
                  proposing a deal and the client needs to see 3D visuals of
                  your product offering.
                </p>
                <a className="coloredBt">Know more</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={stylesHome["industriesContainer"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesHome.whatWeOfferTitle}>
                <div className="tinyTitle">
                  <h5>What we offer</h5>
                </div>
              </div>
              <div className={stylesHome.industriesWrap}>
                <Tab.Container defaultActiveKey="restaraunts">
                  <Row>
                    <Col lg={3} sm={5}>
                      <div className={stylesHome.whatWeOfferTitle}>
                        <h2>Industries</h2>
                      </div>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="restaraunts">
                            Restaraunts & Cafes
                          </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="travel">
                            Travel & Hospitality
                          </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="realestate">Real Estate</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="retails">
                            Retails & Showrooms
                          </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="tourism">Tourism</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="institutes">
                            Educational Institutes
                          </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="events">Events</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="hospials">
                            Hospials & Clinics
                          </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="restoration">
                            Restoration
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col lg={9} sm={7} >
                      <Tab.Content>
                        <Tab.Pane eventKey="restaraunts">
                          <div className={stylesHome.indusTabBox}>
                            <div className={stylesHome.indusTabBoxBg}>
                              <Image src={indusTabBg} alt="Spaceshift" />
                            </div>
                            <div className={stylesHome.indusTabBoxImage}>
                              <Image src={indusTabImage} alt="Spaceshift" />
                              <div className={stylesHome.indusTabBoxImageInfo}>
                                <span>01 --- 3D Tours</span>
                                <span className={stylesHome.projectName}>
                                  Project Name
                                </span>
                              </div>
                            </div>

                            <a className="seeMoreBt">
                              <p>See more </p>{" "}
                              <Image src={rightArrow} alt="Spaceshift" />
                            </a>
                          </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="travel">
                          <div className={stylesHome.indusTabBox}>
                            <div className={stylesHome.indusTabBoxBg}>
                              <Image src={indusTabBg} alt="Spaceshift" />
                            </div>
                            <div className={stylesHome.indusTabBoxImage}>
                              <Image src={indusTabImage} alt="Spaceshift" />
                              <div className={stylesHome.indusTabBoxImageInfo}>
                                <span>01 --- 3D Tours</span>
                                <span className={stylesHome.projectName}>
                                  Project Name
                                </span>
                              </div>
                            </div>

                            <a className="seeMoreBt">
                              <p>See more </p>{" "}
                              <Image src={rightArrow} alt="Spaceshift" />
                            </a>
                          </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="realestate">
                          <div className={stylesHome.indusTabBox}>
                            <div className={stylesHome.indusTabBoxBg}>
                              <Image src={indusTabBg} alt="Spaceshift" />
                            </div>
                            <div className={stylesHome.indusTabBoxImage}>
                              <Image src={indusTabImage} alt="Spaceshift" />
                              <div className={stylesHome.indusTabBoxImageInfo}>
                                <span>01 --- 3D Tours</span>
                                <span className={stylesHome.projectName}>
                                  Project Name
                                </span>
                              </div>
                            </div>

                            <a className="seeMoreBt">
                              <p>See more </p>{" "}
                              <Image src={rightArrow} alt="Spaceshift" />
                            </a>
                          </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="retails">
                          <div className={stylesHome.indusTabBox}>
                            <div className={stylesHome.indusTabBoxBg}>
                              <Image src={indusTabBg} alt="Spaceshift" />
                            </div>
                            <div className={stylesHome.indusTabBoxImage}>
                              <Image src={indusTabImage} alt="Spaceshift" />
                              <div className={stylesHome.indusTabBoxImageInfo}>
                                <span>01 --- 3D Tours</span>
                                <span className={stylesHome.projectName}>
                                  Project Name
                                </span>
                              </div>
                            </div>

                            <a className="seeMoreBt">
                              <p>See more </p>{" "}
                              <Image src={rightArrow} alt="Spaceshift" />
                            </a>
                          </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="tourism">
                          <div className={stylesHome.indusTabBox}>
                            <div className={stylesHome.indusTabBoxBg}>
                              <Image src={indusTabBg} alt="Spaceshift" />
                            </div>
                            <div className={stylesHome.indusTabBoxImage}>
                              <Image src={indusTabImage} alt="Spaceshift" />
                              <div className={stylesHome.indusTabBoxImageInfo}>
                                <span>01 --- 3D Tours</span>
                                <span className={stylesHome.projectName}>
                                  Project Name
                                </span>
                              </div>
                            </div>

                            <a className="seeMoreBt">
                              <p>See more </p>{" "}
                              <Image src={rightArrow} alt="Spaceshift" />
                            </a>
                          </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="institutes">
                          <div className={stylesHome.indusTabBox}>
                            <div className={stylesHome.indusTabBoxBg}>
                              <Image src={indusTabBg} alt="Spaceshift" />
                            </div>
                            <div className={stylesHome.indusTabBoxImage}>
                              <Image src={indusTabImage} alt="Spaceshift" />
                              <div className={stylesHome.indusTabBoxImageInfo}>
                                <span>01 --- 3D Tours</span>
                                <span className={stylesHome.projectName}>
                                  Project Name
                                </span>
                              </div>
                            </div>

                            <a className="seeMoreBt">
                              <p>See more </p>{" "}
                              <Image src={rightArrow} alt="Spaceshift" />
                            </a>
                          </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="events">
                          <div className={stylesHome.indusTabBox}>
                            <div className={stylesHome.indusTabBoxBg}>
                              <Image src={indusTabBg} alt="Spaceshift" />
                            </div>
                            <div className={stylesHome.indusTabBoxImage}>
                              <Image src={indusTabImage} alt="Spaceshift" />
                              <div className={stylesHome.indusTabBoxImageInfo}>
                                <span>01 --- 3D Tours</span>
                                <span className={stylesHome.projectName}>
                                  Project Name
                                </span>
                              </div>
                            </div>

                            <a className="seeMoreBt">
                              <p>See more </p>{" "}
                              <Image src={rightArrow} alt="Spaceshift" />
                            </a>
                          </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="hospials">
                          <div className={stylesHome.indusTabBox}>
                            <div className={stylesHome.indusTabBoxBg}>
                              <Image src={indusTabBg} alt="Spaceshift" />
                            </div>
                            <div className={stylesHome.indusTabBoxImage}>
                              <Image src={indusTabImage} alt="Spaceshift" />
                              <div className={stylesHome.indusTabBoxImageInfo}>
                                <span>01 --- 3D Tours</span>
                                <span className={stylesHome.projectName}>
                                  Project Name
                                </span>
                              </div>
                            </div>

                            <a className="seeMoreBt">
                              <p>See more </p>{" "}
                              <Image src={rightArrow} alt="Spaceshift" />
                            </a>
                          </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="restoration">
                          <div className={stylesHome.indusTabBox}>
                            <div className={stylesHome.indusTabBoxBg}>
                              <Image src={indusTabBg} alt="Spaceshift" />
                            </div>
                            <div className={stylesHome.indusTabBoxImage}>
                              <Image src={indusTabImage} alt="Spaceshift" />
                              <div className={stylesHome.indusTabBoxImageInfo}>
                                <span>01 --- 3D Tours</span>
                                <span className={stylesHome.projectName}>
                                  Project Name
                                </span>
                              </div>
                            </div>

                            <a className="seeMoreBt">
                              <p>See more </p>{" "}
                              <Image src={rightArrow} alt="Spaceshift" />
                            </a>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={stylesHome["testimonialsContainer"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="7">
              <div className={stylesHome.whatWeOfferTitle}>
                <div className="tinyTitle">
                  <h5>Testimonials</h5>
                </div>
                <h2>
                  Do not believe everything we say. Rather, hear it from our
                  customers
                </h2>
              </div>
            </Col>
           </Row>
        </Container>

        <div className={stylesHome.carouselWrap}>
       
              <Carousel
                responsive={responsive}
                // autoPlay={true}
                // autoPlaySpeed={3000}
                keyBoardControl={true}
                itemClass="carousel-item-padding-40-px"
                partialVisbile={true}
              >
                <div className={stylesHome.testimonialBox}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt amet eros felis neque blandit fermentum. Mattis
                    erat non sit lectus egestas suspendisse ultrices. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt{" "}
                  </p>

                  <div className={stylesHome.testimonialAuthor}>
                    <div className={stylesHome.testimonialAuthorImgBox}>
                      <Image src={testimonialAuthor} alt="Spaceshift" />
                    </div>
                    <div className={stylesHome.testimonialAuthorname}>
                      <h4>Mike</h4>
                      <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                  </div>
                </div>

                <div className={stylesHome.testimonialBox}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt amet eros felis neque blandit fermentum. Mattis
                    erat non sit lectus egestas suspendisse ultrices. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt{" "}
                  </p>

                  <div className={stylesHome.testimonialAuthor}>
                    <div className={stylesHome.testimonialAuthorImgBox}>
                      <Image src={testimonialAuthor} alt="Spaceshift" />
                    </div>
                    <div className={stylesHome.testimonialAuthorname}>
                      <h4>Mike</h4>
                      <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                  </div>
                </div>
               
                <div className={stylesHome.testimonialBox}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt amet eros felis neque blandit fermentum. Mattis
                    erat non sit lectus egestas suspendisse ultrices. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt{" "}
                  </p>

                  <div className={stylesHome.testimonialAuthor}>
                    <div className={stylesHome.testimonialAuthorImgBox}>
                      <Image src={testimonialAuthor} alt="Spaceshift" />
                    </div>
                    <div className={stylesHome.testimonialAuthorname}>
                      <h4>Mike</h4>
                      <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                  </div>
                </div>

                <div className={stylesHome.testimonialBox}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt amet eros felis neque blandit fermentum. Mattis
                    erat non sit lectus egestas suspendisse ultrices. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt{" "}
                  </p>

                  <div className={stylesHome.testimonialAuthor}>
                    <div className={stylesHome.testimonialAuthorImgBox}>
                      <Image src={testimonialAuthor} alt="Spaceshift" />
                    </div>
                    <div className={stylesHome.testimonialAuthorname}>
                      <h4>Mike</h4>
                      <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                  </div>
                </div>
               
              </Carousel>
           
          
        </div>
      </section>

      <section
        className={stylesHome["newsletterContainer"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesHome.manyReasonBox}>
                <h2>There are many reasons to get down</h2>
                <p>
                  Interested in knowing how SpaceShift can do wonders for your
                  business with its cutting-edge technology?
                </p>

                <div className={stylesHome.manyReasonBoxForm}>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Enter your email"
                  />
                  <Button>send</Button>
                </div>
                <p>No spam. Only releases, updates and discounts</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
