import React from 'react'

import VMasker from '../utils/vanilla-masker'
import { Note } from '../utils/ui-util'

const maskCnpj = '99.999.999/9999-99';

let CnpjInput = React.createClass({
	getDefaultProps() {
      return {
        col: 4,
        required: false,
		disabled : false
      }
  },

	handleCnpjBlur(e) {
		const { field } = this.props
		field.onBlur(e)

		if(field.valid && this.props.onCnpjBlur) {
			this.props.onCnpjBlur(e)
		}
	},

	componentDidMount() {
		VMasker(this.refs.inputCnpj).maskPattern(maskCnpj)
	},

	render() {

		const { field, field : { valid, touched }, disabled, ...rest } = this.props;
    	const invalido = !valid && touched

    	let toolTip = invalido ? <b className='tooltip tooltip-top-right'>{field.error}</b> : null
		let icone = invalido ? <i className='icon-append fa fa-warning'></i> : null

		return (

			<section className={`col col-${this.props.col}`} >
		        <label className={'input' + (invalido ? ' state-error' : '') + (disabled ? ' state-disabled' : '')} >
			        {icone}
			        <input
					 type='text'
			         ref='inputCnpj'
			         className='onlyNumber'
			         placeholder='CNPJ'
			         {...field}
					 {...rest}
					 onBlur={this.handleCnpjBlur}/>
			        {toolTip}
		        </label>
				<Note text={this.props.label} required={this.props.required}/>
			</section>
    )
	}

})

export default CnpjInput
