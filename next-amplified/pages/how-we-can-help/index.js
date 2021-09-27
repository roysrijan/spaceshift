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

import Image from "next/image";

import stylesFaq from "../../styles/Faq.module.scss";
import Footer from "../components/footer";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
export default function index() {
  return (
    <div className="globalWrap">
      <Header />

      <section
        className={stylesFaq["howWeCanHelpYouContainer"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesFaq.howWeCanHelpYouContainerInner}>
                <h1>How can we help?</h1>
                <p>
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit
                  amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div className={stylesFaq["moreAboutProjectMappingForFaq"] + " " + "moreAboutProjectMapping"+ " " + "faqTab"}>
                <Tabs>
                  <TabList>
                    <Tab>General</Tab>
                    <Tab>Clients</Tab>
                  </TabList>

                  <TabPanel>
                    <div className={stylesFaq.faqTabContent}>
                      <h3>1. Have a General Question? Send Us an email</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla auctor dictum hendrerit sed urna, orci quis
                        adipiscing diam. Proin feugiat sodales a sed neque enim.
                        Faucibus scelerisque nisl pellentesque cursus nibh in
                        risus.
                      </p>
                      <h3>
                        2. Have a General Question? Send Us an email Have a Gene
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla auctor dictum hendrerit sed urna, orci quis
                        adipiscing diam. Proin feugiat sodales a sed neque enim.
                        Faucibus scelerisque nisl pellentesque cursus nibh in
                        risus.
                      </p>
                      <h3>
                        3. Have a General Question? Send Us an email Have a Gene
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla auctor dictum hendrerit sed urna, orci quis
                        adipiscing diam. Proin feugiat sodales a sed neque enim.
                        Faucibus scelerisque nisl pellentesque cursus nibh in
                        risus.
                      </p>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className={stylesFaq.faqTabContent}>
                      <h3>1. Have a General Question? Send Us an email</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla auctor dictum hendrerit sed urna, orci quis
                        adipiscing diam. Proin feugiat sodales a sed neque enim.
                        Faucibus scelerisque nisl pellentesque cursus nibh in
                        risus.
                      </p>
                      <h3>
                        2. Have a General Question? Send Us an email Have a Gene
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla auctor dictum hendrerit sed urna, orci quis
                        adipiscing diam. Proin feugiat sodales a sed neque enim.
                        Faucibus scelerisque nisl pellentesque cursus nibh in
                        risus.
                      </p>
                      <h3>
                        3. Have a General Question? Send Us an email Have a Gene
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla auctor dictum hendrerit sed urna, orci quis
                        adipiscing diam. Proin feugiat sodales a sed neque enim.
                        Faucibus scelerisque nisl pellentesque cursus nibh in
                        risus.
                      </p>
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
