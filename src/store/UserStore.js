import { observable } from 'mobx'

class UserStore {
  @observable user = { authenticated: false }
}

export default UserStore
