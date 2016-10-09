import React from 'react'

function Item({ item }) {
  return (
    <div onClick={() => { item.complete = !item.complete }}>
      <input
        type="checkbox"
        checked={item.complete}
      />
      <span
        className="item-name"
        style={item.complete ? { textDecoration: 'line-through' } : null}
        readOnly
      >
        {item ? item.name : null}
      </span>
    </div>
  )
}

export default Item
