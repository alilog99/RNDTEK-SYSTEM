import PropTypes from "prop-types";
import React from "react";

class BackgroundContainer extends React.Component {

  backgroundStyle = {
    background: "url(" + this.props.backgroundImage + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "500px",
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
        <div className="container" style={{ position: "relative" }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

BackgroundContainer.defaultProps = {
  opacity: ".50"
};

BackgroundContainer.propTypes = {
  style: PropTypes.object,
  backgroundImage: PropTypes.string,
  opacity: PropTypes.string
};

export default BackgroundContainer;
