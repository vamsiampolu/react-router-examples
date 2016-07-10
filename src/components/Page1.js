import React from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const activeStyle = {color: 'green'}

const Page1 = ({ children, location:{ pathname } }) => (
  <div>
    <h1>Page One</h1>
    <ul>
      <li>
        <Link to='/page1/tab1' activeStyle={activeStyle}> Tab 1
        </Link>
      </li>
      <li>
        <Link to='/page1/tab2' activeStyle={activeStyle}> Tab 2
        </Link>
      </li>
    </ul>
    <ReactCSSTransitionGroup
      transitionName='example'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      component='div'>
      {React.cloneElement(children || <div/>, {key: pathname})}
    </ReactCSSTransitionGroup>
  </div>
)

export default Page1
