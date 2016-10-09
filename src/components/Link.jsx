import React from 'react'

function Link({ page, handleClick }) {
  return (
    <a href="#" className="nav-item" onClick={() => handleClick(page)}>{page}</a>
  )
}

export default Link
