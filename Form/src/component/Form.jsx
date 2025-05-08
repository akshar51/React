import React, { useRef, useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({});
    const [list, setList] = useState([]);
    const btnRef = useRef();

    const handleChange = (e)=>{
        const {name,value} = e.target;
        let newUser = {...user,[name]:value}
        setUser(newUser);
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const id = Date.now()
        setList([...list,{...user,id}]);
        setUser({});
    }

    const handleDelete = (id)=>{
      let data = list.filter((data)=> data.id !== id)
      setList(data)
    }

    const handleEdit = (id)=>{
      let data = list.filter((data,idx)=> data.id == id)[0]
      setUser(data)
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
        value={user.username || ""} />
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
                        <button onClick={()=>handleEdit(ele.id)} className='btn btn-warning'>Edit</button>
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
