import React, { useContext, useState } from 'react'
import UseContext from '../context/UseContext';

const Login = () => {

    const {setUser} = useContext(UseContext)
    const [username, setusername] = useState("");
    const [pass, setPass] = useState("");
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({name : username,password : pass})
    }

  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <form method="post" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter Name' name='name' onChange={(e)=> setusername(e.target.value)}/>
                    <input type="text" placeholder='Enter password ' name='password' onChange={(e)=>setPass(e.target.value)}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
