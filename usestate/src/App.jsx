import React, { useState } from 'react'
import User from './Component/User'

function App() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e)=>{
    setInput(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setInput('');
    setName(input)
  }

  return (
    <>
      <User handleChange = {handleChange} handleSubmit = {handleSubmit} name={name} input={input}/>
    </>
  )
}

export default App
