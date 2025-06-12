import React from 'react'
import Login from './components/Login'
import ContextProvider from './context/ContextProvider'
import Profile from './components/Profile'

const App = () => {
  return (
    <>
      <ContextProvider>
        <Login/>
        <Profile/>
      </ContextProvider>
    </>
  )
}

export default App
