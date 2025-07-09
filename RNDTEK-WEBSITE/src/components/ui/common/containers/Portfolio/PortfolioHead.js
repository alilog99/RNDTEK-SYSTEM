import Grid from "@material-ui/core/Grid";
import "animate.css/animate.min.css";
import PropTypes from "prop-types";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import ar from "../../../../../assets/imgs/arrow.png";
import Porthead from "../../../../../assets/imgs/ourServices.png";
import Btn from "../../../common/button/button";
import PortTopCompo from "../Portfolio/PortCompo/PortTopCompo";
import {NavLink} from "react-router-dom"
class PortHead extends React.Component {


  render() {
    return (
      <div style={{ ...this.props.style }}>
        <PortTopCompo
          backgroundImage={Porthead}
          style={{ paddingBottom: "150px" }}
        >
          <Grid container spacing={16}>
            <Grid item md={12} lg={12} xs={12}>
          
              <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                <Fade top>
                  <p
                    style={{
                      color: "white",
                      fontStyle: "Italic",
                      fontSize: "42px",
                      textAlign: "-webkit-center"
                    }}
                  >
                    {" "}
                    Our{" "}
                    <big>
                      <strong>Projects</strong>
                    </big>{" "}
                  </p>
                  <p
                    style={{
                      color: "white",
                      fontSize: "20px",
                      textAlign: "center"
                    }}
                  >
                    Check out our latest work in brand strategy, marketing strategy, UI/UX design, mobile app development, website design and development, Web app development and social media.
                </p>
                </Fade>
              </ScrollAnimation>
            </Grid>
            <div
              style={{ textAlign: "center", display: "block", width: "100%" }}
            >
              <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                <Fade left>
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
                      //minHeight: "100px",
                      outline: "0px",
                      height: "47px",
                      color: "white",
                      backgroundColor: "#0071bc",
                      width: "161px",
                      borderRadius: "43px"
                    }}
                  >
                    {" "}
                  </Btn>
                  </NavLink>
                </Fade>
              </ScrollAnimation>
            </div>
          </Grid>
        </PortTopCompo>
      </div>
    );
  }
}

PortHead.defaultProps = {};

PortHead.propTypes = {
  style: PropTypes.object
};

export default PortHead;
