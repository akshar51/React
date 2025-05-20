import React, { useState } from 'react'

const App = () => {

  const [data, setData] = useState({});
  const [list, setList] = useState([]);
  
  const handleChange = (e)=>{
    const {name,value,files} = e.target

    if(files){
      let file = files[0]
      let reader = new FileReader();
      reader.onloadend = ()=>{
        let fileData = {
          name : file.name,
          type : file.type,
          url : reader.result
        }
        setData({...data,fileData : fileData})
      }
      reader.readAsDataURL(file)
    }
    else{
      setData({...data,[name]:value})
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setList([...list,{...data,id : Date.now()}])
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto mt-3">
            <h1>Image adding</h1>
              <form method='post' onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" 
                  className="form-control"
                  name='username'
                  onChange={handleChange}
                  value={data.username || ""} 
                  id="username"  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" 
                  className="form-control"
                  name='password'
                  onChange={handleChange}
                  value={data.password || ""} 
                  id="password" />
                </div>
                <div className="mb-3">
                  <input type="file" className='form-control' onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mx-auto mt-4">
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {
                  list.map((val,idx)=>(
                      <tr key={val.id}>
                        <td>{idx+1}</td>
                        <td>{val.username}</td>
                        <td>{val.password}</td>
                        <td>
                          <img
                          className='rounded-circle' 
                          src={val.fileData ? val.fileData.url : ""} 
                          alt={val.fileData ? val.fileData.name : ""} 
                          style={{width : "50px"}}/>
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
