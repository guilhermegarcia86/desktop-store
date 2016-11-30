import React from 'react'

import TextInput from './text-input'
import MaskedInput from './masked-input'

let DadosEmpresa = React.createClass({

  getDefaultProps() {
    return {
      required: false,
      disabled : false
    }
  },

  render() {
    let { email, telefoneComercial, ramal } = this.props.fields,
        { required, disabled } = this.props

    return (
      <div className='row'>
        <TextInput label="Email" field={email} col={4} required={required} disabled={disabled}/>
        <MaskedInput label="Telefone Comercial" field={telefoneComercial} col={2} mask='(99) 9999-9999' />
        <MaskedInput label="Ramal" field={ramal} col={2} mask='99999' />
      </div>
    )
  }

})


export default DadosEmpresa
