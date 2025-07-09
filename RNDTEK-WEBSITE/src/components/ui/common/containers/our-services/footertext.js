import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import React from "react";
import "../our-services/footertext.css";

class TextboxFooter extends React.Component {


  render() {
    return (
      <div style={{ ...this.props.style }}>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control newsletter-box"
            placeholder="EMAIL"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button
              class="btn btn-primary newsletter-btn"
              type="button"
              id="button-addon2"
            >
              <i class="far fa-paper-plane" />
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
