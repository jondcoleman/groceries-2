import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import Link from './Link'

@observer(['userStore', 'uiStore'])
class Nav extends Component {
  @observable showMenu = false
  userStore = this.props.userStore
  uiStore = this.props.uiStore

  toggleMenu = () => { this.showMenu = !this.showMenu }

  toggleLogin = () => { this.userStore.user.authenticated = !this.userStore.user.authenticated }

  navigate = (page) => {
    this.uiStore.page = page
    this.toggleMenu()
  }

  render() {
    return (
      <nav className="nav">
        <span
          className="nav-toggle"
          onClick={this.toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className={`nav-right nav-menu ${this.showMenu ? 'is-active' : null}`}>
          <Link page="Home" handleClick={this.navigate} />
          <Link page="Categories" handleClick={this.navigate} />
          <a href="#"className="nav-item" onClick={this.toggleLogin}>
            {this.userStore.user.authenticated ? 'Log Out' : 'Log In'}
          </a>
        </div>
      </nav>
    )
  }
}

export default Nav
