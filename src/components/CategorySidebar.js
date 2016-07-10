import React from 'react'
import data from '../data'
import { Link } from 'react-router'

const activeStyle = {
  color: 'hotpink'
}

const CategorySidebar = ({ params }) => {
  const category = data.lookupCategory(params.category)

  return (
  <div>
    <Link to="/"> ◀︎ Back
    </Link>
    <h2>{category.name} Items</h2>
    <ul>
      {category.items.map((item, index) => (
         <li key={index}>
           <Link to={`/sidebar/category/${category.name}/${item.name}`}>
           {item.name}
           </Link>
         </li>
       ))}
    </ul>
  </div>
  )
}

export default CategorySidebar
