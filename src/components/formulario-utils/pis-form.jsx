import React from 'react'
import TextInput from './text-input'
import DateInput from './date-input'

const PIS = React.createClass({

  componentDidMount() {
    onlyNumber()
  },

  render() {
    let { numero, dataCadastro } = this.props.fields
    return (
      <div className='row'>
        <TextInput label='Número' field={numero} required={true} col={2} maxLength='11' className='onlyNumber'/>
        <DateInput label='Data Cadastro' field={dataCadastro} col={2} required={true}/>
      </div>
    )
  }

})

export default PIS