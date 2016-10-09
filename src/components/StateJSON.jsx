import React from 'react'
import { observer } from 'mobx-react'

function State({ listStore }) {
  return (
    <div>
      <pre>{JSON.stringify(listStore, null, 2)}</pre>
    </div>
  )
}

export default observer(['listStore'], State)
