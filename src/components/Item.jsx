import React from 'react'
import { observer } from 'mobx-react'

export default observer(({ item }) =>
  <div>
    <input
      type="checkbox"
      onChange={() => { item.complete = !item.complete }}
      checked={item.complete}
    />
    <span
      className="item-name"
      style={item.complete ? { textDecoration: 'line-through' } : null}
    >
      {item ? item.name : null}
    </span>
  </div>
)
