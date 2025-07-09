import React from 'react'
import './button_template.css'
import PropTypes from 'prop-types'

class ButtonTemplate extends React.Component{
    
    constructor(props){
        super(props);
        this.renderTemplateColor = this.renderTemplateColor.bind(this)
        
    }

    // Render the given template and return the correct class
    renderTemplateColor(){
        switch(this.props.template){
            case 'green':
                return 'btn-template-green'
            case 'white':
                return 'btn-template-white'
            case 'email-send':
                return 'btn-template-send-email'
            case 'grey-outline':
                return 'btn-template-gray-outline'
            case 'grey-green':
                return 'btn-template-gray-green'
            case 'dark-blue':
                return 'btn-template-dark-blue'
            default:
                return 'btn-template-green'
        }
    }

    render(){
        return(
            this.props.href?
                // Use when template request for link button
                <a 
                    style={this.props.style} 
                    className={'btn ' + this.renderTemplateColor()} 
                    href = {this.props.href} 
                    disabled={this.props.disabled}
                    >
                    {this.props.children}
                </a>
                :
                // Use when template request for button func
                <button 
                    style={this.props.style} 
                    className={'btn ' + this.renderTemplateColor()} 
                    disabled = {this.props.disabled} 
                    onClick={this.props.onClick}
                    type={this.props.type}
                    >
                    {this.props.children}
                </button>
            
            
        )
    }
}

// Default Props
ButtonTemplate.defaultProps = {
    template: 'green',
}

// Defined props for ButtonTemplate
ButtonTemplate.propTypes = {
    onClick: PropTypes.func,
    template: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    children: PropTypes.any.isRequired,
    type: PropTypes.string
}

  
export default ButtonTemplate;