import PropTypes from "prop-types";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import app_development from "../../../../assets/imgs/app-development.png";
import digitalmarket from "../../../../assets/imgs/digital-marketing.png";
import gamedev from "../../../../assets/imgs/game-development.png";
import background1 from "../../../../assets/imgs/Layer20.png";
import websitedev2 from "../../../../assets/imgs/website-development-2.png";
import websitedev from "../../../../assets/imgs/website-development.png";
import Nav from "../../common/Navbar/navbar";
import "./Home_slider.css";
import CreateTextElement from "../../common/typography/create_text_element";

const backgroundImageList = [background1,app_development,digitalmarket,websitedev,websitedev2,gamedev]
class HomeSlider extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        activeIndex: 0
      };
    }

  render() {
    console.log(this.props.backgroundIndex)
    return (
    <div style = {{position:'relative'}}>
        <div style = {{zIndex: 18, marginBottom: '-121px', position: 'relative'}}> <Nav/></div>
      <div className = "carousel_wrapperr" style = {{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0'}}>
        <Carousel
          infiniteLoop
          autoPlay = {false}
         interval={false}
          swipeable={false}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          selectedItem = {this.props.backgroundIndex}
          showIndicators={false}
          width={'100%'}
        >
         {backgroundImageList.map((item, index) => (
          <div className="imges" style={{    height: '100%', backgroundImage: "url(" + item + ")",backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}} >
        
          </div>
         ))}
          
        </Carousel>
      </div>
      <div style = {{minHeight: '600px'}}>
            {this.props.children}</div>
      </div>
     
    );
  }
}

HomeSlider.defaultProps = {};

HomeSlider.propTypes = {
  style: PropTypes.object
};

export default HomeSlider;



