import React, { PropTypes } from 'react'

import { Note } from '../utils/ui-util'

const CheckInput = React.createClass({
  getDefaultProps() {
    return {
      col: 10,
      required: false,
      disabled: false,
      ativo: 'S',
      inativo: 'N'
    }
  },

  render() {
    const {
        field,
        ativo, inativo, disabled,
        ...rest,
        field : { valid, touched, error }
      } = this.props,
      invalido = !valid && touched

    let toolTip = invalido ? <b ref="tooltip" className='tooltip tooltip-top-right'>{field.error}</b> : null
    let icone = invalido ? <i className='icon-append fa fa-warning'></i> : null

    return (
      <section>
        <label className={'checkbox' + (invalido ? ' state-error' : '') + (disabled ? ' state-disabled' : '')} >
          <input
            {...field}
            {...rest}
            type="checkbox"
            disabled={disabled}
            name={field.name}
            value={field.value == ativo ? ativo : inativo}
            /><i /> {this.props.label}
        </label>
      </section>
    )
  }

})

CheckInput.propTypes = {
  col: PropTypes.number,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  ativo: PropTypes.string,
  inativo: PropTypes.string
}

export default CheckInput;
