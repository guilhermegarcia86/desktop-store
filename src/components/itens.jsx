import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { apiGetItens, apiDeleteItem, apiEditItem, apiAddItem } from '../actions/api-item-options'
import { selectItem } from '../actions/item-actions'
import _ from 'lodash'

import Grid from './itens-grid'
import Form from './item-form'

let Itens = React.createClass({

  getInitialState() {
    return { action: 'LIST' }
  },

  componentDidMount() {
    this.refreshItems()
  },

  refreshItems() {
    this.props.apiGetItens()
  },

  onAdd() {
    this.props.selectItem({})
    this.setState({ action: 'CREATE' })
  },

  onEdit(item) {
    this.props.selectItem(item)
    this.setState({ action: 'UPDATE' })
  },

  successCallback(msg) {
    swal(msg, '', 'success')

    this.setState({ action: 'LIST' })
  },

  onSave(model) {
    const data = { model }

    switch (this.state.action) {
      case 'UPDATE': {
        this.props.apiEditItem(data)
        this.successCallback('Editado com sucesso')
        break;
      }
      default: {
        this.props.apiAddItem(data)
        this.successCallback('Adicionado com sucesso')
        break;
      }
    }
  },

  onDelete(model) {
    this.props.apiDeleteItem({ model })

    this.setState({ action: 'LIST' })
  },

  onFormCancel(action) {
    this.setState({ action: action })
  },

  onRowClick(id) {
    console.log('onRowClick')
    if (id) {
      const { dogs } = this.props
      const dog = _.find(dgos, {'id': parseInt(id, 10)})

      this.onEdit(dog)
    }
  },

  onCancel() {
    this.props.onCancel()
  },

  render(){

    const { action } = this.state
    const { dog, dogs } = this.props

    switch (action) {
      case 'UPDATE':
      case 'CREATE': return (
        <Form model={dog}
              initialValues={dog}
              onSave={this.onSave}
              onCancel={this.onFormCancel}
              onDelete={this.onDelete}
              action={action}/>
      )
      default: return (
        <Grid model={dogs}
              onAdd={this.onAdd}
              onCancel={this.onCancel}
              onRowClick={this.onRowClick}/>
      )
    }
  }
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ apiGetItens, apiDeleteItem, selectItem }, dispatch);
}

function mapStateToProps({ dogs }) {
  return { dogs };
}
export default connect(mapStateToProps, mapDispatchToProps)(Itens);