import PropTypes from "prop-types";
import React from "react";
import "./typography.css";

class CreateTextElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const fSize = this.props.fontSize ? this.props.fontSize : null;
    return React.createElement(
      // type of new element
      this.props.element,
      // style for new element
      {
        style: {
          color: this.props.color,
          textDecoration: "none",
          fontSize: fSize,
          ...this.props.style
        },
        // attributes for new element
        href: this.props.href ? this.props.href : "",
        target: this.props.target? this.props.target:"",
        className: this.props.className,
        onClick: this.props.onClick
      },
      // new element's children
      this.props.children
    );
  }
}

// default values for this component
CreateTextElement.defaultProps = {
  color: "white",
  element: "div"
};

// defined values for this component
CreateTextElement.propTypes = {
  element: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default CreateTextElement;
