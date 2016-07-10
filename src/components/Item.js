import React from 'react'
import data from '../data'

const Item = ({ params: { category, item } }) => {
  const menuItem = data.lookupItem(category, item)

  return (
  <div>
    <h1>{menuItem.name}</h1>
    <p>
      $
      {menuItem.price}
    </p>
  </div>
  )
}

export default Item
