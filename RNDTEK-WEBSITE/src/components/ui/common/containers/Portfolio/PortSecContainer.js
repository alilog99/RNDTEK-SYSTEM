import "animate.css/animate.min.css";
import PropTypes from "prop-types";
import React from "react";
import CreateTextElement from "../../typography/create_text_element";
import Button from "@material-ui/core/Button";
import Modal from 'react-responsive-modal';
import styles from './custom-animation.css';




class PortGridContainer extends React.Component {

  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    // const { open } = this.state;
    // const modal = {
    //   maxWidth: 'none',padding: 'initial',backgroundColor: 'transparent'
    // };
    
    return (
      <div>
      <Button   onClick={this.props.onClick} style={{    outline: 'none'}}>
      <div
        style={{ display: "inline-block", ...this.props.style, margin: "16px" }}
      >
        
          <img style={{...this.props.imgstyle}} src={this.props.backImg} alt="" />

          <CreateTextElement
            element="div"
            color="#9a9999"
            style={{ textAlign: "center" , fontSize:"21px",marginTop: '6px'}}
          >
            {this.props.title}
          </CreateTextElement>

          <CreateTextElement
            element="div"
            color="#9a9999"
            style={{ textAlign: "center" }}
          >
            {this.props.name}
          </CreateTextElement>
      </div>
      </Button>
       <Modal open={this.props.open} onClose={this.props.onClose} center 
        showCloseIcon={false}
        // classes={false}
        // animationDuration={1000}

        classNames={{
          modal: styles.modal,
          // transitionEnterActive: styles.transitionEnterActive,
          // transitionExit: styles.transitionExitActive,
          // transitionExitActive: styles.transitionExitActive,
        }}
       >
          {this.props.children   }
     </Modal>
     </div>
    );
  }
}

PortGridContainer.defaultProps = {
  open: false,
  onClose: ()=>{}
};

PortGridContainer.propTypes = {
  style: PropTypes.object
};

export default PortGridContainer;
