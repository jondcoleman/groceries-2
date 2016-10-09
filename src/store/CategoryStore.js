import { observable } from 'mobx'

class CategoryStore {
  @observable categories = [
    { name: 'Bevarages', id: 1 },
    { name: 'Dairy', id: 2 },
    { name: 'Deli', id: 3 },
    { name: 'Freezer', id: 4 },
    { name: 'Meat', id: 5 },
    { name: 'Misc', id: 6 },
    { name: 'Pharmacy', id: 7 },
    { name: 'Produce', id: 8 },
  ]
}

export default CategoryStore
