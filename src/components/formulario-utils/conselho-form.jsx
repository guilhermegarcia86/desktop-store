import React from 'react'

import { Options } from '../utils/ui-util'

import TextInput from './text-input'
import SelectInput from './select-input'
import DateInput from './date-input'

const Conselho = React.createClass({

  getDefaultProps() {
    return {
      required: false,
      disabled: false,
      options: {
        conselhos: [],
        habilitacoes: []
      }
    }
  },

  render() {
    let { habilitacao, tipo, registro, data, validade } = this.props.fields,
        { options: {conselhos, habilitacoes}, required, disabled } = this.props
    return (
      <div>
        <div className="row">
          <SelectInput label='Habilitação Profissional' field={habilitacao} required={required} col={2}>
            {Options('id', 'nome', 'Selecionar', habilitacoes)}
          </SelectInput>
          <SelectInput label='Conselho' field={tipo} required={required} col={2}>
            {Options('id', 'sigla', 'Selecionar', conselhos)}
          </SelectInput>
          <TextInput label='Registro Conselho' field={registro} required={required} col={4} maxLength='20'/>
          <DateInput label='Data Conselho Regional' field={data} col={2} required={required}/>
          <DateInput label='Validade Conselho' field={validade} col={2} required={required}/>
        </div>
      </div>
    )
  }

})

export default Conselho
