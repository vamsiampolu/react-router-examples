import React from 'react'
import { Link } from 'react-router'

const Page2 = ({children}) => (
  <div>
    <h2>Page Two</h2>
    <ul>
      <li>
        <Link to="/page2/tab1"> Tab 1
        </Link>
      </li>
      <li>
        <Link to="/page2/tab2"> Tab 2
        </Link>
      </li>
    </ul>
    {children}
  </div>
)

export default Page2
