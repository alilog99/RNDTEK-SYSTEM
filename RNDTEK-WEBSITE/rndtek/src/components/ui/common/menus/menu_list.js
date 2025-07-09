import PropTypes from "prop-types";
import React from "react";
import CreateTextElement from "../typography/element_white";
import "./menu_list.css";

class MenuList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="menu-white">
        {this.props.menuItems.map(item => {
          return (
            <li key={item.id} className="menu-item">
              <a className="menu-item-link" href={item.url}>
                <CreateTextElement fontSize="14px" color="#FFFFFF" element="div">
                  {item.text}
                </CreateTextElement>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

// defined props for MenuList
MenuList.propTypes = {
  menuItems: PropTypes.array.isRequired
};

export default MenuList;
