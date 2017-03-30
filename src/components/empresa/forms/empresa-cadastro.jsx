import React from 'react'
import { reduxForm } from 'redux-form';
import TextInput from '../../form-utils/input-text'
import DateInput from '../../form-utils/date-input'
import CnpjInput from '../../form-utils/cnpj-input'
import EmailInput from '../../form-utils/email-input'
import {Row, SaveButton} from '../../utils/ui-utils'
import Ajax from '../../utils/ajax'

const EmpresaCadastro = React.createClass({

    success() {
        //Por enquanto não faz nada
     },

    submit(values, dispatch) {

        return new Promise((resolve, reject) => {
            Ajax.post('empresa/criar', values, this.success, resolve, reject)
        })
    },

    render(){
        const { handleSubmit, fields: { nome, dataCadastro }} = this.props

        return (
        <div className="col-md-12">
            <div className="card">
                <div className="card-header" data-background-color="purple">
                    CADASTRO DE EMPRESA
                </div>
                <div className="card-content">
                    <form
                        onSubmit={handleSubmit(this.submit)}>
                        <Row>
                            <TextInput field={nome} label="Nome Fantasia" />
                            <TextInput field={nome} label="Razão Social" />
                        </Row>
                        <Row>
                            <CnpjInput field={nome} label="CNPJ" />
                            <EmailInput field={nome} label="Email" />
                        </Row>
                        <Row>
                            <DateInput field={dataCadastro} label="Data Criação" />
                        </Row>

                        <SaveButton />
                    </form>
                </div>
            </div>
        </div>)
    }
})

const fields = [
  'nome',
  'dataCadastro'
];

const validate = (values) => {
  const errors = {}

  return errors;
}

export default reduxForm({
  form: 'EmpresaCadastro',
  fields,
  validate
})(EmpresaCadastro);