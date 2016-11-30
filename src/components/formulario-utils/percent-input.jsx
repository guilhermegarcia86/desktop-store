import React, { PropTypes } from 'react'
import VMasker from '../utils/vanilla-masker'

import { Note } from '../utils/ui-util'

// https://github.com/BankFacil/vanilla-masker

const PercentInput = React.createClass({
  getDefaultProps() {
      return {
        col: 4,
        required: false,
        disabled: false
      }
  },

  componentDidMount() {
    VMasker(this.refs.percentInput).maskMoney({
      precision: 2,
      separator: ',',
      delimiter: '.',
      suffixUnit: '%'
    })
  },

  handleMoneyBlur(e) {
    const { field } = this.props;
		field.onBlur(e)

		if(field.valid && this.props.onMoneyBlur) {
			this.props.onMoneyBlur(e)
		}
  },

  render() {
    const { field, field : { valid, touched }, disabled, ...rest } = this.props;
    const invalido = !valid && touched

    let toolTip = invalido ? <b className='tooltip tooltip-top-right'>{field.error}</b> : null
    let icone = invalido ? <i className='icon-append fa fa-warning'></i> : null

    return (
      <section className={`col col-${this.props.col}`}>
        <label className={'input' + (invalido ? ' state-error' : '') + (disabled ? ' state-disabled' : '')} >
          {icone}
          <input
            ref="percentInput"
            type="text"
            placeholder={this.props.label}
            {...field}
            {...rest}
            onBlur={this.handleMoneyBlur}/>
            {toolTip}
        </label>
        <Note text={this.props.label} required={this.props.required}/>
      </section>
    )
  }

})

PercentInput.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired
}

export default PercentInput;
