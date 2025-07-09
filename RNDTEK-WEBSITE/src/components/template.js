import React from 'react'
import PropTypes from 'prop-types'

class Template extends React.Component{
  

    render(){
        return(
            <div style={{...this.props.style}}>

            </div>
        )
    }
}

Template.defaultProps = {

}

Template.propTypes = {
    style: PropTypes.object
}

export default Template;