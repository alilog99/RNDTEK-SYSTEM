import React from 'react';
import PropTypes from 'prop-types';
import './select_underline.css';


class SelectUnderline extends React.Component{
	
	// handle change of values on select options
	handleValChange(e){
		this.props.handleChange(e)
	}

	componentDidMount(){
	}
	
    render(){
		// compute incomming options from props
		const options = this.props.listOptions.map((item, index) => {
			return (<option value={item} key={index}> {item} </option>)
		 });

        return(
			<div 
				className = {"select " + this.props.theme} 
				style={{...this.props.style}}
				>
				<select 
					className="select-text" 
					required
					onChange={this.handleValChange.bind(this)}
					value={this.props.value}
					name={this.props.name}
					ref="select_field"
					style={{  height: "55px"}}
					>
					<option 
						value={this.props.values}
						className="demo-option" 
						disabled 
						style={{display:'none'}}
						></option>

					{options}

				</select>
				<span 
					className="select-highlight"
					></span>
				<label 
				    style={{marginLeft: "11px",marginTop: "20px"}}
					className="select-label"
					>
					{this.props.label}
					</label>
			</div>
        )
    }

}

// default props of component
SelectUnderline.defaultProps ={
	label: 'no label',
	value: '',
}

// defined props for select options component
SelectUnderline.propTypes = {
	listOptions: PropTypes.array.isRequired,
	handleChange: PropTypes.func,
	label: PropTypes.string,
	theme: PropTypes.string,
	name: PropTypes.string,
}


export default SelectUnderline;