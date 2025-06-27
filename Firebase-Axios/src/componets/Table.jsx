import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/user/thunk";

const Table = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)

    useEffect(()=>{
        dispatch(fetchUser())
    },[])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
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
                    user.map((item,idx)=>{
                        const { email , password } = item;
                        return(
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{email}</td>
                                <td>{password}</td>
                                <td>
                                    <button className="btn btn-warning me-1">Edit</button>
                                    <button className="btn btn-danger me-1">Delete</button>
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
