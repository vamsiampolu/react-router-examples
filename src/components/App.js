import React from 'react'
import ReactCSSTransistionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router'
import '../app.css'

const activeStyle = {color: 'red'}

const App = ({children, location}) => {
  console.log(children, location)
  return (
  <div>
    <ul>
      <li>
        <Link to="/page1" activeStyle={activeStyle}> Page 1
        </Link>
      </li>
      <li>
        <Link to="/page2" activeStyle={activeStyle}> Page 2
        </Link>
      </li>
      <li>
        <Link to='/user/bob' activeStyle={activeStyle}> Bob
        </Link>
      </li>
      <li>
        <Link to='/user/sally' activeStyle={activeStyle} query={{showAge: true}}> Sally
        </Link>
      </li>
      <li>
        <Link to='/sidebar' activeStyle={activeStyle}> Sidebar Demo
        </Link>
      </li>
    </ul>
    <ReactCSSTransistionGroup
      component="div"
      transitionName="swap"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      {React.cloneElement(children || <div/>, {
         key: location.pathname.split('/')[1] || 'root'
       })}
    </ReactCSSTransistionGroup>
  </div>
  )
}

export default App
