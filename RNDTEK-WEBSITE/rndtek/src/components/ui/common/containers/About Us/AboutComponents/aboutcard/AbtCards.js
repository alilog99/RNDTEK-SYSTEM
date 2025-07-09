import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import "../aboutcard/AbtCards.css";



const Div = styled.div`
  width: 95%;
  display: inline-block;
  position: relative;
  min-height: 140px;
  border-radius: 10px;
  margin: 15px;
  margin-top: -10px;
  text-align: center;
  color: #fff;
  background-color: #0168ac;
  &:hover {
    background-color: #fff;
    color: #0168ac;
  }
`;

const styles = {
  card: {
    width: "100%",

    position: "relative",
    minHeight: "140px",
    borderRadius: "10px",
    margin: "0px",
    backgroundColor: "transparent"
  }
};

class Cards extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Div>
        <Card className={classes.card} style={{}}>
          <CardContent>{this.props.children}</CardContent>
        </Card>
      </Div>
    );
  }
}

Cards.defaultProps = {};

Cards.propTypes = {
  style: PropTypes.object
};

export default withStyles(styles)(Cards);
