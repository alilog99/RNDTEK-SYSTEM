import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component{
  
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
          window.scrollTo(0, 0);
        }
      }
    render(){
        return(
            // <div style={{...this.props.style}}>
               this.props.children
            // </div>
        )
    }
}

ScrollToTop.defaultProps = {

}

ScrollToTop.propTypes = {
    style: PropTypes.object
}

export default withRouter(ScrollToTop);