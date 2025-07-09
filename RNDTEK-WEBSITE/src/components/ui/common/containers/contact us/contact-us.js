import Grid from "@material-ui/core/Grid";
import "animate.css/animate.min.css";
import React from "react";
import PropTypes from "prop-types";

import ScrollAnimation from "react-animate-on-scroll";
import { Fade } from "react-reveal";
import addressicon from "../../../../../assets/imgs/address.png";
import ar from "../../../../../assets/imgs/arrowblack.png";
import contactcover from "../../../../../assets/imgs/cover.png";
import emailicon from "../../../../../assets/imgs/mail.png";
import phoneicon from "../../../../../assets/imgs/phone.png";
import womenpic from "../../../../../assets/imgs/woman.png";
import Btn from "../../../common/button/button";
import AboutBrand from "../About Us/AboutComponents/aboutbrand";
import "../contact us/contact.css";
import FooterCompo from "../Home page componentts/FooterCompo";
import ContactusTop from "./Contactustop";
import AIContactForm from "./ai-contact-form";

class Contact extends React.Component {
  constructor(props) {
    // this.sendMail = this.sendMail.bind(this);
    super(props);
    this.state = {
      feedback: "",
      formSubmitted: false,
      fromName: "",
      fromEmail: "",
      messageBody: "",
      aiFormData: {
        name: "",
        email: "",
        company: "",
        aiServices: [],
        description: "",
        budget: "",
      },
      aiFormSubmitted: false,
    };

    // handleCancel = this.handleCancel.bind(this);
    //  this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAISubmit = this.handleAISubmit.bind(this);
    this.setAIFormData = this.setAIFormData.bind(this);
  }
  static sender = "";

  //   sendMail() {
  //     var link = 'mailto:info@rndtek.co.uk?subject=Message from '
  //              +document.getElementById('email_address').value
  //              +'&body='+document.getElementById('email_address').value;
  //     window.location.href = link;
  // }

  handleSubmit(event) {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template,
    } = this.props.env;

    console.log(receiverEmail, template);

    this.sendFeedback(
      template,
      this.props.senderEmail,
      receiverEmail,
      this.state.feedback
    );

    this.setState({
      formSubmitted: true,
    });
  }

  sendFeedback(templateId, message, fromName, fromEmail) {
    window.emailjs
      .send("gmail", templateId, {
        message_body: this.state.messageBody,
        from_name: this.state.fromName,
        email_id: this.state.fromEmail,
      })
      .then((res) => {
        this.setState({
          formEmailSent: true,
          fromEmail: "",
          fromName: "",
          messageBody: "",
        });
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) => console.error("Failed to send feedback. Error: ", err));
    this.setState({ fromEmail: "", fromName: "", messageBody: "" });
  }

  handleAISubmit(event) {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template,
    } = this.props.env;

    // Send AI inquiry email
    window.emailjs
      .send("gmail", template, {
        message_body: `AI Services Inquiry\n\nName: ${
          this.state.aiFormData.name
        }\nEmail: ${this.state.aiFormData.email}\nCompany: ${
          this.state.aiFormData.company
        }\nServices: ${this.state.aiFormData.aiServices.join(
          ", "
        )}\nDescription: ${this.state.aiFormData.description}\nBudget: ${
          this.state.aiFormData.budget
        }`,
        from_name: this.state.aiFormData.name,
        email_id: this.state.aiFormData.email,
      })
      .then((res) => {
        this.setState({
          aiFormSubmitted: true,
          aiFormData: {
            name: "",
            email: "",
            company: "",
            aiServices: [],
            description: "",
            budget: "",
          },
        });
      })
      .catch((err) => console.error("Failed to send AI inquiry. Error: ", err));
  }

  setAIFormData(formData) {
    this.setState({ aiFormData: formData });
  }

  render() {
    return (
      <div style={{ ...this.props.style }}>
        <ContactusTop
          backgroundImage={contactcover}
          style={{ paddingBottom: "150px" }}
        >
          <Grid container spacing={16}>
            <Grid item md={12} lg={12} xs={12}></Grid>
          </Grid>
        </ContactusTop>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="background1-size" id="state">
              <div className="background2-size" />
              <Grid container>
                <div class="container">
                  <div class="row">
                    <div class="col-sm-12 col-lg-4">
                      <img
                        class="address-logo"
                        src={addressicon}
                        alt="addressicon"
                        align="center"
                      />
                      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        {" "}
                        <Fade top>
                          {" "}
                          <p className="font">Address</p>
                        </Fade>
                      </ScrollAnimation>
                      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        {" "}
                        <Fade top>
                          <p className="font2">
                            RNDKTEK Ltd. Kemp House 160 City Road, London EC1V
                            2NX
                          </p>
                        </Fade>
                      </ScrollAnimation>
                    </div>
                    <div class="col-sm-12 col-lg-4">
                      <img
                        class="phone-logo"
                        src={phoneicon}
                        alt="addressicon"
                        align="center"
                      />
                      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        {" "}
                        <Fade top>
                          {" "}
                          <p className="font">Phone</p>
                        </Fade>
                      </ScrollAnimation>
                      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        {" "}
                        <Fade top>
                          {" "}
                          <p className="font2">(0044) 7958 670704</p>
                        </Fade>
                      </ScrollAnimation>
                    </div>
                    <div class="col-sm-12 col-lg-4">
                      <img
                        class="email-logo"
                        src={emailicon}
                        alt="addressicon"
                        align="center"
                      />
                      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        {" "}
                        <Fade top>
                          {" "}
                          <p className="font">Email</p>
                        </Fade>
                      </ScrollAnimation>
                      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        {" "}
                        <Fade top>
                          {" "}
                          <p className="font2">info@rndtek.co.uk</p>
                        </Fade>
                      </ScrollAnimation>
                    </div>
                  </div>
                </div>
              </Grid>

              <div class="row no-gutters">
                <div class="col-sm-12 col-md-6 col-lg-6">
                  <div className="contact-box">
                    <div class="container">
                      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        {" "}
                        <Fade left>
                          <Grid container>
                            <form
                              className="feedback-form"
                              onSubmit={this.handleSubmit}
                            >
                              <Grid item xs={11} md={10} lg={10}>
                                <h5
                                  style={{
                                    color: "#fff",
                                    fontSize: "27px",
                                    marginTop: "20px",
                                  }}
                                >
                                  Get in Touch
                                </h5>
                                <p style={{ color: "#fff", fontSize: "12px" }}>
                                  CONTACT US
                                </p>
                              </Grid>
                              {/* <Grid item md={2} /> */}
                              {/* <Grid item xs={12} md={12}> */}
                              <div class="form-group">
                                <input
                                  type="text"
                                  class="form-control"
                                  onChange={(e) =>
                                    this.setState({ fromName: e.target.value })
                                  }
                                  value={this.state.fromName}
                                  placeholder="Your Name"
                                  required
                                />
                              </div>
                              {/* <TextboxFooter /> */}
                              {/* </Grid> */}
                              {/* <Grid item md={1} /> */}

                              {/* <Grid item xs={12} md={12}> */}
                              <div class="form-group">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="inputEmail4"
                                  onChange={(e) =>
                                    this.setState({ fromEmail: e.target.value })
                                  }
                                  value={this.state.fromEmail}
                                  placeholder="Your Email"
                                  required
                                />
                              </div>
                              {/* <TextboxFooter2 /> */}
                              {/* </Grid> */}
                              {/* <Grid item md={3} />
                                <Grid item md={2} /> */}
                              {/* <Grid item xs={12} md={12} lg={12}> */}
                              <div class="form-group">
                                <textarea
                                  class="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows="3"
                                  placeholder="Your Message"
                                  onChange={(e) =>
                                    this.setState({
                                      messageBody: e.target.value,
                                    })
                                  }
                                  value={this.state.messageBody}
                                  required
                                />
                              </div>
                              {/* <textarea
                            rows={4}
                            placeholder="Your message"
                            style={{ width: "100%", padding: "10px" }}
                          /> */}
                              {/* </Grid> */}
                              {/* <Grid item md={3} />
                                <Grid item xs={3} md={2} />
                                <Grid item xs={9} md={4}> */}
                              <Btn
                                // onclick={this.sendMail()}
                                Gname="SEND MESSAGE "
                                imgarr={ar}
                                style={{
                                  position: "absalute",
                                  outline: "0px",
                                  height: "47px",
                                  color: "black",
                                  backgroundColor: "#fff",
                                  width: "161px",
                                  borderRadius: "43px",
                                  marginLeft: "1px",
                                  marginBottom: "58px",
                                  fontSize: "13px",
                                }}
                                type="submit"
                                value="Submit"
                              />
                              {/* </Grid> */}
                            </form>
                          </Grid>
                        </Fade>
                      </ScrollAnimation>
                    </div>
                  </div>
                </div>

                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div className="contact-woman">
                    <div>
                      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        {" "}
                        <Fade right>
                          {" "}
                          <img
                            src={womenpic}
                            alt="women"
                            style={{ height: "365px", width: "100%" }}
                          />
                        </Fade>
                      </ScrollAnimation>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>

        <AboutBrand />

        {/* AI Services Contact Section */}
        <div
          style={{
            padding: "80px 0",
            background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
            position: "relative",
            backgroundImage: 'url("/assets/imgs/parallax-bg.svg")', // subtle parallax background
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <Grid container spacing={4}>
              <Grid item xs={12} md={5} style={{ marginLeft: "0" }}>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  animateOut="fadeOutLeft"
                >
                  <Fade left>
                    <div style={{ padding: "40px 20px" }}>
                      <h2
                        style={{
                          fontSize: "36px",
                          fontWeight: "700",
                          color: "#333",
                          marginBottom: "20px",
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          textAlign: "left",
                        }}
                      >
                        AI Services Inquiry
                      </h2>
                      <p
                        style={{
                          fontSize: "18px",
                          color: "#666",
                          lineHeight: "1.6",
                          marginBottom: "30px",
                          textAlign: "left",
                        }}
                      >
                        Ready to transform your business with AI? Let's discuss
                        your project requirements and create a custom solution
                        that drives innovation and growth.
                      </p>
                      <div
                        style={{
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          borderRadius: "15px",
                          padding: "30px",
                          color: "white",
                          textAlign: "left",
                        }}
                      >
                        <h4 style={{ fontSize: "20px", marginBottom: "15px" }}>
                          Why Choose Our AI Solutions?
                        </h4>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                          <li
                            style={{
                              marginBottom: "10px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span style={{ marginRight: "10px" }}>✓</span>
                            Custom AI model development
                          </li>
                          <li
                            style={{
                              marginBottom: "10px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span style={{ marginRight: "10px" }}>✓</span>
                            End-to-end implementation
                          </li>
                          <li
                            style={{
                              marginBottom: "10px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span style={{ marginRight: "10px" }}>✓</span>
                            Ongoing support & maintenance
                          </li>
                          <li
                            style={{
                              marginBottom: "10px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span style={{ marginRight: "10px" }}>✓</span>
                            Scalable & secure solutions
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Fade>
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12} md={7}>
                <ScrollAnimation
                  animateIn="fadeInRight"
                  animateOut="fadeOutRight"
                >
                  <Fade right>
                    <AIContactForm
                      onSubmit={this.handleAISubmit}
                      formData={this.state.aiFormData}
                      setFormData={this.setAIFormData}
                      isSubmitted={this.state.aiFormSubmitted}
                    />
                  </Fade>
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>
        </div>

        <FooterCompo />
      </div>
    );
  }
}

Contact.defaultProps = {};
Contact.propTypes = {
  env: PropTypes.object.isRequired,
};

export default Contact;
