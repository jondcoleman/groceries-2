import React, { Component } from 'react'
import '../node_modules/bulma/css/bulma.css'
import './css/style.css'
import firebase from './utils/firebase'
import authenticate from './utils/authenticate'
import database from './utils/database'
import { observer, Provider } from 'mobx-react'

import Nav from './components/Nav'
import Router from './components/Router'
import DevTools from 'mobx-react-devtools'

firebase.auth().getRedirectResult().then((result) => {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken
    console.log(token)
    // ...
  }
  // The signed-in user info.
  const user = result.user
  if (!user) authenticate()
  // console.log('user', user)
  const newList = database.ref('lists').push()
  newList.set({ name: 'Groceries', items: [] })
  newList.child('items').push().set({ name: 'chobani' })
})
.catch((error) => {
  // Handle Errors here.
  // const errorCode = error.code
  // const errorMessage = error.message
  console.log(error)
  // The email of the user's account used.
  // const email = error.email
  // The firebase.auth.AuthCredential type that was used.
  // const credential = error.credential
  // ...
})



@observer
class App extends Component {
  render() {
    return (
      <Provider
        userStore={this.props.userStore}
        categoryStore={this.props.categoryStore}
        listStore={this.props.listStore}
        uiStore={this.props.uiStore}
      >
        <div>
          <DevTools />
          <Nav />
          <div className="app">
            <Router />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App

