import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
// import roundimg from "../../../assets/images/roundimg.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeThird from './homeThird';
import "./home-carusosel-text.css";
import app_development from "../../../../../../assets/imgs/app-development.png";
import digitalmarket from "../../../../../../assets/imgs/digital-marketing.png";
import gamedev from "../../../../../../assets/imgs/game-development.png";
import background1 from "../../../../../../assets/imgs/Layer20.png";
import websitedev2 from "../../../../../../assets/imgs/website-development-2.png";
import websitedev from "../../../../../../assets/imgs/website-development.png";
import { homeSilde } from "../../../../../constants/strings";


class HomeSlider extends React.Component{
    backgroundstyle = {
        // backgroundColor: "#f4f4f4",
        minHeight: "600px",
        position: "relative",
        backgroundRepeat: "no-repeat",
        /* background-color: black, */
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      };
      containerstyle = {
        // paddingTop: "50px"
      };
    render(){
        return(
            <div style={{ ...this.backgroundstyle, ...this.props.style }}>
    
                   <Carousel className="custom" showStatus={false} showArrows={false} autoPlay={false} infiniteLoop  showThumbs={false} >
              
                <div>
                
                   <HomeThird 
                   backimg={app_development}
                    massege={
                        <div>
                           <h2>  Revolution The <br />World With Virtual<br /> &amp; Augmented Reality{" "}</h2>
                        </div>
                    }
                    Name={homeSilde}
                    // designation=" CEO, Codementor"
                    
                  />
                </div>
                <div>
                    
                   <HomeThird 
                   backimg={digitalmarket}
                   massege={
                    <div>
                       <h2>  Revolution The <br />World With Virtual<br /> &amp; Augmented Reality{" "}</h2>
                    </div>
                }
                Name={homeSilde}
                    
                  />
                </div>
                <div>
                    
                    <HomeThird 
                    backimg={gamedev}
                    massege={
                        <div>
                           <h2>  Revolution The <br />World With Virtual<br /> &amp; Augmented Reality{" "}</h2>
                        </div>
                    }
                    Name={homeSilde}
                   />
                 </div>
                 <div>
                    
                    <HomeThird 
                    backimg={background1}
                    massege={
                        <div>
                           <h2>  Revolution The <br />World With Virtual<br /> &amp; Augmented Reality{" "}</h2>
                        </div>
                    }
                    Name={homeSilde}
                    
                   />
                 </div>
                 <div>
                    
                    <HomeThird 
                    backimg={websitedev}
                    massege={
                        <div>
                           <h2>  Revolution The <br />World With Virtual<br /> &amp; Augmented Reality{" "}</h2>
                        </div>
                    }
                    Name={homeSilde}
                   />
                 </div>
                </Carousel>   
            </div>
        )
    }

}

HomeSlider.defaultProps = {

}

HomeSlider.propTypes = {

}

export default HomeSlider;