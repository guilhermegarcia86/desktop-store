import React from 'react'
import { render } from 'react-dom'
import { Route, Router, Redirect, hashHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import appStore from '../src/reducers/store'

import Layout from '../src/components/layout/Layout'
import ItemCadastro from '../src/components/item-cadastro'
import Itens from '../src/components/itens'
import EmpresaCadastro from '../src/components/empresa/forms/empresa-cadastro'

const routes = (
  <Route>
    <Route path='/' component={Layout} >
      {/*<Redirect from='/' to='/empresa/incluir'/>
      <Route path='empresa/incluir' component={EmpresaCadastro} />
      <Route path='cadastro' component={ItemCadastro} />
      <Route path='pesquisar' component={Itens} />*/}
    </Route>
  </Route>
)

render(
  <Provider store={appStore}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)