import PropTypes from "prop-types";
import React from "react";

class Footer extends React.Component {


  backgroundStyle = {
    backgroundColor: "#0071bc",
    minHeight: "317px",
    position: "relative"
  };

  render() {
    return (
      <div style={{ ...this.backgroundStyle, ...this.props.style }}>
        <div style={this.transLayer}>
          <div className="container">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

Footer.defaultProps = {
  opacity: ".50"
};

Footer.propTypes = {
  style: PropTypes.object,
  backgroundImage: PropTypes.string,
  opacity: PropTypes.string
};

export default Footer;
