import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactResizeDetector from "react-resize-detector";
import Fade from 'react-reveal/Fade';
import { Tab, TabList, TabPanel, Tabs } from 'react-web-tabs';


class ServicesTabs extends React.Component {

  state = {
    activeTab: 'one',
    fullText: false
  }

  onResize = (width, height) => {
    if (width < 435) {
      this.setState({ fullText: true })
    }
    else {
      this.setState({ fullText: false })
    }
  };

  tabButtonStyle = {
    backgroundColor: 'white',
    borderWidth: '0px',
    fontFamily: 'Poppins-SemiBold',
    paddingLeft: '16px',
    paddingRight: '22px',
    width: '100%',
    textAlign: "left",
    outline: 'none',
    border: '1px solid #efefef',
  }


  render() {
    const { activeTab, fullText } = this.state
    return (

      <div>
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={this.onResize}
        />
 <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'><Fade bottom>
        <Tabs
          defaultTab={"one"}
          onChange={(activeTab) => this.setState({ activeTab })}
        >
          <div style={{ display: 'flex', flex: "1", margin: '0px 9%', marginTop: '30px', flexWrap: 'wrap' }}>

            <TabList style={{ display: 'inline-block', lineHeight: "2.8" }}   >

              <Tab style={{ color: activeTab === "one" ? '#0072BC' : '#838383', ...this.tabButtonStyle, borderBottomWidth: '0' }} tabFor="one">Website Development</Tab>
              <div>
                <Tab style={{ color: activeTab === "two" ? '#0072BC' : '#838383', ...this.tabButtonStyle, borderBottomWidth: '0' }} tabFor="two">Game Development</Tab>
              </div>
              <div>
                <Tab style={{ color: activeTab === "three" ? '#0072BC' : '#838383', ...this.tabButtonStyle, borderBottomWidth: '0' }} tabFor="three">App Development</Tab>
              </div>
              <div>
                <Tab style={{ color: activeTab === "four" ? '#0072BC' : '#838383', ...this.tabButtonStyle }} tabFor="four">Digital Marketing</Tab>
              </div>
              <div>
                <Tab style={{ color: activeTab === "five" ? '#0072BC' : '#838383', ...this.tabButtonStyle }} tabFor="five">AI & Data Solutions</Tab>
              </div>
              <div>
                <Tab style={{ color: activeTab === "six" ? '#0072BC' : '#838383', ...this.tabButtonStyle }} tabFor="six">AI Analytics</Tab>
              </div>
              <div>
                <Tab style={{ color: activeTab === "seven" ? '#0072BC' : '#838383', ...this.tabButtonStyle }} tabFor="seven">AI Chatbots</Tab>
              </div>
            </TabList>
            <TabPanel style={{ display: 'inline-block', width: fullText ? "100%" : 'calc(92% - 210px)', marginTop: '8px', marginLeft: '12px' }} tabId="one">
              <h2 style={{ color: "black", fontFamily: "Poppins-Bold", fontSize: '20px' }}>Website Development</h2>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>There are many web advancement locales however<b> RNDTEK </b>  is a web improvement organization having specialists in the majority of the fundamental innovation stages. Regardless of how basic or complex your site development necessities are, we can convey the normal outcomes. We have long periods of involvement in creating noteworthy sites with intelligent highlights and internet based life combination..</p>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>We give extraordinary custom site advancement administrations to our customers. We give a customized answers for our clients with the objective that they help in making their business increasingly capable and profitable.We don't drive readymade web enhancement courses of action on the matter of the client that don't fit in the arrangement of things typically. In the event that our items breeze through website composition and advancement test stage just, we convey it to client.</p>
              <p  style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>Unparalleled open technology expertise and experience. In-house, front-end experts: Business Analysts, Designers & UX/UI Specialists</p>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>Proven track record of successful web design and development project delivery</p>
            </TabPanel>
            <TabPanel style={{ display: 'inline-block', width: fullText ? "100%" : 'calc(92% - 210px)', marginTop: '8px', marginLeft: '12px' }} tabId="two">
              <h2 style={{ color: 'black', fontFamily: "Poppins-Bold", fontSize: '20px' }}>Game Development</h2>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>We think gaming is something beyond great illustrations and modern coding. Our skilled group of exceptionally proficient and experienced diversion designers has a talent for going well beyond to make recreations that keep individuals snared on for a considerable length of time. Making outline topping diversions for the two iOS and Android is both an enthusiasm and a side interest for <b>RNDTEK</b> bright amusement engineers. </p>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}><h3>.</h3>Inventive Game Developers</p>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}><h3>.</h3>Conveying Highly Functional Games Gaming Apps Delivered On Time</p>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}> <h3>.</h3>Gaming Apps Delivered On Time</p>
            </TabPanel>
            <TabPanel style={{ display: 'inline-block', width: fullText ? "100%" : 'calc(92% - 210px)', marginTop: '8px', marginLeft: '12px' }} tabId="three">
              <h2 style={{ color: 'black', fontFamily: "Poppins-Bold", fontSize: '20px' }}>App Development</h2>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>At <b>RNDTEK</b> , we are prepared to meet our client's prerequisite. Regardless of whether he needs applications for iPhone or andriod, our specialists have the aptitude to offer them precisely what they are searching for.</p>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>we have master groups of iPhone and Android/IOS engineers who create redid versatile application for pretty much every class and each sort of organization.Our android/IOS designers realize how to deal with android and IOS stage effortlessly. They make an application that offers first class administration to end client. What you truly requirement for your android/IOS application is "better client encounter" since this thing will transform clients into your clients. As you most likely are aware Android and IOS App Development Services are intended for a high divided, multi-gadget world. In spite of the fact that API rules are adaptable yet quality confirmation testing process is extremely strict. Notwithstanding, our specialists are sufficiently able to deal with each procedure of IOS and android advancement.</p>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>If you prefer cross-platform responsive application, then we can design the best back-end system based on your business's organisation. Just tell us what you want and our experts will build it for you.</p>
            </TabPanel>
            <TabPanel style={{ display: 'inline-block', width: fullText ? "100%" : 'calc(92% - 210px)', marginTop: '8px', marginLeft: '12px' }} tabId="four">
              <h2 style={{ color: 'black', fontFamily: "Poppins-Bold", fontSize: '20px' }}>Digital Marketing</h2>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>Is your site buckling down for you? We realize that web ventures don't end once your webpage is live. Ensure your site is acquiring drives, driving income, and helping you achieve your goals.</p>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>We make long haul digital marketing plans to drive qualified leads and develop your primary concern. From setting the system to composing substance and planning advertisements, we're your online development accomplice. Our advanced showcasing device belt incorporates methodology and arranging, SEO, paid publicizing, lead age, content advertising, online life promoting.</p>
            </TabPanel>
            <TabPanel style={{ display: 'inline-block', width: fullText ? "100%" : 'calc(92% - 210px)', marginTop: '8px', marginLeft: '12px' }} tabId="five">
              <h2 style={{ color: 'black', fontFamily: "Poppins-Bold", fontSize: '20px' }}>AI & Data Solutions</h2>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>At RNDTEK, we unlock the true potential of your data through cutting-edge AI and Machine Learning integration. Whether you are aiming to automate business processes, gain deeper customer insights, or improve decision-making, our AI-powered solutions are tailored to meet your needs.</p>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>We specialize in data-driven strategies that help businesses thrive in today's competitive landscape. Our expert team brings experience in AI & ML model development, training, and deployment, ensuring that you get intelligent systems that work seamlessly.</p>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>From data analytics and predictive modeling to advanced machine learning integrations, we provide solutions that not only solve complex problems but also drive measurable results. At RNDTEK, we make sure your organization stays ahead of the curve with innovative AI technologies and actionable insights.</p>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>Let us help you transform your data into a strategic asset that propels your business forward.</p>
            </TabPanel>
            <TabPanel style={{ display: 'inline-block', width: fullText ? "100%" : 'calc(92% - 210px)', marginTop: '8px', marginLeft: '12px' }} tabId="six">
              <h2 style={{ color: 'black', fontFamily: "Poppins-Bold", fontSize: '20px' }}>AI Analytics & Data Visualization</h2>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>Transform your business intelligence with our advanced AI analytics platform. We provide real-time data visualization, predictive analytics, and interactive dashboards that turn complex data into actionable insights.</p>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>Our AI-powered analytics solutions include machine learning models for trend prediction, customer behavior analysis, and performance optimization. We create custom dashboards that provide 360-degree views of your business metrics.</p>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>From revenue forecasting to operational efficiency tracking, our analytics tools help you make data-driven decisions with confidence. Experience the power of AI-enhanced business intelligence.</p>
            </TabPanel>
            <TabPanel style={{ display: 'inline-block', width: fullText ? "100%" : 'calc(92% - 210px)', marginTop: '8px', marginLeft: '12px' }} tabId="seven">
              <h2 style={{ color: 'black', fontFamily: "Poppins-Bold", fontSize: '20px' }}>Intelligent Chatbots & Conversational AI</h2>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>Revolutionize customer engagement with our intelligent chatbot solutions. Our AI-powered conversational agents provide 24/7 customer support, handle complex queries, and deliver personalized experiences.</p>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>Built with advanced Natural Language Processing (NLP) and Machine Learning, our chatbots understand context, learn from interactions, and continuously improve their responses. They integrate seamlessly with your existing platforms and CRM systems.</p>
              <p style={{ color: 'lightblack', fontFamily: "Poppins-Light" }}>From lead generation to customer service automation, our conversational AI solutions help you scale your customer support while maintaining high satisfaction levels. Experience the future of customer interaction.</p>
            </TabPanel>
          </div>
        </Tabs>
        </Fade>
        </ScrollAnimation>
      </div>
    )
  }

}

ServicesTabs.defaultProps = {

}

ServicesTabs.propTypes = {

}

export default ServicesTabs;