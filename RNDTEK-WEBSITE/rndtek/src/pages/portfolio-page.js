import React from 'react'
import PropTypes from 'prop-types'
import MainTemplate from "../components/templates/template_main";
import AboutusPage from '../components/ui/common/containers/About Us/aboutuspge';
import Portfolio from '../components/ui/common/containers/Portfolio/Portfoliopage';
import ScrollToTop from "../components/ui/etc/scroll-top/scroll-top"

class PortfolioPage extends React.Component{
  

    render(){
        return(
            <div style={{...this.props.style}}>

        {/* <MainTemplate>        */}
            <Portfolio />
{/* </MainTemplate> */}

            </div>
        )
    }
}

PortfolioPage.defaultProps = {

}

PortfolioPage.propTypes = {
    style: PropTypes.object
}

export default PortfolioPage;