import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "animate.css/animate.min.css";
import PropTypes from "prop-types";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import app_development from "../../../../assets/imgs/app-development.png";
import digitalmarket from "../../../../assets/imgs/digital-marketing.png";
import gamedev from "../../../../assets/imgs/game-development.png";
import background1 from "../../../../assets/imgs/Layer20.png";
import websitedev2 from "../../../../assets/imgs/website-development-2.png";
import websitedev from "../../../../assets/imgs/website-development.png";
import { homeSilde } from "../../../constants/strings";
import "./slider.css";



const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const tutorialSteps = [
  {
    label: (
      <div className="text1">
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
          <div>
            <h2 style={{ fontSize: "24px" }}>
              Revolution The <br />World With Virtual<br /> &amp; Augmented Reality{" "}
            </h2>
            <p>{homeSilde}</p>
          </div>
        </ScrollAnimation>
      </div>
    )
  },
  {
    label: (
      <div className="text2">

        <h2 style={{ fontSize: "28px" }}>
          Revolution The <br />World With <br /> &amp; Augmented Reality{" "}
        </h2>

        <p>{homeSilde}</p>
      </div>
    )
  },
  {
    label: (
      <div className="text3">
        <h2 style={{ fontSize: "28px" }}>
          Revolution The <br />World With Virtual<br /> &amp; Reality{" "}
        </h2>
        <p>{homeSilde}</p>
      </div>
    )
  },
  {
    label: (
      <div className="text4">
        <h2 style={{ fontSize: "28px" }}>
          {" "}
          The World With <br /> Virtual<br /> &amp; Augmented Reality{" "}
        </h2>
        <p>{homeSilde}</p>
      </div>
    )
  },
  {
    label: (
      <div className="text5">
        <h2 style={{ fontSize: "24px" }}>
          Revolution The <br />World With Virtual<br /> &amp; Augmented Reality{" "}
        </h2>
        <p>{homeSilde}</p>
      </div>
    )
  }
];

const styles = theme => ({
  root: {
    // maxWidth: 400,
    // flexGrow: 1
  },

  header: {
    display: "flex",
    alignItems: "center",

  },
  customDots: {
    flexDirection: "column",

  },
  custom_dot: {
    backgroundColor: "darkgray",
    margin: "2px 2px",
    borderRadius: "50%",
    width: "8px",
    height: "8px"
  },
  dotActive: {
    backgroundColor: "#0071bc"
  }
});

const backgroundImageList = [background1, app_development, digitalmarket, websitedev, websitedev2, gamedev]

class SwipeableTextMobileStepper extends React.Component {
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
    if (this.props.handleSlideChange)
      this.props.handleSlideChange(activeStep)
  };

  render() {
    const { classes } = this.props;
    const { theme } = this.props;

    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;
    let backgroundStyle = {
      backgroundPosition: "center",
      backgroundSize: "cover",
      position: "relative"
    };
    return (
      <div className="sliderss">
        <div
          style={{ position: 'relative', }}
        >
          {/* <div style = {{zIndex: 18, marginBottom: '-121px', position: 'relative'}}> <Nav/></div> */}
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={this.handleStepChange}
            enableMouseEvents
            interval={10000}
            autoplay={true}
         

            
            threshold={50}
          >
            {tutorialSteps.map((step, index) => (
              <div key={index} style={{ ...backgroundStyle }}>
                <div style={{ background: "url(" + backgroundImageList[index] + ")", position: 'absolute' }}></div>
                <div className="container" style={{ position: "relative", paddingTop: '165px' }}>
                  <div  >
                    <Paper
                      className={classes.header}
                      style={{ backgroundColor: "transparent", height: "auto", paddingLeft: '40px ', boxShadow: 'none' }}
                    >
                      <Typography style={{ color: "white", }}>
                        {tutorialSteps[activeStep].label}
                      </Typography>
                    </Paper>
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

                      style={{
                        backgroundColor: "transparent",
                        flexDirection: "column",
                        position: 'absolute',
                        top: 'calc(50% + 25px)',
                        left: 0
                      }}
                    />
                  </div>
                  {this.props.button}
                </div>
              </div>

            ))}
          </AutoPlaySwipeableViews>


        </div>
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  SwipeableTextMobileStepper
);
