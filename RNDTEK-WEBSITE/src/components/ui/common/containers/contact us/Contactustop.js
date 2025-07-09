import PropTypes from "prop-types";
import React from "react";
import Nav from "../../Navbar/navbar";

class ContactusTop extends React.Component {

  backgroundStyle = {
    background: "url(" + this.props.backgroundImage + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "320px",
    opacity: 0.92,
    borderRadius: "24px",
    boxShadow: "0 8px 32px rgba(102,126,234,0.18)",
    position: "relative"
  };

  transLayer = {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    position: "absolute",
    backgroundColor: "rgba(0,0,0," + this.props.opacity + ")",
    padding: "70px 0"
  };

  render() {
    return (
      <div style={{ ...this.backgroundStyle, ...this.props.style }}>
        <div style={this.transLayer} />
         <div> <Nav /></div>
        <div className="container" style={{ position: "relative" }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

ContactusTop.defaultProps = {
  opacity: ".50"
};

ContactusTop.propTypes = {
  style: PropTypes.object,
  backgroundImage: PropTypes.string,
  opacity: PropTypes.string
};

export default ContactusTop;
