import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";


const App = () => {
  
  const [hover, setHover] = useState(0);
  const [star, setStar] = useState(0);
  
  const handleHover =(idx)=>{
    setHover(idx)

    if(star != 0){
        setStar(0)
    }
  }

  const handleLeave = (idx)=>{
    setHover(0);
    setStar(idx)
  }

  const handleDown = (idx)=>{
    setStar(idx)
  }


  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <h1 className='text-center'>Feedback</h1>
          <form action="" className='text-center'>
             {
              [...Array(5).keys().map((val,idx)=>(
                <FaStar
                key={idx} 
                size={30}
                color={hover > idx || star > idx ? "gold" : "grey"}
                onMouseOver={()=>handleHover(idx + 1)}
                onMouseLeave={()=>handleLeave(idx + 1)}
                onMouseDown={()=>handleDown(idx + 1)}
                />
              ))]
            }
            <br />
            <textarea name="msg" id="msg" className='mt-3'></textarea>
            <br />
            <button className='btn btn-primary mt-3'>Submit</button>
          </form>
            <table className='table mt-5'>
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
