import React, { useEffect, useRef, useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({});
    const [list, setList] = useState([]);
    const [editUser, setEditUser] = useState({});
    const [editIdx, setEditIdx] = useState(-1)
    const btnRef = useRef();
    const inputRef = useRef();
  
     useEffect(()=>{
      const stored = JSON.parse(localStorage.getItem("user")) || []
      setList(stored)
    },[])


    const handleChange = (e)=>{
      const {name,value} = e.target;

      if(editIdx !== -1){
        let newUser = {...editUser,[name]:value};
        setEditUser(newUser)
      }
      else{
        let newUser = {...user,[name]:value}
        setUser(newUser);
      }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const id = Date.now()

        if(editIdx == -1){
          let newList = [...list,{...user,id}]
          setList(newList);
          localStorage.setItem("user",JSON.stringify(newList))
        }
        else{
          let arr = list.map((val)=>{
              return val.id === editIdx ? {...user,id:editIdx} : val
          })
          setList(arr)
          localStorage.setItem("user",JSON.stringify(arr))
          setEditIdx(-1)
          btnRef.current.innerText = "Submit";
        }
        setUser({});
        inputRef.current.focus();
    }


    const handleDelete = (id)=>{
      let data = list.filter((data)=> data.id !== id)
      localStorage.setItem("user",JSON.stringify(data))
      setList(data)
    }

    const handleEdit = (id)=>{
      let data = list.filter((data,idx)=> data.id == id)[0]
      setUser(data)
      setEditUser(data)
      setEditIdx(id)
      btnRef.current.innerText = "Update";
    }


    
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
      <form method='post' onSubmit={handleSubmit}>
        <h2>Login Form</h2>
      <div className="mb-3">
        <label htmlFor="Username" className="form-label">Username</label>
        <input type="text" 
        onChange={handleChange} 
        className="form-control" 
        id="username" 
        name='username'
        value={user.username || ""} 
        ref={inputRef}/>
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" 
        onChange={handleChange} 
        className="form-control" 
        id="email" 
        name='email'
        value={user.email || ""}/>
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" 
        onChange={handleChange} 
        className="form-control" 
        id="password" 
        name='password'
        value={user.password || ""} />
      </div>


      <button ref={btnRef} type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
        <table className="table table-bordered mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((ele,idx)=>{
                return(
                    <tr key={idx}>
                      <td>{idx+1}</td>
                      <td>{ele.username}</td>
                      <td>{ele.email}</td>
                      <td>{ele.password}</td>
                      <td>
                        <button onClick={()=>handleDelete(ele.id)} className='btn btn-danger me-2'>Delete</button>
                      </td>
                        
                    </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div> 
    </>
  )
}

export default Form
