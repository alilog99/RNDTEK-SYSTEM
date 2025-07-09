import PropTypes from "prop-types";
import React from "react";

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.style} className="container">
        {this.props.children}
      </div>
    );
  }
}

Container.defaultProps = {};

Container.propTypes = {
  style: PropTypes.object,
  children: PropTypes.element.isRequired
};

export default Container;
