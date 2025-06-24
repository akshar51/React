import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../features/user/thunk";

const Form = () => {
  const [obj, setObj] = useState({});
  const dispatch = useDispatch()

  const handleChange =(e)=>{
    let {name,value} = e.target;
    setObj({...obj,[name]:value})
    
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(createProduct(obj))
    setObj({})
  }

  return (
    <>
    <h1 className="my-3">Login Form : </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="pname" className="form-label">
            Product Name : 
          </label>
          <input
            type="text"
            className="form-control"
            id="pname"
            name="pname"
            onChange={handleChange}
            value={obj.pname || ""}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price : 
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            onChange={handleChange}
            value={obj.price || ""}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description : 
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={handleChange}
            value={obj.description || ""}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
