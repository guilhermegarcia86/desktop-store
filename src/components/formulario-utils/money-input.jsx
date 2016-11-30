import React, { PropTypes } from 'react'
import { Note } from '../utils/ui-util'
import MaskMoney from '../utils/jquery.maskMoney.min'

const MoneyInput = React.createClass({
  getDefaultProps() {
      return {
        col: 4,
        required: false,
        disabled: false,
        label: null,
      }
  },

  componentDidMount() {
    $(this.refs.moneyInput).maskMoney({
      precision: this.props.precision,
      prefix : 'R$ ',
      thousands : '.',
      decimal : ',',
      allowNegative : true
    })
  },

  handleMoneyBlur(e) {
    const { field } = this.props
		field.onBlur(e)

		if(field.valid && this.props.onMoneyBlur) {
			this.props.onMoneyBlur(e)
		}
  },

  render() {
    const { label, field, field : { valid, touched }, disabled, ...rest } = this.props;
    const invalido = !valid && touched

    let toolTip = invalido ? <b className='tooltip tooltip-top-right'>{field.error}</b> : null
    let icone = invalido ? <i className='icon-append fa fa-warning'></i> : null

    return (
      <section className={`col col-${this.props.col}`}>
        <label className={'input' + (invalido ? ' state-error' : '') + (disabled ? ' state-disabled' : '')} >
          {icone}
          <input
            ref="moneyInput"
            type="text"
            placeholder={label}
            {...field}
            {...rest}
            onBlur={this.handleMoneyBlur}
            className="text-right"/>
          {toolTip}
        </label>
        {label && <Note text={label} required={this.props.required}/>}
      </section>
    )
  }

})

MoneyInput.propTypes = {
  field: PropTypes.object.isRequired
}

export default MoneyInput;
