import React from 'react'
import { reduxForm, Field } from 'redux-form';
import TextInput from '../../form-utils/input-text'

const EmpresaCadastro = React.createClass({

    render(){
        const { fields: { nome, dataCadastro }} = this.props

        return (
        <div className="col-md-12">
            <div className="card">
                <div className="card-header" data-background-color="purple">
                    CADASTRO DE EMPRESA
                </div>
                <div className="card-content">
                    <form>
                        <div className="row">
                            <TextInput field={nome} label="Nome da empresa" />
                        </div>
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