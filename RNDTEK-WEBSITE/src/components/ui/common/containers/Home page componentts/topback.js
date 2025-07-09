import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React from "react";
import ar from "../../../../../assets/imgs/arrow.png";
import background1 from "../../../../../assets/imgs/Layer20.png";
import Slide from "../../../etc/text carosal/slider";
import Btn from "../../button/button";
import Nav from "../../Navbar/navbar";
import TopBackground from "../Home page componentts/top_backgroundcont";

class Topback extends React.Component {

  render() {
    return (
      <div style={{ ...this.props.style }}>
        <TopBackground
          backgroundImage={background1}
          style={{ paddingBottom: "150px" }}
        >
          <Grid container spacing={16}>
            <Grid item md={12} lg={12} xs={12}>
              <Nav />
              <Slide />
              <Btn
                Gname="Get Started"
                imgarr={ar}
                style={{
                  position: "relative",
                  minHeight: "100px",
                  maxHeight: "123px",
                  color: "white",
                  backgroundColor: "#0071bc",
                  // minHeight: "59px",
                  width: "186px",
                  borderRadius: "43px",
                  marginTop: "4px",
                  marginLeft: "125px"
                }}
              >
                {" "}
              </Btn>
            </Grid>
          </Grid>
        </TopBackground>
      </div>
    );
  }
}

Topback.defaultProps = {};

Topback.propTypes = {
  style: PropTypes.object
};

export default Topback;
