import React from 'react'
import DateInput from './date-input'

const Imigracao = React.createClass({

  render() {
    let { dataChegada, dataNaturalizacao } = this.props.fields
    return (
      <div className="row">
        <DateInput label='Data Naturalização' field={dataNaturalizacao} col='2' required='true'/>
        <DateInput label='Data Chegada' field={dataChegada} col='2' required='true'/>
      </div>
    )
  }

})

export default Imigracao