import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import "animate.css/animate.min.css";
import PropTypes from "prop-types";
import React from "react";
import Fade from 'react-reveal/Fade';
import xmaster from "../../../../../../assets/imgs/portfolio imgs/10xmaastricht_thumb.jpg";
import accumile from "../../../../../../assets/imgs/portfolio imgs/accu-Mile_thumb.jpg";
import battle from "../../../../../../assets/imgs/portfolio imgs/Battle_at_the_Atlantic_thumb.jpg";
import Beebilo from "../../../../../../assets/imgs/portfolio imgs/Beeblio-Me_thumb.jpg";
import Buzzshare from "../../../../../../assets/imgs/portfolio imgs/buzzshare_thumb.jpg";
import discover from "../../../../../../assets/imgs/portfolio imgs/discovervarmints_thumb.jpg";
import Fweebi from "../../../../../../assets/imgs/portfolio imgs/Fweebi_thumb.jpg";
import hampshire from "../../../../../../assets/imgs/portfolio imgs/hampshire_thumb.jpg";
import Humidity from "../../../../../../assets/imgs/portfolio imgs/Humidity-Calculator_thumb.jpg";
import Impulse from "../../../../../../assets/imgs/portfolio imgs/Impulse-Drinking_thumb.jpg";
import kosair from "../../../../../../assets/imgs/portfolio imgs/kosair_thumb.jpg";
import webdesign from "../../../../../../assets/imgs/portfolio imgs/lordandtaylor_thumb.jpg";
import menuspring from "../../../../../../assets/imgs/portfolio imgs/menu-spring_thumb.jpg";
import O2 from "../../../../../../assets/imgs/portfolio imgs/O2_thumb.jpg";
import olympic from "../../../../../../assets/imgs/portfolio imgs/olympic_thumb.jpg";
import orchid from "../../../../../../assets/imgs/portfolio imgs/orchid_thumb.jpg";
import remiplus from "../../../../../../assets/imgs/portfolio imgs/rimi_thumb.jpg";
import str8ts from "../../../../../../assets/imgs/portfolio imgs/Str8ts_thumb.jpg";
import PortGridContainer from "../PortSecContainer";





function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 1 * 1 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};
const styles = theme => ({
  root: {
    flexGrow: 1,
    boxShadow: "none",
    backgroundColor: "transparent",
    outline: "none",


  },
  custom_indicator: {


    backgroundColor: "#efefef",

    width: "8px",
    height: "3px"
  },

  custom_button: {
    outline: "none",

  }

});

class CenteredTabs extends React.Component {

  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>

        <Paper className={classes.root}>
          <div className="container">
            <Tabs
              value={value}
              onChange={this.handleChange}
              classes={{ indicator: classes.custom_indicator, button: classes.custom_button }}
              centered

            >
              <Tab label="ALL" />
              <Tab label="APPS" />
              <Tab label="WEBSITE" />
              <Tab label="LOGO" />
              <Tab label="Game Development" />
              {/* <Tab label="BRANDING" /> */}
            </Tabs>
          </div>
        </Paper>

        <Fade bottom>
          {value === 0 && (<TabContainer>
            <div class="container" style={{ textAlign: "center", paddingTop: "16px" }}>
              <div className="row">
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                   
                    name="Web design, UX Design"
                    title=" Lord and Taylor "
                    backImg={webdesign}
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Rimi Plus"
                    name="IOS, Android, Blackberry"
                    backImg={remiplus}
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Discover Varmints"
                    name="Web design, UX Design"
                    backImg={discover}
                  />
                </div>
                <div className=" col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Hampshire i-Pad Application"
                    name="IOS"
                    backImg={hampshire}
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Plan My Olympics"
                    name="Android"
                    backImg={olympic}
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="O2 Priority Tickets"
                    name="Web design, UX Design, Android"
                    backImg={O2}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Orchid Field Marketing"
                    name="Blackberry, IOS, Android"
                    backImg={menuspring}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="O2 Priority Tickets"
                    name="Web design, UX Design, Android"
                    backImg={orchid}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Accu-Mile"
                    name="IOS"
                    backImg={accumile}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Humidity Calculator"
                    name="IOS"
                    backImg={Humidity}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="10x Maastricht"
                    name="IOS"
                    backImg={xmaster}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Kosair"
                    name="IOS"
                    backImg={kosair}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Buzzshare"
                    name="IOS"
                    backImg={Buzzshare}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Str8ts Game"
                    name="IOS"
                    backImg={str8ts}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Battle of Atlantic Game"
                    name="IOS"
                    backImg={battle}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Impulse Game"
                    name="IOS"
                    backImg={Impulse}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Beeblio-Me"
                    name="Android"
                    backImg={Beebilo}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Fweebi"
                    name="Android"
                    backImg={Fweebi}
                  />
                </div>

              </div>
            </div></TabContainer>)}
        </Fade>
        <Fade top>
          {value === 1 && <TabContainer>
            <div className="container" style={{ textAlign: "center", paddingTop: "16px" }}>
             <div className="row">
            <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Fweebi"
                    name="Android"
                    backImg={Fweebi}
                  />
                </div>
                <div className=" col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Hampshire i-Pad Application"
                    name="IOS"
                    backImg={hampshire}
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Plan My Olympics"
                    name="Android"
                    backImg={olympic}
                  />
                </div>
               
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Orchid Field Marketing"
                    name="Blackberry, IOS, Android"
                    backImg={menuspring}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="O2 Priority Tickets"
                    name="Web design, UX Design, Android"
                    backImg={orchid}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Accu-Mile"
                    name="IOS"
                    backImg={accumile}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Humidity Calculator"
                    name="IOS"
                    backImg={Humidity}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="10x Maastricht"
                    name="IOS"
                    backImg={xmaster}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Kosair"
                    name="IOS"
                    backImg={kosair}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Buzzshare"
                    name="IOS"
                    backImg={Buzzshare}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Str8ts Game"
                    name="IOS"
                    backImg={str8ts}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Battle of Atlantic Game"
                    name="IOS"
                    backImg={battle}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Impulse Game"
                    name="IOS"
                    backImg={Impulse}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Beeblio-Me"
                    name="Android"
                    backImg={Beebilo}
                  />
                </div>   
                </div>
            </div>
          </TabContainer>}
        </Fade>
        <Fade right>
          {value === 2 && <TabContainer>
            <div className="container" style={{ textAlign: "center", paddingTop: "16px" }}>

             <div className="row">
             <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                   
                    name="Web design, UX Design"
                    title=" Lord and Taylor "
                    backImg={webdesign}
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Discover Varmints"
                    name="Web design, UX Design"
                    backImg={discover}
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="O2 Priority Tickets"
                    name="Web design, UX Design, Android"
                    backImg={O2}
                  />
                </div>   
             </div>
            </div>
          </TabContainer>}
        </Fade>
        <Fade left>
          {value === 3 && (
            <TabContainer>
              <div className="container" style={{ textAlign: "center", paddingTop: "16px" }}>

              <div className="row">
              <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Str8ts Game"
                    name="IOS"
                    backImg={str8ts}
                  />
                </div>   
                </div>
              </div>
            </TabContainer>
          )}
        </Fade>
        <Fade top>
          {value === 4 && (
            <TabContainer>
              <div class="container" style={{ textAlign: "center", paddingTop: "16px" }}>
              <div className="row">
              <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Str8ts Game"
                    name="IOS"
                    backImg={str8ts}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Battle of Atlantic Game"
                    name="IOS"
                    backImg={battle}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Impulse Game"
                    name="IOS"
                    backImg={Impulse}
                  />
                </div>   
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Plan My Olympics"
                    name="Android"
                    backImg={olympic}
                  />
                </div>
                </div>
              </div>
            </TabContainer>
          )}
        </Fade>
        {/* <Fade right>
          {value === 5 && <TabContainer>
            <div class="container" style={{ textAlign: "center", paddingTop: "16px" }}>

              <PortGridContainer
                title="Hawkins"
                name="FORENSIC INVESTIGATION"
                backImg={Back}
              />
            </div>
          </TabContainer>}
        </Fade> */}
      </div>
    );

  }
}

CenteredTabs.propTypes = {
  style: PropTypes.object,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredTabs);
