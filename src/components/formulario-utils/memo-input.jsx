
import React, { PropTypes } from 'react'

import { Note } from '../utils/ui-util'

const MemoInput = React.createClass({
  getDefaultProps() {
      return {
        required: false,
        rows: 3,
        disabled: false
      }
  },

  render() {
    const { field, field : { valid, touched }, disabled, ...rest } = this.props;
    const invalido = !valid && touched

    let toolTip = invalido ? <b className='tooltip tooltip-top-right'>{field.error}</b> : null
    let icone = invalido ? <i className='icon-append fa fa-warning'></i> : null
    let classes = this.props.col ? `col col-${this.props.col}` : ''
    return (
      <section className={classes}>
        <label className={'textarea' + (invalido ? ' state-error' : '') + (disabled ? ' state-disabled' : '')} >
          {icone}
          <textarea
            placeholder={this.props.label}
            rows={this.props.rows}
            disabled={this.props.disabled}
            {...field}
            {...rest}/>
          {toolTip}
        </label>
        <Note text={this.props.label} required={this.props.required}/>
      </section>
    )
  }

})

MemoInput.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired
}

export default MemoInput;
