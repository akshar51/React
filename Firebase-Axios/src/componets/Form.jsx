import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, updateUser } from "../features/user/thunk";

const Form = () => {

  const {editData,editIdx} = useSelector(state => state.user)
  const dispatch = useDispatch();
  const [obj, setobj] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setobj({ ...obj, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if(editIdx === null){
      dispatch(createUser(obj));
    }
    else{
      dispatch(updateUser({ id: editIdx, updatedUser: obj }))
    }
    setobj({})
  };

  useEffect(() => {
    setobj({...editData})
  }, [editData]);
  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="mt-3 my-3">Form</h1>
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
                  type="password"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
