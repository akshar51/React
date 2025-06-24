import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetch } from "../features/user/thunk";

const Table = () => {

  const product = useSelector(state => state.product.list)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch())
  }, []);

  const handleDelete = (id)=>{
    console.log(id)
    dispatch(deleteProduct(id))
  }
  
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            product.map((item,idx)=>
              (
              <tr key={item.id}>
                <td>{idx + 1}</td>
                <td>{item.pname}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <button className="btn btn-warning me-1">Edit</button>
                  <button className="btn btn-danger me-1" onClick={()=>handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
};

export default Table;
