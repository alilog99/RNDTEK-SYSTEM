import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import menu from "../../../../assets/imgs/menu1.png";
import logo from "../../../../assets/imgs/rndtek.png";
import "../Navbar/Navbar.css";

class Navbar extends React.Component {


  render() {
    return (
      <Grid >
        <Grid item xs={12} md={12} lg={12}>
          <nav
            className="navbar navbar-expand-lg "
            style={{ marginTop: "0", marginLeft: "6px" }}
          >
          <NavLink exact href="/" to="/" 
            onClick={() => window.scrollTo(0, 0)}

              // activeclassName="active"
              >            <img src={logo} alt="logo" style={{ marginTop: "35px" }} />
              </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ outline: "0px" }}
            >    
              <span className="navbar-toggler-icon">
                {" "}
            
                <img src={menu} alt="icon" style={{ height: "38px" }} />
                {/* </NavLink> */}
              </span>
            </button>

            <div className="collapse navbar-collapse navbar-right" id="navbarNavDropdown">
              <ul className="navbar-nav mr-right " >
                <li className="nav-item">
                  <NavLink exact href="/" to="/" 
                  // activeclassName="active"
                  >
                    HOME{" "}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    exact
                    href="/services-page"
                    to="/services-page"
                    onClick={() => window.scrollTo(0, 0)}
                    // activeclassName="active"
                  >
                    {" "}
                    OUR SERVICES
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    href="/portfolio-page"
                    to="/portfolio-page"
                    // activeclassName="active"
                  >
                    {" "}
                    PORTFOLIO
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    exact
                    href="/About-us"
                    to="/About-us"
                    // activeclassName="active"
                  >
                    {" "}
                    ABOUT US
                  </NavLink>
                </li>

                <li className="nav-item" style={{    marginBottom: "17px"}}>
                  <NavLink
                    exact
                    href="/contact-page"
                    to="/contact-page"
                    // activeclassName="active"
                  >
                    CONTACT US
                  </NavLink>
                </li>

              </ul>
            </div>
          </nav>
        </Grid>
      </Grid>
    );
  }
}

Navbar.defaultProps = {};

Navbar.propTypes = {
  style: PropTypes.object
};

export default Navbar;
