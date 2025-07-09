import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import React from "react";
import CreateTextElemen from "../typography/create_text_element";

class Button1 extends React.Component {


  render() {
    return (
      <div>
        <Button className="buton11" onClick={this.props.onClick} style={{ ...this.props.style }} type = {this.props.type} href={this.props.href}>
          <CreateTextElemen
            element="h6"
            fontSize="13px"
            style={{ marginTop: "4px", color: this.props.color }}
          >
            {this.props.Gname}
            <img
              src={this.props.imgarr}
              alt="arrow"
              style={{ marginLeft: "9px" ,...this.props.imgstyle         }}
            />
          </CreateTextElemen>
        </Button>
      </div>
    );
  }
}

Button1.defaultProps = {
  
};

Button1.propTypes = {
  style: PropTypes.object
};

export default Button1;
