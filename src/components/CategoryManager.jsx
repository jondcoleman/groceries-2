import React from 'react'
import { observer } from 'mobx-react'
import AddCategory from './AddCategory'

import Category from './Category'

function CategoryManager({ categoryStore }) {
  return (
    <div className="App columns">
      <div className="is-half column is-offset-one-quarter">
        <h2 className="title" >Categories</h2>
        <AddCategory />
        {categoryStore.categories.map(category =>
          <Category
            category={category}
            key={category.id}
            handleDelete={() => categoryStore.categories.remove(category)}
          />
        )}
      </div>
    </div>
  )
}

export default observer(['categoryStore'], CategoryManager)
