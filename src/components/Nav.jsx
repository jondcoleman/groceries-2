import React, { Component } from 'react'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      showMenu: false
    }
  }
  
  render() {
    return (
      <nav className="nav">
        <span className="nav-toggle"
          onClick={() => this.setState({showMenu: !this.state.showMenu})}
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className={`nav-right nav-menu ${this.state.showMenu ? 'is-active' : null}`}>
          <a href="#" className="nav-item">Home</a>
          <a href="#" className="nav-item">Manage Categories</a>
          <a href="#" className="nav-item">Log In</a>
        </div>
      </nav>
    )
  }
}

export default Nav