
import React, { PropTypes } from 'react'
import MaskMoney from '../utils/jquery.maskMoney.min'

import { Note } from '../utils/ui-util'

const DecimalInput = React.createClass({
  getDefaultProps() {
      return {
        col: 4,
        required: false,
        disabled: false,
        precision: 4,
        label: null
      }
  },

  componentDidMount() {
    $(this.refs.decimalInput).maskMoney({
        precision: this.props.precision,
        thousands : '.',
        decimal : ',',
        allowNegative : true
      })
  },

  handleDecimalBlur(e) {
    const { field } = this.props;
		field.onBlur(e)

		if(this.props.onDecimalBlur) {
			this.props.onDecimalBlur(e, field.valid)
		}
  },

  render() {
    const { label, field, field : { valid, touched }, disabled, ...rest } = this.props,
          invalido = !valid && touched,
          toolTip = invalido ? <b className='tooltip tooltip-top-right'>{field.error}</b> : null,
          icone   = invalido ? <i className='icon-append fa fa-warning'></i> : null

    return (
      <section className={`col col-${this.props.col}`}>
        <label className={'input' + (invalido ? ' state-error' : '') + (disabled ? ' state-disabled' : '')} >
          {icone}
          <input
            ref="decimalInput"
            type="text"
            placeholder={label}
            {...field}
            {...rest}
            onBlur={this.handleDecimalBlur}/>
            {toolTip}
        </label>
        {label && <Note text={label} required={this.props.required}/>}
      </section>
    )
  }

})

DecimalInput.propTypes = {
  field: PropTypes.object.isRequired
}

export default DecimalInput;
