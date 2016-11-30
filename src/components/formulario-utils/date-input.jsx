import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'

import DatePicker from 'react-datepicker'
import VMasker from '../utils/vanilla-masker'
import { Note } from '../utils/ui-util'
import JsUtils from '../utils/js-utils'
import MaskMoney from '../utils/jquery.maskMoney.min'

const DateInput = React.createClass({
  getDefaultProps() {
      return {
        col: 4,
        required: false,
        disabled: false,
        visivel: true
      }
  },

  handleDateChange(mmt) {
    const { field } = this.props,
          _value = mmt ? mmt.format('DD/MM/YYYY') : null

		field.onChange(_value)
		if(this.props.onDateChange) {
			this.props.onDateChange(_value)
		}
  },

  handleMouseEvent(e) {
    const tooltip = this.refs.tooltip

    if(tooltip) {
      if(e.type === 'mouseover') {
        JsUtils.addClass(tooltip, "active")
      } else if(e.type === 'mouseleave') {
        JsUtils.removeClass(tooltip, "active")
      }
    }
  },

  render() {
    const { field, field : { valid, touched }, disabled, ...rest } = this.props,
          invalido = !valid && touched,
          selected = field.value ? moment(field.value, 'DD/MM/YYYY') : null,
          toolTip = invalido ? <b ref="tooltip" className='tooltip tooltip-top-right'>{field.error}</b> : null,
          icone = invalido ? <i className='icon-append fa fa-warning'></i> : null

    return (
      <section className={`col col-${this.props.col}` + (this.props.visivel ? '' : ' invisible') }>
        <label
          className={'input' + (invalido ? ' state-error' : '') + (disabled ? ' state-disabled' : '')}
          onMouseOver={this.handleMouseEvent}
          onMouseLeave={this.handleMouseEvent}>
          {icone}
          <DatePicker
            {...field}
            dateFormat="DD/MM/YYYY"
            placeholderText={this.props.label}
            locale="pt-br"
            selected={selected}
            onChange={this.handleDateChange}
            disabled={disabled}
            ref={(dp) => {
              if(dp && dp.refs.input)
                VMasker(ReactDOM.findDOMNode(dp.refs.input)).maskPattern('99/99/9999')
              }
            }
          />
          {/*
            <input
            {...field}
            placeholder={this.props.label}
            onBlur={this.handleDateBlur}
            disabled={disabled}
            ref="dateInput"
            />
          */}
          {toolTip}
        </label>
        <Note text={this.props.label} required={this.props.required}/>
      </section>
    )
  }

})

DateInput.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired
}

export default DateInput;
