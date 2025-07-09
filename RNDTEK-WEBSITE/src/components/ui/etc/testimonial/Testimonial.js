import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import Testimonialbanner from "../../../../assets/imgs/test-banner.png";
import Testimonialtext from "../../../../assets/imgs/test-text.png";
import { testimonialstring } from "../../../constants/strings";
import CreateTextElement from "../../common/typography/create_text_element";
import Testimonialss from "../testimonial/testimonialCompo";
import TestImage from "../testimonial/test_image";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import {Fade} from 'react-reveal';


class Testimonial extends React.Component {


  render() {
    return (
      <div style={{ ...this.props.style }}>
        <Testimonialss
          backgroundImage={Testimonialbanner}
          opacity=".92"
          style={{ padding: "150px 0" }}
        >
          <Grid container spacing={16}>
            <Grid item md={1} />
            <Grid item md={10}>
            <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade top>
              <CreateTextElement
                element="h5"
                fontSize="16px"
                style={{ textAlign: "center" }}
              >
                Our Testimonial
              </CreateTextElement></Fade>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade top>
              <CreateTextElement
                element="h4"
                fontSize="22px"
                style={{ textAlign: "center" }}
              >
                What Our Valueable Clients Say <br /> <br />
                <img src={Testimonialtext} alt="testimonialimage" />
              </CreateTextElement></Fade>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade bottom>
              <CreateTextElement
                element="p"
                fontSize="12px"
                style={{ lineHeight: "2.0", textAlign: "center" }}
              >
                {testimonialstring}
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade bottom> <TestImage /> <TestImage /></Fade></ScrollAnimation>
              </CreateTextElement></Fade>
              </ScrollAnimation>
            </Grid>
            <Grid item md={1} />
          </Grid>
        </Testimonialss>
      </div>
    );
  }
}

Testimonial.defaultProps = {};

Testimonial.propTypes = {
  style: PropTypes.object
};

export default Testimonial;
