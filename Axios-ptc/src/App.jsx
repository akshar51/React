import React, { useState } from "react";
import './index.css'
import axios from "axios";


let url = 'http://localhost:3000/product'

const App = () => {

  const [user, setUser] = useState({});
  const [list,setList] = useState([])
  const [editIdx,setEditIdx] = useState("")

  const handleChange = (e)=>{
    let {name,value} = e.target
    const data = {...user,[name]:value}
    setUser(data)
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    let newUser = editIdx === "" ? {...user,id : String(Date.now())} : {...user}

    if(editIdx == ""){
      await axios.post(url,newUser)
      let data = [...list,newUser];
      setList(data)
    }
    else{
      await axios.put(url+`/${editIdx}`,newUser);
      let data = list.map((val)=> val.id === editIdx ? newUser : val)
      setList(data)
      setEditIdx("") 
    }

    setUser({})
  }


  const handleDelete = async (id)=>{
    await axios.delete(url +`/${id}`)
    let data = list.filter(val => val.id !== id);
    setList(data)
  }

  const handleEdit = (id)=>{
    let data = list.find(val => val.id === id);
    setUser(data);
    setEditIdx(id)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="my-4">Login form</h1>
            <form method="post" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={user.email || ''}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={user.password || ''}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-8 mx-auto mt-4">
            <table className="table ">
              <caption className="caption-top">
                <h1 className="text-white">Form data</h1>
              </caption>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  list.map((val,idx)=>{
                    return(
                       <tr key={val.id}>
                      <td>{idx + 1}</td>
                      <td>{val.email}</td>
                      <td>{val.password}</td>
                      <td>
                        <button className="btn btn-warning me-1" onClick={()=>handleEdit(val.id)}>Edit</button>
                        <button className="btn btn-danger me-1" onClick={()=>handleDelete(val.id)}>Delete</button>
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
  );
};

export default App;
