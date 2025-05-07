import React, { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({});
    const [list, setList] = useState([])

    const handleChange = (e)=>{
        const {name,value} = e.target;
        let newUser = {...user,[name]:value}
        setUser(newUser);
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        
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
        <input type="text" onChange={handleChange} className="form-control" id="username" name='username' />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" onChange={handleChange} className="form-control" id="email" name='email'/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="number" onChange={handleChange} className="form-control" id="password" name='password' />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Form
