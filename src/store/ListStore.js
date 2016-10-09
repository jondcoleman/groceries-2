import { observable } from 'mobx'

class ListStore {
  @observable lists = [{
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
}

export default ListStore
