import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUser, updateUser } from "../features/user/thunk";
import { IoEyeOutline } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { setEditIdx } from "../features/user/userslice";

const Table = () => {

    const [viewIdx,setViewIdx] = useState(-1)

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    const { loading,error} = useSelector(state=>state.user)

    useEffect(()=>{
        dispatch(fetchUser())
    },[])

    const handleDelete = (id)=>{
      dispatch(deleteUser(id))
    }

    const handleEdit = (id,item)=>{
      dispatch(setEditIdx({id,item}))
    }

    const handleEye = (id)=>{
      setViewIdx(id)
    }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <table className="table">
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
                  loading ? 
                  <>
                    <tr>
                      <td>
                        <h2 className="text-center" colSpan="4">Loading Data . . . </h2>
                      </td>
                    </tr>
                  </> 
                  :
                    user.map((item,idx)=>{
                        const { email , password , id } = item;
                        return(
                            <tr key={id}>
                                <td>{idx + 1}</td>
                                <td>{email}</td>
                                <td>
                                  <input 
                                  disabled 
                                  type={viewIdx !== idx ? 'password': 'text'} 
                                  value={password} 
                                  className="me-3" />
                                  {viewIdx !== idx ? (<IoEyeOutline onClick={()=>handleEye(idx)}/>) : (<FaEyeSlash onClick={()=>handleEye(-1)}/>)}
                                </td>
                                <td>
                                    <button className="btn btn-warning me-1" onClick={()=>handleEdit(id,item)}>Edit</button>
                                    <button className="btn btn-danger me-1" onClick={()=>handleDelete(id)}>Delete</button>
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

export default Table;
