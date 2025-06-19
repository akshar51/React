import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../features/user/userSlice";

const Form = () => {
  
    const [obj, setObj] = useState({});
    const dispatch = useDispatch()
    const {editData} = useSelector(state => state.user)
    
    useEffect(() => {
      setObj({...editData})
    }, [editData]);
    

    const handleChange = (e)=>{
        let {name,value} = e.target;
        let data = {...obj,[name]:value};
        setObj(data); 
    }


const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(obj));
    setObj({});
};


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="my-5">Sign-Up</h1>
            <form method="post" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={obj.email || ''}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputEmail1"

                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={obj.password || ''}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
