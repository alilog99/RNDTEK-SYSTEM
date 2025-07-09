import React from 'react';
import CreateTextElement from '../../../typography/element_white';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Navbar from '../../../Navbar/navbar';

class HomeThird extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    backgroundstyle = {
        backgroundColor: "#f4f4f4",
        minHeight: "600px",
        position: "absolute",
        backgroundRepeat: "no-repeat",
        /* background-color: black, */
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: '100%'

        
        
      };
      containerstyle = {
        paddingTop: "25px"
      };
    
    render(){
        return(
             <div style={{ ...this.backgroundstyle, ...this.props.style }}>
                         <div style = {{zIndex: 18, marginBottom: '-121px', position: 'relative'}}> <Navbar/></div>

               <div className="col-12 col-md-12" style={{ position: "absolute", height: "100%", paddingLeft: "0px", paddingRight: "0px" }}>
              <img src={this.props.backimg} style={{ height: "100%" }} alt="" />
            </div>
            
                <div className="container"   style={{ ...this.containerstyle,textAlign:"left",    position: 'relative' }}>
               
                    <div className="container" style={{textAlign:"left"}}>
                    <div className="row no-gutters">
                     <div className="col-sm-12 col-md-12">
                     <CreateTextElement element="p" fontSize="24px" color="white">
                      {this.props.massege}
                     {/* “Passion, knowledge and a genuine interest in achieving the best for clients is what makes a truly professional Financial Adviser.<br/> Jennifer had this and more. */}
                     </CreateTextElement>
                     </div>
                     <div className="col-sm-12 col-md-5">
                     <CreateTextElement element="p" fontSize="15px" color="white">
                    {this.props.Name}
   
                    {/* Mr. Steve Rogers */}
                    </CreateTextElement>
                     </div>
                    </div>
              
                    </div>
                    {/* <div style={{width:'100%'}}>
                        <img src={this.props.img} alt="" style={{marginBottom:"22px", marginTop:"15px",width: '10%'}} />
                    </div> */}
                   
                   
                {/* <Carousel className="custom" showArrows={false} infiniteLoop emulateTouch showThumbs={false} >
                <div>
                    <CreateTextElement element="small" fontSize="20px" >
                    Our Client Say
                    </CreateTextElement>
                   
                </div>
                </Carousel> */} 
                </div>
            </div>
        )
    }

}
HomeThird.defaultProps = {

}

HomeThird.propTypes = {

}

export default HomeThird;