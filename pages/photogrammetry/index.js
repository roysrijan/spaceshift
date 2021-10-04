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

import projectMappingBanner from "../../public/images/photogrammetry-banner.jpg";
import projectMappingImg1 from "../../public/images/img-22.jpg";
import projectMappingImg2 from "../../public/images/img-21.jpg";

export default function index() {
  return (
    <div className="globalWrap">
      <Header />
      <div className="innerPageHeaderWrap">
        <Image src={projectMappingBanner} alt="Spaceshift" />
        <div className="innerPageHeaderTitle">
          <h2>Photogrammetry</h2>
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
                    Photogrammetry is the art, science, and technology of
                    obtaining reliable information about physical objects and
                    the environment through processes of recording, measuring,
                    and interpreting photographic images and patterns of
                    recorded radiant electromagnetic energy and other phenomena.{" "}
                    <br></br><br></br>
                    Photogrammetry is primarily concerned with making precise
                    measurements of three-dimensional objects and terrain
                    features from two-dimensional photographs. <br></br><br></br>
                    Applications include the measuring of coordinates; the
                    quantification of distances, heights, areas, and volumes;
                    the preparation of topographic maps; and the generation of
                    digital elevation models and orthophotography.
                  </p>
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
              <h2>Application of Photogrammetry</h2>
              <div className="moreAboutProjectMapping">
                <Tabs>
                  <TabList>
                    <Tab>Architecture</Tab>
                    <Tab>Surveying</Tab>
                    <Tab>Gaming & VFX</Tab>
                    <Tab>3D Printing</Tab>
                    <Tab>Cultural Heritage</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="moreAboutProjectMappingTabContent">
                      <div className="moreAboutProjectMappingTabContentImg">
                        <Image src={projectMappingImg2} alt="Spaceshift" fluid />
                      </div>
                      <div className="moreAboutProjectMappingTabContentText">
                        <p>
                        For architects, it is important to visualize the design of a house or building in its future setting, not just in isolation. This may serve for attractive presentation but also for verifying relationships in a real context or for the presentation of the output to the client, who immediately gets an idea of the result. Whether it is an urban development project where a detailed terrain survey is required or a monument presentation where the baseline documentation is needed, photogrammetry can help to achieve the desired result.

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
                          playing on a viewer&#39;s sense of space and gives the
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
                          playing on a viewer&#39;s sense of space and gives the
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
                          playing on a viewer&#39;s sense of space and gives the
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
                          playing on a viewer&#39;s sense of space and gives the
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
