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
import stylesThreeDTours from "../../styles/Tours3D.module.scss";
import Footer from "../components/footer";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";

// import threedToursBanner from "../../public/images/3d-tours-banner.jpg";
// import threedToursImg from "../../public/images/img-12.jpg";

// import toursStoreImg1 from "../../public/images/img-13.jpg";
// import toursStoreImg2 from "../../public/images/img-14.jpg";
// import toursStoreImg3 from "../../public/images/img-15.jpg";
// import toursStoreImg4 from "../../public/images/img-16.jpg";
// import matterportLogo from "../../public/images/matterport-logo.png";

// import googleStreetviewImg2 from "../../public/images/img-7.jpg";
// import googleStreetviewImg3 from "../../public/images/img-8.png";
// import googleStreetviewImg4 from "../../public/images/img-9.png";

export default function index() {
  return (
    <div className="globalWrap">
      <Header />
      <div className="innerPageHeaderWrap">
        {/* <Image src={threedToursBanner} alt="Spaceshift" /> */}
        <img src="/images/3d-tours-banner.jpg" alt="Spaceshift" />

        <div className="innerPageHeaderTitle">
          <h2>3D Virtual Tours</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At at amet
            tortor viverra.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
      </div>

      <section
        className={stylesThreeDTours["Tour3dContainer"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesThreeDTours.Tour3dContentBox}>
                <div className={stylesThreeDTours.Tour3dContentBoxImg}>
                  {/* <Image src={threedToursImg} alt="Spaceshift" /> */}
                  <img src="/images/img-12.jpg" alt="Spaceshift" />
                </div>

                <div className={stylesThreeDTours.Tour3dContentBoxInfo}>
                  <h2>Introduction</h2>
                  <p>
                    A <b>3D virtual tour</b> is a sequential display of
                    panoramic images that are &#34;sewed&#34; together to produce a
                    &#34;virtual&#34; experience or an encounter of any
                    location. When created, the viewers can experience the
                    presence of a particular location without being there.
                    Viewers are shown to be 150% more engaged and interested
                    with a virtual tour than they are with 2D imagery.<br></br>
                    <br></br>
                    Our <b>3D virtual tours</b> include sound effects, for
                    instance, music or a voiceover describing the product or the
                    point of interest. We also offer buttons that can be clicked
                    on by viewers who want to take a still picture of a specific
                    part of the tour.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={stylesThreeDTours["storeContainer"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="12">
              <h2>What is there in the store?</h2>
            </Col>
          </Row>

          <Row className={stylesThreeDTours.storeContainerFbox}>
            <Col
              lg="6"
              sm="6"
              className={stylesThreeDTours.storeContainerFboxInner}
            >
              <div className={stylesThreeDTours.storeBox}>
                <h5>Dollhouse View</h5>
                {/* <Image
                  className={stylesThreeDTours.storeBoxImg}
                  src={toursStoreImg1}
                  alt="Spaceshift"
                /> */}
                <img src="/images/img-13.jpg" alt="Spaceshift" />

                <p>
                  A 3D Dollhouse view on your property allows your watchers to
                  envision the inside space of the entire property and dissect
                  how various rooms are connected.
                </p>
              </div>
            </Col>

            <Col
              lg="6"
              sm="6"
              className={stylesThreeDTours.storeContainerFboxInner}
            >
              <div className={stylesThreeDTours.storeBox}>
                <h5>Inside View</h5>
                {/* <Image
                  className={stylesThreeDTours.storeBoxImg}
                  src={toursStoreImg2}
                  alt="Spaceshift"
                /> */}
                <img src="/images/img-14.jpg" alt="Spaceshift" />

                <p>
                  This natural 3D visit permits your client to carefully stroll
                  through the property utilizing any device and get an outline
                  of the space, alongside exact estimations.
                </p>
              </div>
            </Col>

            <Col
              lg="6"
              sm="6"
              className={stylesThreeDTours.storeContainerFboxInner}
            >
              <div className={stylesThreeDTours.storeBox}>
                <h5>FloorPlan View</h5>
                {/* <Image
                  className={stylesThreeDTours.storeBoxImg}
                  src={toursStoreImg3}
                  alt="Spaceshift"
                /> */}
                <img src="/images/img-15.jpg" alt="Spaceshift" />

                <p>
                Get a completely labeled floor plan with the tour and give twofold affirmation to your clients about the estimation of the space. 
                </p>
              </div>
            </Col>

            <Col
              lg="6"
              sm="6"
              className={stylesThreeDTours.storeContainerFboxInner}
            >
              <div className={stylesThreeDTours.storeBox}>
                <h5>VR View</h5>
                {/* <Image
                  className={stylesThreeDTours.storeBoxImg}
                  src={toursStoreImg4}
                  alt="Spaceshift"
                /> */}
                <img src="/images/img-16.jpg" alt="Spaceshift" />

                <p>
                With the assistance of well-known VR gadgets like Oculus, Samsung Gear VR, and Google Cardboard, give your client a completely drenched 3D visit.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={
          stylesThreeDTours["matterportContainer"] + " " + "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesThreeDTours.matterportBox}>
                <div className={stylesThreeDTours.matterportBoxImg}>
                  {/* <Image src={matterportLogo} alt="Spaceshift" /> */}
                  <img src="/images/matterport-logo.png" alt="Spaceshift" />
                </div>

                <div className={stylesThreeDTours.matterportBoxInfo}>
                  <h2>Matterport Service</h2>
                  <br></br>
                  <p>
                  Being a <b>Matterport service provider</b>, one thing organizations can generally be guaranteed of, i.e., a-list and consistent experience with regards to virtual visiting. Matterport 3D real estate services are among perhaps the best ones. <br></br>
                    <br></br>

                    <b>Matterport 3D virtual tours</b> digitize and enable fully immersive three-dimensional settings that can support viewing your space from various angles, build functionality on top of it, and get precise measures. Putting it another way, it is a sort of active media that puts the viewer in the driver&#39;s seat, which can help in increasing engagement and contributing in-depth information on the layouts.



                    {/* Being a Matterport service provider, one thing organizations
                    can generally be guaranteed of, i.e., a-list and consistent
                    experience with regards to virtual visiting. Matterport 3D
                    real estate services are among perhaps the best ones.
                    Matterport 3D virtual tours digitize and enable fully
                    immersive three-dimensional settings that can support
                    viewing your space from various angles, build functionality
                    on top of it, and get precise measures. Putting it another
                    way, it is a sort of active media that puts the viewer in
                    the driver&#39;s seat, which can help in increasing
                    engagement and contributing in-depth information on the
                    layouts. */}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={
          stylesThreeDTours["whatisMatterportContainer"] + " " + "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesThreeDTours.whatisMatterportBox}>
                <h2>What is Matterport?</h2>
                <p>
                Matterport, a three-dimensional camera system, is the technology that produces fully immersive virtual experiences. The potential viewers can explore the location from various viewpoints and obtain a feel for space without the need to travel. The unparalleled 3D capture technology of Matterport produces the spatial data layer on which the industries can interoperate and their all-in-one 3D data platform makes it much easier to turn any physical space into a precise and immersive digital twin. Matterport, much more than just panoramic scans, allows people to capture and combine rooms to produce truly interactive 3D models of spaces.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={
          stylesThreeDTours["whyGViewContainer"] + " " + "blockPadding"
        }
      >
        <div className={stylesThreeDTours.whyGView}>
          <h2>Why Matterport?</h2>
        </div>
        <div className="whyGViewTabWrap">
          <Tabs>
            <TabList>
              <Tab>
                <div className="whyGViewTabTitle">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.6624 4.08883C7.44246 3.81055 8.28549 3.7594 9.09347 3.94134C9.90145 4.12327 10.6412 4.53081 11.2267 5.11657C11.8122 5.70234 12.2194 6.44227 12.401 7.25033C12.5826 8.05839 12.531 8.9014 12.2524 9.68133L25.8087 23.2376L23.1562 25.8888L9.5999 12.3338C8.81984 12.6121 7.97681 12.6633 7.16883 12.4813C6.36085 12.2994 5.6211 11.8919 5.0356 11.3061C4.4501 10.7203 4.04289 9.9804 3.86132 9.17234C3.67974 8.36427 3.73127 7.52127 4.0099 6.74133L6.8049 9.53758C6.97786 9.71667 7.18476 9.85951 7.41352 9.95777C7.64228 10.056 7.88831 10.1078 8.13727 10.1099C8.38624 10.1121 8.63313 10.0647 8.86357 9.97037C9.094 9.8761 9.30334 9.73687 9.47939 9.56082C9.65544 9.38478 9.79467 9.17543 9.88894 8.945C9.98322 8.71457 10.0307 8.46767 10.0285 8.21871C10.0263 7.96975 9.97461 7.72371 9.87634 7.49495C9.77807 7.26619 9.63523 7.0593 9.45615 6.88633L6.66115 4.08758L6.6624 4.08883ZM19.6212 6.44383L23.5987 4.23383L25.3662 6.00133L23.1562 9.97883L20.9462 10.4213L18.2962 13.0726L16.5274 11.3051L19.1787 8.65383L19.6212 6.44383V6.44383ZM10.7824 16.1663L13.4337 18.8188L7.24615 25.0063C6.90495 25.3443 6.44705 25.5385 5.96688 25.5489C5.48671 25.5592 5.02088 25.3849 4.66547 25.0618C4.31005 24.7388 4.09215 24.2917 4.05669 23.8127C4.02123 23.3337 4.17093 22.8594 4.4749 22.4876L4.59615 22.3538L10.7837 16.1663H10.7824Z"
                      fill="#717171"
                    />
                  </svg>

                  <span>Matterport Digital Twin</span>
                </div>
              </Tab>
              <Tab>
                <div className="whyGViewTabTitle">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6511 13.1001C17.4167 12.8657 17.0988 12.7341 16.7673 12.7341C16.4359 12.7341 16.118 12.8657 15.8836 13.1001L14.9998 13.9826C14.7692 14.2214 14.4933 14.4118 14.1883 14.5428C13.8833 14.6739 13.5553 14.7428 13.2233 14.7457C12.8914 14.7486 12.5622 14.6853 12.2549 14.5596C11.9477 14.4339 11.6686 14.2483 11.4338 14.0136C11.1991 13.7788 11.0135 13.4997 10.8878 13.1925C10.7621 12.8852 10.6988 12.556 10.7017 12.2241C10.7046 11.8921 10.7736 11.5641 10.9046 11.2591C11.0356 10.9541 11.2261 10.6782 11.4648 10.4476L18.5023 3.40758C20.1685 3.02861 21.9117 3.18458 23.4841 3.8533C25.0565 4.52202 26.3781 5.66945 27.2609 7.13244C28.1437 8.59543 28.5428 10.2995 28.4015 12.0024C28.2601 13.7052 27.5855 15.3202 26.4736 16.6176L23.8386 19.2863L17.6511 13.0988V13.1001ZM3.95108 5.58508C5.24453 4.2918 6.93635 3.47255 8.75303 3.25978C10.5697 3.04702 12.405 3.45317 13.9623 4.41258L9.69608 8.68008C8.77208 9.60224 8.24537 10.8492 8.2285 12.1545C8.21163 13.4599 8.70594 14.72 9.6058 15.6657C10.5057 16.6115 11.7397 17.1678 13.0443 17.2158C14.3488 17.2637 15.6204 16.7996 16.5873 15.9226L16.7673 15.7513L22.0711 21.0538L16.7673 26.3576C16.2985 26.8263 15.6627 27.0895 14.9998 27.0895C14.3369 27.0895 13.7011 26.8263 13.2323 26.3576L3.94983 17.0751C2.42624 15.5514 1.57031 13.4848 1.57031 11.3301C1.57031 9.17531 2.42624 7.10879 3.94983 5.58508H3.95108Z"
                      fill="#717171"
                    />
                  </svg>
                  <span> Matterport SDK</span>
                </div>
              </Tab>
              <Tab>
                <div className="whyGViewTabTitle">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 24.685V20.5C12.5 18.8962 13.7437 17.635 15.5837 16.915C14.3971 16.4737 13.141 16.2485 11.875 16.25C9.5125 16.25 7.33 17.0212 5.56625 18.325C6.11313 19.8717 7.03136 21.2604 8.24031 22.3693C9.44926 23.4782 10.912 24.2734 12.5 24.685ZM23.6 20.1075C23.1062 19.4412 21.4625 18.75 19.375 18.75C16.8675 18.75 15 19.7463 15 20.5V25C16.7348 25.001 18.44 24.5504 19.9479 23.6926C21.4557 22.8347 22.7144 21.5992 23.6 20.1075ZM11.9375 14.375C12.6834 14.375 13.3988 14.0787 13.9262 13.5512C14.4537 13.0238 14.75 12.3084 14.75 11.5625C14.75 10.8166 14.4537 10.1012 13.9262 9.57376C13.3988 9.04632 12.6834 8.75 11.9375 8.75C11.1916 8.75 10.4762 9.04632 9.94876 9.57376C9.42132 10.1012 9.125 10.8166 9.125 11.5625C9.125 12.3084 9.42132 13.0238 9.94876 13.5512C10.4762 14.0787 11.1916 14.375 11.9375 14.375ZM19.375 15.625C20.038 15.625 20.6739 15.3616 21.1428 14.8928C21.6116 14.4239 21.875 13.788 21.875 13.125C21.875 12.462 21.6116 11.8261 21.1428 11.3572C20.6739 10.8884 20.038 10.625 19.375 10.625C18.712 10.625 18.0761 10.8884 17.6072 11.3572C17.1384 11.8261 16.875 12.462 16.875 13.125C16.875 13.788 17.1384 14.4239 17.6072 14.8928C18.0761 15.3616 18.712 15.625 19.375 15.625ZM15 27.5C8.09625 27.5 2.5 21.9037 2.5 15C2.5 8.09625 8.09625 2.5 15 2.5C21.9037 2.5 27.5 8.09625 27.5 15C27.5 21.9037 21.9037 27.5 15 27.5Z"
                      fill="#717171"
                    />
                  </svg>
                  <span> Precision</span>
                </div>
              </Tab>
              <Tab>
                <div className="whyGViewTabTitle">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 25.5C6.09625 25.5 0.5 19.9037 0.5 13C0.5 6.09625 6.09625 0.5 13 0.5C19.9037 0.5 25.5 6.09625 25.5 13C25.5 19.9037 19.9037 25.5 13 25.5ZM6.75 14.25C6.75 15.9076 7.40848 17.4973 8.58058 18.6694C9.75268 19.8415 11.3424 20.5 13 20.5C14.6576 20.5 16.2473 19.8415 17.4194 18.6694C18.5915 17.4973 19.25 15.9076 19.25 14.25H16.75C16.75 15.2446 16.3549 16.1984 15.6517 16.9017C14.9484 17.6049 13.9946 18 13 18C12.0054 18 11.0516 17.6049 10.3483 16.9017C9.64509 16.1984 9.25 15.2446 9.25 14.25H6.75ZM8 11.75C8.49728 11.75 8.97419 11.5525 9.32583 11.2008C9.67746 10.8492 9.875 10.3723 9.875 9.875C9.875 9.37772 9.67746 8.90081 9.32583 8.54917C8.97419 8.19754 8.49728 8 8 8C7.50272 8 7.02581 8.19754 6.67417 8.54917C6.32254 8.90081 6.125 9.37772 6.125 9.875C6.125 10.3723 6.32254 10.8492 6.67417 11.2008C7.02581 11.5525 7.50272 11.75 8 11.75ZM18 11.75C18.4973 11.75 18.9742 11.5525 19.3258 11.2008C19.6775 10.8492 19.875 10.3723 19.875 9.875C19.875 9.37772 19.6775 8.90081 19.3258 8.54917C18.9742 8.19754 18.4973 8 18 8C17.5027 8 17.0258 8.19754 16.6742 8.54917C16.3225 8.90081 16.125 9.37772 16.125 9.875C16.125 10.3723 16.3225 10.8492 16.6742 11.2008C17.0258 11.5525 17.5027 11.75 18 11.75Z"
                      fill="#717171"
                    />
                  </svg>
                  <span>Versatility</span>
                </div>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="tabContentMain">
                <div className="tabContentMainInner">
                  <div className="tabContentLeftCol">
                    <h3>Matterport Digital Twin </h3>
                    <p>
                     

                      A Matterport digital twin is the most precise virtual 3D model of a location or place - regardless of whether it&#39;s anything but a room, a whole structure, or an open air space. Digital twins empower ventures like real estate, construction, and security to improve on how they function and associate with clients and merchants. With Matterport digital twin you can:
                    </p>

                    <ul>
                      <li> Capture and test cycles and thoughts with full visual context </li>
                      <li> Report communications and work together productively with teams </li>
                      <li> Welcome prospects to your space and fast-track sales </li>
                    </ul>
                  </div>

                  <div className="tabContentLeftColImg">
                    {/* <Image src={googleStreetviewImg4} alt="Spaceshift" /> */}
                    <img src="/images/img-9.png" alt="Spaceshift" />
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tabContentMain">
                <div className="tabContentMainInner">
                  <div className="tabContentLeftCol">
                    <h3>Matterport SDK </h3>
                    <p>
                    We make use of the Matterport SDK which helps us to integrate Matterport with your applications to ensure that unique and interesting experiences are created, for instance, online booking. To explain it further, you can find the virtual tour of Flexworx, a workspace solution, done by Matterport. We, using Matterport’s software development kit (SDK) added 2 extra features in it, i.e., a navigation menu and bookings option. So, the crux of the entire explanation is that Matterport SDK helps you add extra and unique features and helps you stand apart from the competition.<br></br><br></br>
To view the virtual tour of Flexworx by Matterport, <a href="#!"> click here</a>
To view the application of Matterport SDK by Spaceshift to custom-create features and experience, <a href="#!"> click here</a>
                    </p>
                  </div>

                  <div className="tabContentLeftColImg">
                    {/* <Image src={googleStreetviewImg4} alt="Spaceshift" /> */}
                    <img src="/images/img-9.png" alt="Spaceshift" />
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tabContentMain">
                <div className="tabContentMainInner">
                  <div className="tabContentLeftCol">
                    <h3> Precision</h3>
                    <p>
                    The incredible, precise camera framework permits you to look over 10,000 square feet for each project. The results of the sweep are dimensionally exact, within 1%, and can create spatially precise schematic floor plans. This exactness empowers your clients to know precisely the thing they&#39;re getting before they even show up. 
                    </p>
                  </div>

                  <div className="tabContentLeftColImg">
                    {/* <Image src={googleStreetviewImg4} alt="Spaceshift" /> */}
                    <img src="/images/img-9.png" alt="Spaceshift" />
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tabContentMain">
                <div className="tabContentMainInner">
                  <div className="tabContentLeftCol">
                    <h3>Versatility</h3>
                    <p>
                    <b> Matterport 3D walkthrough</b> is amazingly versatile and permits you to scan any space. You can add the data you need and effectively share it. The only constraint is your creative mind. 
                    </p>
                  </div>

                  <div className="tabContentLeftColImg">
                    {/* <Image src={googleStreetviewImg4} alt="Spaceshift" /> */}
                    <img src="/images/img-9.png" alt="Spaceshift" />
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>
      <Footer />
    </div>
  );
}
