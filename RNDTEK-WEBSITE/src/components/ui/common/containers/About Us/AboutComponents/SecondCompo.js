import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React from "react";
import aboutmdl1 from "../../../../../../assets/imgs/about.png";
import { AboutString } from "../../../../../../components/constants/strings";
import CreateTextElement from "../../../typography/create_text_element";
import Aboutmiddle1 from "../../About Us/aboutusmidle1componrnt";
import {Fade} from 'react-reveal';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class SecondCompo extends React.Component {


  render() {
    return (
      <div style={{ ...this.props.style }}>
        <Aboutmiddle1>
          <Grid container spacing={12} style={{ width: "100%" }}>
            <Grid item md={6} lg={6} xs={12} style={{ zIndex: "1" }}>
            <div class="container">
            <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>  <Fade left><img
                src={aboutmdl1}
                alt="aaa"
                style={{
                  marginTop: "-45px",
                  height: "453px",
                  display: "block",
                  marginLeft: "-103px",
                  width: "118%",
                  marginBottom: "-55px"
                }}
              /></Fade></ScrollAnimation>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              style={{ marginTop: "55px", display: "block" }}
            >
             <div class="container">
             <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>  <Fade right>
               <CreateTextElement element="h5" fontSize="20px" color="black">
                About
              </CreateTextElement>
              </Fade></ScrollAnimation>
              <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>  <Fade right>
              <CreateTextElement element="h4" fontSize="30px" color="#0071bc">
                <strong>RNDTEK</strong>
              </CreateTextElement>
              </Fade></ScrollAnimation>
              <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>  <Fade right>
              <CreateTextElement
                element="p"
                fontSize="15px"
                color="black"
                style={{ lineHeight: "2.1", color: "black" }}
              >
                {AboutString}
              </CreateTextElement></Fade></ScrollAnimation>
              </div>

            </Grid>
          </Grid>
        </Aboutmiddle1>
      </div>
    );
  }
}

SecondCompo.defaultProps = {};

SecondCompo.propTypes = {
  style: PropTypes.object
};

export default SecondCompo;
