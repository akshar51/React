import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from './pages/Form'
import Table from './pages/Table'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/form' element={<Form/>}/>
        <Route path='/table' element={<Table/>}/>
      </Routes>
    </>
  )
}

export default App
