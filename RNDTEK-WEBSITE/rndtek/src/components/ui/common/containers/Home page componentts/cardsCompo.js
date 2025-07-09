import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React from "react";
import App from "../../../../../assets/imgs/app_dev.png";
import ar from "../../../../../assets/imgs/arrow.png";
import bannerImg from "../../../../../assets/imgs/banner.png";
import digi from "../../../../../assets/imgs/digital_mon.png";
import dig from "../../../../../assets/imgs/digmarkicon.png";
import game from "../../../../../assets/imgs/gamedevicon.png";
import vrr from "../../../../../assets/imgs/vrappicon.png";
import web from "../../../../../assets/imgs/web_dev.png";
import { bannerString } from "../../../../constants/strings";
import Card from "../../../etc/Card";
import Button1 from "../../button/button";
import CreateTextElement from "../../typography/create_text_element";
import BackgroundContainer from "../Home page componentts/background_container";

class CardsCompo extends React.Component {


  render() {
    return (
      <div style={{ ...this.props.style }}>
        <BackgroundContainer backgroundImage={bannerImg} opacity=".95">
          <Grid container spacing={16}>
            <Grid item xs={6} style={{ marginTop: "92px" }}>
              <Grid item xs={12} lg={12} md={12}>
                <CreateTextElement element="h5" fontSize="20px">
                  Thriving To Achieve Smart,
                </CreateTextElement>

                <CreateTextElement element="h4" fontSize="30px">
                  Unique & State Of The Art Solutions
                </CreateTextElement>

                <CreateTextElement
                  element="p"
                  fontSize="15px"
                  style={{ lineHeight: "2.1" }}
                >
                  {bannerString}
                </CreateTextElement>
                <Button1
                  Gname="Get Started"
                  imgarr={ar}
                  style={{
                    position: "absalute",
                    minHeight: "100px",
                    maxHeight: "123px",
                    color: "white",
                    backgroundColor: "#0071bc",
                    // minHeight: "59px",
                    width: "186px",
                    borderRadius: "43px",
                    marginLeft: "1px"
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={6} style={{ marginTop: "92px" }}>
              <Grid item lg={12} md={12}>
                <Card Imgsd={App} Tname="app development" />
                <Card Imgsd={web} Tname="Web development" />
                <Card Imgsd={digi} Tname="Digital marketing" />
                <Card Imgsd={game} Tname="game development" />
                <Card Imgsd={vrr} Tname="VR Application" />
                <Card Imgsd={dig} Tname="Digital Marketing" />
              </Grid>
            </Grid>
          </Grid>
        </BackgroundContainer>
      </div>
    );
  }
}

CardsCompo.defaultProps = {};

CardsCompo.propTypes = {
  style: PropTypes.object
};

export default CardsCompo;
