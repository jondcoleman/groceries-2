import React from 'react'
import { observer } from 'mobx-react'

function Category(props) {
  return (
    <div className="control is-grouped">
      <p className="control is-expanded" >
        <input
          type="text"
          className="input"
          value={props.category.name}
          onChange={(e) => {
            props.category.name = e.target.value
          }}
        />
      </p>
      <p className="control">
        <button
          className="button is-danger category-button"
          onClick={props.handleDelete}
        >
        Delete
        </button>
      </p>
    </div>
  )
}

export default observer(Category)
