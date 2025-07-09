import React from 'react'
import PropTypes from 'prop-types'
import MainTemplate from "../components/templates/template_main";
import AboutusPage from '../components/ui/common/containers/About Us/aboutuspge';
import ScrollToTop from "../components/ui/etc/scroll-top/scroll-top"
class AboutPage extends React.Component{
  

    render(){
        return(
            <div style={{...this.props.style}}>
        {/* <MainTemplate>       */}
       
             <AboutusPage />
{/* </MainTemplate> */}

            </div>
        )
    }
}

AboutPage.defaultProps = {

}

AboutPage.propTypes = {
    style: PropTypes.object
}

export default AboutPage;