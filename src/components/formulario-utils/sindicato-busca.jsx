import React, { PropTypes } from 'react'
import Ajax from '../utils/ajax'

import { Note } from '../utils/ui-util'
import Formatter from '../utils/formatter'
import CnpjInput from './cnpj-input'
import TextInput from './text-input'

const SindicatoBusca = React.createClass({
  getDefaultProps() {
    return {
      labelCnpj: 'Cnpj do sindicato',
      labelNome: 'Nome do sindicato',
      disabled: false,
      row: true
    }
  },

  handleCnpjBlur(e) {
    this.__findByCnpj(e.target.value)
  },

  __findByCnpj(cnpj) {
    cnpj = Formatter.removeNaoDigitos(cnpj);

    Ajax.get(`/sindicatos/cnpj/${cnpj}`, (_data) => {
      const sindicato = _data.data || {}
      const { fieldId, fieldNome } = this.props

      fieldId.onChange(sindicato.id);
      fieldNome.onChange(sindicato.nome);
    })
  },

  render() {
    const { row, fieldId, fieldCnpj, fieldNome, labelCnpj, labelNome, disabled } = this.props

    const achouSindicato = fieldId.value ? true : false;

    return (
      <div className={row ? 'row' : ''}>
        <input type="hidden" {...fieldId} />
        <CnpjInput
          field={fieldCnpj}
          required={true}
          label={labelCnpj}
          onCnpjBlur={this.handleCnpjBlur}
          disabled={disabled}
          col={3}/>
        <TextInput
          ref="nome"
          label={labelNome}
          required={true}
          field={fieldNome}
          disabled={disabled || achouSindicato}
          col={5}/>
      </div>
    )
  }
})

SindicatoBusca.propTypes = {
  fieldId: PropTypes.object.isRequired,
  fieldCnpj: PropTypes.object.isRequired,
  fieldNome: PropTypes.object.isRequired
}

export default SindicatoBusca;
