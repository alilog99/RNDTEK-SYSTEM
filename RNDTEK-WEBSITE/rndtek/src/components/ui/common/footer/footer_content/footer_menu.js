import PropTypes from "prop-types";
import React from "react";
import MenuListWhite from "../../menus/menu_list";
import CreateTextElement from "../../typography/element_white";

class FooterMenu extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div style={this.props.style} className={this.props.className}>
        <div style={{ marginBottom: "22px" }}>
          <CreateTextElement fontSize="18px" element="h5">
            {this.props.menuTitle}
          </CreateTextElement>
        </div>
        <MenuListWhite menuItems={this.props.menuItems} />
      </div>
    );
  }
}

FooterMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
  menuTitle: PropTypes.string.isRequired
};

export default FooterMenu;
