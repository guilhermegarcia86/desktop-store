'use strict'

import { createSimpleAction } from 'redux-action-helper'
import { hashHistory } from 'react-router'

export const GET_ITEM = 'GET_ITEM'
export const selectItem = createSimpleAction(GET_ITEM)
export const GET_ITENS = 'GET_ITENS'
export const getItens = createSimpleAction(GET_ITENS)
export const ADD_ITEM = 'ADD_ITEM'
export const addItem = createSimpleAction(ADD_ITEM)
export const EDT_ITEM = 'EDT_ITEM'
export const editItem = createSimpleAction(EDT_ITEM)
export const DEL_ITEM = 'DEL_ITEM'
export const deleteItem = createSimpleAction(DEL_ITEM)