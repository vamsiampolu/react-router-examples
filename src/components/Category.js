import React from 'react'
import data from '../data'

const Category = ({ children, params }) => {
  const category = data.lookupCategory(params.category)

  return (
  <div>
    <h1>{category.name}</h1>
    {children || (
     <p>
       {category.description}
     </p>
     )}
  </div>
  )
}

export default Category
