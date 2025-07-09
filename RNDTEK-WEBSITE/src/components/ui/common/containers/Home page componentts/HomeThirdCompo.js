import PropTypes from "prop-types";
import React from "react";

class HomeThirdComponent extends React.Component {
 

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
    backgroundColor: "rgba(0,113,188," + this.props.opacity + ")",
    padding: "70px 0"
  };

  render() {
    return (
      <div style={{ ...this.backgroundStyle, ...this.props.style }}>
        <div style={this.transLayer} />

        <div style={{ position: "relative" }}>{this.props.children}</div>
      </div>
    );
  }
}

HomeThirdComponent.defaultProps = {
  opacity: ".50"
};

HomeThirdComponent.propTypes = {
  style: PropTypes.object,
  backgroundImage: PropTypes.string,
  opacity: PropTypes.string
};

export default HomeThirdComponent;
