import React from 'react'
import { reduxForm, Field } from 'redux-form';
import TextInput from '../../form-utils/input-text'
import DateInput from '../../form-utils/date-input'
import CnpjInput from '../../form-utils/cnpj-input'

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
                            <TextInput field={nome} label="Nome Fantasia" />
                            <TextInput field={nome} label="Razão Social" />
                        </div>
                        <div className="row">
                            <CnpjInput field={nome} label="CNPJ" />
                            <TextInput field={nome} label="Email" />
                        </div>
                        <div className="row">
                            <DateInput field={dataCadastro} label="Data Criação" />
                        </div>

                        <button type="submit" className="btn btn-primary pull-right">Update Profile</button>
                        <div className="clearfix"></div>
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