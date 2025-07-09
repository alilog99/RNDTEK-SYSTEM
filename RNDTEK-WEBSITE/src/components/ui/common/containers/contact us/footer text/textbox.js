import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import React from "react";
import "../footer text/textbox.css";

class TextboxFooter extends React.Component {


  render() {
    return (
      <div style={{ ...this.props.style }}>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control newsletter-box"
            placeholder="Your name"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
        </div>
      </div>
    );
  }
}

TextboxFooter.defaultProps = {};

TextboxFooter.propTypes = {
  style: PropTypes.object
};

export default TextboxFooter;
