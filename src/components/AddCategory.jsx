import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import shortid from 'shortid'

const formState = observable({
  name: ''
})

function resetFormState() {
  formState.name = ''
}

@observer(['categoryStore'])
class AddItem extends Component {
  constructor() {
    super()
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(e) {
    e.preventDefault()
    this.props.categoryStore.categories.push({ name: formState.name, id: shortid.generate() })
    resetFormState()
  }

  render() {
    return (
      <div className="control is-grouped">
        <p className="control is-expanded">
          <input
            type="text"
            className="input"
            value={formState.name}
            onChange={(e) => { formState.name = e.target.value }}
          />
        </p>
        <p className="control">
          <button
            className="button category-button"
            onClick={this.handleAdd}
          >
            Add
          </button>
        </p>
      </div>
    )
  }
}

export default AddItem
