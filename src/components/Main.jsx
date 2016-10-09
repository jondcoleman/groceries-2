import React from 'react'
import State from './StateJSON'
import List from './List'
import { observer } from 'mobx-react'

function Main({ listStore }) {
  return (
    <div className="App columns">
      <div className="is-half column is-offset-one-quarter">
        {listStore.lists.map((list, i) => <List list={list} key={i} />)}
        <State listStore={listStore.lists} />
      </div>
    </div>
  )
}

export default observer(['listStore'], Main)
