import PropTypes from "prop-types";
import React from "react";

class AboutmidleComp extends React.Component {

  backgroundStyle = {
    background: "url(" + this.props.backgroundImage + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative"
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
AboutmidleComp.defaultProps = {};

AboutmidleComp.propTypes = {
  style: PropTypes.object
};

export default AboutmidleComp;
