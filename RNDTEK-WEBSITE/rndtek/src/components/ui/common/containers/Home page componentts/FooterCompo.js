import "animate.css/animate.min.css";
import PropTypes from "prop-types";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { Fade } from 'react-reveal';
import { NavLink } from "react-router-dom";
import logo from "../../../../../assets/imgs/rndtek.png";
import { footerString } from "../../../../constants/strings";
import TextboxFooter from "../../../etc/footer text/textbox";
import CreateTextElement from "../../typography/create_text_element";
import Footer from "../Home page componentts/footer";
import "../Home page componentts/footertext.css";
import { browserHistory } from 'react-router';
import { HashLink as Link } from 'react-router-hash-link';
import ScrollToTop from "../../../etc/scroll-top/scroll-top"


class FooterCompo extends React.Component {
  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }
  routeChange() {
    let path = `newPath`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div style={{ ...this.props.style }}>
      

        <Footer style={{ padding: "50px 0" }}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3">
                <ScrollAnimation animateIn='fadeIn'
                  animateOut='fadeOut'> <Fade left> <img src={logo} alt="" /></Fade></ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'
                  animateOut='fadeOut'> <Fade left>
                    <CreateTextElement
                      element="h5"
                      fontSize="12px"
                      style={{ lineHeight: "2.1", marginTop: "10px" }}
                    >
                      {footerString}
                    </CreateTextElement>
                  </Fade></ScrollAnimation>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <ScrollAnimation animateIn='fadeIn'
                  animateOut='fadeOut'>  <Fade top>
                    <CreateTextElement
                      element="h5"
                      fontSize="16px"
                      style={{ padding: "20px 5px 8px 5px" }}
                    >
                      Support
                </CreateTextElement>
                  </Fade></ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'
                  animateOut='fadeOut'>  <Fade top>
                    <CreateTextElement fontSize="13px" element="h5">
                      <ul
                        style={{
                          listStyle: "none",
                          padding: "0px 10px",
                          lineHeight: "2.1"
                        }}
                      >
                        <li >
                          <NavLink
                           onClick={() => window.scrollTo(0, 0)}
                            exact
                            href="/contact-us#background1-size"
                            to="/contact-page"
                        >
                          {/* <a href="/contact-us"> */}
                          

                          Help Center
                          
                          {/* </a> */}
                          </NavLink>
                        </li>
                        <li>
                        <NavLink
                            onClick={() => window.scrollTo(0, 0)}

                            exact
                            href="/contact-us#background1-size"
                            to="/contact-page"
                        >
                          {/* <a href="/"> */}
                          

                          Get Started
                          
                          {/* </a> */}
                          </NavLink>
                        </li>
                        <li>
                          {/* <a href="/contact-us"> */}
                          <NavLink
                           onClick={() => window.scrollTo(0, 0)}

                            exact
                            href="/contact-us#background1-size"
                            to="/contact-page"
                        >
                         

                          Contact US
                          
                          </NavLink>
                          {/* </a> */}

                        </li>
                      </ul>
                    </CreateTextElement>
                  </Fade></ScrollAnimation>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <ScrollAnimation animateIn='fadeIn'
                  animateOut='fadeOut'>  <Fade top>
                    <CreateTextElement
                      element="h5"
                      fontSize="16px"
                      style={{ padding: "20px 5px 8px 5px" }}
                    >
                      About US
                </CreateTextElement>
                  </Fade></ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'
                  animateOut='fadeOut'> <Fade top>
                    <CreateTextElement fontSize="13px" element="h5">
                      <ul
                        style={{
                          listStyle: "none",
                          padding: "0px 10px",
                          lineHeight: "2.1"
                        }}
                      >
                        <li>
                          {/* <a href="/aboutuspage"> */}
                          <NavLink
                          onClick={() => window.scrollTo(0, 0)}
                            exact
                            href="/contact-us#background1-size"
                            to="/About-us"
                        >
                        

                          About US
                          
                          </NavLink>
                          {/* </a> */}
                        </li>
                        <li>
                        <NavLink
                        onClick={() => window.scrollTo(0, 0)}
                            exact
                            href="/contact-us#background1-size"
                            to="/contact-page"
                        >
                                

                          {/* <a href="/contact-us"> */}
                          Terms of Use
                            
                          {/* </a> */}
                          </NavLink>
                        </li>
                        <li>
                          {/* <a href="/contact-us"> */}
                          <NavLink
                          onClick={() => window.scrollTo(0, 0)}
                            exact
                            href="/contact-us#background1-size"
                            to="/contact-page"
                        >
                          

                          Privacy Policy
                          
                          </NavLink>
                          {/* </a> */}
                        </li>
                      </ul>
                    </CreateTextElement>
                  </Fade></ScrollAnimation>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <ScrollAnimation animateIn='fadeIn'
                  animateOut='fadeOut'>  <Fade right>
                    <CreateTextElement
                      element="h5"
                      fontSize="16px"
                      style={{ padding: "20px 5px 8px 5px" }}
                    >
                      Get Newsletter
                </CreateTextElement>
                  </Fade></ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'
                  animateOut='fadeOut'>  <Fade right>
                    <TextboxFooter style={{ padding: "5px 0px 0px 10px" }} />


                    <CreateTextElement style={{ marginBottom: '64px' }}>
                      <a href="http://rndhub.co" target="_blank">
                      <i
                        className="fas fa-globe"
                        style={{ padding: "0px 5px 10px 23px" }}
                      />
                      </a>
                      <a href="https://www.facebook.com/rndhub.co.uk" target="_blank"> 
                      <i
                        className="fab fa-facebook-f"
                        style={{ padding: "0px 20px" }}
                      />
                      </a>
                      <a href="http://rndhub.co">
                       <i
                        className="fab fa-google-plus-g"
                        style={{ padding: "0px 8px" }}
                      />
                      </a>
                      <a href="http://rndhub.co">
                      <i
                        className="fab fa-twitter"
                        style={{ padding: "0px 8px" }}
                      /></a>
                    </CreateTextElement>  </Fade></ScrollAnimation>

              </div>
            </div>
          </div>
        </Footer>
        
      </div>
    );
  }
}

FooterCompo.defaultProps = {};

FooterCompo.propTypes = {
  style: PropTypes.object
};

export default FooterCompo;
