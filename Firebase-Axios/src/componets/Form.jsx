import React from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/user/thunk'

const Form = () => {
    const obj = {
        name : "Mark Minni",
        age : 50,
        gender : "male",
    }
    const dispatch = useDispatch()

  return (
    <>
      <button className='btn btn-success' onClick={()=> dispatch(createUser(obj))}>Add Data</button>
    </>
  )
}

export default Form
