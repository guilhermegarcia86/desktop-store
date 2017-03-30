import React from 'react'
import VMasker from '../utils/vanilla-masker'

const maskCnpj = '99.999.999/9999-99';

const CnpjInput = React.createClass({

     componentDidMount() {
		VMasker(this.refs.cnpjInput).maskPattern(maskCnpj)
	},
    
    getDefaultProps() {
      return {
        col: 5,
        required: false,
        disabled: false,
        label: null,
        type: "text"
      }
  },

    render(){
        const { label, field, disabled, col, ...rest } = this.props;

        return(
            <div className={`col-md-${col}`}>
                <div className="form-group label-floating">
                    <label className="control-label">{label}</label>
                    <input 
                        {...field}
                        {...rest}
                        ref="cnpjInput"
                        maxLength={this.props.maxLength}
                        disabled={this.props.disabled}
                        type={this.props.type} 
                        className="form-control" />
                </div>
            </div>
        )
    }

})

export default CnpjInput;