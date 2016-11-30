import React from 'react'
import TextInput from './text-input'
import SelectInput from './select-input'
import { Options } from '../utils/ui-util'
import DateInput from './date-input'

const RG = React.createClass({

  render() {
    let { fields: {numero, uf, dataEmissao, orgaoExpedidor}, ufs } = this.props
    return (
      <div className="row">
        <TextInput label='Número do RG' field={numero} required={true} col={4} maxLength='18' />
        <SelectInput label='UF' field={uf} required={true} col={2}>
          {Options('', '', 'UF', ufs)}
        </SelectInput>
        <DateInput label='Data Emissão' field={dataEmissao} col={2} required={true}/>
        <TextInput label='Órgão Expedidor' field={orgaoExpedidor} col={2} required={true} maxLength='6'/>
      </div>
    )
  }

})

export default RG