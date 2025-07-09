import Grid from "@material-ui/core/Grid";
import "animate.css/animate.min.css";
import PropTypes from "prop-types";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import about from "../../../../../assets/imgs/aboutusback.png";
import ar from "../../../../../assets/imgs/arrow.png";
import Testimonials from "../../../etc/testimonial/Testimonial";
import Btn from "../../button/button";
import AboutBrand from "./AboutComponents/aboutbrand";
import SecondCompo from "./AboutComponents/SecondCompo";
import ThirdComponent from "./AboutComponents/thirdComponent";
import AboutBackTop from "./aboutus";
import FooterCompo from "../Home page componentts/FooterCompo";
import {NavLink} from "react-router-dom";
import MainTemplate from "../../../../templates/template_main";


class AboutusPage extends React.Component {
 

  render() {
    return (
      <div>
        {/* <MainTemplate> */}

        <AboutBackTop
          backgroundImage={about}
          style={{ paddingBottom: "150px" }}
        >
          <Grid container spacing={16}>
            <Grid item md={12} lg={12} xs={12}>
            
              <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>  <Fade top>
              <p
                style={{
                  color: "white",
                  fontStyle: "Italic",
                  fontSize: "42px",
                  textAlign: "-webkit-center",
                  marginTop: "55px"
                }}
              >
                {" "}
                We Are{" "}
                <big>
                  <strong>RNDTEK</strong>
                </big>{" "}
              </p></Fade></ScrollAnimation>
              <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>  <Fade top>
              <p
                style={{
                  color: "white",
                  fontSize: "20px",
                  textAlign: "center"
                }}
              >
               Our success is measured by your success. For us it’s not just creating something that looks great, it needs to deliver your dreams into reality.
              </p></Fade></ScrollAnimation>
            </Grid>
            <div
              style={{ textAlign: "center", display: "block", width: "100%" }}
            >
              <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>  <Fade left>
   <NavLink
              exact
              href="/contact-us#background1-size"
              to="/contact-page"
              onClick={() => window.scrollTo(0, 0)}
              // activeclassName="active"
            >
              <Btn
              //  href="/contact-us"
                Gname="Get Started"
                imgarr={ar}
                style={{
                  outline: "0px",
                 
                  height: "47px",
                  color: "white",
                  backgroundColor: "#0071bc",
                  width: "161px",
                  borderRadius: "43px"
                }}
              >
                {" "}
              </Btn></NavLink></Fade></ScrollAnimation>
            </div>
          </Grid>
        </AboutBackTop>
       
      
        <SecondCompo />
       
        
        <ThirdComponent />
      
        <AboutBrand />
      
        <Testimonials />
       
        <FooterCompo/>
        {/* </MainTemplate> */}

      </div>
    );
  }
}

AboutusPage.defaultProps = {};

AboutusPage.propTypes = {
  style: PropTypes.object
};

export default AboutusPage;
