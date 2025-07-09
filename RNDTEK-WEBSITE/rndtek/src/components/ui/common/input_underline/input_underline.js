import React from 'react';
import PropTypes from 'prop-types';
import './input_underline.css';


export default class InputUnderline extends React.Component{

    constructor(props){
        super(props)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleValChange = this.handleValChange.bind(this)
        this.state = {
            theme: this.props.theme
        }
    }

    // handle value change on input field
    handleValChange(e){
        this.props.handleChange(e)
    }

    // handle the change of focus on field
    handleFocus(){
        if(this.props.type === 'date'){
            var inp = this.refs.input_underline
            inp.type = "date"
        }
    }

    componentDidMount(){
        if(this.props.type === 'search'){
            var inp = this.refs.input_underline
            this.setState((state)=>({
                theme: state.theme + ' input-search'
            }))
            inp.type = "search"
        }
        else if(this.props.type === 'date'){
            var inp = this.refs.input_underline
            this.setState((state)=>({
                theme: state.theme + ' input-date'
            }))
        }
    }

    // handle change of focus on field
    handleBlur(){
        if(this.props.type === 'date'){
            var inp = this.refs.input_underline
            inp.type = "text"
        }
    }
    

    render(){
        return(
            <div 
                className={"input-underline-wrapper " + this.state.theme} 
                style={this.props.style}
                >
                <input 
                    required 
                    ref="input_underline" 
                    type="text" 
                    className = "input-underline" 
                    name={this.props.name}
                    id={this.props.label} 
                    placeholder={this.props.placeholder}
                    onFocus={this.handleFocus} 
                    onBlur = {this.handleBlur}
                    onChange={this.handleValChange}
                    value={this.props.value}
                    style={{    height: "30px" }}
                    />

                <label 
                    style={{marginLeft: "11px"}}
                    className="label-i-underline" 
                    htmlFor={this.props.label}
                    >
                    {this.props.label}
                </label>
            </div>
        )
    }

}


// default props 
InputUnderline.defaultProps = {
    placeholder: 'xx-xx-xx',
    type: '',
    label: 'test element', 
}

// defined props for input component
InputUnderline.propTypes = {
    handleChange: PropTypes.func,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    theme: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string
}