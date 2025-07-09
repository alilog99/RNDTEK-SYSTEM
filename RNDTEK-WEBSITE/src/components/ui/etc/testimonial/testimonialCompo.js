import { Grid } from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Roundimage from "../../../../assets/imgs/round-img.jpg";
import Roundimage2 from "../../../../assets/imgs/round-img2.jpg";
import Roundimage3 from "../../../../assets/imgs/round-img3.jpg";
import Roundimage4 from "../../../../assets/imgs/round-img4.jpg";
import Roundimage5 from "../../../../assets/imgs/round-img5.jpg";
import Testimonialtext from "../../../../assets/imgs/test-text.png";
import CreateTextElement from "../../common/typography/create_text_element";
import {Fade} from 'react-reveal';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: (
      <div className="text1">
       <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
        <p
          style={{
            lineHeight: "2.0",
            textAlign: "center",
            color: "white",
            fontSize: "12px",
            padding: "5px"
          }}
        >
         From start to finish, RNDTEK demonstrated an extremely responsive, professional and easy to understand process. They worked with us on some unique solutions and our website has been very well received by both our customers and potential customers.
        </p></ScrollAnimation>
        <br />
        <div
          style={{ textAlign: "center", height: "40px", borderRadius: "360px" }}
        >
       <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
          <img
            src={Roundimage}
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "360px",
              border: " 1px solid #0071bc",
            }}
            alt="roundimge"
          /></ScrollAnimation>
        </div>
      </div>
    )
  },
  {
    label: (
      <div className="text2">
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
        <p
          style={{
            lineHeight: "2.0",
            textAlign: "center",
            color: "white",
            fontSize: "12px"
          }}
        >
         With RNDTEK assistance, our site has become an interactive marketing tool for our brokers, which has received rave reviews from our clients and customers. It was a pleasure doing business with RNDTEK and we would highly recommend them to anyone considering a new website or redesign.

        </p></ScrollAnimation>
        <br />
        <div
          style={{ textAlign: "center", height: "40px", borderRadius: "360px" }}
        >
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><img
            src={Roundimage2}
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "360px",
              border: " 1px solid #0071bc",
            }}
            alt="roundimg2"
          /></ScrollAnimation>
        </div>
      </div>
    )
  },
  {
    label: (
      <div className="text3">
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
        <p
          style={{
            lineHeight: "2.0",
            textAlign: "center",
            color: "white",
            fontSize: "12px"
          }}
        >
          RNDTEK has constantly gone above and beyond to make sure that our website meets the needs of our organization.{""} From the first meeting to completion of our company's website, the entire RNDTEK team was articulate, professional and thorough working with us as a true team.
        </p></ScrollAnimation>
        <br />
        <div
          style={{ textAlign: "center", height: "40px", borderRadius: "360px" }}
        >
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><img
            src={Roundimage3}
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "360px",
              border: " 1px solid #0071bc",
            }}
            alt="roundimg3"
          /></ScrollAnimation>
        </div>
      </div>
    )
  },
  {
    label: (
      <div className="text4">
      <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
       <p
          style={{
            lineHeight: "2.0",
            textAlign: "center",
            color: "white",
            fontSize: "12px"
          }}
        >
        I’m very pleased with everything RNDTEK has provided. They are reliable, timely, and always deliver above expectations. RNDTEK teamwork style approach allows for the most efficient process that allowed me to concentrate more on my company's daily activities than the actual website. It’s a joy to work with them!
        </p></ScrollAnimation>
        <br />
        <div
          style={{ textAlign: "center", height: "40px", borderRadius: "360px" }}
        >
         <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><img
            src={Roundimage4}
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "360px",
              border: " 1px solid #0071bc",
            }}
            alt="roundimg4"
          /></ScrollAnimation>
        </div>
      </div>
    )
  },
  {
    label: (
      <div className="text5">
      <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
      <div>
      <p
          style={{
            lineHeight: "2.0",
            textAlign: "center",
            color: "white",
            fontSize: "12px"
          }}
        >
          It was great to work with a company that valued customer service and satisfaction. Every time we needed something custom created or simply needed technical support, RNDTEK was there to make it happen on-time and on-budget. We appreciate the great working relationship we have developed with the entire staff at RNDTEK.
        </p></div></ScrollAnimation>
        <br />
        <div
          style={{ textAlign: "center", height: "40px", borderRadius: "360px" }}
        >
       <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>  <img
            src={Roundimage5}
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "360px",
              border: " 1px solid",
              borderColor: "#0071bc"
            }}
            alt="roundimg5"
          /></ScrollAnimation>
        </div>
      </div>
    )
  }
];

const styles = theme => ({
  root: {
    maxWidth: 300,
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.unit * 4
  },
  customDots: {
    flexDirection: "row"
  },
  custom_dot: {
    backgroundColor: "darkgray",
    margin: "2px 2px",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "none",
    // background: "url(" + Roundimage + ") center center / 100% 100% no-repeat",
  },
  dotActive: {
    // background: "url(" + Roundimage + ") center center / 100% 100% no-repeat",
    height: "40px",
    width: "40px",
    display: "none",
   
  }
});
const backgroundImageList = [Roundimage, Roundimage2, Roundimage3, Roundimage4, Roundimage5]

class Testimonialss extends React.Component {


  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  backgroundStyle = {
    background: "url(" + this.props.backgroundImage + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "450px",
    position: "relative"
  };

  transLayer = {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    position: "absolute",
    backgroundColor: "rgba(0,0,0," + this.props.opacity + ")",
    padding: "70px 0"
  };
  text = [{ heading: "", subheading: "", text: "", image: "" }];

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div style={{ ...this.backgroundStyle, ...this.props.style }}>
        <div style={this.transLayer}>
          <Grid container>
            <Grid item md={2} />
            <Grid item md={8}>
            <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
            <Fade top>
              <CreateTextElement
                element="h5"
                fontSize="16px"
                style={{ textAlign: "center" }}
              >
                Our Testimonial
              </CreateTextElement>
              </Fade></ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
              <Fade top>
              <CreateTextElement
                element="h4"
                fontSize="22px"
                style={{ textAlign: "center" }}
              >
                What Our Valueable Clients Say <br /> <br />
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade bottom><img src={Testimonialtext} alt="text" /></Fade></ScrollAnimation>
              </CreateTextElement>
              </Fade></ScrollAnimation>
              <Typography
                style={{ color: "white", marginTop: "10", textAlign: "center" }}
              >
                {tutorialSteps[activeStep].label}
              </Typography>
              <div className="container">
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={this.handleStepChange}
                  enableMouseEvents
                >
                  {tutorialSteps.map((step, index) => (
                    <div key={index} >
                <div style={{ background: "url(" + backgroundImageList[index] + ")", position: 'absolute' }}></div>

                     <MobileStepper
                  variant="dots"
                  steps={maxSteps}
                  position="static"
                  activeStep={this.state.activeStep}
                  classes={{
                    dot: classes.custom_dot,
                    dotActive: classes.dotActive,
                    dots: classes.customDots
                  }}
                  style={{ backgroundColor: "transparent" }}
                />
                    </div>
                  ))}
                </AutoPlaySwipeableViews>
               
              </div>
            </Grid>
            <Grid item md={2} />
          </Grid>
        </div>
      </div>
    );
  }
}

Testimonialss.defaultProps = {
  opacity: ".50"
};

Testimonialss.propTypes = {
  style: PropTypes.object,
  backgroundImage: PropTypes.string,
  opacity: PropTypes.string,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Testimonialss);
