import React, { PropTypes } from 'react'
import TextInput from './text-input'
import SelectInput from './select-input'
import { Options } from '../utils/ui-util'

const Militar = React.createClass({

  render() {
    let {fields: {numero, categoria}, categorias} = this.props
    return (
      <div className="row">
        <TextInput label='Número' field={numero} col={4} className='onlyNumber' maxLength='14'/>
        <SelectInput label='Categoria' field={categoria} required={false} col={2} >
          {Options('id', 'descricao', 'Selecionar', categorias)}
        </SelectInput>
      </div>
    )
  }

})

Militar.propTypes = {
  categorias: PropTypes.array.isRequired
}

export default Militar