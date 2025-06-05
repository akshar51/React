import React from 'react'
import HOC from './utils/HOC'
import Dashboard from './component/Dashboard'
import Home from './component/Home'

const App = () => {

  let AuthDsh = HOC(Dashboard)

  return (
    <>
    <Home/>
      <AuthDsh user = "Bajaj"/>
    </>
  )
}

export default App
