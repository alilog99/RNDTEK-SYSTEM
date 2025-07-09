import PropTypes from "prop-types";
import React from "react";
import FooterCompo from "../Home page componentts/FooterCompo";
import PortHead from "../Portfolio/PortfolioHead";
import TabsPort from "../Portfolio/PortTabsBar/tabs";

class Portfolio extends React.Component {


  render() {
    return (
      <div style={{ ...this.props.style }}>
        <PortHead />
        <TabsPort/>
        
        <FooterCompo />
      </div>
    );
  }
}

Portfolio.defaultProps = {};

Portfolio.propTypes = {
  style: PropTypes.object
};

export default Portfolio;
