import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import React from "react";
import "../footer text/textbox.css";

class TextboxFooter extends React.Component {

  render() {
    return (
      <div style={{ ...this.props.style }}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control newsletter-box"
            placeholder="EMAIL"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary newsletter-btn"
              type="button"
              id="button-addon2"
            >
              <i className="far fa-paper-plane" />
            </button>
          </div>
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
