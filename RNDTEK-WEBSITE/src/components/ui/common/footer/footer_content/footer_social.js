import React from "react";
import { FOOTER_SUBSCRIBER_TITLE } from "../../../../constants/strings";
import IconLink from "../../links/icon_link";
import CreateTextElement from "../../../common/typography/element_white";
import FooterSubscribeForm from "..//footer_content/footer_subscribe";

class FooterSocial extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.style} className={this.props.className}>
        <div style={{ marginBottom: "22px" }}>
          <CreateTextElement element="h5" fontSize="18px">
            {FOOTER_SUBSCRIBER_TITLE}
          </CreateTextElement>
        </div>
        <FooterSubscribeForm />
        <div className="row" style={{ marginTop: "25px" }}>
          <div className="col-2 offset-2">
            <IconLink href="javascript:void(0)">
              <i className="fab fa-facebook-f" />
            </IconLink>
          </div>
          <div className="col-2">
            <IconLink href="javascript:void(0)">
              <i className="fab fa-twitter" />
            </IconLink>
          </div>
          <div className="col-2">
            <IconLink href="javascript:void(0)">
              <i className="fa fa-globe" />
            </IconLink>
          </div>
          <div className="col-2">
            <IconLink href="javascript:void(0)">
              <i className="fab fa-google-plus-g" />
            </IconLink>
          </div>
        </div>
      </div>
    );
  }
}

FooterSocial.defaultProps = {};

FooterSocial.propTypes = {};

export default FooterSocial;
