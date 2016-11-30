import React, { PropTypes } from 'react'
import VMasker from '../utils/vanilla-masker'

import { Note } from '../utils/ui-util'

// https://github.com/BankFacil/vanilla-masker

const MaskedInput = React.createClass({
  getDefaultProps() {
      return {
        col: 8,
        required: false,
        disabled: false,
        visivel: true
      }
  },

  componentDidMount() {
    VMasker(this.refs.maskedInput).maskPattern(this.props.mask)
  },

  handleMaskedBlur(e) {
    const { field } = this.props;
		field.onBlur(e)

		if(field.valid && this.props.onMaskedBlur) {
			this.props.onMaskedBlur(e)
		}
  },

  render() {
    const { field, field : { valid, touched }, disabled, afterBlur, ...rest } = this.props;
    const invalido = !valid && touched

    let toolTip = invalido ? <b className='tooltip tooltip-top-right'>{field.error}</b> : null
    let icone = invalido ? <i className='icon-append fa fa-warning'></i> : null

    return (
      <section className={`col col-${this.props.col}` + (this.props.visivel ? '' : ' invisible') }>
        <label className={'input' + (invalido ? ' state-error' : '') + (disabled ? ' state-disabled' : '')} >
          {icone}
          <input
            ref="maskedInput"
            type="text"
            placeholder={this.props.label}
            {...field}
            {...rest}
            onBlur={this.handleMaskedBlur}/>
          {toolTip}
        </label>
        <Note text={this.props.label} required={this.props.required}/>
      </section>
    )
  }

})

MaskedInput.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  mask: PropTypes.string.isRequired
}

export default MaskedInput;
