import React from 'react'
import { useDispatch } from 'react-redux'
import { createTodo, getTodo } from './features/Todo/thunk'

const App = () => {

  const dispatch = useDispatch()

  const handleSubmit = ()=>{
    dispatch(createTodo({name : 'John Doe'}))
  }

  const getData = ()=>{
    dispatch(getTodo())
  }

  return (
    <>
      <button onClick={getData}>Add</button>
    </>
  )
}

export default App
