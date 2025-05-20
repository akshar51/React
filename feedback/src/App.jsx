import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";


const App = () => {
  
  const [hover, setHover] = useState(0);
  const [star, setStar] = useState(0);
  const [feedback, setFeedback] = useState({});
  const [list,setList] = useState([]);
  
  // FOR HOVERING OVER STAR
  const handleHover =(idx)=>{
    setHover(idx)

    if(star != 0){
        setStar(0)
    }
  }

  // FOR LEAVE STAR 
  const handleLeave = (idx)=>{
    setHover(0);
    setStar(idx)
  }

  // FOR SELECTING STAR ON CLICK
  const handleDown = (idx)=>{
    setStar(idx)
  }


  // PUSHING IN OBJECT
  const handleChange = (e)=>{
    const {name,value} = e.target;
    let data = {...feedback,[name]:value}
    setFeedback(data)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    let data = [...list,{...feedback,stars : star}]
    setList(data)
    setFeedback({});
    setStar(0);
  }

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <h1 className='text-center'>Feedback</h1>
          <form method='post' className='text-center' onSubmit={handleSubmit}>
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
            <textarea 
            name="msg" 
            id="msg" 
            className='mt-3'
            value={feedback.msg || ""}
            onChange={handleChange}>
            </textarea>
            <br />
            <button className='btn btn-primary mt-3'>Submit</button>
          </form>
            <table className='table mt-5'>
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Feedback</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {
                  list.map((value,index)=>(
                    <tr>
                      <td>{index + 1}</td>
                      <td>{value.msg}</td>
                      <td>
                        {
                          [...Array(5).keys().map((val,idx)=>(
                              <FaStar
                              color={value.stars > idx ? "gold" : "gray" }
                              size={20}/>
                          ))]
                        }
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
