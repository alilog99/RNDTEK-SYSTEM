import PropTypes from "prop-types";
import React from "react";
import "./app_store_badges.css";

class AppStoreBadges extends React.Component {
  constructor(props) {
    super(props);
    this.renderName = this.renderName.bind(this);
  }

  // render required button to be displayed
  renderName() {
    if (this.props.badge == "apple") {
      return "Apple App Store";
    } else if (this.props.badge == "google") {
      return "Google Play Store";
    }
    return "";
  }

  render() {
    return (
      <div style={{ ...this.props.style, display: "inline-block" }}>
        {this.props.badge == "apple" ? (
          // Apple app store button
          <a
            className={"btn-store btn-" + this.props.badge}
            href="#"
            title="Apple App Store"
          >
            Apple App Store
          </a>
        ) : (
          // Google play store button
          <a
            className={"btn-store btn-" + this.props.badge}
            href="#"
            title="Google Play Store"
          >
            Google Play Store
          </a>
        )}
      </div>
    );
  }
}

// default props
AppStoreBadges.defaultProps = {
  storeLink: "#"
};

// defining prop types taken by this element
AppStoreBadges.propTypes = {
  storeLink: PropTypes.string
};

export default AppStoreBadges;
