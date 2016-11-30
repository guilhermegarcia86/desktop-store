import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'

import { Options } from '../utils/ui-util'

import SelectInput from './select-input'
import TextInput from './text-input'

let Banco = React.createClass({

  getDefaultProps() {
    return {
      required: false,
      disabled : false,
      bancos: []
    }
  },

  render() {
    let {fields: {bancoId, agenciaNumero, contaNumero}, bancos, required, disabled } = this.props

    return (
      <div>
        <SelectInput label="Banco" field={bancoId} col={4} required={required} disabled={disabled}>
          {Options('id', 'nome', 'Selecionar', bancos)}
        </SelectInput>
        <TextInput label="Agência" field={agenciaNumero} col={2} required={required} disabled={disabled} maxLength='5'/>
        <TextInput label="Conta" field={contaNumero} col={2} required={required} disabled={disabled} maxLength='25'/>
      </div>
    )
  }

})

Banco.propTypes = {
  bancos: PropTypes.array.isRequired
}

export default Banco
