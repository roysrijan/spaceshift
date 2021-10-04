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

import stylesProjectMapping from "../../styles/projectMapping.module.scss";
import Footer from "../components/footer";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";

import projectMappingBanner from "../../public/images/project-mapping-banner.jpg";
import projectMappingImg1 from "../../public/images/img-20.jpg";
import projectMappingImg2 from "../../public/images/img-21.jpg";

export default function index() {
  return (
    <div className="globalWrap">
      <Header />
      <div className="innerPageHeaderWrap">
        <Image src={projectMappingBanner} alt="Spaceshift" />
        <div className="innerPageHeaderTitle">
          <h2>Projection Mapping</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At at amet
            tortor viverra.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
      </div>

      <section
        className={
          stylesProjectMapping["introductionContainer"] + " " + "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesProjectMapping.introductionBox}>
                <div className={stylesProjectMapping.introductionImg}>
                  <Image src={projectMappingImg1} alt="Spaceshift" />
                </div>
                <div className={stylesProjectMapping.introductionContent}>
                  <h2>Introduction</h2>
                  <p>
                    3D projection mapping, known as simply "projection mapping"
                    or video mapping, is the art and science of utilizing
                    physical spaces and objects as the surface for projection,
                    instead of a traditional screen. The outcome is a visually
                    stunning, magical impression that needs to be viewed to be
                    entirely experienced. 3D projection mapping utilizes a blend
                    of four factors that work in conjunction to create the
                    visual experience, and we refer to these factors as CPSM.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={
          stylesProjectMapping["whatAreTheyContainer"] + " " + "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesProjectMapping.whatAreTheyBox}>
                <h2>What are they?</h2>

                <div className={stylesProjectMapping.whatAreTheyBoxContent}>
                  <div className={stylesProjectMapping.whatAreThey}>
                    <h3>01</h3>
                    <h4>Content</h4>
                    <p>The Visuals projected</p>
                  </div>

                  <div className={stylesProjectMapping.whatAreThey}>
                    <h3>02</h3>
                    <h4>Projection</h4>
                    <p>
                      Equipment that is responsible for doing the projection
                    </p>
                  </div>

                  <div className={stylesProjectMapping.whatAreThey}>
                    <h3>03</h3>
                    <h4>Surface</h4>
                    <p>Physical space on which projection takes place</p>
                  </div>

                  <div className={stylesProjectMapping.whatAreThey}>
                    <h3>04</h3>
                    <h4>Mapping</h4>
                    <p>
                      The technological perspectives of conforming the
                      projection onto the surface
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={
          stylesProjectMapping["moreAboutProjectMappingContainer"] +
          " " +
          "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <h2>More about CPSM in Projection Mapping</h2>
              <div className="moreAboutProjectMapping">
                <Tabs>
                  <TabList>
                    <Tab>Content</Tab>
                    <Tab>Projection</Tab>
                    <Tab>Surface</Tab>
                    <Tab>Mapping</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="moreAboutProjectMappingTabContent">
                      <div className="moreAboutProjectMappingTabContentImg">
                        <Image src={projectMappingImg2} alt="Spaceshift" />
                      </div>
                      <div className="moreAboutProjectMappingTabContentText">
                        <p>
                          Putting it in simple words, a surface is any physical
                          space or object that you wish to project into. Given
                          the right amount of planning, almost anything can be a
                          surface for projection mapping, and this surface
                          dictates what kind of content would be created. It is
                          normal for a projection mapping display to make use of
                          the contours and architecture of the surface. The
                          reason being the effect is made more powerful by
                          playing on a viewer's sense of space and gives the
                          capability to produce tricks of light and illusions.
                          Surfaces that usually work out seamlessly include
                          light-colored buildings and walls, cars, staging for
                          corporate events, and trade show booths. Less
                          effective ones include blank white walls since mapping
                          and conformation at a higher level are not involved.
                        </p>
                      </div>
                    </div>
                  </TabPanel>
                  

                  <TabPanel>
                    <div className="moreAboutProjectMappingTabContent">
                      <div className="moreAboutProjectMappingTabContentImg">
                        <Image src={projectMappingImg2} alt="Spaceshift" />
                      </div>
                      <div className="moreAboutProjectMappingTabContentText">
                        <p>
                          Putting it in simple words, a surface is any physical
                          space or object that you wish to project into. Given
                          the right amount of planning, almost anything can be a
                          surface for projection mapping, and this surface
                          dictates what kind of content would be created. It is
                          normal for a projection mapping display to make use of
                          the contours and architecture of the surface. The
                          reason being the effect is made more powerful by
                          playing on a viewer's sense of space and gives the
                          capability to produce tricks of light and illusions.
                          Surfaces that usually work out seamlessly include
                          light-colored buildings and walls, cars, staging for
                          corporate events, and trade show booths. Less
                          effective ones include blank white walls since mapping
                          and conformation at a higher level are not involved.
                        </p>
                      </div>
                    </div>
                  </TabPanel>
                  

                  <TabPanel>
                    <div className="moreAboutProjectMappingTabContent">
                      <div className="moreAboutProjectMappingTabContentImg">
                        <Image src={projectMappingImg2} alt="Spaceshift" />
                      </div>
                      <div className="moreAboutProjectMappingTabContentText">
                        <p>
                          Putting it in simple words, a surface is any physical
                          space or object that you wish to project into. Given
                          the right amount of planning, almost anything can be a
                          surface for projection mapping, and this surface
                          dictates what kind of content would be created. It is
                          normal for a projection mapping display to make use of
                          the contours and architecture of the surface. The
                          reason being the effect is made more powerful by
                          playing on a viewer's sense of space and gives the
                          capability to produce tricks of light and illusions.
                          Surfaces that usually work out seamlessly include
                          light-colored buildings and walls, cars, staging for
                          corporate events, and trade show booths. Less
                          effective ones include blank white walls since mapping
                          and conformation at a higher level are not involved.
                        </p>
                      </div>
                    </div>
                  </TabPanel>
                  
                  <TabPanel>
                    <div className="moreAboutProjectMappingTabContent">
                      <div className="moreAboutProjectMappingTabContentImg">
                        <Image src={projectMappingImg2} alt="Spaceshift" />
                      </div>
                      <div className="moreAboutProjectMappingTabContentText">
                        <p>
                          Putting it in simple words, a surface is any physical
                          space or object that you wish to project into. Given
                          the right amount of planning, almost anything can be a
                          surface for projection mapping, and this surface
                          dictates what kind of content would be created. It is
                          normal for a projection mapping display to make use of
                          the contours and architecture of the surface. The
                          reason being the effect is made more powerful by
                          playing on a viewer's sense of space and gives the
                          capability to produce tricks of light and illusions.
                          Surfaces that usually work out seamlessly include
                          light-colored buildings and walls, cars, staging for
                          corporate events, and trade show booths. Less
                          effective ones include blank white walls since mapping
                          and conformation at a higher level are not involved.
                        </p>
                      </div>
                    </div>
                  </TabPanel>
                  

                  

                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
