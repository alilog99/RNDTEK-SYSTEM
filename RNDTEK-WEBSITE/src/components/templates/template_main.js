import PropTypes from "prop-types";
import React from "react";
// import { Helmet } from "react-helmet";
import "../../assets/css/main.css";
// import brandLogo from "../assets/imgs/website_brand.png";
import FooterTemplateMain from "../ui/common/footer/footer_template/footer_template_main";
// import NavbarLayoutLg from "../components/ui/etc/header/navbar_layouts/navbar_layout_lg";
// import NavbarLayoutSm from "../components/ui/etc/header/navbar_layouts/navbar_layout_sm";
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});


class MainTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadState: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(
        {
          loadState: true
        },
        () => {
          this.forceUpdate();
        }
      );
    }, 1000);
  }

  render() {
    const { loadState } = this.state;
    const { classes } = this.props;
    return (
      <div style={this.props.style}>
        {/* <Helmet>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css"
            integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
            integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
            crossorigin="anonymous"
          />
        </Helmet> */}
        {loadState ? (
          <div>
            
            <div>{this.props.children}</div>
            <FooterTemplateMain />
          </div>
        ) : 
        <div style={{display:'flex', height:'100vh', justifyContent:'center' , alignItems:'center'}}>
          <div style={{display: 'inline-block'}}>
            <CircularProgress className={classes.progress} />
          </div>
        </div>}
      </div>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (MainTemplate);
