import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { CancelButton, SubmitButton } from './utils/ui-util'
import SelectInput from './formulario-utils/select-input'
import TextInput from './formulario-utils/text-input'
import { TIPOS_PRODUTOS } from './utils/static-options'
import { requiredFields } from './formulario-utils/validation'

const ItemForm = React.createClass({
    
    getInitialState() {
        return { tipos: [] }
    },

    componentDidMount() {
        let tipos = TIPOS_PRODUTOS.map(function(item, idx) {
            return <option key={idx + 1} value={item}>{item}</option>
        });
        tipos.unshift(<option key={0} value="">Selecionar</option>)
        this.setState({tipos})
    },

    onCancel(e) {
        e.preventDefault()
        this.props.onCancel()
    },

    submit(values, dispatch) {
        if(values.idGrupoEmpresa) values.idsGruposEmpresas.push(values.idGrupoEmpresa)
        return this.props.onSave(values)
    },

    renderForm() {
        console.log('ItemForm')
        let { fields: { nome, preco, quantidade, tipo } } = this.props

        return(
            <fieldset>
                <div className='row'>
                    <TextInput field={nome} label='Nome' col={10} required={true} />
                    <SelectInput field={tipo} label='Tipo' col={4} required={true}>
                        {this.state.tipos}
                    </SelectInput>
                    <TextInput field={preco} label='Preço' col={10} required={true} />
                    <TextInput field={quantidade} label='Quantidade' col={4} maxLength='50' required={true} />
                </div>
            </fieldset>
            )
    },

    render() {
        const { handleSubmit, acao } = this.props
        return (
        <form onSubmit={handleSubmit(this.submit)} className='smart-form' noValidate='novalidate'>
            <header>Usuário</header>
            {this.renderForm()}
            <footer>
            <CancelButton onCancel={this.onCancel}/>
            <SubmitButton className='pull-right'/>
            </footer>
        </form>
        )
  }

})

const fields = [
                'nome', 
                'preco', 
                'quantidade',
                'tipo'
                ]

const validate = (values) => {
  let errors = {}
  errors = requiredFields({ names: [ 'quantidade', 'preco', 'nome' ]})(values)

  return errors
}

export default reduxForm({
  form: 'ItemForm',
  fields,
  validate
})(ItemForm)