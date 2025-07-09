import React from 'react'
import PropTypes from 'prop-types'
import MainTemplate from "../components/templates/template_main";
// import AboutusPage from '../components/ui/common/containers/About Us/aboutuspge';
import Contact from '../components/ui/common/containers/contact us/contact-us';
import ScrollToTop from "../components/ui/etc/scroll-top/scroll-top"
import { env } from './../config';

class ContactPage extends React.Component{
  

    render(){
        console.log(env)
        return(
            <div style={{...this.props.style}}>
                    <ScrollToTop>

        {/* <MainTemplate>     */}
               <Contact env={env} />
               </ScrollToTop>
{/* </MainTemplate> */}

            </div>
        )
    }
}

ContactPage.defaultProps = {

}

ContactPage.propTypes = {
    style: PropTypes.object,
    env: PropTypes.object.isRequired

}

export default ContactPage;