import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

class IconLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.style}>
        <NavLink
          to={this.props.href}
          style={{ textDecoration: "none", color: "white" }}
        >
          {this.props.children}
        </NavLink>
      </div>
    );
  }
}

// props for icon link button
IconLink.propTypes = {
  children: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired
};

export default IconLink;
