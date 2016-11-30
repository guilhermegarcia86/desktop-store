import React from 'react'

import { Options } from '../utils/ui-util'

import MemoInput from './memo-input'
import SelectInput from './select-input'

const Deficiencia = React.createClass({

  render() {
    let { necessidadesEspeciais, observacao, reabilitado } = this.props.field,
        { deficiencias } = this.props.options

    return (
      <div>
        <div className='row'>
          <SelectInput label='Tipo Sanguíneo' field={necessidadesEspeciais} required={false} col={4}>
            {Options('id', 'tipo', 'Selecionar', deficiencias)}
          </SelectInput>
        </div>
        <div className='row'>
          <MemoInput label='Observação' field={observacao} required={false}/>
        </div>
      </div>
    )
  }

})

export default Deficiencia
