import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

import UserStore from './store/UserStore'
import ListStore from './store/ListStore'
import CategoryStore from './store/CategoryStore'
import UIStore from './store/UIStore'
import database from './utils/database'

const userStore = new UserStore()
const listStore = new ListStore()
const categoryStore = new CategoryStore()
const uiStore = new UIStore()

render(
  <AppContainer>
    <App
      userStore={userStore}
      categoryStore={categoryStore}
      listStore={listStore}
      uiStore={uiStore}
    />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    console.log('re-rendering')
    render(
      <AppContainer>
        <NextApp
          userStore={userStore}
          categoryStore={categoryStore}
          listStore={listStore}
          uiStore={uiStore}
        />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
