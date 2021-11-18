import Head from "next/head";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Modal
} from "react-bootstrap";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Image from "next/image";
import stylesGstreet from "../../styles/GoogleStreet.module.scss";
import Footer from "../components/footer";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

// import googleStreetviewImg from "../../public/images/google-street-header-banner.png";
// import googleStreetviewImg2 from "../../public/images/img-7.jpg";
// import googleStreetviewImg3 from "../../public/images/img-8.png";
// import googleStreetviewImg4 from "../../public/images/4x43dt.webp";

export default function View() {

  const [play, setplay] = useState(false);

  return (
    <div className="globalWrap">
      <Header />
      <div className="innerPageHeaderWrap">
        {/* <Image src={googleStreetviewImg} alt="Spaceshift" /> */}
        <img src="/images/google-stretview-360-cover.webp" alt="Spaceshift" />

        {/* <div className="innerPageHeaderTitle">
          <h2>Google Street View</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At at amet
            tortor viverra.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div> */}
      </div>

      <section className={stylesGstreet["gstreetCol1Container"] + " " + ""}>
        {/* <Image src={googleStreetviewImg2} alt="Spaceshift" /> */}

        <div className={stylesGstreet.Tour3dContentBoxImg}>
                  {/* <Image src={threedToursImg} alt="Spaceshift" /> */}
                  <img src="/images/gogle-streetview-360-on-a-phone.webp" alt="Spaceshift" /> 
                  {/* <button onClick={()=>setplay(true)} className={stylesGstreet.playBt}><img src="/images/play-icon.png" alt="Spaceshift" /></button> */}




                 {/* {!play && (<> <img src="/images/gogle-streetview-360-on-a-phone.webp" alt="Spaceshift" /> 
                 <button className={stylesGstreet.playBt} onClick={()=>setplay(true)}><img src="/images/play-icon.png" alt="Spaceshift" /></button></>)}
                 
                 { play && (<iframe width='100%' height='480' src='https://www.google.com/maps/uv?pb=!1s0x3a02772b28436de7%3A0xafdb64f50e38606!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOcNgU10Ks0qdZNYn9PGopEnvzUglCdmfzT9o5e%3Dw120-h160-k-no!5scafe%20drifter%20kolkata%20-%20Google%20Search!15sCgIgARICCAI&imagekey=!1e10!2sAF1QipOhgxGicXX65H2dMdYdG2YJD8GCatg9m9sI1DE5&hl=en&sa=X&ved=2ahUKEwiYusTRhpj0AhVVQH0KHat-Bf8Qoip6BAg8EAM' frameborder='0' allowfullscreen allow='xr-spatial-tracking' ></iframe>)} */}
                </div>

        

        <div className={stylesGstreet.gstreetCol1Content}>
        <h2>Google Street View</h2>
          <p>
          Street View, by Google Maps (commonly known as Google Street View), is a virtual depiction of our surroundings on Google Maps, consisting of millions of panoramic images. We, at Spaceshift, specifically focus on Google street view for business. Such 360 tours ensure an exclusive peek at your business or the surrounding environment without needing to be on-site, furthermore, enhancing your visibility. <br></br>
            <br></br>
            According to Google, businesses that include images and 360 Virtual tours are twice as likely to produce viewer engagement and interest. With the increasing number of businesses that are competing for your potential audience&#39;s attention online, you would want to ensure that the customer&#39;s decision to check out your business is a no-brainer.
            <br></br>
            <br></br>
            These tours add to trust-building and credibility in your brand, irrespective of your product offering. They accommodate your clients with an immersive experience that entices them to engage with your brand and experience the inner look of your location.
          </p>
        </div>
      </section>


      

      <section className={stylesGstreet["gstreetCol2Container"] + " " + ""}>
        <Container>
          <Row>
            <Col lg="12">
              {/* <Image src={googleStreetviewImg3} alt="Spaceshift" /> */}
              {/* <img src="/images/img-8.png" alt="Spaceshift" /> */}

              <iframe src="https://www.google.com/maps/embed?pb=!4v1637069942596!6m8!1m7!1sCAoSLEFGMVFpcE0zS0tCdUFxc3JjZUowSVJ5X3daUFJScjRpWDFXeFhhOTVxVXJy!2m2!1d22.5527535!2d88.35248648!3f75.81!4f0!5f0.7820865974627469" width="100%" height="500" frameBorder='0' allowFullScreen="" loading="lazy"></iframe>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={stylesGstreet["whyGViewContainer"] + " " + "blockPadding"}
      >

<div className={stylesGstreet.whatWeOffermainWrapper}>
        <div className={stylesGstreet.whyGView}>
          <div className="tinyTitle">
            <h5>Google Street View for Business</h5>
          </div>
          <h2>Why Google Street View</h2>
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

                  <span> Address Issue</span>
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
                  <span> Improve Connection</span>
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
                  <span> Target Audience</span>
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
                  <span>Experience</span>
                </div>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="tabContentMain">
                <div className="tabContentMainInner">
                  <div className="tabContentLeftCol">
                    <h3>Address client&#39;s issue for exploring </h3>
                    <p>
                    With Google Maps 360 View you can address clients&#39; issues for research by giving them the data they would need to dive for different destinations in a more dependable manner. Additionally, it can build sales as clients are energized and prepared before putting a foot in your business. 
                    </p>
                  </div>

                  <div className="tabContentLeftColImg">
                    <img src="/images/4x43dt.webp" alt="Spaceshift" />
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tabContentMain">
                <div className="tabContentMainInner">
                  <div className="tabContentLeftCol">
                    <h3>Improve upon the connection with your clients </h3>
                    <p>
                    A ton of organizations attempt to bait clients to their business under pretenses. This makes a terrible encounter when clients understand the business isn&#39;t the thing they were expecting. Google 360 Degree Virtual Tour allows you to show the atmosphere of your restaurant or exhibit the nature of your business, so clients can see that your business coordinates with their accurate requirements. 
                    </p>
                  </div>

                  <div className="tabContentLeftColImg">
                    <img src="/images/4x43dt.webp" alt="Spaceshift" />
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tabContentMain">
                <div className="tabContentMainInner">
                  <div className="tabContentLeftCol">
                    <h3>Arrive at your target audience </h3>
                    <p>
                    Suppose you&#39;re a sports bar whose potential audience is school football fans. To draw them in, you&#39;ve hung up football banners and memorabilia all through your café. Flaunting the stylistic layout is an extraordinary method to arrive at them and Google Virtual Tour gives you the stage to do so. Out of nowhere, school football fans can take a 360 degree virtual tour through your café and get snared, when they see your stylistic theme. 
                    </p>
                  </div>

                  <div className="tabContentLeftColImg">
                    <img src="/images/4x43dt.webp" alt="Spaceshift" />
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tabContentMain">
                <div className="tabContentMainInner">
                  <div className="tabContentLeftCol">
                    <h3>A convenient and comfortable experience</h3>
                    <p>
                    Google 360 Degree Virtual Tour can be made use of at various occasions and since the present shoppers are fretful and used to discover answers to the entirety of their inquiries rapidly and effectively on Google, Google Street View is an extraordinary platform to give them the content they are looking for in the most immersive way possible.
                    </p>
                  </div>

                  <div className="tabContentLeftColImg">
                    <img src="/images/4x43dt.webp" alt="Spaceshift" />
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      
        </div>
      </section>

      <Modal size="lg" show={play} onHide={()=>setplay(false)}>
      <Button className="modalClose" onClick={()=>setplay(false)}>
      <img src="/images/close.png" alt="Spaceshift" />
          </Button>
        {/* <Modal.Header closeButton>
          <Modal.Title>Google Street View</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div>
          {/* <iframe width='100%' height='480' src='https://my.matterport.com/show/?m=f8cpb3pSgKC&play=1' frameborder='0' allowfullscreen allow='xr-spatial-tracking' ></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!4v1637069942596!6m8!1m7!1sCAoSLEFGMVFpcE0zS0tCdUFxc3JjZUowSVJ5X3daUFJScjRpWDFXeFhhOTVxVXJy!2m2!1d22.5527535!2d88.35248648!3f75.81!4f0!5f0.7820865974627469" width="100%" height="450" frameBorder='0' allowFullScreen="" loading="lazy"></iframe>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary"  onClick={()=>setplay(false)}>
            Close
          </Button>
        
        </Modal.Footer> */}
      </Modal>

      <Footer />
    </div>
  );
}
