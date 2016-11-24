import axios from 'axios'
import { getItens, addItem, editItem, deleteItem } from './item-actions'
import { createAsyncAction } from 'redux-action-helper'

const url = 'http://localhost:9000/'

export const apiGetItens = createAsyncAction((dispatch, data) => {
  axios.get(`${url}api/v1/item/full`).then((response) => {
    let _data = response.data
    return dispatch(getItens(_data))
  }).catch((err) => {
    if (err.message === 'Network Error') {
      swal('Verifique sua conexão.', '', 'error')
      return
    }
    console.error(err.message)
    swal('Falha na operação.', '', 'warning')
  })
})

export const apiAddItem = createAsyncAction((dispatch, data) => {
  axios.post(`api/v1/item`, data).then((response) => {
    let _data = response.data
    if (_data.status.code == 0) {
      data.id = _data.data
      swal(_data.status.text, '', 'success')
      return dispatch(addItem(_data.data))
    }
  }).catch((err) => {
    if (err.message === 'Network Error') {
      swal('Verifique sua conexão', '', 'error')
    }
    console.error(err.message)
    swal('Falha na operação', '', 'warning')
  })
})

export const apiEditItem = createAsyncAction((dispatch, data) => {
  axios.put(`api/v1/item/${data.id}`).then((response) => {
    let _data = response.data
    if(_data.status.code == 0){
      data.id = _data.data
      swal(_data.status.text, '', 'sucess')
      return dispatch(editItem(_data.data))  
    }    
  }).catch((err) => {
    if(err.message === 'Network Error'){
      swal('Verifique sua conexão', '', 'error')
    }
    console.error(err.message)
    swal('Falha ma operação', '', 'warning')
  })
})

export const apiDeleteItem = createAsyncAction((dispatch, data) => {
  axios.delete(`api/v1/itens/item/${data.id}`).then((response) => {
    let _data = response.data
    if(_data.status.code == 0){
      data.id = _data.data
      swal(_data.status.text, '', 'sucess')
      return dispatch(deleteItem(_data.data)) 
    }    
  }).catch((err) => {
    if(err.message === 'Network Error'){
      swal('Verifique sua conexão', '', 'warning')
    }
    console.error(err.message)
    swal('Falha ma operação', '', 'warning')
  })
})