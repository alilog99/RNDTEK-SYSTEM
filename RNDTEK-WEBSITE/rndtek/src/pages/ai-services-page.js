import React from 'react'
import PropTypes from 'prop-types'
import AIServices from '../components/ui/common/containers/our-services/ai-services';
import AIAnalytics from '../components/ui/common/containers/our-services/ai-analytics';
import AIChatbot from '../components/ui/common/containers/our-services/ai-chatbot';
import ScrollToTop from "../components/ui/etc/scroll-top/scroll-top"

class AIServicesPage extends React.Component{
  

    render(){
        return(
            <div style={{...this.props.style}}>
                <ScrollToTop>
                    <AIServices />
                    <AIAnalytics />
                    <AIChatbot />
                </ScrollToTop>
            </div>
        )
    }
}

AIServicesPage.defaultProps = {

}

AIServicesPage.propTypes = {
    style: PropTypes.object
}

export default AIServicesPage; 