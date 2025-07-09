import React from 'react'
import PropTypes from 'prop-types'
import MainTemplate from "../components/templates/template_main";
// import AboutusPage from '../components/ui/common/containers/About Us/aboutuspge';
// import Portfolio from '../components/ui/common/containers/Portfolio/Portfoliopage';
import Services from '../components/ui/common/containers/our-services/services';
import ScrollToTop from "../components/ui/etc/scroll-top/scroll-top"

class ServicesPage extends React.Component{
  

    render(){
        window.scrollTo(0, 0);
        return(
            <div style={{...this.props.style}}>
        {/* <MainTemplate>        */}

            <Services />
{/* </MainTemplate> */}

            </div>
        )
    }
}

ServicesPage.defaultProps = {

}

ServicesPage.propTypes = {
    style: PropTypes.object
}

export default ServicesPage;