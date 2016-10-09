import { observable } from 'mobx'

class UIStore {
  pages = ['main', 'categories']

  @observable page = 'main'

  setPage = (pageName) => {
    if (this.pages.indexOf(pageName) < 0) {
      throw Error('Page not valid')
    } else {
      this.page = pageName
    }
  }
}

export default UIStore
