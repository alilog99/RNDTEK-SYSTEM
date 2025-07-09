import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React from "react";
import { AboutOurString } from "../../../../../constants/strings";
import CreateTextElement from "../../../typography/create_text_element";
import Aboutour from "../AboutComponents/aboutcard/AboutCard";
import Cards from "../AboutComponents/aboutcard/AbtCards";
import "../AboutComponents/thirdComponent.css";
import Fade from 'react-reveal';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


class ThirdComponent extends React.Component {

  render() {
    return (
      <div style={{ ...this.props.style }}>
        <Aboutour style={{ padding: "40px 0" }}>
          <Grid container spacing={16}>
            {/* <Grid item md={1}></Grid> */}
            <Grid item md={12} xs={12}>
            <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>  <Fade top>
              <CreateTextElement
                element="h5"
                fontSize="16px"
                style={{ textAlign: "center" }}
              >
                About our
              </CreateTextElement>
               </Fade></ScrollAnimation>
               <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>   <Fade top> <CreateTextElement
                element="h4"
                fontSize="22px"
                style={{ textAlign: "center" }}
              >
                Core Values <br />
              </CreateTextElement>
              </Fade></ScrollAnimation>
              <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>  <Fade top> <CreateTextElement
                element="p"
                fontSize="12px"
                style={{ lineHeight: "2.0", textAlign: "center" }}
              >
                {AboutOurString}
              </CreateTextElement>
              </Fade></ScrollAnimation>
            </Grid>
            {/* <Grid item md={1}></Grid> */}
            <Grid item md={4} sm={12} xs={12}>
            <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>  <Fade left>
              <Cards>
                <Grid container spacing={16}>
                  <Grid item md={4} sm={4} xs={4}>
                    <p className="card-logo">
                      <i class="fas fa-robot" />
                    </p>
                  </Grid>
                  <Grid item md={8} sm={8} xs={8}>
                    <p className="card-heading">AI-Driven Innovation</p>
                    <p className="card-text">
                      We harness the power of artificial intelligence to drive responsible innovation, deliver smarter solutions, and lead in technology advancement.
                    </p>
                  </Grid>
                </Grid>
              </Cards></Fade></ScrollAnimation>
            </Grid>

            <Grid item md={4} sm={12} xs={12}>
            <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>  <Fade left>
              <Cards>
                <Grid container spacing={16}>
                  <Grid item md={4} sm={4} xs={4}>
                    <p className="card-logo">
                      <i class="fas fa-cloud-upload-alt" />
                    </p>
                  </Grid>
                  <Grid item md={8} sm={8} xs={8}>
                    <p className="card-heading">Cloud Services</p>
                    <p className="card-text">
                      On demand services for an easy & scalable software
                      application
                    </p>
                  </Grid>
                </Grid>
              </Cards></Fade></ScrollAnimation>
            </Grid>

            <Grid item md={4} sm={12} xs={12}>
            <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>  <Fade left>
              <Cards>
                <Grid container spacing={16}>
                  <Grid item md={4} sm={4} xs={4}>
                    <p className="card-logo">
                      <i class="fas fa-tags" />
                    </p>
                  </Grid>
                  <Grid item md={8} sm={8} xs={8}>
                    <p className="card-heading">E-Commerce Build</p>
                    <p className="card-text">
                      Online Product/Service Trading Systems with end to end
                      technology support
                    </p>
                  </Grid>
                </Grid>
              </Cards></Fade></ScrollAnimation>
            </Grid>
            {/* Second row: Smart Card, E-Learning, Event in a single row */}
            <Grid container spacing={16}>
              <Grid item md={4} sm={12} xs={12}>
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>  <Fade left>
                  <Cards>
                    <Grid container spacing={16}>
                      <Grid item md={4} sm={4} xs={4}>
                        <p className="card-logo">
                          <i class="far fa-credit-card" />
                        </p>
                      </Grid>
                      <Grid item md={8} sm={8} xs={8}>
                        <p className="card-heading">Smart Card</p>
                        <p className="card-text">
                          Secure ID in compliance to international standards contact & contactless
                        </p>
                      </Grid>
                    </Grid>
                  </Cards></Fade></ScrollAnimation>
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>  <Fade left>
                  <Cards>
                    <Grid container spacing={16}>
                      <Grid item md={4} sm={4} xs={4}>
                        <p className="card-logo">
                          <i class="fas fa-chalkboard-teacher" />
                        </p>
                      </Grid>
                      <Grid item md={8} sm={8} xs={8}>
                        <p className="card-heading">E-Learning</p>
                        <p className="card-text">
                          Learning Management Systems to enable user to take up the courses & learn at their ease
                        </p>
                      </Grid>
                    </Grid>
                  </Cards></Fade></ScrollAnimation>
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>  <Fade left>
                  <Cards>
                    <Grid container spacing={16}>
                      <Grid item md={4} sm={4} xs={4}>
                        <p className="card-logo">
                          <i class="far fa-calendar-alt" />
                        </p>
                      </Grid>
                      <Grid item md={8} sm={8} xs={8}>
                        <p className="card-heading">Event</p>
                        <p className="card-text">
                          Enjoy hastle free management of your Event with us right from ticketing
                        </p>
                      </Grid>
                    </Grid>
                  </Cards></Fade></ScrollAnimation>
              </Grid>
            </Grid>
          </Grid>
        </Aboutour>
      </div>
    );
  }
}

ThirdComponent.defaultProps = {};

ThirdComponent.propTypes = {
  style: PropTypes.object
};

export default ThirdComponent;
