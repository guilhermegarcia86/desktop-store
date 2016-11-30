import React, { PropTypes } from 'react'
import VMasker from '../utils/vanilla-masker'

import { Note } from '../utils/ui-util'

// https://github.com/BankFacil/vanilla-masker

const AnoMesInput = React.createClass({
  getDefaultProps() {
      return {
        col: 4,
        required: false,
        disabled: false,
        visivel: true
      }
  },

  componentDidMount() {
    VMasker(this.refs.anoMesInput).maskPattern('99/9999')
  },

  handleAnoMesBlur(e) {
    const { field } = this.props;
    field.onBlur(e)

    if(field.valid && this.props.onAnoMesBlur) {
      this.props.onAnoMesBlur(e)
    }
  },

  render() {
    const { field, field : { valid, touched }, disabled, ...rest } = this.props;
    const invalido = !valid && touched

    let toolTip = invalido ? <b className='tooltip tooltip-top-right'>{field.error}</b> : null
    let icone = invalido ? <i className='icon-append fa fa-warning'></i> : null

    return (
      <section className={`col col-${this.props.col}` + (this.props.visivel ? '' : ' invisible') }>
        <label className={'input' + (invalido ? ' state-error' : '') + (disabled ? ' state-disabled' : '')} >
          {icone}
          <input
            {...field}
            {...rest}
            ref="anoMesInput"
            type="text"
            placeholder={this.props.label}
            disabled={this.props.disabled}
            onBlur={this.handleAnoMesBlur}/>
          {toolTip}
        </label>
        <Note text={this.props.label} required={this.props.required}/>
      </section>
    )
  }

})

AnoMesInput.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  disabled: PropTypes.bool
}

export default AnoMesInput;
