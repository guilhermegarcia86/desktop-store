import React, { PropTypes } from 'react'
import DatePicker from 'react-datepicker'

const DateInput = React.createClass({   

    componentDidMount(){
        $(this.refs.dateInput).datepicker({
             weekStart:1
        })
    },
    
    getDefaultProps() {
      return {
        col: 2,
        required: false,
        maxLength: 12,
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
                        ref="dateInput"
                        maxLength={this.props.maxLength}
                        disabled={this.props.disabled}
                        type={this.props.type} 
                        className="form-control datepicker" />
                </div>
            </div>
        )
    }

})

export default DateInput;