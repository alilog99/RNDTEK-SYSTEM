import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const styles = theme => ({
  container: {
    position: "relative"
    // marginLeft:'700px',
  },
  
});



class OutlinedTextFields extends React.Component {
 


  render() {
    const { classes } = this.props;
    return (
      <div style={{ ...this.props.style }}>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={16}>
            <Grid item xs={6} md={6}>
            <label for="inputState"></label>
            <input type="text" class="form-control" placeholder="Your Name"/>
            </Grid>
            <Grid item xs={6} md={6}>
            <label for="inputState"></label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Your Email"/>
            </Grid>
            <Grid item xs={6} md={6}>
            <input type="number" class="form-control" placeholder="Phone Number"/>
            </Grid>
            <Grid item xs={6} md={6}>
              
      <select id="inputState" class="form-control" placeholder="Select Services">
        <option selected>Select Services</option>
        <option>Web Development</option>
        <option>App Development</option>
        <option>Game Development</option>

      </select>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
