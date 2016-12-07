import React, { PropTypes } from 'react'

import { Note } from '../utils/ui-util'

const SelectInput = React.createClass({
  getDefaultProps() {
      return {
        col: 8,
        required: false,
        disabled: false
      }
  },

  handleSelectChange(e) {
    const { field } = this.props;
		field.onChange(e)

		if(this.props.onSelectChange) {
			this.props.onSelectChange(e, field.valid)
		}
  },

  handleMouseEvent(e) {
    const tooltip = this.refs.tooltip

    if(tooltip) {
      if(e.type === 'mouseover') {
        tooltip.className += " active"
      } else if(e.type === 'mouseleave') {
        tooltip.className = tooltip.className.replace(" active", "")
      }
    }
  },

  render() {
    const { field, field : { valid, touched }, disabled } = this.props;
    const invalido = !valid && touched

    let toolTip = invalido ? <b ref="tooltip" className='tooltip tooltip-top-right'>{field.error}</b> : null

    return (
      <section className={`col col-${this.props.col}`}>
        <label
            className={'select' + (invalido ? ' state-error' : '') + (disabled ? ' state-disabled' : '')}
            onMouseOver={this.handleMouseEvent}
            onMouseLeave={this.handleMouseEvent}>
          <select
            disabled={this.props.disabled}
            {...field.select}
            value={field.value || ''}
            onChange={this.handleSelectChange}>
            {this.props.children}
          </select> <i />
          {toolTip}
        </label>
        <Note text={this.props.label} required={this.props.required}/>
      </section>
    )
  }

})

SelectInput.propTypes = {
  col: PropTypes.number,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired
}

export default SelectInput;
