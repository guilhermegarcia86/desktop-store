import React from 'react'
import { render } from 'react-dom'
import { Route, Router, Redirect, hashHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import appStore from '../src/reducers/store'

import Layout from '../src/components/layout/layout'
import ItemCadastro from '../src/components/item-cadastro'
import Itens from '../src/components/itens'
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAF-QAMAs8T1fbev9IkazyUwCpPfbOji1A",
    authDomain: "desktopstore-fb427.firebaseapp.com",
    databaseURL: "https://desktopstore-fb427.firebaseio.com",
    storageBucket: "desktopstore-fb427.appspot.com",
    messagingSenderId: "781011874691"
  }
firebase.initializeApp(config)

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