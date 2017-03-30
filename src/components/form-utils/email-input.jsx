import React from 'react'
import Mask from '../../assets/js/jquery.mask.min'

const EmailInput = React.createClass({

    // componentDidMount() {
	// 	$(this.refs.emailInput).mask(emailMask)
	// },
    
    getDefaultProps() {
      return {
        col: 5,
        required: false,
        maxLength: 40,
        disabled: false,
        label: null,
        type: "email"
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
                        ref='emailInput'
                        maxLength={this.props.maxLength}
                        disabled={this.props.disabled}
                        type={this.props.type} 
                        className="form-control" />
                </div>
            </div>
        )
    }

})

export default EmailInput;