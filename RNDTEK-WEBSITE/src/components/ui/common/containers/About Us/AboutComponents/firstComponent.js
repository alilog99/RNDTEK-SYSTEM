import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React from "react";
import about from "../../../../../../assets/imgs/aboutusback.png";
import ar from "../../../../../../assets/imgs/arrow.png";
import Btn from "../../../button/button";
import Nav from "../../../Navbar/navbar";
import AboutBackTop from "../aboutus";

class FirstCompo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ ...this.props.style }}>
        <AboutBackTop
          backgroundImage={about}
          style={{ paddingBottom: "150px" }}
        >
          <Grid container spacing={16}>
            <Grid item md={12} lg={12} xs={12}>
              <Nav />
              <p
                style={{
                  color: "white",
                  fontStyle: "Italic",
                  fontSize: "42px",
                  textAlign: "-webkit-center",
                  marginTop: "55px"
                }}
              >
                {" "}
                We Are{" "}
                <big>
                  <strong>RND HUB</strong>
                </big>{" "}
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "20px",
                  textAlign: "center"
                }}
              >
                Fusce at hendrerit leo. Suspendisse nisl libero, sodales a
                porttitor non, viverra ac velit. Fusce mattis elit sed ex
                mollis, id tincidunt eros fermentum.
              </p>
            </Grid>
            <div
              style={{ textAlign: "center", display: "block", width: "100%" }}
            >
              <Btn
                Gname="Get Started"
                imgarr={ar}
                style={{
                  minHeight: "100px",
                  maxHeight: "123px",
                  color: "white",
                  backgroundColor: "#0071bc",
                  minHeight: "59px",
                  width: "186px",
                  borderRadius: "43px"
                }}
              >
                {" "}
              </Btn>
            </div>
          </Grid>
        </AboutBackTop>
      </div>
    );
  }
}

FirstCompo.defaultProps = {};

FirstCompo.propTypes = {
  style: PropTypes.object
};

export default FirstCompo;
