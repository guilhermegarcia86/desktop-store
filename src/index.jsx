import React from 'react'
import { render } from 'react-dom'
import { Route, Router, Redirect, hashHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import appStore from '../src/reducers/store'

import Layout from '../src/components/layout/layout'
import ItemCadastro from '../src/components/item-cadastro'
import Itens from '../src/components/itens'

const routes = (
  <Route>
    <Route path='/' component={Layout} >
      <IndexRoute component={Itens}/>
      <Route path='cadastro' component={ItemCadastro} />
      <Route path='pesquisar' component={Itens} />
     </Route>
  </Route>
)

render(
  <Provider store={appStore}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)