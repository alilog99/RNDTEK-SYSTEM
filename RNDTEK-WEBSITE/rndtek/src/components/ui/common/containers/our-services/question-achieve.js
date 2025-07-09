import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "animate.css/animate.min.css";
import PropTypes from "prop-types";
import React from "react";
import Fade from "react-reveal/Fade";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class QuestionAchieve extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  backgroundStyle = {
    backgroundColor: "#051320",
    minHeight: "400px",
    position: "relative"
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    return (
      <div className="container-fluid">
        <div className="row  ">
          <div className="col-12 col-xs-12 col-sm-12 col-md-6">
            <div className="container">
              <div style={{ ...this.props.style }}>
                <div className="container">
                  <div
                    className="col-12 col-xs-12 col-sm-12 col-md-12"
                    style={{
                      marginBottom: "40px"
                    }}
                  >
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                      <Fade left>
                        <h5
                          style={{
                            color: "#0071bc",
                            fontSize: "27px",
                            marginTop: "60px"
                          }}
                        >
                          Frequently Asked Question
                        </h5>
                      </Fade>
                    </ScrollAnimation>
                    <div className={classes.root} style={{ marginTop: "30px" }}>
                      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <Fade left>
                          <ExpansionPanel
                            expanded={expanded === "panel1"}
                            onChange={this.handleChange("panel1")}
                          >
                            <ExpansionPanelSummary
                              expandIcon={<ExpandMoreIcon />}
                            >
                              <h4 style={{ fontSize: "16px" }}>
                                Can I see the apps you've already built?
                              </h4>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                              <Typography>
                                Some of the Apps mentioned in the portfolio that
                                our expert developers made for Web, IOS, Android
                                and Blackberry.
                              </Typography>
                            </ExpansionPanelDetails>
                          </ExpansionPanel>
                          <ExpansionPanel
                            expanded={expanded === "panel2"}
                            onChange={this.handleChange("panel2")}
                          >
                            <ExpansionPanelSummary
                              expandIcon={<ExpandMoreIcon />}
                            >
                              <h4 style={{ fontSize: "16px" }}>
                                How skilled are your developers who'll be
                                working on my app?
                              </h4>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                              <Typography>
                                Our developers are experienced and fully
                                polished in their expertise to create every type
                                of creative projects, and they always ready to
                                challange new ideas and projects.
                              </Typography>
                            </ExpansionPanelDetails>
                          </ExpansionPanel>
                          <ExpansionPanel
                            expanded={expanded === "panel3"}
                            onChange={this.handleChange("panel3")}
                          >
                            <ExpansionPanelSummary
                              expandIcon={<ExpandMoreIcon />}
                            >
                              <h4 style={{ fontSize: "16px" }}>
                                Will you maintain my app post-launch?
                              </h4>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                              <Typography>
                                After the app is launched and in the app
                                marketplace, the job isn’t yet completely done.
                                From time to time, we will release updates, fix
                                bugs and add new features and functionality.
                              </Typography>
                            </ExpansionPanelDetails>
                          </ExpansionPanel>
                        </Fade>
                      </ScrollAnimation>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-xs-12 col-sm-12 col-md-6"
            style={{ ...this.backgroundStyle, ...this.props.style }}
          >
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-xs-12 col-md-12">
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                      <Fade right>
                        <h5
                          style={{
                            color: "#fff",
                            fontSize: "27px",
                            marginTop: "70px",
                            marginLeft: "15px"
                          }}
                        >
                          Our Achievement
                        </h5>
                      </Fade>
                    </ScrollAnimation>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-xs-12 col-md-6"
                    style={{ marginTop: "20px" }}
                  >
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                      <Fade right>
                        <div className="row">
                          <div className="col-2 col-xs-2 col-sm-2 col-md-2">
                            <p
                              style={{
                                color: "white",
                                fontSize: "40px",
                                textAlign: "center"
                              }}
                            >
                              <i className="fab fa-react" />
                            </p>
                          </div>
                          <div className="col-10 col-xs-10 col-sm-10 col-md-10">
                            <h5 style={{ fontSize: "27px", color: "#0071bc" }}>
                              3
                            </h5>
                            <h5 style={{ color: "#fff", fontSize: "17px" }}>
                              Years Of Experience
                            </h5>
                          </div>
                        </div>
                      </Fade>
                    </ScrollAnimation>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-xs-12 col-md-6"
                    style={{ marginTop: "20px" }}
                  >
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                      <Fade right>
                        <div className="row">
                          <div className="col-2 col-xs-2 col-sm-2 col-md-2">
                            <p style={{ color: "white", fontSize: "40px" }}>
                              <i className="far fa-thumbs-up" />
                            </p>
                          </div>
                          <div className="col-10 col-xs-10 col-sm-10 col-md-10">
                            <h5
                              style={{
                                fontSize: "27px",
                                color: "#0071bc",
                                marginLeft: "0px"
                              }}
                            >
                              35
                            </h5>
                            <h5
                              style={{
                                color: "#fff",
                                fontSize: "17px",
                                marginLeft: "0px"
                              }}
                            >
                              Happy Clients
                            </h5>
                          </div>
                        </div>
                      </Fade>
                    </ScrollAnimation>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-xs-12 col-md-6"
                    style={{ marginTop: "20px" }}
                  >
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                      <Fade right>
                        <div className="row">
                          <div className="col-2 col-xs-2 col-sm-2 col-md-2">
                            <p style={{ color: "white", fontSize: "40px" }}>
                              <i className="fas fa-briefcase" />
                            </p>
                          </div>
                          <div className="col-10 col-xs-10 col-sm-10 col-md-10">
                            <h5 style={{ fontSize: "27px", color: "#0071bc" }}>
                              70+
                            </h5>
                            <h5 style={{ color: "#fff", fontSize: "17px" }}>
                              Complete Projects
                            </h5>
                          </div>
                        </div>
                      </Fade>
                    </ScrollAnimation>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-xs-12 col-md-6"
                    style={{ marginTop: "20px" }}
                  >
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                      <Fade right>
                        <div className="row">
                          <div className="col-2 col-xs-2 col-sm-2 col-md-2">
                            <p style={{ color: "white", fontSize: "40px" }}>
                              <i className="fas fa-dollar-sign" />
                            </p>
                          </div>
                          <div className="col-10 col-xs-10 col-sm-10 col-md-10">
                            <h5
                              style={{
                                fontSize: "27px",
                                color: "#0071bc",
                                marginLeft: "0px"
                              }}
                            >
                              100K+
                            </h5>
                            <h5
                              style={{
                                color: "#fff",
                                fontSize: "17px",
                                marginLeft: "0px",
                                marginBottom: "60px"
                              }}
                            >
                              Money Saved
                            </h5>
                          </div>
                        </div>
                      </Fade>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

QuestionAchieve.defaultProps = {
  opacity: ".50"
};

QuestionAchieve.propTypes = {
  style: PropTypes.object,
  backgroundImage: PropTypes.string,
  opacity: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QuestionAchieve);
