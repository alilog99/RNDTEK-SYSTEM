import React from 'react'
import PropTypes from 'prop-types'
import CreateTextElement from "../../../typography/create_text_element";
import opacity from "../../../../../../assets/imgs/portfolio imgs/opacitylayer.png";
import Opacitytranslayer from "./Opacity";
import { Button} from 'reactstrap';



class CollapseComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
}




handleToggleClick() {
  this.setState(prevState => ({
    showWarning: !prevState.showWarning
  }));
}

handleBackgroundClick = () =>{
  this.setState({ open: false });

}

state = {
  open: false,
};

onOpenModal = () => {
  this.setState({ open: true });
};

onCloseModal = () => {
  this.setState({ open: false });
};


toggleHidden () {
  this.setState({
    isHidden: !this.state.isHidden
  })
}

    render(){
      // const {open} = this.state
  
        return(
          
          <Opacitytranslayer  backgroundImage={opacity} opacity="0.9">

            <div className="container" style={{...this.props.style}}>
            <div className="row" style={{padding:"23px"}}>
            <div className="col-6 col-sm-6" style={{borderBottom: '1px solid #fff'}}>
                 <CreateTextElement element="div" fontSize="20px" style={{marginBottom: '12px'
}}>
                     {this.props.title}
                 </CreateTextElement>
              </div>

              <div  className="col-6 col-sm-6" style={{textAlign:"right",borderBottom: '1px solid #fff'}}>
              <Button color="primary"  onClick={this.props.onClose}  style={{ border:"none",    boxShadow: 'none',backgroundColor:"transparent" }}>
            
              <i
                // onClose={this.props.onClose}
              class="fas fa-times" style={{color:"#fff"}} ></i>
              </Button>

              </div>

              <div className="col-md-6 col-sm-12">
                <div className="container" style={{ paddingTop: '40px',textAlign: 'right', marginBottom:"20px"}}>
                <img src={this.props.projectimg} alt="projectImage"  style={{width:'100%'}}/>

                </div>
                </div>
                <div className="col-md-6 col-sm-12">
                <div className="container" style={{ paddingTop: '40px',textAlign: 'left'}}>
                <CreateTextElement element="h4" style={{marginBottom: '12px'}}>
                     Project Details     
                 </CreateTextElement>
                 <div className="row">
                   <div className="col-4 ">
                   <CreateTextElement element="h5" fontSize="13px">
                   Date
                 </CreateTextElement>
                   </div>
                   <div className="col-6 ">
                   <CreateTextElement element="p" fontSize="13px">
                   {this.props.date}
                 </CreateTextElement>
                   </div>
                 </div>
                 <div className="row">
                   <div className="col-4 ">
                   <CreateTextElement element="h5" fontSize="13px">
                   Client
                 </CreateTextElement>
                   </div>
                   <div className="col-6 ">
                   <CreateTextElement element="p" fontSize="13px">
                   {this.props.clientname}
                 </CreateTextElement>
                   </div>
                 </div>
                 <div className="row">
                   <div className="col-4 ">
                   <CreateTextElement element="h5" fontSize="13px">
                   Categories
                 </CreateTextElement>
                   </div>
                   <div className="col-6 ">
                   <CreateTextElement element="p" fontSize="13px">
                   {this.props.categories}
                 </CreateTextElement>
                   </div>
                 </div>
                 <div className="row">
                   <div className="col-4 ">
                   <CreateTextElement element="h5" fontSize="13px">
                   Website
                 </CreateTextElement>

                   </div>
                   <div className="col-6 ">
                   <CreateTextElement element="p" fontSize="13px">
                   {this.props.website}
                 </CreateTextElement>
                   </div>
                 </div>
               </div>
              </div>


              <div className="container" style={{ paddingTop: '40px'}}>
              <div className="row">
              <div className="col-md-4">
               <div style={{backgroundColor:"#005daa", minHeight:"157px",padding:"20px" , marginBottom:"20px",borderRadius: '7px'}}>
                 <CreateTextElement element="h5" fontSize="13px" >
                  The Challenge
                 </CreateTextElement>
                 <CreateTextElement element="p" fontSize="13px">
                 {this.props.challenge}
                 </CreateTextElement>
               </div>
              </div>

              <div className="col-md-4">
               <div style={{backgroundColor:"#005daa", minHeight:"157px",padding:"20px", marginBottom:"20px",borderRadius: '7px'}}>
                 <CreateTextElement element="h5" fontSize="13px" >
                  The Solution
                 </CreateTextElement>
                 <CreateTextElement element="p" fontSize="13px">
                 {this.props.solution}
                 </CreateTextElement>
               </div>
              </div>
              <div className="col-md-4">
               <div style={{backgroundColor:"#005daa", minHeight:"157px",padding:"20px", marginBottom:"20px",borderRadius: '7px'}}>
                 <CreateTextElement element="h5" fontSize="13px" >
                  The Result
                 </CreateTextElement>
                 <CreateTextElement element="p" fontSize="13px">
                 {this.props.result}
                 </CreateTextElement>
               </div>
              </div>
            </div>
            </div>
            </div>
             
             
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
          dignissimos esse fuga! Minus, alias. */}
            </div>
            </Opacitytranslayer>

        )
    }
}

CollapseComponent.defaultProps = {

}

CollapseComponent.propTypes = {
    style: PropTypes.object
}

export default CollapseComponent;