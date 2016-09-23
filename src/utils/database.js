import firebase from './firebase'

const database = firebase.database()

const listSeed = [{
  name: 'Grocery List',
  items: [
    {
      name: 'chobani',
      category: 'Dairy',
      complete: true
    },
    {
      name: 'burgers',
      category: 'Meat',
      complete: false
    },
    {
      name: 'pasta',
      category: 'Grocery',
      complete: true
    }
  ]
}]

database.ref('lists').set(listSeed).catch(err => console.log(err))

export default database