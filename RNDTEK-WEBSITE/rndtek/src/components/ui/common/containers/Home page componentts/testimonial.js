import PropTypes from "prop-types";
import React from "react";

class Testimonial extends React.Component {

  render() {
    return <div style={{ ...this.props.style }} />;
  }
}

Testimonial.defaultProps = {};

Testimonial.propTypes = {
  style: PropTypes.object
};

export default Testimonial;
