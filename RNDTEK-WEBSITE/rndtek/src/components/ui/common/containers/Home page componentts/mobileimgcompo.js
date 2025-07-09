import PropTypes from "prop-types";
import React from "react";

class MobileContainer extends React.Component {

  backgroundStyle = {
    background: "url(" + this.props.backgroundImage + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
     minHeight: "400px",
    position: "relative"
  };

  render() {
    return (
      <div style={{ ...this.backgroundStyle, ...this.props.style }}>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

MobileContainer.defaultProps = {};

MobileContainer.propTypes = {
  style: PropTypes.object
};

export default MobileContainer;
