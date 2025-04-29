import React, { useEffect, useState } from 'react'
import Hello from './Component/Hello';

const App = () => {

  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false)


  useEffect(() => {
      console.log("Component Mounting")
  }, [])


  useEffect(()=>{
    console.log("Component Updating")
  },[count])

  
 


  const handleChange = ()=>{
    return setCount(count + 1)
  }


  const handleDisplay = ()=>{
    return setDisplay(true)
  }

  return (
    <>
      <h3>Component</h3>
      <h3>{count}</h3>
      <button onClick={handleChange}>Change</button>

      {display ? <h3>Developer</h3> : <Hello/> }
      <button onClick={handleDisplay}>Change</button>
    </>
  )
}

export default App
