import React, { Component } from 'react';
import '../node_modules/bulma/css/bulma.css'
import './css/style.css'
import firebase from './utils/firebase'
import authenticate from './utils/authenticate'
import database from './utils/database'
import List from './components/List'
import Nav from './components/Nav'
import { observer } from 'mobx-react'

firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    console.log(token)
    // ...
  }
  // The signed-in user info.
  var user = result.user;
  console.log('user', user)
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(error)
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
let counter = 0

const State = observer((appState) => 
    <div>
      <pre>{JSON.stringify(appState, null, 2)}</pre>
    </div>
)

@observer
class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     lists: []
  //   }
  // }
  // componentDidMount() {
  //   database.ref('lists').on('value', snapshot => this.setState({lists:snapshot.val()}))
  // }
  render() {
    return (
      <div>
        <Nav />
        <div className="App columns">
          <div className="is-half column is-offset-one-quarter">
            <button onClick={authenticate}>Log In</button>
            {this.props.appState.lists.map((list, i) => <List list={list} key={i}/>)}
            <State appState={this.props.appState} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
