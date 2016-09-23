import React from 'react'
import Item from './Item'
import AddItem from './AddItem'
import { observer } from 'mobx-react'

function booleanSort(a, b) {
  return (a.complete - b.complete)
}

export default observer(props => (
  <div className="box">
    <h1 className="title">{props.list.name}</h1>
    <AddItem list={props.list} />
    {props.list.items.sort(booleanSort).map((item, i) => <Item item={item} key={i} />)}
  </div>
))
