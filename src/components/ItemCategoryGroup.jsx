import React from 'react'
import Item from './Item'
import { observer } from 'mobx-react'

function booleanSort(a, b) {
  return (a.complete - b.complete)
}

function ItemCategoryGroup(props) {
  return props.list.items.sort(booleanSort).map((item, i) => <Item item={item} key={i} />)
}

export default observer(ItemCategoryGroup)
