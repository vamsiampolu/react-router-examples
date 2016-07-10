import React from 'react'
import data from '../data'
import { Link } from 'react-router'

const activeStyle = {
  color: 'hotpink'
}

const IndexSidebar = () => (
  <div>
    <h2>Categories</h2>
    <ul>
      {data.getAll().map((category, index) => (
         <li key={index}>
           <Link to={`/sidebar/category/${category.name}`} activeStyle={activeStyle}>
           {category.name}
           </Link>
         </li>
       ))}
    </ul>
  </div>
)
const IndexContent = () => (
  <div>
    <h1>Sidebar</h1>
    <p>
      Routes can have multiple components, so that all portions of your UI can participate in the routing.
    </p>
  </div>
)

const SidebarApp = ({ content, sidebar }) => (
  <div>
    <div className='Sidebar'>
      {sidebar || <IndexSidebar />}
    </div>
    <div className='Content'>
      {content || <IndexContent />}
    </div>
  </div>
)

export default SidebarApp
