import React from "react";
import {
  FOOTER_MENU_1_ITEM_1,
  FOOTER_MENU_1_ITEM_2,
  FOOTER_MENU_1_ITEM_3,
  FOOTER_MENU_1_TITLE,
  FOOTER_MENU_2_ITEM_1,
  FOOTER_MENU_2_ITEM_2,
  FOOTER_MENU_2_ITEM_3,
  FOOTER_MENU_2_TITLE
} from "../../../../constants/strings";
import Container from "../../container";
import FooterBrand from "../footer_content/footer_brand";
import FooterMenu from "../footer_content/footer_menu";
import FooterSocial from "../footer_content/footer_social";
import "./footer_template_main.css";

class FooterTemplateMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="footer_main"
        style={{
          backgroundColor: "#0071bc",
          minHeight: "315px",
          // marginTop: "30px"
        }}
      >
        <Container>
          <div className="row" style={{ padding: "42px 0" }}>
            <div className="col-12 col-sm-4">
              <FooterBrand />
            </div>
            <div className="col-sm-2">
              <FooterMenu
                className="menu1"
                menuTitle={FOOTER_MENU_1_TITLE}
                menuItems={[
                  {
                    id: 1,
                    url: "/contact-page",
                    text: FOOTER_MENU_1_ITEM_1
                  },
                  {
                    id: 2,
                    url: "/contact-page",
                    text: FOOTER_MENU_1_ITEM_2
                  },
                  {
                    id: 3,
                    url: "/contact-page",
                    text: FOOTER_MENU_1_ITEM_3
                  }
                ]}
              />
            </div>
            <div className="col-sm-2">
              <FooterMenu
                className="menu2"
                menuTitle={FOOTER_MENU_2_TITLE}
                menuItems={[
                  {
                    id: 1,
                    url: "/About-us",
                    text: FOOTER_MENU_2_ITEM_1
                  },
                  {
                    id: 2,
                    url: "/services-page",
                    text: FOOTER_MENU_2_ITEM_2
                  },
                  {
                    id: 3,
                    url: "/contact-page",
                    text: FOOTER_MENU_2_ITEM_3
                  }
                ]}
              />
            </div>
            <div className="col-sm-4">
              <FooterSocial className="social" />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

FooterTemplateMain.defaultProps = {};

FooterTemplateMain.propTypes = {};

export default FooterTemplateMain;
