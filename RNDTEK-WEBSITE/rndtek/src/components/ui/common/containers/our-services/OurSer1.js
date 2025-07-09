import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React from "react";
import ar from "../../../../../assets/imgs/arrow.png";
import about from "../../../../../assets/imgs/ourServices.png";
import Btn from "../../../common/button/button";
import AboutBackTop from "../our-services/firstcompon";
import Fade from "react-reveal/Fade";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import {NavLink} from "react-router-dom"

class OurServ1 extends React.Component {
  render() {
    return (
      <div style={{ ...this.props.style }}>
        <AboutBackTop
          backgroundImage={about}
          style={{ paddingBottom: "150px" }}
        >
          <Grid container spacing={16}>
            <Grid item md={12} lg={12} xs={12}>
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <Fade top>
                  <div>
                    <p
                      style={{
                        color: "white",
                        fontSize: "20px",
                        textAlign: "center",
                        opacity: "1px"
                      }}
                    >
                      RIGHT SOURCING, RIGHT PEOPLE AT THE RIGHT TIME
                    </p>
                    <p
                      style={{
                        color: "white",
                        fontSize: "16px",
                        textAlign: "center"
                      }}
                    >
                      Hire your own team or extend your in-house capabilities
                      with our highly skilled remote professionals working from
                      our offices internationally.
                      <br /> this service works best when you use this option
                      for your in house team augmentation. we also tailor this
                      solution for our customers, so please talk to us now.
                    </p>
                  </div>
                </Fade>
              </ScrollAnimation>
            </Grid>
            <div
              style={{ textAlign: "center", display: "block", width: "100%" }}
            >
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <Fade left>
                <NavLink
              exact
              href="/contact-us#background1-size"
              to="/contact-page"
              onClick={() => window.scrollTo(0, 0)}
              // activeclassName="active"
            >
                  <Btn
                    // href="/contact-us"
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
                  ></Btn>
                    {" "}
                  </NavLink>
                </Fade>
              </ScrollAnimation>
            </div>
          </Grid>
        </AboutBackTop>
      </div>
    );
  }
}

OurServ1.defaultProps = {};

OurServ1.propTypes = {
  style: PropTypes.object
};

export default OurServ1;
