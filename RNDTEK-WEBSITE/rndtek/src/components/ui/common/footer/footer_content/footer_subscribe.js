import React from "react";
import ButtonTemplate from "../../button/buttons/button_template";
import "./footer_subscribe.css";

class FooterSubscribeForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <div className="c-input-group">
            <input type="text" className="c-form-control" placeholder="EMAIL" />
            <div className="c-input-group-btn">
              <ButtonTemplate template="email-send">
                <i className="fa fa-paper-plane" style={{color:"black"}}/>
              </ButtonTemplate>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FooterSubscribeForm;
