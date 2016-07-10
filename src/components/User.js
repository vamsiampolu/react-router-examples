import React from 'react'

const User = (props) => {
  console.log(props)
  const {params: {userid}, location: {query}} = props
  let age = query && query.showAge ? '33' : ''
  return (
  <div className="User">
    <h1>User Id: {userid}</h1>
    {age}
  </div>
  )
}

export default User
