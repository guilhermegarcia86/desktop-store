import React, { PropTypes } from 'react'

import { Note } from '../utils/ui-util'
import Autocomplete from './autocomplete'

const AutocompleteInput = React.createClass({
  getDefaultProps() {
      return {
        col: 8,
        required: false,
        disabled: false,
        searchParam: 'pesquisa',
        params: {}
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
    const { field, field : { valid, touched }, disabled, ...rest } = this.props;
    const invalido = !valid && touched

    let toolTip = invalido ? <b ref="tooltip" className='tooltip tooltip-top-right'>{field.error}</b> : null
    let icone = invalido ? <i className='icon-append fa fa-warning'></i> : null
    let sectionClass = this.props.col == 12 ? '' : `col col-${this.props.col}`

    return (
      <section className={sectionClass}>
        <label
          className={'input' + (invalido ? ' state-error' : '') + (disabled ? ' state-disabled' : '')}
          onMouseOver={this.handleMouseEvent}
          onMouseLeave={this.handleMouseEvent}
          onMouse >
          {icone}
          <Autocomplete field={field} {...rest} ref="autocomplete" />
          {toolTip}
        </label>
        <Note text={this.props.label} required={this.props.required}/>
      </section>
    )
  }

})

AutocompleteInput.propTypes = {
  service: PropTypes.string,
  searchParam: PropTypes.string,
  items: PropTypes.array,
  label: PropTypes.string.isRequired,
  labelKeys: PropTypes.array.isRequired,
  idKey: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired
}

export default AutocompleteInput;
