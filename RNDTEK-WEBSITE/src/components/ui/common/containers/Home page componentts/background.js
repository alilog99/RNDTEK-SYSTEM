import Grid from "@material-ui/core/Grid";
import "animate.css/animate.min.css";
import PropTypes from "prop-types";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import { NavLink } from "react-router-dom";
import app_development from "../../../../../assets/imgs/app-development.png";
import App from "../../../../../assets/imgs/app_dev.png";
import ar from "../../../../../assets/imgs/arrow.png";
import bannerImg from "../../../../../assets/imgs/banner.png";
import digitalmarket from "../../../../../assets/imgs/digital-marketing.png";
import digi from "../../../../../assets/imgs/digital_mon.png";
import dig from "../../../../../assets/imgs/digmarkicon.png";
import gamedev from "../../../../../assets/imgs/game-development.png";
import game from "../../../../../assets/imgs/gamedevicon.png";
import background1 from "../../../../../assets/imgs/Layer20.png";
import vrr from "../../../../../assets/imgs/vrappicon.png";
import websitedev2 from "../../../../../assets/imgs/website-development-2.png";
import websitedev from "../../../../../assets/imgs/website-development.png";
import web from "../../../../../assets/imgs/web_dev.png";
import { bannerString } from "../../../../constants/strings";
import Card from "../../../etc/Card";
import HomeSlider from "../../../etc/HomeCarusal/Home_slider";
import Testimonials from "../../../etc/testimonial/Testimonial";
import Slide from "../../../etc/text carosal/slider";
import { default as Btn, default as Button1 } from "../../button/button";
import CreateTextElement from "../../typography/create_text_element";
import BackgroundContainer from "../Home page componentts/background_container";
import FooterCompo from "../Home page componentts/FooterCompo";
import Home3Com from "../Home page componentts/Home3Com";
import MobileImg from "../Home page componentts/mobileimgs";
import "./background.css";
import HomeTopCarousel from "./home-top-carousel/home-top-carousal";
import AIHomeSection from "./ai-home-section";

const backgroundImageList = [background1, app_development, digitalmarket, websitedev, websitedev2, gamedev]

class Background1 extends React.Component {
  state = {
    backgroundImageIndex: 0
  }
  render() {
    console.log(backgroundImageList[this.state.backgroundImageIndex])
    return (
      <div>

        {/* <TopBackground
          
          style={{ paddingBottom: "150px" }}
        >  */}

        <div className="">
        {/* <HomeTopCarousel /> */}
        {/* </Fade> */}
          {/* <CreateTextElement>ddshjhfj</CreateTextElement> */}
          {/* <Slide 
             
             button={
              <NavLink
              exact
              href="/contact-us#background1-size"
              to="/contact-page"
              onClick={() => window.scrollTo(0, 0)}
              // activeclassName="active"
            >
                <Btn
                  Gname="Get Started"
                  imgarr={ar}
                  style={{
                    position: "relative",
                    outline: "0px",
                    height: "47px",
                    color: "white",
                    backgroundColor: "#0071bc",
                    width: "161px",
                    borderRadius: "43px",
                    marginTop: "1px",
                    marginLeft: "40px"
                  }}

                /></NavLink>}
            /> */}
        {/* </HomeTopCarousel> */}
        {/* <HomeSlider /> */}
          <HomeSlider backgroundIndex={this.state.backgroundImageIndex}>
            <Slide handleSlideChange={(e) => this.setState({ backgroundImageIndex: e })}
             
             button={
              <NavLink
              exact
              href="/contact-us#background1-size"
              to="/contact-page"
              onClick={() => window.scrollTo(0, 0)}
              // activeclassName="active"
            >
                <Btn
                  Gname="Get Started"
                  imgarr={ar}
                  style={{
                    position: "relative",
                    outline: "0px",
                    height: "47px",
                    color: "white",
                    backgroundColor: "#0071bc",
                    width: "161px",
                    borderRadius: "43px",
                    marginTop: "1px",
                    marginLeft: "40px"
                  }}

                /></NavLink>}
            />
          </HomeSlider>
        </div>

        {/* <div className="hometop">
              <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>  <Fade left>
        <Slide handleSlideChange = {(e)=> this.setState({backgroundImageIndex: e})}
                button = {
              <Btn
               href="/contact-us"
                Gname="Get Started"
                imgarr={ar}
                style={{
                  position: "relative",
                  outline: "0px",
                  height: "47px",
                  color: "white",
                  backgroundColor: "#0071bc",
                  width: "161px",
                  borderRadius: "43px",
                  marginTop: "20px",
                  marginLeft: "40px"
                }}
               /> 
                }
              />
        </Fade>
              </ScrollAnimation>
              </div> */}
        {/* </TopBackground> */}


        <BackgroundContainer backgroundImage={bannerImg} opacity=".95">
          <Grid container spacing={16}>
            <Grid item xs={12} style={{ marginTop: "92px" }}>
              <Grid item xs={12} lg={12} md={12}>
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade left>
                  <CreateTextElement element="h5" fontSize="20px" style={{textAlign:"center"}}>
                    Thriving To Achieve Smart,
                </CreateTextElement></Fade>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade left>
                  <CreateTextElement element="h4" fontSize="28px"  style={{textAlign:"center"}}>
                    Mobile & Web Development at all Platforms
                </CreateTextElement></Fade>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade left>
                  <CreateTextElement
                    element="p"
                    fontSize="14px"
                    style={{ lineHeight: "2.1",textAlign:"center" }}
                  >
                    {bannerString}
                  </CreateTextElement></Fade>
                </ScrollAnimation>


              </Grid>
            </Grid>
            <Grid item xs={12} style={{textAlign:"center"}} >
              <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade left>
              <NavLink
              exact
              href="/contact-us#background1-size"
              to="/contact-page"
              onClick={() => window.scrollTo(0, 0)}
              // activeclassName="active"
            >
                <Button1
                  // href="/contact-us"
                  Gname="Get Started"
                  imgarr={ar}
                  style={{
                    position: "absalute",
                    outline: "0px",
                    height: "47px",
                    color: "white",
                    backgroundColor: "#0071bc",
                    width: "161px",
                    borderRadius: "43px",
                    marginLeft: "1px",
                    marginTop: "-12px"
                  }}
                /></NavLink></Fade>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "15px", marginBottom: "58px", }}>
              <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade right>
                <Grid item lg={12} md={12} style={{textAlign:"center"}}>
                <Grid container spacing={14} >
                  <Grid  item lg={3} />
                  <Grid item lg={2} xs={12} >         
                  <Card Imgsd={App} Tname="app development" imgstyle={{marginBottom:"2px"}} /> 
                  <Grid  style={{textAlign:"center"}}>
                  <CreateTextElement element="h6" fontSize="14px" style={{textAlign:"center",lineHeight: "2.1"}}>
                  ios Development<br/>
                  Android Development<br/>
                  Windows Development
                </CreateTextElement>
                  </Grid >
                  </Grid>
                  <Grid item lg={2} xs={12}>   
                  <Card Imgsd={web} Tname="Web development" imgstyle={{marginBottom:"10px"}} />
                  <Grid  style={{textAlign:"center"}}>
                  <CreateTextElement element="h6" fontSize="14px" style={{textAlign:"center",lineHeight: "2.1"}}>
                  ios Development<br/>
                  Android Development<br/>
                  Windows Development
                </CreateTextElement>
                  </Grid >
                  </Grid>
                  <Grid item lg={2} xs={12}   >   
                  <Card Imgsd={digi} Tname="Digital marketing" imgstyle={{marginBottom:"2px"}}  />
                  <Grid  style={{textAlign:"center"}}>
                  <CreateTextElement element="h6" fontSize="14px" style={{textAlign:"center",lineHeight: "2.1"}}>
                  ios Development<br/>
                  Android Development<br/>
                  Windows Development
                </CreateTextElement>
                  </Grid >
                  </Grid>
                  <Grid item lg={3}  />
                  <Grid item lg={2}  />
                  <Grid item lg={1}  />

                  <Grid item lg={2} xs={12}>   
                  <Card Imgsd={game} Tname="Game development"  />
                  <Grid  style={{textAlign:"center"}}>
                  <CreateTextElement element="h6" fontSize="14px" style={{textAlign:"center",lineHeight: "2.1"}}>
                  ios Development<br/>
                  Android Development<br/>
                  Windows Development
                </CreateTextElement>
                  </Grid >
                  </Grid>
                  <Grid item lg={2} xs={12}>   
                  <Card Imgsd={vrr} Tname="VR Application" />
                  <Grid  style={{textAlign:"center"}}>
                  <CreateTextElement element="h6" fontSize="14px" style={{textAlign:"center",lineHeight: "2.1"}}>
                  ios Development<br/>
                  Android Development<br/>
                  Windows Development
                </CreateTextElement>
                  </Grid >
                  </Grid>
                  <Grid item lg={2} xs={12}  >   
                  <Card Imgsd={dig} Tname="SEO" imgstyle={{marginBottom:"10px"}} />
                  <Grid  style={{textAlign:"center"}}>
                  <CreateTextElement element="h6" fontSize="14px" style={{textAlign:"center",lineHeight: "2.1"}}>
                  ios Development<br/>
                  Android Development<br/>
                  Windows Development
                </CreateTextElement>
                  </Grid >
                  </Grid>
              
                </Grid>
              </Grid>
                </Fade>
              </ScrollAnimation> 
            </Grid>

          
          </Grid>
        </BackgroundContainer>

        <Home3Com />


        <MobileImg />


        <AIHomeSection />
        <Testimonials />


        <FooterCompo />


      </div>
    );
  }
}

Background1.defaultProps = {};

Background1.propTypes = {
  style: PropTypes.object
};

export default Background1;
