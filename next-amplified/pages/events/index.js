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
import stylesEvents from "../../styles/Events.module.scss";
import Footer from "../components/footer";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";

import eventsImg from "../../public/images/events-1.jpg";
import eventsImg2 from "../../public/images/events-2.jpg";
import eventsImg3 from "../../public/images/events-3.jpg";
import eventsImg4 from "../../public/images/img-53.jpg";
import eventsImg5 from "../../public/images/img-54.jpg";

export default function index() {
  return (
    <div className="globalWrap">
      <Header />
      <section
        className={stylesEvents["eventsTopContainer"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesEvents.eventsTopBox}>
                <div className={stylesEvents.eventsTopImg}>
                  <div className={stylesEvents.eventsTopImg1}>
                    <Image src={eventsImg} alt="Spaceshift" />
                  </div>
                  <div className={stylesEvents.eventsTopImg2}>
                    <Image src={eventsImg2} alt="Spaceshift" />
                  </div>
                  <div className={stylesEvents.eventsTopImg3}>
                    <Image src={eventsImg3} alt="Spaceshift" />
                  </div>
                </div>
                <div className={stylesEvents.eventsTopInfo}>
                  <h1>Events</h1>
                  <p>
                    Event professionals need to deliver their best on several
                    fronts, to make any event memorable and inspiring. Attendees
                    analyze the return on investment before purchasing tickets
                    and look forward to productive and transformative
                    experiences. When trying to plan the event and presenting
                    the promised deliverables, it is important to hold the
                    attention of the attendees without overwhelming or draining
                    them. Imagine this - people enter an enclosed space to
                    attend a seminar and see the sails of the Sydney Opera House
                    come to life. Wouldn’t that help elevate the customer
                    experience and keep them more invested? 3D projection
                    mapping lets convert any surface, be it a simple wall, a
                    stage, a building, or a complete room into a digital canvas.
                    Not only is it fascinating and visually impressive, but it
                    also helps you ‘wow’ your guests and increases the return on
                    investment for them.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="12">
              <p>
                The value of real-life interaction never goes away, but there
                are certain times when hosting an event online becomes
                necessary. Wouldn’t it be great if the natural dynamics and
                visual experiences of an offline event could be replicated for a
                virtual event? Well, this is possible with the use of virtual
                sets, that allow the background to be controlled and manipulated
                in real-time to provide an equivalent visual experience of any
                realistic venue to viewers at home. SpaceShift has an
                experienced team of professional virtual reality content
                creators and developers capable of producing quality content for
                Virtual Production, making it one of the top Virtual Reality
                companies in India.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className={stylesEvents["eventsBottomContainer"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesEvents.EventsTitleWrap}>
                <div className={stylesEvents.EventsTitleLeft}>
                  {/* <h2>Benefits of Virtual Sets and 3D Projection Mapping</h2> */}

                  <Image src={eventsImg4} alt="Spaceshift" />
                </div>
                <div className={stylesEvents.EventsTitleRight}>
                  <h2>Benefits of Virtual Sets and 3D Projection Mapping</h2>
                  <p>
                    The success of any event is measured by customer
                    satisfaction and the value attendees get from it. If an
                    event successfully strikes a chord with the
                    viewers/attendees, they are bound to remember the brand and
                    its creativity in the long run. 3D Projection Mapping and
                    Virtual Sets help to hold the attention of people by
                    offering visual experiences that complement the event’s set
                    agenda. Thus, these technologies help stimulate their visual
                    senses, and provide an experience to remember.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="12">
              <div className={stylesEvents.eventsBottomContentWrap}>
                <div className={stylesEvents.eventsBottomContentBox}>
                  <div className={stylesEvents.eventsBottomContentLeft}>
                    <h5>Engaging StoryTelling Method</h5>
                    <p>
                      With 3D projection mapping, you can bring your imagination
                      into reality, by transforming any physical space to fit
                      your narrative and make the event more cohesive. To create
                      custom content and project it on any 3D physical space,
                      the surface is taken into consideration while building the
                      content to offer a more realistic touch to it. For
                      example, the Temple House in Miami transformed one of
                      their halls into a cherry blossom forest for a wedding
                      ceremony and replicated the “fall” of rose petals from the
                      trees to add a touch of grandeur. Similarly, the Cambie
                      Street Bridge, Vancouver was converted into a virtual
                      ocean to celebrate British Columbia’s annual salmon
                      migration.
                    </p>

                    <h5>Reduce Overall Costs</h5>
                    <p>
                      For virtual events, traveling to a place and setting up a
                      complete studio for a few hours can prove to be costly.
                      With 3D virtual stage sets, the speakers and attendees can
                      be transported to any realistic venue virtually, and
                      extended reality elements can be added for the benefit of
                      both the viewer and speaker.{" "}
                    </p>

                    <h5>Helps Add Context and Depth</h5>
                    <p>
                      It is undeniable that 3D projection mapping and virtual
                      sets help make the event more visually appealing, but it
                      also helps add more context and depth by showcasing
                      displays and adding sound effects that help users
                      visualize what the speaker is talking about.
                    </p>
                  </div>
                  <div className={stylesEvents.eventsBottomContentRight}>
                  <Image src={eventsImg5} alt="Spaceshift" />
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
