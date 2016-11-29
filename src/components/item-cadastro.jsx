import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const ItemCadastro = React.createClass({

    render(){
        return(

            <div>
                
            </div>

        )
    }

})

function mapDispatchToProps(dispatch) {
  let actions = { apiAddItem }
  return bindActionCreators(actions, dispatch)
}

function mapStateToProps(state) {
  return {
    optionsGlobal: state.optionsGlobal
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCadastro)