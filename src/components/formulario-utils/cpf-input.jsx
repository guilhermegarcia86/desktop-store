import React from 'react'

import VMasker from '../utils/vanilla-masker'
import { Note } from '../utils/ui-util'

const maskCpf = '999.999.999-99';

let CpfInput = React.createClass({
    getDefaultProps() {
      return {
        col: 4,
        required: false,
        disabled : false
      }
  },

    handleCpfBlur(e) {
        const { field } = this.props;
        field.onBlur(e)

        if(field.valid && this.props.onCpfBlur) {
            this.props.onCpfBlur(e)
        }
    },

    componentDidMount() {
        VMasker(this.refs.inputCpf).maskPattern(maskCpf)
    },

    render() {
    const { field, field : { valid, touched }, disabled, ...rest } = this.props;
    const invalido = !valid && touched

    let toolTip = invalido ? <b className='tooltip tooltip-top-right'>{field.error}</b> : null
	let icone = invalido ? <i className='icon-append fa fa-warning'></i> : null

	return (
		<section
		 className={`col col-${this.props.col}`} >
            <label data-forcedisabled={!!disabled} className={'input' + (invalido ? ' state-error' : '') + (disabled ? ' state-disabled' : '')} >

            {icone}
            <input
              type='text'
              ref='inputCpf'
              className='onlyNumber'
              placeholder='CPF'
              disabled={this.props.disabled}
              {...field}
              {...rest}
              onBlur={this.handleCpfBlur}/>
    		      {toolTip}
            </label>
		        <Note text={this.props.label} required={this.props.required}/>
	         </section>
        )
    }
})

export default CpfInput
