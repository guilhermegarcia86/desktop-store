import React, { PropTypes } from 'react'

import { Note } from '../utils/ui-util'

const TextInput = React.createClass({
  getDefaultProps() {
      return {
        col: 8,
        required: false,
        maxLength: 40,
        disabled: false,
        label: null,
      }
  },

  handleTextBlur(e) {
    const { field } = this.props;
    field.onBlur(e)

    if(field.valid && this.props.onTextBlur) {
      this.props.onTextBlur(e)
    }
  },

  render() {
    console.log('textinput')
    const { label, field, field : { valid, touched }, disabled } = this.props;
    const invalido = !valid && touched

    let toolTip = invalido ? <b className='tooltip tooltip-top-right'>{field.error}</b> : null
    let icone = invalido ? <i className='icon-append fa fa-warning'></i> : null

    return (
      <section className={`col col-${this.props.col}`}>
        <label data-forcedisabled={!!disabled} className={'input' + (invalido ? ' state-error' : '') + (disabled ? ' state-disabled' : '')} >
          {icone}
          <input
            {...field.input}
            type="text"
            placeholder={label}
            maxLength={this.props.maxLength}
            data-forcedisabled={!!disabled}
            disabled={this.props.disabled}
            onBlur={this.handleTextBlur}/>
          {toolTip}
        </label>
        {label && <Note text={label} required={this.props.required}/>}
      </section>
    )
  }

})

TextInput.propTypes = {
  field: PropTypes.object.isRequired
}

export default TextInput;
