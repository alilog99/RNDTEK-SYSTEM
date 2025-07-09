import PropTypes from "prop-types";
import React from "react";
import Nav from "../../Navbar/navbar";


class TopBackground extends React.Component {


  

  render() {
    let backgroundStyle = {
      background: "url(" + this.props.backgroundImage + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      minHeight: "500px",
      position: "relative"
    };
    return (
      
      <div style={{ ...backgroundStyle, ...this.props.style }}>
        <div> <Nav/></div>
        <div  style={{ position: "relative" }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

TopBackground.defaultProps = {
  opacity: ".50"
};

TopBackground.propTypes = {
  style: PropTypes.object,
  backgroundImage: PropTypes.string,
  opacity: PropTypes.string
};
export default TopBackground;
