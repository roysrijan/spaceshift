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

// import projectMappingBanner from "../../public/images/photogrammetry-banner.jpg";
// import projectMappingImg1 from "../../public/images/img-22.jpg";
// import projectMappingImg2 from "../../public/images/img-21.jpg";

export default function index() {
  return (
    <div className="globalWrap">
      <Header />
      <div className="innerPageHeaderWrap">
        {/* <Image src={projectMappingBanner} alt="Spaceshift" /> */}
        <img src="/images/photogrammetry-banner.jpg" alt="Spaceshift" />

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
                  {/* <Image src={projectMappingImg1} alt="Spaceshift" /> */}
                  <img src="/images/img-22.jpg" alt="Spaceshift" />
                </div>
                <div className={stylesProjectMapping.introductionContent}>
                  <h2>Introduction</h2>
                  <p>
                    Photogrammetry is the art, science, and technology of
                    obtaining reliable information about physical objects and
                    the environment through processes of recording, measuring,
                    and interpreting photographic images and patterns of
                    recorded radiant electromagnetic energy and other phenomena.{" "}
                    <br></br>
                    <br></br>
                    Photogrammetry is primarily concerned with making precise
                    measurements of three-dimensional objects and terrain
                    features from two-dimensional photographs. <br></br>
                    <br></br>
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
                        {/* <Image src={projectMappingImg2} alt="Spaceshift" fluid /> */}
                        <img src="/images/img-21.jpg" alt="Spaceshift" />
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
                        {/* <Image src={projectMappingImg2} alt="Spaceshift" /> */}
                        <img src="/images/img-21.jpg" alt="Spaceshift" />
                      </div>
                      <div className="moreAboutProjectMappingTabContentText">
                        <p>
                        Inspect your data directly in the field and add missing photos. Leave the job site with ready data. Process 3D models from 400 photos on a standard laptop in 10 minutes. RealityCapture&#39;s low hardware requirements allow you to check your data anywhere. Direct support of PPK/RTK flight logs dramatically reduce the users work directly in the field and post-processing time in RealityCapture. One-click virtual assistant in a creation of geo-referenced maps and/or models. It is an easy and intuitive tool enabling you to have end-to-end results in one place.


                         
                        </p>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="moreAboutProjectMappingTabContent">
                      <div className="moreAboutProjectMappingTabContentImg">
                        {/* <Image src={projectMappingImg2} alt="Spaceshift" /> */}
                        <img src="/images/img-21.jpg" alt="Spaceshift" />
                      </div>
                      <div className="moreAboutProjectMappingTabContentText">
                        <p>
                        Use your phone or DSLR and capture an object from every angle.
Use photos to recreate small 3D objects, digital doubles or big 3D environments ready to export for content-creation and artistic tools. Bring physical objects into 3D and be creative. Build you own environment from real world objects and create truly immersive experience. Replace manual modelling and speed up your creative workflow with photogrammetry software.
                        </p>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="moreAboutProjectMappingTabContent">
                      <div className="moreAboutProjectMappingTabContentImg">
                        {/* <Image src={projectMappingImg2} alt="Spaceshift" /> */}
                        <img src="/images/img-21.jpg" alt="Spaceshift" />
                      </div>
                      <div className="moreAboutProjectMappingTabContentText">
                        <p>
                        Photogrammetry is time saving, cost reducing method which helps to better communicate projects and lowers risks of future errors.<br></br><br></br>
Replace manual modelling and speed up your creative workflow. It&#39;s simple. Use your phone or DSLR, or drone and capture an object from every angle. Easily edit and re-design the reality-captured models. Design missing component that will fit perfectly to object it was made for. Set of integrated post processing tool will help you to fine tune your model. Filter unwanted parts, smooth and simplify your mesh to achieve the best possible result
                        </p>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="moreAboutProjectMappingTabContent">
                      <div className="moreAboutProjectMappingTabContentImg">
                        {/* <Image src={projectMappingImg2} alt="Spaceshift" /> */}
                        <img src="/images/img-21.jpg" alt="Spaceshift" />
                      </div>
                      <div className="moreAboutProjectMappingTabContentText">
                        <p>
                        Our Cultural Heritage is being endangered by environmental changes, natural disasters, wars. Moreover, many of the historical places or objects are not accessible to the wide public due to its fragile nature. Photogrammetry as a non - destructive method of data capturing preserves these heritage sites and objects in time and helps with a future restoration. With photogrammetry it often doesn't matter when the photo or video was taken. This is especially helpful in case of tragic events such as act of terrorism, wars, fires. The objects and sites can be reconstructed from crowdsourced photos from tourist who at some point in the past visited the place. These can be combined from institutions archives to re-create the site in its&#39; former glory. Photogrammetry serves as a fast and accurate method of transferring the real world into a virtual one. 
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
