import React, { useContext } from 'react'
import UseContext from '../context/UseContext'

const Profile = () => {

    const {user} = useContext(UseContext);
    

  return (
    <>
      <h1>Welcome {user.name}</h1>
    </>
  )
}

export default Profile
