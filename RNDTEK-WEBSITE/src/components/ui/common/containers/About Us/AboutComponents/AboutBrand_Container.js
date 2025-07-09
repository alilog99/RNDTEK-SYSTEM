import PropTypes from "prop-types";
import React from "react";

class BranContainer extends React.Component {

  backgroundStyle = {
    background: "url(" + this.props.backgroundImage + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "500px",
    position: "relative"
  };

  render() {
    return (
      <div style={{ ...this.backgroundStyle, ...this.props.style }}>
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

BranContainer.defaultProps = {};

BranContainer.propTypes = {
  style: PropTypes.object
};

export default BranContainer;
