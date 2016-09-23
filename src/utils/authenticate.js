import firebase from './firebase'

const provider = new firebase.auth.GoogleAuthProvider()

function authenticate() {
  firebase.auth().signInWithRedirect(provider)
}

export default authenticate
