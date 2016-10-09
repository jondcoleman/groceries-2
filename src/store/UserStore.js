import { observable } from 'mobx'

class UserStore {
  @observable user = { authenticated: true }
}

export default UserStore
