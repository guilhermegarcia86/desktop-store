import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { TIPOS_PRODUTOS } from './utils/static-options'

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

  return errors
}

export default reduxForm({
  form: 'ItemForm',
  fields,
  validate
})(ItemForm)