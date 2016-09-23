import { observable } from 'mobx'

class AppState {
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

  // constructor() {
  //   setInterval(() => {
  //     this.timer += 1;
  //   }, 1000);
  // }

  resetTimer() {
    this.timer = 0
  }
}

export default AppState
