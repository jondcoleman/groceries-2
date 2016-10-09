import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, toJS } from 'mobx'

const formState = observable({
  name: '',
  category: ''
})

function resetFormState() {
  formState.name = ''
  formState.category = ''
}

@observer(['categoryStore'])
class AddItem extends Component {
  constructor() {
    super()
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(e) {
    e.preventDefault()
    this.props.list.items.push(Object.assign(toJS(formState), { complete: false }))
    resetFormState()
  }

  renderCategoryOptions() {
    return this.props.categoryStore.categories.map(category =>
      <option value={category.name} key={category.id} >{category.name}</option>)
  }

  render() {
    return (
      <form action="" className="add-item">
        <div className="control is-grouped">
          <p className="control">
            <input
              type="text"
              className="input"
              value={formState.name}
              onChange={(e) => { formState.name = e.target.value }}
            />
          </p>
          <p className="control">
            <span className="select">
              <select
                value={formState.category}
                onChange={(e) => { formState.category = e.target.value }}
              >
                <option value=""></option>
                {this.renderCategoryOptions()}
              </select>
            </span>
          </p>
          <p className="control">
            <button
              className="button"
              onClick={this.handleAdd}
            >
              Add
            </button>
          </p>
        </div>
      </form>
    )
  }
}

export default AddItem
