import React, { PropTypes } from 'react'

import { Options } from '../utils/ui-util'

import TextInput from './text-input'
import SelectInput from './select-input'
import DateInput from './date-input'

const CNH = React.createClass({

  getDefaultProps() {
    return {
      required: false,
      disabled: false,
      options: {ufs: [], categorias: []}
    }
  },

  componentDidMount() {
    onlyNumber()
  },

  render() {
    let { numero, uf, categoria, dataExpedicao, validade } = this.props.fields,
        { options: {ufs, categoriaCNH}, required, disabled } = this.props
    return (
      <div className="row">
        <TextInput className='onlyNumber' label='Número' field={numero} required={required} col={4} maxLength='15'/>
        <SelectInput label='UF' field={uf} required={required} col={2}>
          {Options('', '', 'UF', ufs)}
        </SelectInput>
        <SelectInput label='Categoria' field={categoria} required={required} col={2}>
          {Options('', '', 'Selecionar', categoriaCNH)}
        </SelectInput>
        <DateInput label='Data Expedição' field={dataExpedicao} col={2} required={required} />
        <DateInput label='Validade'       field={validade}      col={2} required={required} />
      </div>
    )
  }

})

export default CNH
