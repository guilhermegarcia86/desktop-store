import React from 'react'
import TextInput from './text-input'
import SelectInput from './select-input'
import DateInput from './date-input'
import MaskedInput from './masked-input'
import { UFs } from '../utils/static-options'
import CidadeBusca from './cidade-busca'

const Titulo = React.createClass({

  // getInitialState() {
    // return { ufs: [] }
  // },

  componentDidMount() {
    // let ufs = UFs.map(function(item, idx) {
    //   return <option key={idx + 1} value={item}>{item}</option>
    // });
    // ufs.unshift(<option key={0} value="">UF</option>)
    // this.setState({ufs})
    onlyNumber()
  },

  render() {
    let { numero, zona, secao, ufVotacao, idCidadeVotacao } = this.props.fields
    return (
        <div className="row">
          <TextInput label='Número' field={numero} required={true} col={2} maxLength='12' className='onlyNumber'/>
          <TextInput label='Zona Eleitoral' field={zona} required={true} col={2} maxLength='4' className='onlyNumber'/>
          <TextInput label='Seção Eleitoral' field={secao} required={true} col={2} maxLength='4' className='onlyNumber'/>
          <CidadeBusca field={{uf: ufVotacao , idCidade: idCidadeVotacao}} row={false}/>
        </div>
    )
  }

})

export default Titulo