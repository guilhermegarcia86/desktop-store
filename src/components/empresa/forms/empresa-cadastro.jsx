import React from 'react'
import { reduxForm } from 'redux-form';
import TextInput from '../../form-utils/input-text'

const EmpresaCadastro = React.createClass({

    render(){
        const { fields: { nome }} = this.props

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
                            <div className="col-md-3">
                                <div className="form-group label-floating">
                                    <label className="control-label">Username</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group label-floating">
                                    <label className="control-label">Username</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>)
    }
})

const fields = [
  'nome'
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