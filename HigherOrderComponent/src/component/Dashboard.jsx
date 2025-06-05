import React from 'react'

const Dashboard = (props) => {

    let {user} = props

  return (
    <>
        <h1>Welcome to Dashboard</h1>
        <h1>{user}</h1> 
    </>
  )
}

export default Dashboard
