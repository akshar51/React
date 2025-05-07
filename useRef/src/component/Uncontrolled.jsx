import React, { useRef, useState } from 'react'

const Uncontrolled = () => {
    const [input, setInput] = useState("")
    const inputRef = useRef("");

    const handleSubmit = ()=>{
        setInput(inputRef.current)
        console.log(inputRef.current)
    }

  return (
    <>
        <input type="text" ref={inputRef}/>
        <button onClick={handleSubmit}>Submit</button>
        <h2>{input}</h2> 
    </>
  )
}

export default Uncontrolled
