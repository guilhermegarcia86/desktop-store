import { createSimpleAction, createDynaAction } from 'redux-action-helper'
import { hashHistory } from 'react-router'

export const INIT = '@@redux/INIT'

// MENU
export const ACT_MENUITEM = 'ACT_MENUITEM'
export const activateMenuItem = function(item) {
  if(item.route) {
    hashHistory.push(item.route)
  }

  return {
    type: ACT_MENUITEM,
    payload: item
  }
}