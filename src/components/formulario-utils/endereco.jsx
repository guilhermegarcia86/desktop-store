import React from 'react'
import axios from 'axios'

import TextInput from './text-input'
import SelectInput from './select-input'
import MaskedInput from './masked-input'
import Formatter from '../utils/formatter'
import { UFs } from '../utils/static-options'

const Endereco = React.createClass({

  getInitialState() {
    return { cidades: [], ufs: [], endereco:{} }
  },

  componentDidMount() {
    let ufs = UFs.map(function(item, idx) {
      return <option key={idx + 1} value={item}>{item}</option>
    });
    ufs.unshift(<option key={0} value="">UF</option>)
    this.setState({ufs})
  },

  componentWillReceiveProps(nextProps) {
    // const { cidades } = this.state
    const newUf = nextProps.field.uf.value
    // const oldUf = this.props.field.uf.value
    const newCidade = nextProps.field.idCidade.value

    if (newUf && !this.carregou) {
      this.carregou = true
      this.__getCidades(newUf, newCidade)
    }
  },

  __getCidades(uf, id_cidade) {
    let {idCidade} = this.props.field
    loading(true)
    axios.get(`api/v1/enderecos/cidades/${uf}`).then((response) => {
      loading(false)
      let cidades = [],
          _data = response.data

      cidades = _data.data.map(function(item, idx) {
        return <option key={idx + 1} value={item.id}>{item.nome}</option>
      });

      cidades.unshift(<option key={0} value="">Selecionar</option>)

      if(this.isMounted()) {
        this.setState({cidades})

        if (id_cidade) {
          idCidade.onChange(id_cidade)
        }
      }

    }).catch((err) => {
      console.error(err.message)
    })
  },

  __getCEP(cep) {
    let {logradouro, uf, bairro} = this.props.field
    loading(true)
    axios.get(`api/v1/enderecos/cep/${cep}`).then((response) => {
      loading(false)
      let _data = response.data.data

      if(_data.logradouro) {
        logradouro.onChange(_data.logradouro)
        uf.onChange(_data.cidade.uf)
        bairro.onChange(_data.bairro.nome)
        this.__getCidades(_data.cidade.uf, _data.cidade.id)
      }
    }).catch((err) => {
      console.error(err.message)
    })
  },

  onBlurCEP(e) {
    e.preventDefault()
    let cep = parseInt(Formatter.removeNaoDigitos(e.target.value))
    this.__getCEP(cep)
  },

  onChangeUF(e) {
    e.preventDefault()
    this.props.field.uf.onChange(e.target.value)
    this.__getCidades(e.target.value)
  },

  render() {
    let {field:{cep, logradouro, numero, complemento, uf, idCidade, bairro}} = this.props
    return (
      <fieldset>
        <div className="row">
          <MaskedInput label='CEP' field={cep} col={2} required={true} mask='99999-999' onMaskedBlur={this.onBlurCEP}/>
          <TextInput label='Logradouro' field={logradouro} required={true}/>
          <TextInput label='Número' field={numero} col={2} required={true}/>
        </div>
        <div className="row">
          <TextInput label='Complemento' field={complemento} col={3}/>
          <SelectInput label='UF' field={uf} required={true} col={1} onChange={this.onChangeUF}>
            {this.state.ufs}
          </SelectInput>
          <SelectInput label='Cidade' field={idCidade} required={true} col={4}>
            {this.state.cidades}
          </SelectInput>
          <TextInput label='Bairro' field={bairro} col={4}/>
        </div>
      </fieldset>
    )
  }

})

export default Endereco
