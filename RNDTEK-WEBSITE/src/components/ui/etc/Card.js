import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";



const styles = {
  card: {
    width: "115px",
    display: "inline-block",
    position: "relative",
    minHeight: "100px",
    margin: "15px",
    maxHeight: "123px"
  },

  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class Cards extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className="title"
            color="textSecondary"
            gutterBottom
            style={{ textAlign: "center" }}
          >
            <img src={this.props.Imgsd} alt="appdev" style={this.props.imgstyle} />
            {this.props.Tname}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

Cards.defaultProps = {};

Cards.propTypes = {
  style: PropTypes.object
};

export default withStyles(styles)(Cards);
