import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React from "react";
import Mobimg1 from "../../../../../assets/imgs/mobimg1.png";
import Mobimg2 from "../../../../../assets/imgs/mobimgs2.png";
import Mobimg3 from "../../../../../assets/imgs/mobimg3.png";
import Mobimg4 from "../../../../../assets/imgs/mobimg4.png";
import Aboutbrand from "../About Us/AboutComponents/aboutbrand";
import MobileContainer from "../Home page componentts/mobileimgcompo";
import Fade from 'react-reveal';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


class MobileImg extends React.Component {

  render() {
    return (
      <div>
      
        <Aboutbrand />
       
{/*        
        <MobileContainer style={{ margintop: "80px" }}>
          <Grid container spacing={12}>
            <Grid item xs={12} lg={6} md={6} style={{ marginTop: "0px" }}>
              <Grid item xs={12} lg={12} md={12}>
              <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade left> <img
                  src={Mobimg4}
                  alt="aboutmobo"
                  style={{ width: "100%", height: "auto" }}
                /></Fade></ScrollAnimation>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'> <Fade right><img
                src={Mobimg2}
                alt="aboutmobo"
                style={{ width: "100%", height: "auto" }}
              /></Fade></ScrollAnimation>
            </Grid>
          </Grid>
        </MobileContainer> */}
     
     <MobileContainer>
          <Grid container spacing={14} style={{ width: "100%" }}>
            <Grid item xs={12} lg={6} md={6} style={{ marginTop: "0px" }}>
              <Grid item xs={12} lg={12} md={12}>
              <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade left> <img
                  src={Mobimg1}
                  alt="aboutmobo"
                  style={{ width: "100%", height: "auto", }}
                /></Fade></ScrollAnimation>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'> <Fade right> <img
                src={Mobimg2}
                alt="aboutmobo"
                style={{ width: "100%", height: "auto" }}
              /></Fade></ScrollAnimation>
            </Grid>
          </Grid>
        </MobileContainer>
        <MobileContainer>
          <Grid container spacing={14} style={{ width: "100%" }}>
            <Grid item xs={12} lg={6} md={6} style={{ marginTop: "0px" }}>
              <Grid item xs={12} lg={12} md={12}>
              <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade left> <img
                  src={Mobimg3}
                  alt="aboutmobo"
                  style={{ width: "100%", height: "auto", display: "block" }}
                /></Fade></ScrollAnimation>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'> <Fade right> <img
                src={Mobimg4}
                alt="aboutmobo"
                style={{ width: "100%", height: "auto" }}
              /></Fade></ScrollAnimation>
            </Grid>
          </Grid>
        </MobileContainer>
        
      </div>
    );
  }
}

MobileImg.defaultProps = {};

MobileImg.propTypes = {
  style: PropTypes.object
};

export default MobileImg;
