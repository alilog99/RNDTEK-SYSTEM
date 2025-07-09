import React from 'react'
import PropTypes from 'prop-types'
import MainTemplate from "../components/templates/template_main";
// import AboutusPage from '../components/ui/common/containers/About Us/aboutuspge';
import Contact from '../components/ui/common/containers/contact us/contact-us';
import Background1 from '../components/ui/common/containers/Home page componentts/background';
// import AIHomeSection from '../components/ui/common/containers/Home page componentts/ai-home-section';
import ScrollToTop from "../components/ui/etc/scroll-top/scroll-top"

class HomePage extends React.Component{
  

    render(){
        return(
            <div style={{...this.props.style}}>
                    <ScrollToTop>

        {/* <MainTemplate>        */}
            <Background1 />
            {/* <AIHomeSection /> */}
            </ScrollToTop>
{/* </MainTemplate> */}

            </div>
        )
    }
}

HomePage.defaultProps = {

}

HomePage.propTypes = {
    style: PropTypes.object
}

export default HomePage;