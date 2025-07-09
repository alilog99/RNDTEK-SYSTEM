import React from 'react'
import PropTypes from 'prop-types'
import loader_logo from "../../../../assets/imgs/loader.gif"

class Template extends React.Component{
  

    render(){
        return(
            <div style={{...this.props.style}}>
                <img src={loader_logo} alt="loader"/>
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