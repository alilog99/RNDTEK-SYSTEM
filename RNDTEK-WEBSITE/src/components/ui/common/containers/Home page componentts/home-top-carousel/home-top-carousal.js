import React from 'react'
import PropTypes from 'prop-types'
import app_development from "../../../../../../assets/imgs/app-development.png";
import digitalmarket from "../../../../../../assets/imgs/digital-marketing.png";
import gamedev from "../../../../../../assets/imgs/game-development.png";
import background1 from "../../../../../../assets/imgs/Layer20.png";
import websitedev2 from "../../../../../../assets/imgs/website-development-2.png";
import websitedev from "../../../../../../assets/imgs/website-development.png";
import Navbar from '../../../Navbar/navbar';
import { Carousel } from "react-responsive-carousel";
import "./home-top-carousal.css";
import { homeSilde } from "../../../../../constants/strings";
import ScrollAnimation from 'react-animate-on-scroll';
import { NavLink } from "react-router-dom";
import { default as Btn } from "../../../button/button";
import ar from "../../../../../../assets/imgs/arrow.png";

import Fade from 'react-reveal/Fade';


import CreateTextElement from '../../../typography/create_text_element';
import aiBrain from '../../../../../../assets/imgs/ai-brain.svg';
import aiChart from '../../../../../../assets/imgs/ai-chart.svg';

const tutorialSteps = [
    {
      label: (
        <div className="text1">
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
          <Fade left>
            <div>
              <h2 style={{ fontSize: "28px" }}>
                AI & ML Integration<br />
                <span style={{ fontSize: "20px", fontWeight: 400 }}>Smarter, faster, scalable solutions</span>
              </h2>
              <p>Seamlessly embed artificial intelligence and machine learning into your business workflows for automation, personalization, and innovation.</p>
            </div>
            </Fade>
          </ScrollAnimation>
        </div>
      )
    },
    {
      label: (
        <div className="text2">
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
          <Fade left>
            <div>
              <h2 style={{ fontSize: "28px" }}>
                Data Analytics & Predictions<br />
                <span style={{ fontSize: "20px", fontWeight: 400 }}>Unlock insights, drive results</span>
              </h2>
              <p>Leverage advanced analytics and predictive modeling to make data-driven decisions and forecast future trends with confidence.</p>
            </div>
            </Fade>
          </ScrollAnimation>
        </div>
      )
    },
    {
      label: (
        <div className="text3">
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
          <Fade left>
            <div>
              <h2 style={{ fontSize: "28px" }}>
                Chatbots & Model Evaluations<br />
                <span style={{ fontSize: "20px", fontWeight: 400 }}>Conversational AI, real-time support</span>
              </h2>
              <p>Deploy intelligent chatbots and evaluate AI models to enhance customer engagement and streamline operations.</p>
            </div>
            </Fade>
          </ScrollAnimation>
        </div>
      )
    },
    {
      label: (
        <div className="text4">
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
          <Fade left>
            <div>
              <h2 style={{ fontSize: "28px" }}>
                Innovation to Inventor Programs<br />
                <span style={{ fontSize: "20px", fontWeight: 400 }}>From idea to impact</span>
              </h2>
              <p>Accelerate your journey from concept to invention with AI-powered prototyping, validation, and go-to-market strategies.</p>
            </div>
            </Fade>
          </ScrollAnimation>
        </div>
      )
    },
    {
      label: (
        <div className="text5">
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
          <Fade left>
            <div>
              <h2 style={{ fontSize: "28px" }}>
                IPO & Patent Support via AI Tools<br />
                <span style={{ fontSize: "20px", fontWeight: 400 }}>Secure, protect, and scale</span>
              </h2>
              <p>Utilize AI-driven tools for intellectual property management, patent research, and IPO readiness.</p>
            </div>
            </Fade>
          </ScrollAnimation>
        </div>
      )
    }
  ];


const backgroundImageList = [aiBrain, aiChart, aiBrain, aiChart, aiBrain];

class HomeTopCarousel extends React.Component{
  
    constructor(props) {
        super(props);
        this.state = {
          activeIndex: 0
        };
      }
    render(){
        const maxSteps = tutorialSteps.length;

        return(
            <div style = {{position:'relative'}}>
            <div style = {{zIndex: 18, marginBottom: '-121px', position: 'relative'}}> <Navbar/></div>
          <div className = "carousel_wrapperr" style = {{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0'}}>
            <Carousel
              infiniteLoop
              autoPlay = {true}
             interval={2000}
              swipeable={false}
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              selectedItem = {this.props.backgroundIndex}
              showIndicators={true}
              width={'100%'}
            >
             {backgroundImageList.map((item, index) => (
              <div className="imges" style={{    height: '100%', backgroundImage: "url(" + item + ")",backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}} >
              <div className="container">
           <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6"> 
            <CreateTextElement className="lebal"  color="#FFF" >
              {tutorialSteps[index].label}
              <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
              <Fade left>

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
                  imgstyle={{width:"19%"}}
                  style={{
                    position: "relative",
                    outline: "0px",
                    height: "47px",
                    color: "white",
                    backgroundColor: "#0071bc",
                    width: "161px",
                    borderRadius: "43px",
                    marginTop: "1px",
                    // marginLeft: "40px"
                  }}

                /></NavLink>
                </Fade>
                </ScrollAnimation>
              </CreateTextElement>
             
            </div>
           </div>
          </div>
             
              </div>

             ))}
              {/* {this.props.button} */}
            </Carousel>
           
          </div>
          <div style = {{minHeight: '600px'}}>
          {/* {this.props.children} */}
          {/* {tutorialSteps.map((step, index) => (
              <div key={index}>
                <div style={{ background: "url(" + backgroundImageList[index] + ")", position: 'absolute' }}></div>
                <div className="container" style={{ position: "relative", paddingTop: '165px' }}>
                  <div  >
                    
                      <CreateTextElement style={{ color: "white", }}>
                        {tutorialSteps[index].label}
                      </CreateTextElement>
                    
                    />
                  </div>
                  {this.props.button}
                </div>
              </div>

            ))} */}
            </div>
          </div>
        );
    }
}

HomeTopCarousel.defaultProps = {

}

HomeTopCarousel.propTypes = {
    style: PropTypes.object
}

export default HomeTopCarousel;