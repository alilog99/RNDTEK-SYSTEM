import PropTypes from "prop-types";
import React from "react";
import CreateTextElement from "../../typography/create_text_element";

class PortGrid extends React.Component {
 

  render() {
    return (
      <div
        style={{ display: "inline-block", ...this.props.style, margin: "16px" }}
      >
        <img
          style={{ width: "300px" }}
          src={this.props.backImg}
          alt="backimg"
        />

        <CreateTextElement
          element="div"
          color="black"
          style={{ textAlign: "center" }}
        >
          {this.props.title}
        </CreateTextElement>

        <CreateTextElement
          element="div"
          color="blue"
          style={{ textAlign: "center" }}
        >
          {this.props.name}
        </CreateTextElement>
      </div>
    );
  }
}

PortGrid.defaultProps = {};

PortGrid.propTypes = {
  style: PropTypes.object
};

export default PortGrid;
