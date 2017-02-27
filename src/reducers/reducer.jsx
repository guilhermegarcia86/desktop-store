import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import * as Actions from '../actions/item-actions'
import _ from 'lodash'

const item = (state = {}, action) => {
  switch(action.type){
    case Actions.GET_ITEM: return action.payload
    default: return state
  }
}

const itens = (state = [], action) => {
  switch (action.type) {
    case Actions.GET_ITENS: return action.payload
    case Actions.ADD_ITEM: return _.sortBy([...state, action.payload], 'nome')
    case Actions.EDT_ITEM: return _.uniqBy([action.payload, ...state], 'id')
    case Actions.DEL_ITEM: return _.without(state, action.payload.model)
    default: return state
  }
}

const menuItems = (state=[], action) => {
  switch (action.type) {
    case Actions.GET_EMPRESA: {
      return 
    }
    default: return state
  }
}

export default combineReducers({
  itens,
  item,
  menuItems,
  form: formReducer
})