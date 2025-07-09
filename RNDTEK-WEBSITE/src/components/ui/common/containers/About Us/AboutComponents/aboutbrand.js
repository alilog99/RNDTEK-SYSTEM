import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React from "react";
import Film from "../../../../../../assets/imgs/1.jpg";
import Honey from "../../../../../../assets/imgs/4.jpg";
import Cain from "../../../../../../assets/imgs/3.jpg";
import Myriad from "../../../../../../assets/imgs/5.jpg";
import Companies from "../../../../../../assets/imgs/6.jpg";
import Sain from "../../../../../../assets/imgs/2.jpg";
import BrandContainer from "../AboutComponents/AboutBrand_Container";
import {Fade} from 'react-reveal';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";



class AboutBrand extends React.Component {


  render() {
    return (
      <div style={{ ...this.props.style }}>
        <BrandContainer style={{ padding: "10px 0", minHeight: "10px" }}>
          <Grid>
          <div className="container">
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'> <Fade top>
            <h6
              style={{
                textAlign: "center",
                color: "gray",
                marginBottom: "-20px",
                marginTop: "32px"
              }}
            >
              Working with some great Brand
            </h6></Fade></ScrollAnimation>
            <div className="row no-gutters" style={{    marginTop: "29px"}}>
            <div className="col-sm-12 col-lg-2">
            <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade left>
            <img
              style={{ width: "100%"}}
              src={Companies}
              alt="companies"
            /></Fade> </ScrollAnimation>
            </div>
            
            <div className="col-sm-12 col-lg-2">
            <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade left><img
              style={{ width: "100%"}}
              src={Myriad}
              alt="myriad"
            /></Fade></ScrollAnimation>
            </div>
            <div className="col-sm-12 col-lg-2 ">
            <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade left><img
              style={{ width: "100%"}}
              src={Film}
              alt="film"
            /></Fade></ScrollAnimation>
            </div>
            <div className="col-sm-12 col-lg-2">
            <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade right><img
              style={{ width: "100%"}}
              src={Sain}
              alt="sainsbury"
            /></Fade></ScrollAnimation>
            </div>
            <div className="col-sm-12 col-lg-2">
            <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade right><img
              style={{ width: "100%" }}
              src={Cain}
              alt="mccain"
            /></Fade></ScrollAnimation>
            </div>
            <div className="col-sm-12 col-lg-2">
            <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade right> <img
              style={{ width: "100%" }}
              src={Honey}
              alt="mccain"
            /></Fade></ScrollAnimation> 
             </div>
            </div>
            </div>
          </Grid>
        </BrandContainer>
      </div>
    );
  }
}

AboutBrand.defaultProps = {};

AboutBrand.propTypes = {
  style: PropTypes.object
};

export default AboutBrand;
