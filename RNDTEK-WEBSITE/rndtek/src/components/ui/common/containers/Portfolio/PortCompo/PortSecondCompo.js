import PropTypes from "prop-types";
import React from "react";
import Back from "../../../../../../assets/imgs/img1.png";
import Mob from "../../../../../../assets/imgs/img2.png";
import Lap from "../../../../../../assets/imgs/img3.png";
import Lap1 from "../../../../../../assets/imgs/img4.png";
import Smart from "../../../../../../assets/imgs/img5.png";
import Smart1 from "../../../../../../assets/imgs/img6.png";
import PortGridContainer from "../PortSecContainer";
import CenteredTabs from "../PortTabsBar/TabsBar";

class PortSecondCompo extends React.Component {
 

  render() {
    return (
      <div style={{ ...this.props.style }}>
        <CenteredTabs />
        <div style={{ textAlign: "center", paddingTop: "16px" }}>
          <PortGridContainer
            title="ADMIRALTY H-NOTE"
            name="INVESTMENT"
            backImg={Back}
          />
          <PortGridContainer
            title="Hawkins"
            name="FORENSIC INVESTIGATION"
            backImg={Mob}
          />
          <PortGridContainer
            title="Hamshire"
            name="STRAGETY & PLAN"
            backImg={Lap}
          />
          <PortGridContainer
            title="Accu-Mile"
            name="MARKETING"
            backImg={Lap1}
          />
          <PortGridContainer
            title="O2"
            name="FININCIAL SERVICE"
            backImg={Smart}
          />
          <PortGridContainer
            title="Discover-Varmints"
            name="PROPERTY VALUATION"
            backImg={Smart1}
          />
        </div>
      </div>
    );
  }
}

PortSecondCompo.defaultProps = {};

PortSecondCompo.propTypes = {
  style: PropTypes.object
};

export default PortSecondCompo;
