import React, { useState } from 'react'

const Task = () => {

  const [task, setTask] = useState([
    {
      id : 1,
      name : "HTML & CSS"
    },
    {
      id : 2,
      name : "BOOTSTRAP AND JQUERY"
    },
    {
      id : 3,
      name : "C AND C++"
    },
    {
      id : 4,
      name : "JAVASCRIPT"
    }
  ])

  const handleDelete = (index)=>{
    let data = task.filter((val,idx)=>{
      return val.id != index;
    })
    setTask(data)
  }

  return (
    <>
      <div className="container">
        <div className="row mt-4 justify-content-center fw-bold">
          <div className="col-md-6">
            <h2>Task</h2>
            <table className='table caption-top'>
              <caption>Task Data</caption>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Task</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  task.map((val,index)=>{
                      return(
                        <tr key={val.id}>
                          <td>{index + 1}</td>
                          <td>{val.name}</td>
                          <td>
                            <button className='btn btn-danger' onClick={()=> handleDelete(val.id)}>Delete</button>
                          </td>
                        </tr>
                      )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Task
