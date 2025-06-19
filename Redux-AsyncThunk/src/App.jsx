import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from './features/user/userSlice'

const App = () => {

  const dispatch = useDispatch()

  return (
    <>
      <button onClick={()=>dispatch(fetchData())}>Fetch</button>
    </>
  )
}

export default App
