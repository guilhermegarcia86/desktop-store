import React from 'react'
import axios from 'axios'

import TextInput from './text-input'
import SelectInput from './select-input'
import MaskedInput from './masked-input'
import Formatter from '../utils/formatter'
import { UFs } from '../utils/static-options'

const CidadeBusca = React.createClass({

  getInitialState() {
    return { cidades: [], ufs: [], carregouInicial: false}
  },

  getDefaultProps() {
    return { row: true }
  },

  componentDidMount() {
    let ufs = UFs.map(function(item, idx) {
      return <option key={idx + 1} value={item}>{item}</option>
    });
    ufs.unshift(<option key={0} value="">UF</option>)
    this.setState({ufs})

    const uf = this.props.field.uf.value
    const cidade = this.props.field.idCidade.value

    this.refreshUfCidade(uf, cidade)
  },

  refreshUfCidade(newUf, newCidade) {
    const { carregouInicial } = this.state

    if (newUf && !carregouInicial) {
      this.setState({ carregouInicial: true })
      this.__getCidades(newUf, newCidade)
    }
  },

  componentWillReceiveProps(nextProps) {
    const newUf = nextProps.field.uf.value
    const newCidade = nextProps.field.idCidade.value

    this.refreshUfCidade(newUf, newCidade)
  },

  __getCidades(uf, id_cidade) {
    let { idCidade } = this.props.field,
        cidades = []

    if (!_.isEmpty(uf)) {
      loading(true)
      axios.get(`api/v1/enderecos/cidades/${uf}`).then((response) => {
        loading(false)
        let _data = response.data

        cidades = _data.data.map(function(item, idx) {
          return <option key={idx + 1} value={item.id}>{item.nome}</option>
        });
        cidades.unshift(<option key={0} value="">Selecionar</option>)
        if(this.isMounted()) {
          this.setState({cidades})
          if (id_cidade) {
            let valor = typeof id_cidade === 'string' ? parseInt(id_cidade) : id_cidade
            idCidade.onChange(valor)
          }
        }
      }).catch((err) => {
        console.error(err.message)
      })
    } else {
      cidades.unshift(<option key={0} value="">Selecionar</option>)
      if (this.isMounted()) this.setState({cidades})
    }
  },

  onChangeUF(e) {
    console.log(e.target.value)
    this.__getCidades(e.target.value)
  },

  renderFields(classes) {
    let {row, field:{uf, idCidade}} = this.props
    return (
      <div className={classes}>
        <SelectInput label='UF' field={uf} required={true} col={2} onSelectChange={this.onChangeUF}>
          {this.state.ufs}
        </SelectInput>
        <SelectInput label='Cidade' field={idCidade} required={true} col={4}>
          {this.state.cidades}
        </SelectInput>
      </div>
    )
  },

  render() {
    let { row } = this.props
    if (!row) return this.renderFields('')
    return (
      <fieldset>
        {this.renderFields('row')}
      </fieldset>
    )
  }

})

export default CidadeBusca
