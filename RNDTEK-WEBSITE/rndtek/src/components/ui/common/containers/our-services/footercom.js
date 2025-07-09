import PropTypes from "prop-types";
import React from "react";
import logo from "../../../../../assets/imgs/rnd_logo.png";
import { footerString } from "../../../../constants/strings";
import CreateTextElement from "../../typography/create_text_element";
import Footer from "../our-services/footer";
import TextboxFooter from "../our-services/footertext";
class FooterCompo extends React.Component {


  render() {
    return (
      <div style={{ ...this.props.style }}>
        <Footer style={{ padding: "50px 0" }}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3">
                <img src={logo} alt="" />

                <CreateTextElement
                  element="p"
                  fontSize="12px"
                  style={{ lineHeight: "2.1", marginTop: "10px" }}
                >
                  {footerString}
                </CreateTextElement>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <CreateTextElement
                  element="h5"
                  fontSize="16px"
                  style={{ padding: "20px 5px 8px 5px" }}
                >
                  Support
                </CreateTextElement>

                <CreateTextElement element="p" fontSize="13px">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0px 10px",
                      lineHeight: "2.1"
                    }}
                  >
                    <li>
                      <a href="/contact-us">Help Center</a>
                    </li>
                    <li>
                      <a href="/contact-us">Get Started</a>
                    </li>
                    <li>
                      <a href="/contact-us">Contact US</a>
                    </li>
                  </ul>
                </CreateTextElement>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <CreateTextElement
                  element="h5"
                  fontSize="16px"
                  style={{ padding: "20px 5px 8px 5px" }}
                >
                  About US
                </CreateTextElement>

                <CreateTextElement element="p" fontSize="13px">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0px 10px",
                      lineHeight: "2.1"
                    }}
                  >
                    <li>
                      <a href="/#">About US</a>
                    </li>
                    <li>
                      <a href="/#">Terms of Use</a>
                    </li>
                    <li>
                      <a href="/#">Privacy Policy</a>
                    </li>
                  </ul>
                </CreateTextElement>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <CreateTextElement
                  element="h5"
                  fontSize="16px"
                  style={{ padding: "20px 5px 8px 5px" }}
                >
                  Get Newsletter
                </CreateTextElement>

                <TextboxFooter style={{ padding: "5px 0px 0px 10px" }} />
                <CreateTextElement>
                <a href="/contact-us"><i
                    className="fas fa-globe"
                    style={{ padding: "0px 5px 10px 23px" }}
                  /></a>
                 <a href="/contact-us"> <i
                    className="fab fa-facebook-f"
                    style={{ padding: "0px 20px" }}
                  /></a>
                 <a href="/contact-us"> <i
                    className="fab fa-google-plus-g"
                    style={{ padding: "0px 8px" }}
                  /></a>
                  <a href="/contact-us"><i
                    className="fab fa-twitter"
                    style={{ padding: "0px 8px" }}
                  /></a>
                </CreateTextElement>
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
