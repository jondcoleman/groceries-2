import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import ListStore from './store/ListStore'
import App from './App'

const listStore = new ListStore()

render(
  <AppContainer>
    <App listStore={listStore} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default

    render(
      <AppContainer>
        <NextApp appState={appState} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
