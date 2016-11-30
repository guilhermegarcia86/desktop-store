import React from 'react'
import TextInput from './text-input'
import SelectInput from './select-input'
import { Options } from '../utils/ui-util'
import DateInput from './date-input'

const CTPS = React.createClass({

  render() {
    let { fields: {numero, uf, dataExpedicao, serie}, ufs } = this.props
    return (
      <div className="row">
        <TextInput label='Número' field={numero} required={true} col={2} maxLength='9' className='onlyNumber'/>
        <SelectInput label='UF' field={uf} required={true} col={2}>
          {Options('', '', 'UF', ufs)}
        </SelectInput>
        <DateInput label='Data Expedição' field={dataExpedicao} col={2} required={true}/>
        <TextInput label='Série' field={serie} col={2} required={true} maxLength='6'/>
      </div>
    )
  }

})

export default CTPS