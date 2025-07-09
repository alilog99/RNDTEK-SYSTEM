import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React from "react";
import aboutmobo from "../../../../../assets/imgs/aboutmobo.png";
import ar from "../../../../../assets/imgs/arrowblack.png";
import { abouthome } from "../../../../constants/strings";
import Button1 from "../../button/button";
import CreateTextElement from "../../typography/create_text_element";
import HomeThirdCompo from "../Home page componentts/HomeThirdCompo";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade';
import {NavLink } from "react-router-dom"
class Home3Com extends React.Component {


  render() {
    return (
      <div style={{ ...this.props.style }}>
        <HomeThirdCompo style={{ marginTop: "7px" }} opacity=".85">
          <Grid container spacing={12}>
            <Grid item xs={12} lg={6} md={6} style={{ marginTop: "20px" }}>
              <Grid item xs={12} lg={12} md={12}>
              <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade left><h1
                  style={{
                    color: "   #ffffff25",
                    fontSize: "61px",
                    marginLeft: "119px"
                  }}
                >
                  <strong>About us</strong>
                </h1></Fade>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade left>
                <CreateTextElement
                  element="h5"
                  fontSize="16px"
                  style={{ color: "white", marginTop: "4px" }}
                  marginLeft="120px"
                >
                  You have got an idea?
                </CreateTextElement></Fade>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade left>
                <CreateTextElement
                  element="h4"
                  fontSize="30px"
                  marginLeft="117px"
                >
                  We can turn it into reality
                </CreateTextElement></Fade>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade left>
                <CreateTextElement
                  element="p"
                  fontSize="15px"
                  marginLeft="116px"
                  style={{ lineHeight: "2.1", marginRight: "34px" }}
                >
                  {abouthome}
                </CreateTextElement></Fade>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade left>
                <NavLink
              exact
              href="/contact-us#background1-size"
              to="/contact-page"
              onClick={() => window.scrollTo(0, 0)}
              // activeclassName="active"
            >
                <Button1
                //  href="/contact-us"
                  Gname="Get Started"
                  imgarr={ar}
                  style={{
                    position: "absalute",
                    height: "47px",
                    color: "black",
                    backgroundColor: "white",
                    width: "161px",
                    borderRadius: "43px",
                    marginTop: "-2px",
                    marginLeft: "110px",
                    outline: "0px",
                    marginBottom: "22px"
                  }}
                /></NavLink></Fade></ScrollAnimation>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade right><img
                src={aboutmobo}
                alt="aboutmobo"
                style={{ width: "100%", height: "auto" }}
              /></Fade></ScrollAnimation>
            </Grid>
          </Grid>
        </HomeThirdCompo>
      </div>
    );
  }
}

Home3Com.defaultProps = {};

Home3Com.propTypes = {
  style: PropTypes.object
};

export default Home3Com;
