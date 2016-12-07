import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import * as Actions from '../actions/item-actions'
import _ from 'lodash'
import MenuItem from '../components/layout/navigation/stores/menu-item'
import MenuItemsData from '../components/layout/navigation/stores/menu-itens.js'

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
      return MenuItem.normalizeItems(MenuItemsData)
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