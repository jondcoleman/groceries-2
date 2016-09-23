import { observable } from 'mobx'

class CategoryStore {
  @observable categories = [
    'Bevarages',
    'Dairy',
    'Deli',
    'Freezer',
    'Meat',
    'Misc',
    'Pharmacy'
    'Produce',
  ]
}

export default CategoryStore
