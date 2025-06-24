import React from 'react'
import Form from './components/Form'
import Table from './components/Table'

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <Form/>
            <Table/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
