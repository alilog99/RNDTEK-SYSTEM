import PropTypes from "prop-types";
import React from "react";

class OurServicesContainer extends React.Component {
 
  backgroundStyle = {
    background: "url(" + this.props.backgroundImage + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "500px",
    position: "absolute"
  };

  render() {
    return (
      <div style={{ ...this.backgroundStyle, ...this.props.style }}>
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

OurServicesContainer.defaultProps = {};

OurServicesContainer.propTypes = {
  style: PropTypes.object
};

export default OurServicesContainer;
