import React, { useCallback, useState } from 'react'
import Header from './component/Header'
import Increment from './component/Increment';

const App = () => {

  const [count, setCount] = useState(0);
  const [mainCount,setmainCount] = useState(0)
  console.log("parent render...")

  const handleCount  = useCallback (()=>{
    setCount(count+1);
  },[count])


  const handleIncre = ()=>{
    setmainCount(mainCount+1);
  }

  return (
    <>
      <Header name="XYZ"/>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Welcome to App</h2>
            <h5>count : {count}</h5>
            <h5>main count : {mainCount}</h5>
            <div className="d-flex gap-2">
              <Increment handleCount={handleCount}/>
              <button onClick={handleIncre} className='btn btn-primary'>Primary Increment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
