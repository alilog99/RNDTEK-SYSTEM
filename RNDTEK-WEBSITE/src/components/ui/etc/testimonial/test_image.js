import PropTypes from "prop-types";
import React from "react";
import image from "../../../../assets/imgs/round-img.jpg";

class TestImage extends React.Component {


  backgroundStyle = {
    background: "url(" + this.props.backgroundImage + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",

    position: "relative"
  };

  transLayer = {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: this.props.isActive ? "block" : "none",
    position: "absolute",
    backgroundColor: "rgba(0,0,0," + this.props.opacity + ")",
    borderRadius: "360px"
  };

  render() {
    return (
      <div style={{ ...this.backgroundStyle, ...this.props.style }}>
        <div style={this.transLayer}>
          <img
            src={image}
            style={{ height: "40px", width: "40px", borderRadius: "360px" }}
             alt="img" />
        </div>
      </div>
    );
  }
}

TestImage.defaultProps = {
  isActive: true
};

TestImage.propTypes = {
  style: PropTypes.object
};

export default TestImage;
