import React from 'react'
import Ajax from '../utils/ajax'

import { Note } from '../utils/ui-util'
import Formatter from '../utils/formatter'
import CnpjInput from './cnpj-input'
import MaskedInput from './masked-input'
import TextInput from './text-input'

let EmpresaBusca = React.createClass({
  getDefaultProps() {
    return {
      labelCnpj: 'Cnpj da empresa',
      labelNome: 'Nome da empresa',
      labelAns: 'Ans da empresa',
      empresaSaude: false,
      disabled: false
    }
  },

  handleCnpjBlur(e) {
    this.__findByCnpj(e.target.value)
  },

  __findByCnpj(cnpj) {
    cnpj = Formatter.removeNaoDigitos(cnpj);

    var url = this.props.empresaSaude ?
      `beneficio/fornecedor/cnpj/${cnpj}` :
      `criar/servico/de/busca/de/empresa/em/geral/${cnpj}`;

    Ajax.get(url, (_data) => {
      const empresa = _data.data || {}
      const { field: {id, cnpj, ans, nome} } = this.props

      id.onChange(empresa.id);
      ans.onChange(empresa.ans);
      nome.onChange(empresa.nome);
    })
  },

  render() {
    const { field: {cnpj, ans, nome, id }, empresaSaude, labelCnpj, labelAns, labelNome, disabled } = this.props

    const achouEmpresa = id.value ? true : false;

    return (
      <div>
        <div className='row'>
          <input type="hidden" {...id} />
          <CnpjInput
            field={cnpj}
            required={true}
            label={labelCnpj}
            onCnpjBlur={this.handleCnpjBlur}
            disabled={disabled}/>
          <MaskedInput
            ref="ans"
            label={labelAns}
            required={true}
            field={ans}
            mask="999999"
            col={4}
            visivel={empresaSaude}
            disabled={disabled || achouEmpresa}/>
        </div>
        <div className='row'>
          <TextInput
            ref="nome"
            label={labelNome}
            required={true}
            field={nome}
            disabled={disabled || achouEmpresa}/>
        </div>
      </div>
    )
  }

})

export default EmpresaBusca;
