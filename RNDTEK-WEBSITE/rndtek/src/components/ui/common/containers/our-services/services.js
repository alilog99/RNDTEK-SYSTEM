import Grid from "@material-ui/core/Grid";
import "animate.css/animate.min.css";
import PropTypes from "prop-types";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import arr from "../../../../../assets/imgs/arrowblack.png";
import Btn from "../../button/button";
import FooterCompo from "../Home page componentts/FooterCompo";
import OurServ1 from "../our-services/OurSer1";
import QuestionAchieve from "../our-services/question-achieve";
import OutlinedTextFields from "../our-services/textfield";
import ServicesTabs from './services_tabs';
import AIServices from './ai-services';
import AIAnalytics from './ai-analytics';
import AIChatbot from './ai-chatbot';
import AIInnovation from './ai-innovation';
import { NavLink } from "react-router-dom";



class Services extends React.Component {
  

  render() {
    return (
      <div >
        <Grid item md={12}> 
     
        <OurServ1 />
        <ServicesTabs />
        <AIServices />
        <AIAnalytics />
        <AIChatbot />
        <AIInnovation />
{/*          
        <Grid container spacing={16}>
          <Grid
            item
            md={6}
            xs={12}
            style={{ backgroundColor: "#0071bc", width: "100%" }}
          >
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <Fade left>
                <div className="container">
                  <CreateTextElement  fontSize="20px" marginLeft="20px">
                    <h4 style={{ marginTop: "100px" }}>
                      We Offer
                    </h4>
                    <h3 >Mobile App Development</h3>
                    <h6 style={{ lineHeight: "30px" }}>
                      Ut a elit diam.Morbi ut mauris eleifend, iaculis mi id,
                      pellentesque mi,Suspendisse gravida tortor ac ante condimentum
                      scelerisque eu eu sem.Suspendisse potenti.Morbi vitae venenatis
                      purus.Nam quis faucibus dui.Curabitur congue eros consequat, in
                      pharetra mi ornare.Aenean non lorem varius leo scelerisque
                      tempor suscipit
                </h6>
                  </CreateTextElement>
                </div>
              </Fade>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <Fade left>
                <Btn
                  Gname="Get Started"
                  imgarr={arr}
                  style={{
                    position: "relative",
                    maxHeight: "123px",
                    color: "black",
                    backgroundColor: "white",
                    minHeight: "59px",
                    width: "186px",
                    borderRadius: "43px",
                    marginTop: "4px",
                    marginLeft: "10px",
                    outline: "0px",
                    marginBottom: "17px"
                  }}
                />
              </Fade>
            </ScrollAnimation>
          </Grid>
          <Grid item md={6}>
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <Fade right>
                <img
                  style={{ width: "100%", height: "570px" }}
                  src={Antman}
                  alt="ant"
                />
              </Fade>
            </ScrollAnimation>
          </Grid>
          <Grid item md={6}>
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <Fade left>
                <img
                  style={{ width: "100%", height: "500px" }}
                  src={Comp}
                  alt="comp"
                />
              </Fade>
            </ScrollAnimation>
          </Grid>
          <Grid
            item
            md={6}
            style={{
              backgroundColor: "#8bc53f",
              width: "100%",
              color: "white",

            }}
          >
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <Fade right>
                <h4 style={{ margin: "20px", marginTop: "100px" }}>We Offer</h4>
                <h3 style={{ margin: "20px" }}>WebSite Development</h3>
                <h6 style={{ margin: "20px", lineHeight: "30px" }}>
                  Ut a elit diam.Morbi ut mauris eleifend, iaculis mi id,
                  pellentesque mi,Suspendisse gravida tortor ac ante condimentum
                  scelerisque eu eu sem.Suspendisse potenti.Morbi vitae venenatis
                  purus.Nam quis faucibus dui.Curabitur congue eros consequat, in
                  pharetra mi ornare.Aenean non lorem varius leo scelerisque tempor
                  suscipit
            </h6>
              </Fade>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <Fade right>
                <Btn
                  Gname="Get Started"
                  imgarr={arr}
                  style={{
                    position: "relative",
                    maxHeight: "123px",
                    color: "black",
                    backgroundColor: "#0071bc",
                    minHeight: "59px",
                    width: "186px",
                    borderRadius: "43px",
                    marginTop: "4px",
                    outline: "0px",
                    marginLeft: "10px",
                    marginBottom: "17px"

                  }}
                />
              </Fade>
            </ScrollAnimation>
          </Grid>
          <Grid
            item
            md={6}
            style={{
              backgroundColor: "#deb20f",
              width: "100%",
              color: "white"
            }}
          >
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <Fade left>
                <div className="container">
                  <h4 style={{ marginTop: "100px", marginLeft: "20px" }}>
                    We Offer
                  </h4>
                  <h3 style={{ marginLeft: "20px" }}>Game Development</h3>
                  <h6 style={{ lineHeight: "30px", marginLeft: "20px" }}>
                    Ut a elit diam.Morbi ut mauris eleifend, iaculis mi id,
                    pellentesque mi,Suspendisse gravida tortor ac ante condimentum
                    scelerisque eu eu sem.Suspendisse potenti.Morbi vitae venenatis
                    purus.Nam quis faucibus dui.Curabitur congue eros consequat, in
                    pharetra mi ornare.Aenean non lorem varius leo scelerisque tempor
                    suscipit
            </h6>
                </div>
              </Fade>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <Fade left>
                <Btn
                  Gname="Get Started"
                  imgarr={arr}
                  style={{
                    position: "relative",
                    maxHeight: "123px",
                    color: "black",
                    backgroundColor: "white",
                    minHeight: "59px",
                    width: "186px",
                    borderRadius: "43px",
                    marginTop: "4px",
                    marginLeft: "10px",
                    outline: "0px",
                    marginBottom: "17px"

                  }}
                />
              </Fade>
            </ScrollAnimation>
          </Grid>
          <Grid item md={6}>
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <Fade right>
                <img
                  style={{ width: "100%", height: "570px" }}
                  src={Layer}
                  alt="ant"
                />
              </Fade>
            </ScrollAnimation>
          </Grid>
          <Grid item md={6}>
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <Fade left>
                <img
                  style={{ width: "100%", height: "570px" }}
                  src={Layer1}
                  alt="ant"
                />
              </Fade>
            </ScrollAnimation>
          </Grid>
          <Grid
            item
            md={6}
            style={{
              backgroundColor: "#8e2bb9",
              width: "100%",
              color: "white"
            }}
          >
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <Fade right>
                <h4 style={{ margin: "20px", marginTop: "100px" }}>We Offer</h4>
                <h3 style={{ margin: "20px" }}>Digital Marketing</h3>
                <h6 style={{ margin: "20px", lineHeight: "40px" }}>
                  Ut a elit diam.Morbi ut mauris eleifend, iaculis mi id,
                  pellentesque mi,Suspendisse gravida tortor ac ante condimentum
                  scelerisque eu eu sem.Suspendisse potenti.Morbi vitae venenatis
                  purus.Nam quis faucibus dui.Curabitur congue eros consequat, in
                  pharetra mi ornare.Aenean non lorem varius leo scelerisque tempor
                  suscipit
            </h6>
              </Fade>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <Fade right>
                <Btn
                  Gname="Get Started"
                  imgarr={arr}
                  style={{
                    position: "relative",
                    maxHeight: "123px",
                    color: "black",
                    backgroundColor: "#0071bc",
                    minHeight: "59px",
                    width: "186px",
                    borderRadius: "43px",
                    marginTop: "4px",
                    outline: "0px",
                    marginLeft: "10px",
                    marginBottom: "17px"

                  }}
                />
              </Fade>
            </ScrollAnimation>
          </Grid>
        </Grid>*/}

        <Grid

          style={{ backgroundColor: "#0071bc", color: "white", }}
        >
          <div className="container" >
            <Grid container
              spacing={14}>

              <Grid item md={6}>
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                  <Fade left>
                    <div className="container-fluid" style={{ marginTop: "22px" }}>
                      <h4
                        style={{
                          marginTop: "20px",
                          lineHeight: "40px"
                        }}
                      >
                        Request A Call Back
              </h4>
                      <h5 style={{ lineHeight: "40px" }}>
                        Call To Action
              </h5>
                      <h6
                        style={{
                          fontSize: "14px",
                          color: "white",
                          lineHeight: "20px"
                        }}
                      >
                        Sorry this service is not available, <br /> 
                        COMING SOON! email us at info@rndtek.co.uk
              </h6>
                    </div>
                  </Fade>
                </ScrollAnimation>
              </Grid>


              <Grid item md={6}>
                <div className="container-fluid" style={{ marginTop: "22px" }}>
                  <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                    <Fade right>
                      <OutlinedTextFields />
                    </Fade>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                    <Fade right>
                    <NavLink
              exact
              href="/contact-us#background1-size"
              to="/contact-page"
              onClick={() => window.scrollTo(0, 0)}
              // activeclassName="active"
            >
                      <Btn
                      //  href="/contact-us"
                        Gname="Send Request"
                        imgarr={arr}
                        style={{
                          position: "relative",
                          height: "47px",
                          color: "black",
                          backgroundColor: "white",
                          width: "161px",
                          outline: "0px",
                          borderRadius: "43px",
                          marginTop: "14px",
                          marginBottom: "40px"
                        }}
                      />
                      </NavLink>
                    </Fade>
                  </ScrollAnimation>
                </div>

              </Grid>
            </Grid>
          </div>
        </Grid> 

        <Grid container spacing={14}>
       
          <Grid item sm={12} xs={12} md={12}>
            <QuestionAchieve />
          </Grid>
          <Grid item sm={12} xs={12} md={12}>
          <FooterCompo/>
          </Grid>
        </Grid> 
         </Grid> 
      </div>
      
    );
  }
}

Services.defaultProps = {};

Services.propTypes = {
  style: PropTypes.object
};

export default Services;
