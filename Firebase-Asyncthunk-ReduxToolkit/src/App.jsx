import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "./features/user/thunk";

const App = () => {


  const dispatch = useDispatch()
  const [obj, setObj] = useState({});
    
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setObj({...obj,[name]:value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(createUser(obj));
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
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
            value={obj.email || ""}
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
            value={obj.password || ""}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default App;
