import React, { PropTypes } from 'react'

//import { Note } from '../utils/ui-util'

const CheckboxInput = React.createClass({
  getDefaultProps() {
      return {
        col: 8,
        required: false,
        disabled: false
      }
  },

  render() {
    const { field, field : { valid, touched }, disabled, ...rest } = this.props;
    const invalido = !valid && touched

    let toolTip = invalido ? <b className='tooltip tooltip-top-right'>{field.error}</b> : null
    let icone = invalido ? <i className='icon-append fa fa-warning'></i> : null

    return (
      <section className={`col col-${this.props.col}`}>
        <label className={'checkbox' + (invalido ? ' state-error' : '') + (disabled ? ' state-disabled' : '')} >
          {icone}
          <input type='checkbox' disabled={this.props.disabled} {...field} {...rest}/>
          <i/>{this.props.label}
          {toolTip}
        </label>
      </section>
    )
  }

})

CheckboxInput.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired
}

export default CheckboxInput;
