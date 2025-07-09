import React from "react";
import PropTypes from "prop-types";
require("./typography.css");

class CreateTextElement extends React.Component {
  render() {
    return (
      <div style={{ ...this.props.style }}>
        {React.createElement(
          this.props.element,
          {
            style: {
              fontSize: this.props.fontSize,
              color: this.props.color,
              ...this.props.style,
              marginLeft: this.props.marginLeft
            },
            className: this.props.className
          },
          this.props.children
        )}
      </div>
    );
  }
}

CreateTextElement.defaultProps = {
  element: "div",
  color: "white"
};

CreateTextElement.propTypes = {
  style: PropTypes.object,
  fontSize: PropTypes.string,
  element: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
};

export default CreateTextElement;
