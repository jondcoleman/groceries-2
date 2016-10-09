import React from 'react'
import Item from './Item'
import AddItem from './AddItem'
import { observer } from 'mobx-react'

function booleanSort(a, b) {
  return (a.complete - b.complete)
}

function iterateCategories(items) {
  // each time category changes spit out a header with category
  let curCategory = ''
  const jsx = []
  items.forEach((item, i) => {
    if (item.category !== curCategory) {
      jsx.push(<h3 className="title">{item.category}</h3>)
      curCategory = item.category
    }
    jsx.push(<Item item={item} key={i} />)
  })
  return jsx
}

function List(props) {
  return (
    <div className="box">
      <h1 className="title">{props.list.name}</h1>
      <AddItem list={props.list} />
      {iterateCategories(props.list.items)}
      {/* {props.list.items.sort(booleanSort).map((item, i) => <Item item={item} key={i} />)} */}
    </div>
  )
}

export default observer(List)
