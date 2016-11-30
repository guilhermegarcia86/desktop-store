import React from 'react'

import TextInput from './text-input'
import DateInput from './date-input'
import { UFs } from '../utils/static-options'

const RNE = React.createClass({

  render() {
    let { numero, orgaoEmissor, dataExpedicao } = this.props.fields
    return (
      <div className="row">
        <TextInput label='Número' field={numero} required={true} col={4} maxLength='14'/>
        <TextInput label='Órgão Emissor' field={orgaoEmissor} col={2} required={true} maxLength='20'/>
        <DateInput label='Data Expedição' field={dataExpedicao} col={2} required={true}/>
      </div>
    )
  }

})

export default RNE