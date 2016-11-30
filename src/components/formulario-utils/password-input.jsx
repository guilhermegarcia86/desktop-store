import React, { PropTypes } from 'react'

import { Note } from '../utils/ui-util'

const PasswordInput = React.createClass({
  getDefaultProps() {
      return {
        col: 8,
        required: false,
        maxLength: 40,
        disabled: false,
        label: null,
      }
  },

  render() {
    const { label, field, field : { valid, touched }, disabled, ...rest } = this.props;
    const invalido = !valid && touched

    let toolTip = invalido ? <b className='tooltip tooltip-top-right'>{field.error}</b> : <b className='tooltip tooltip-top-right'><i className='fa fa-lock txt-color-teal'></i> Entre com a senha</b>
    let icone = invalido ? <i className='icon-append fa fa-warning'></i> : <i className='icon-append fa fa-lock'></i>

    return (
      <section className={`col col-${this.props.col}`}>
        <label data-forcedisabled={!!disabled} className={'input' + (invalido ? ' state-error' : '') + (disabled ? ' state-disabled' : '')} >
          {icone}
          <input
            {...field}
            {...rest}
            type="password"
            placeholder={label}
            maxLength={this.props.maxLength}
            data-forcedisabled={!!disabled}
            disabled={this.props.disabled}/>
          {toolTip}
        </label>
        {label && <Note text={label} required={this.props.required}/>}
      </section>
    )
  }

})

PasswordInput.propTypes = {
  field: PropTypes.object.isRequired
}

export default PasswordInput;
