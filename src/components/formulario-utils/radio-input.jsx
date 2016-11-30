import React, { PropTypes } from 'react'

import { Note } from '../utils/ui-util'

const RadioInput = React.createClass({
  getDefaultProps() {
      return {
        col: 8,
        required: false,
        disabled: false
      }
  },

  handleRadioChange(e) {
    const { field } = this.props;
    field.onChange(e)

    if(this.props.onRadioChange) {
      this.props.onRadioChange(e, field.valid)
    }
  },

  handleMouseEvent(e) {
    const tooltip = this.refs.tooltip
    const activeClass = " active"

    if(tooltip) {
      if(e.type === 'mouseover' && tooltip.className.indexOf(activeClass) < 0) {
        tooltip.className += activeClass
      } else if(e.type === 'mouseleave') {
        tooltip.className = tooltip.className.replace(activeClass, "")
      }
    }
  },

  render() {
    const { field, field : { valid, touched }, disabled, ...rest } = this.props;
    const invalido = !valid && touched

    let toolTip = invalido ? <b ref="tooltip" className='tooltip tooltip-top-right'>{field.error}</b> : null
    let icone = invalido ? <i className='icon-append fa fa-warning'></i> : null

    return (
      <section
        className={`radio-input col col-${this.props.col}${invalido ? ' state-error' : ''}`}
        onMouseOver={this.handleMouseEvent}
        onMouseLeave={this.handleMouseEvent}>
          {icone}
          {this.props.items.map((item, idx) => {
            return (
              <label className={`radio${disabled ? ' state-disabled' : ''}${invalido ? ' state-error' : ''}${idx == 1 ? ' radio-input-segundo-item' : ''}`} key={idx} >
                <input
                  {...field}
                  {...rest}
                  type="radio"
                  disabled={disabled}
                  name={field.name}
                  checked={field.value === item[0]}
                  value={item[0]}
                  onChange={this.handleRadioChange}
                  /><i /> {item[1]}
              </label>
            )
          })}
          {toolTip}
        <Note text={this.props.label} required={this.props.required}/>
      </section>
    )
  }

})

RadioInput.propTypes = {
  col: PropTypes.number,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
}

export default RadioInput;
