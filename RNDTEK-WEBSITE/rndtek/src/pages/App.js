import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
// import Aboutus from "../components/ui/common/containers/About Us/aboutuspge";
// import ContactusTop from "../src/components/ui/common/containers/contact us/contact-us";
import Backgound from "../components/ui/common/containers/Home page componentts/background";
// import OurServices from "../components/ui/common/containers/our-services/services";
// import Portfolio from "../components/ui/common/containers/Portfolio/Portfoliopage";
import "../App.css";
import logo from "../assets/imgs/rnd.gif";
// import Contact from "../components/ui/common/containers/contact us/contact-us";
// import About from "./About-us";
import PortfolioPage from "./portfolio-page";
import ContactPage from "./contact-page";
import ServicesPage from "./services-page";
import AIServicesPage from "./ai-services-page";
import AboutPage from "./About-us";
import HomePage from "./home-page";
import ScrollToTop from "../components/ui/etc/scroll-top/scroll-top"
// import ContactusTop from "../src/components/ui/common/containers/contact us/Contactustop";
require("../assets/css/main.css");

// const checkActive = (match, location) => {
//   //some additional logic to verify you are in the home URI
//   if(!location) return false;
//   const {pathname} = location;
//   console.log(pathname);
//   return pathname === "/";
// }

class App extends Component {
  
  state = {
    spinner: true
  }

  componentDidMount(){
  }

  clearSpinner = () =>{
    console.log('here')
    setTimeout(()=>{
      this.setState({spinner: false})
    }, 7500)    
  }

  render() {
    const {spinner} = this.state
    return (
      <HashRouter>
           <ScrollToTop>

        <div style = {{position: 'relative'}}>
        {/* <div onLoad = {()=>this.clearSpinner()} style = {{position:'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor:'#fff', zIndex: 500, display: spinner? 'block': 'none'}}>
          <div style = {{display:'flex', flex: "1", height: '100vh', alignItems:'center', justifyContent: 'center'}}>
          <img src={logo} style={{width:'480px',height:'200px'}} alt="logo"/>
          </div>
        </div> */}
          <Route
            exact={true}
            path="/"
            onlyActiveOnIndex
            render={() => (
              // <ScrollToTop/>
              <ScrollToTop>
              <div className="App">
                <HomePage />
              </div>
              </ScrollToTop>
            )}
          />
          <Route
            exact={true}
            path="/About-us"
            onlyActiveOnIndex
            render={() => (
              <ScrollToTop>

              <div className="App">
                <AboutPage />
              </div>
              </ScrollToTop>
            )}
          />
          <Route
            exact={true}
            path="/portfolio-page"
            onlyActiveOnIndex
            render={() => (
              <ScrollToTop>

              <div className="App">
                <PortfolioPage />
              </div>
              </ScrollToTop>
            )}
          />
          <Route
            exact={true}
            path="/contact-page"
            onlyActiveOnIndex
            render={() => (
              <ScrollToTop>

              <div className="App">
                <ContactPage env={this.props.env} />
              </div>
              </ScrollToTop>
            )}
          />
            
          <Route
            exact={true}
            onlyActiveOnIndex
            path="/services-page"
            render={() => (
              <ScrollToTop>

              <div className="App">
                <ServicesPage />
              </div>
              </ScrollToTop>
            )}
          />
          <Route
            exact={true}
            onlyActiveOnIndex
            path="/ai-services-page"
            render={() => (
              <ScrollToTop>

              <div className="App">
                <AIServicesPage />
              </div>
              </ScrollToTop>
            )}
          />
        </div>
        </ScrollToTop>
      </HashRouter>
    );
  }
}

export default App;
