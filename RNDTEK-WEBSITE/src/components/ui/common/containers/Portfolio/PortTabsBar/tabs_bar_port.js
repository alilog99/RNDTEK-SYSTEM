import React from 'react';
import ReactResizeDetector from "react-resize-detector";
import { Tab, TabList, TabPanel, Tabs } from 'react-web-tabs';
import xmaster from "../../../../../../assets/imgs/portfolio imgs/10xmaastricht_thumb.jpg";
import accumile from "../../../../../../assets/imgs/portfolio imgs/accu-Mile_thumb.jpg";
import battle from "../../../../../../assets/imgs/portfolio imgs/Battle_at_the_Atlantic_thumb.jpg";
import Beebilo from "../../../../../../assets/imgs/portfolio imgs/Beeblio-Me_thumb.jpg";
import Buzzshare from "../../../../../../assets/imgs/portfolio imgs/buzzshare_thumb.jpg";
import discover from "../../../../../../assets/imgs/portfolio imgs/discovervarmints_thumb.jpg";
import Fweebi from "../../../../../../assets/imgs/portfolio imgs/Fweebi_thumb.jpg";
import hampshire from "../../../../../../assets/imgs/portfolio imgs/hampshire_thumb.jpg";
import Humidity from "../../../../../../assets/imgs/portfolio imgs/Humidity-Calculator_thumb.jpg";
import Impulse from "../../../../../../assets/imgs/portfolio imgs/Impulse-Drinking_thumb.jpg";
import kosair from "../../../../../../assets/imgs/portfolio imgs/kosair_thumb.jpg";
import webdesign from "../../../../../../assets/imgs/portfolio imgs/lordandtaylor_thumb.jpg";
import menuspring from "../../../../../../assets/imgs/portfolio imgs/menu-spring_thumb.jpg";
import O2 from "../../../../../../assets/imgs/portfolio imgs/O2_thumb.jpg";
import olympic from "../../../../../../assets/imgs/portfolio imgs/olympic_thumb.jpg";
import orchid from "../../../../../../assets/imgs/portfolio imgs/orchid_thumb.jpg";
import remiplus from "../../../../../../assets/imgs/portfolio imgs/rimi_thumb.jpg";
import str8ts from "../../../../../../assets/imgs/portfolio imgs/Str8ts_thumb.jpg";
import PortGridContainer from "../PortSecContainer";




class TabsBarPort extends React.Component {

  state = {
    activeTab: 'one',
    fullText: false
  }

  onResize = (width, height) => {
    if (width < 435) {
      this.setState({ fullText: true })
    }
    else {
      this.setState({ fullText: false })
    }
  };

  tabButtonStyle = {
    backgroundColor: 'white',
    borderWidth: '0px',
    fontFamily: 'Poppins-SemiBold',
    outline: 'none',
    border: '1px solid #efefef',
  }


  render() {
    const { activeTab, fullText } = this.state
    return (

      <div >
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={this.onResize}
        />
 
        <Tabs
          defaultTab={"one"}
          onChange={(activeTab) => this.setState({ activeTab })}
        >
          <div style={{ justifyContent:'center', marginTop: '30px', flexWrap: 'wrap' }}>

            <TabList style={{ display: '-webkit-inline-box', lineHeight: "2.8",justifyContent:'center' }}   >

              <Tab style={{ color: activeTab === "one" ? '#0072BC' : '#838383', ...this.tabButtonStyle,  }} tabFor="one">ALL</Tab>
              
                <Tab style={{ color: activeTab === "two" ? '#0072BC' : '#838383', ...this.tabButtonStyle,  }} tabFor="two">Website Development</Tab>
             
                <Tab style={{ color: activeTab === "three" ? '#0072BC' : '#838383', ...this.tabButtonStyle,  }} tabFor="three">Game Development</Tab>
              
                <Tab style={{ color: activeTab === "four" ? '#0072BC' : '#838383', ...this.tabButtonStyle,  }} tabFor="four">Logo</Tab>
              
                <Tab style={{ color: activeTab === "five" ? '#0072BC' : '#838383', ...this.tabButtonStyle }} tabFor="five">App Development</Tab>
              
            </TabList>
            </div>
            <TabPanel style={{ display: 'inline-block', width: fullText ? "100%" : 'calc(92% - 210px)', marginTop: '8px', marginLeft: '12px' }} tabId="one">
            <div class="container" style={{ textAlign: "center", paddingTop: "16px" }}>
              <div className="row">
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                   
                    name="Web design, UX Design"
                    title=" Lord and Taylor "
                    backImg={webdesign}
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Rimi Plus"
                    name="IOS, Android, Blackberry"
                    backImg={remiplus}
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Discover Varmints"
                    name="Web design, UX Design"
                    backImg={discover}
                  />
                </div>
                <div className=" col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Hampshire i-Pad Application"
                    name="IOS"
                    backImg={hampshire}
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Plan My Olympics"
                    name="Android"
                    backImg={olympic}
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="O2 Priority Tickets"
                    name="Web design, UX Design, Android"
                    backImg={O2}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Orchid Field Marketing"
                    name="Blackberry, IOS, Android"
                    backImg={menuspring}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="O2 Priority Tickets"
                    name="Web design, UX Design, Android"
                    backImg={orchid}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Accu-Mile"
                    name="IOS"
                    backImg={accumile}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Humidity Calculator"
                    name="IOS"
                    backImg={Humidity}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="10x Maastricht"
                    name="IOS"
                    backImg={xmaster}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Kosair"
                    name="IOS"
                    backImg={kosair}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Buzzshare"
                    name="IOS"
                    backImg={Buzzshare}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Str8ts Game"
                    name="IOS"
                    backImg={str8ts}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Battle of Atlantic Game"
                    name="IOS"
                    backImg={battle}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Impulse Game"
                    name="IOS"
                    backImg={Impulse}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Beeblio-Me"
                    name="Android"
                    backImg={Beebilo}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Fweebi"
                    name="Android"
                    backImg={Fweebi}
                  />
                </div>

              </div>
              </div>
            </TabPanel>
            <TabPanel style={{ display: 'inline-block', width: fullText ? "100%" : 'calc(92% - 210px)', marginTop: '8px', marginLeft: '12px' }} tabId="two">
            <div className="container" style={{ textAlign: "center", paddingTop: "16px" }}>
             <div className="row">
            <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Fweebi"
                    name="Android"
                    backImg={Fweebi}
                  />
                </div>
                <div className=" col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Hampshire i-Pad Application"
                    name="IOS"
                    backImg={hampshire}
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Plan My Olympics"
                    name="Android"
                    backImg={olympic}
                  />
                </div>
               
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Orchid Field Marketing"
                    name="Blackberry, IOS, Android"
                    backImg={menuspring}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="O2 Priority Tickets"
                    name="Web design, UX Design, Android"
                    backImg={orchid}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Accu-Mile"
                    name="IOS"
                    backImg={accumile}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Humidity Calculator"
                    name="IOS"
                    backImg={Humidity}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="10x Maastricht"
                    name="IOS"
                    backImg={xmaster}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Kosair"
                    name="IOS"
                    backImg={kosair}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Buzzshare"
                    name="IOS"
                    backImg={Buzzshare}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Str8ts Game"
                    name="IOS"
                    backImg={str8ts}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Battle of Atlantic Game"
                    name="IOS"
                    backImg={battle}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Impulse Game"
                    name="IOS"
                    backImg={Impulse}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Beeblio-Me"
                    name="Android"
                    backImg={Beebilo}
                  />
                </div>   
                </div>
            </div>
              
            </TabPanel>
            <TabPanel style={{ display: 'inline-block', width: fullText ? "100%" : 'calc(92% - 210px)', marginTop: '8px', marginLeft: '12px' }} tabId="three">
            <div className="container" style={{ textAlign: "center", paddingTop: "16px" }}>

<div className="row">
<div className="col-md-4 col-sm-6 col-12">
     <PortGridContainer
      
       name="Web design, UX Design"
       title=" Lord and Taylor "
       backImg={webdesign}
     />
   </div>
   <div className="col-md-4 col-sm-6 col-12">
     <PortGridContainer
       title="Discover Varmints"
       name="Web design, UX Design"
       backImg={discover}
     />
   </div>
   <div className="col-md-4 col-sm-6 col-12">
     <PortGridContainer
       title="O2 Priority Tickets"
       name="Web design, UX Design, Android"
       backImg={O2}
     />
   </div>   
</div>
</div>
            </TabPanel>
            <TabPanel style={{ display: 'inline-block', width: fullText ? "100%" : 'calc(92% - 210px)', marginTop: '8px', marginLeft: '12px' }} tabId="four">
            <div className="container" style={{ textAlign: "center", paddingTop: "16px" }}>

<div className="row">
<div className="col-md-4 col-sm-6 col-12">
    <PortGridContainer
      title="Str8ts Game"
      name="IOS"
      backImg={str8ts}
    />
  </div>   
  </div>
</div>
            </TabPanel>
            <TabPanel style={{ display: 'inline-block', width: fullText ? "100%" : 'calc(92% - 210px)', marginTop: '8px', marginLeft: '12px' }} tabId="five">
            <div class="container" style={{ textAlign: "center", paddingTop: "16px" }}>
              <div className="row">
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                   
                    name="Web design, UX Design"
                    title=" Lord and Taylor "
                    backImg={webdesign}
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Rimi Plus"
                    name="IOS, Android, Blackberry"
                    backImg={remiplus}
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Discover Varmints"
                    name="Web design, UX Design"
                    backImg={discover}
                  />
                </div>
                <div className=" col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Hampshire i-Pad Application"
                    name="IOS"
                    backImg={hampshire}
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Plan My Olympics"
                    name="Android"
                    backImg={olympic}
                  />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="O2 Priority Tickets"
                    name="Web design, UX Design, Android"
                    backImg={O2}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Orchid Field Marketing"
                    name="Blackberry, IOS, Android"
                    backImg={menuspring}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="O2 Priority Tickets"
                    name="Web design, UX Design, Android"
                    backImg={orchid}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Accu-Mile"
                    name="IOS"
                    backImg={accumile}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Humidity Calculator"
                    name="IOS"
                    backImg={Humidity}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="10x Maastricht"
                    name="IOS"
                    backImg={xmaster}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Kosair"
                    name="IOS"
                    backImg={kosair}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Buzzshare"
                    name="IOS"
                    backImg={Buzzshare}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Str8ts Game"
                    name="IOS"
                    backImg={str8ts}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Battle of Atlantic Game"
                    name="IOS"
                    backImg={battle}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Impulse Game"
                    name="IOS"
                    backImg={Impulse}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Beeblio-Me"
                    name="Android"
                    backImg={Beebilo}
                  />
                </div>   
                 <div className="col-md-4 col-sm-6 col-12">
                  <PortGridContainer
                    title="Fweebi"
                    name="Android"
                    backImg={Fweebi}
                  />
                </div>

              </div>
              </div>
            </TabPanel>
          
        </Tabs>
      </div>
    )
  }

}

TabsBarPort.defaultProps = {

}

TabsBarPort.propTypes = {

}

export default TabsBarPort;