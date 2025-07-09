import React from "react";
import { footerString } from "../../../../constants/strings";
import CreateTextElement from "../../../common/typography/element_white";
import footerBrand from "../../../../../assets/imgs/rnd_logo.png";

class FooterBrand extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={footerBrand} alt={""} />

        <CreateTextElement
          style={{ lineHeight: "1.8rem", marginTop: "10px" }}
          fontSize="14px"
          color="#FFFFFF"
          element="p"
        >
          {footerString}
        </CreateTextElement>
      </div>
    );
  }
}

FooterBrand.defaultProps = {};

FooterBrand.propTypes = {};

export default FooterBrand;
