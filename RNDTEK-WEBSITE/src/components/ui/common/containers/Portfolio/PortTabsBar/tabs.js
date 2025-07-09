// import PropTypes from "prop-types";
import "animate.css/animate.min.css";
import React from "react";
import Fade from "react-reveal/Fade";
import Reveal from 'react-reveal/Reveal';

import AApro from "../../../../../../assets/imgs/portfolio imgs/Aaproit.png";
import Atwear from "../../../../../../assets/imgs/portfolio imgs/Atwear.png";
import Bookmot from "../../../../../../assets/imgs/portfolio imgs/BookMot.png";
import Dealsremise from "../../../../../../assets/imgs/portfolio imgs/dealsRemise.png";
import Garage from "../../../../../../assets/imgs/portfolio imgs/Garageplatform.png";
import Softech from "../../../../../../assets/imgs/portfolio imgs/Softec.png";
import Spectratech from "../../../../../../assets/imgs/portfolio imgs/SpectraTech.png";
import teapro from "../../../../../../assets/imgs/portfolio imgs/teapro.png";
import umrahalim from "../../../../../../assets/imgs/portfolio imgs/umrahalim.png";
import PortGridContainer from "../PortSecContainer";
import CollapseComponent from "./collapseComponents";
import "./tabs.css";
import { AppList, GameList, itemList, WebList } from "./tabsList";
// import Modal from 'react-responsive-modal';
// import Button1 from "../../../button/button";


class ProjectModal extends React.Component{
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  render(){
    const { open } = this.state;
    return(
      <div className="col-md-4 col-sm-6 col-12">
        <PortGridContainer
          name={this.props.name}
          title={this.props.title}
          backImg={this.props.backImg}
          imgstyle={{width:"100%"}}
          onClick={this.onOpenModal}
          open={open} 
          onClose={this.onCloseModal}

        >
          <CollapseComponent
            onClose={this.onCloseModal}
            // onCancel={this.toggle}
            // onCancel={this.toggleCollapse("toggler")}
            title={this.props.title}
            projectimg={this.props.projectimg}
            date={this.props.date}
            clientname={this.props.clientname} //"Lord and Taylor"
            categories={this.props.categories} //"Web Design/UX"
            website={this.props.website} //"www.lordandtaylor.com"
            challenge={this.props.challenge} //"To produce a website with the power of HTML5 and CSS3, and to render on different user agents like Mobile and Tablets "
            solution={this.props.solution} //"Android and IPhone App development for amuse-us includes, location based service, QR code management, check-ins, vouchers and deals integration, integration with linked In and cloud server implementation and integration for mobile platforms."
            result={this.props.result} //"Produced simple and crisp Responsive Layout with HTML5 and CSS3"
          />
        </PortGridContainer>
      </div>
    )
  }
}


class TabsPort extends React.Component {


  render() {
    

    return (
      <div>
     
        
        <ul
          className="nav nav-pills mb-3"
          id="pills-tab"
          role="tablist"
          style={{ justifyContent: "center", marginTop: "10px" }}
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="pills-All-tabs"
              data-toggle="pill"
              href="#pills-All"
              role="tab"
              aria-controls="All-tabs"
              aria-selected="true"
            >
              ALL
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-AI-tabs"
              data-toggle="pill"
              href="#pills-AI"
              role="tab"
              aria-controls="AI-tabs"
              aria-selected="false"
            >
              AI
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-Apps-tabs"
              data-toggle="pill"
              href="#pills-Apps"
              role="tab"
              aria-controls="Apps-tabs"
              aria-selected="false"
            >
              APPS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-Website-tabs"
              data-toggle="pill"
              href="#pills-Website"
              role="tab"
              aria-controls="website-tabs"
              aria-selected="false"
            >
              WEBSITE
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pillsLogo-tabs"
              data-toggle="pill"
              href="#pills-Logo"
              role="tab"
              aria-controls="Logo-tabs"
              aria-selected="false"
            >
              LOGO
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-Game-tabs"
              data-toggle="pill"
              href="#pills-Game"
              role="tab"
              aria-controls="Game-tabs"
              aria-selected="false"
            >
              GAME DEVELOPMENT
            </a>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-All"
            role="tabpanel"
            aria-labelledby="All-tabs"
          >
            {/* <Fade In> */}
              <div
                className="container"
                style={{ textAlign: "center", paddingTop: "16px" }}
              >
                <div className="row no-gutters">
                 
                  
                  
                    {itemList.map((item, index)=>{
                      return (
                        <ProjectModal
                          name = {item.name}
                          key = {index}
                          title = {item.title}
                          backImg = {item.backImg}
                          projectimg={item.projectimg}
                          
                          date = {item.date}
                          clientname = {item.clientname}
                          categories = {item.categories}
                          website = {item.website}
                          challenge = {item.challenge}
                          solution = {item.solution}
                          result = {item.result}
                        />
                      )
                    })}
                      
                                  

                  
      
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="AA PRO IT Services Limited"
                      name="Web Design"
                      backImg={AApro}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}
                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="at Wear"
                      name="Mobile App"
                      backImg={Atwear}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="dealsRemise"
                      name="Mobile App"
                      backImg={Dealsremise}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="Book Mot Slot"
                      name="Web Development"
                      backImg={Bookmot}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="Softec Consultancy LTD"
                      name="Web Design"
                      backImg={Softech}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="Spectra Techs"
                      name="Web Design"
                      backImg={Spectratech}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="Garage Platform"
                      name="Web Development"
                      backImg={Garage}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="teapro"
                      name="Mobile App"
                      backImg={teapro}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="UMRAHALIM"
                      name="Mobile App"
                      backImg={umrahalim}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                </div>
              </div>
            {/* </Fade> */}
          </div>
          <div
            className="tab-pane fade"
            id="pills-AI"
            role="tabpanel"
            aria-labelledby="AI-tabs"
          >
            <div className="container" style={{ textAlign: "center", paddingTop: "16px" }}>
              <div className="row no-gutters">
                {require('./tabsList').AIList.map((item, index) => (
                  <ProjectModal
                    name={item.name}
                    key={index}
                    title={item.title}
                    backImg={item.backImg}
                    projectimg={item.projectimg}
                    date={item.date}
                    clientname={item.clientname}
                    categories={item.categories}
                    website={item.website}
                    challenge={item.challenge}
                    solution={item.solution}
                    result={item.result}
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-Apps"
            role="tabpanel"
            aria-labelledby="Apps-tabs"
          >
        {/* <Reveal effect="fadeInUp"> */}
              <div
                className="container"
                style={{ textAlign: "center", paddingTop: "16px" }}
              >
                <div className="row no-gutters">
                 
                  
                  
                    {AppList.map((item, index)=>{
                      return (
                        <ProjectModal
                          name = {item.name}
                          key = {index}
                          title = {item.title}
                          backImg = {item.backImg}
                          projectimg={item.projectimg}
                          
                          date = {item.date}
                          clientname = {item.clientname}
                          categories = {item.categories}
                          website = {item.website}
                          challenge = {item.challenge}
                          solution = {item.solution}
                          result = {item.result}
                        />
                      )
                    })}
                      
                                  

                  
      
                  {/* <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="AA PRO IT Services Limited"
                      name="Web Design"
                      backImg={AApro}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}
                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="at Wear"
                      name="Mobile App"
                      backImg={Atwear}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="dealsRemise"
                      name="Mobile App"
                      backImg={Dealsremise}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="Book Mot Slot"
                      name="Web Development"
                      backImg={Bookmot}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="Softec Consultancy LTD"
                      name="Web Design"
                      backImg={Softech}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="Spectra Techs"
                      name="Web Design"
                      backImg={Spectratech}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="Garage Platform"
                      name="Web Development"
                      backImg={Garage}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="teapro"
                      name="Mobile App"
                      backImg={teapro}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="UMRAHALIM"
                      name="Mobile App"
                      backImg={umrahalim}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div> */}
                </div>
              </div>
            {/* </Reveal> */}
          </div>
          <div
            className="tab-pane fade"
            id="pills-Website"
            role="tabpanel"
            aria-labelledby="Website-tabs"
          >
            {/* <Fade bottom> */}
              <div
                className="container"
                style={{ textAlign: "center", paddingTop: "16px" }}
              >
                <div className="row">


                      
                {WebList.map((item, index)=>{
                      return (
                        <ProjectModal
                          name = {item.name}
                          key = {index}
                          title = {item.title}
                          backImg = {item.backImg}
                          projectimg={item.projectimg}
                          
                          date = {item.date}
                          clientname = {item.clientname}
                          categories = {item.categories}
                          website = {item.website}
                          challenge = {item.challenge}
                          solution = {item.solution}
                          result = {item.result}
                        />
                      )
                    })}
                 
                </div>
              </div>
            {/* </Fade> */}
          </div>
          <div
            className="tab-pane fade"
            id="pills-Logo"
            role="tabpanel"
            aria-labelledby="Logo-tabs"
          >
            {/* <Fade bottom> */}
              <div
                className="container"
                style={{ textAlign: "center", paddingTop: "16px" }}
              >
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="AA PRO IT Services Limited"
                      name="Web Design"
                      backImg={AApro}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="at Wear"
                      name="Mobile App"
                      backImg={Atwear}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="dealsRemise"
                      name="Mobile App"
                      backImg={Dealsremise}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="Book Mot Slot"
                      name="Web Development"
                      backImg={Bookmot}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="Softec Consultancy LTD"
                      name="Web Design"
                      backImg={Softech}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="Spectra Techs"
                      name="Web Design"
                      backImg={Spectratech}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="Garage Platform"
                      name="Web Development"
                      backImg={Garage}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="teapro"
                      name="Mobile App"
                      backImg={teapro}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <PortGridContainer
                      title="UMRAHALIM"
                      name="Mobile App"
                      backImg={umrahalim}
                      imgstyle={{ width: '92%',height: '205px',marginTop: '7px'}}

                    />
                  </div>
                </div>
              </div>
            {/* </Fade> */}
          </div>
          <div
            className="tab-pane fade"
            id="pills-Game"
            role="tabpanel"
            aria-labelledby="Game-tab"
          >
            {/* <Fade bottom> */}
              <div
                className="container"
                style={{ textAlign: "center", paddingTop: "16px" }}
              >
                <div className="row no-gutters">

                {GameList.map((item, index)=>{
                      return (
                        <ProjectModal
                          name = {item.name}
                          key = {index}
                          title = {item.title}
                          backImg = {item.backImg}
                          projectimg={item.projectimg}
                          
                          date = {item.date}
                          clientname = {item.clientname}
                          categories = {item.categories}
                          website = {item.website}
                          challenge = {item.challenge}
                          solution = {item.solution}
                          result = {item.result}
                        />
                      )
                    })}

                
                </div>
              </div>
            {/* </Fade> */}
          </div>
        </div>
      </div>
    );
  }
}

TabsPort.propTypes = {};

export default TabsPort;
