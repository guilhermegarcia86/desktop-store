import React from 'react'

const TextInput = React.createClass({
    
    getDefaultProps() {
      return {
        col: 5,
        required: false,
        maxLength: 40,
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
                        maxLength={this.props.maxLength}
                        disabled={this.props.disabled}
                        type={this.props.type} 
                        className="form-control" />
                </div>
            </div>
        )
    }

})

export default TextInput;