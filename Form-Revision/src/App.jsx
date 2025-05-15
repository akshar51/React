import React, { useState } from 'react'

const App = () => {

  const [employee, setEmployee] = useState({});
  const [empData, setEmpData] = useState([]);
  
  
  const handleChange = (e)=>{
    const {name,value,checked} = e.target
    let data = {...employee,[name]:value};
    setEmployee(data);
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    let data = [...empData,{...employee,id:Date.now()}];
    setEmpData(data)
  }

  const handleDelete = (id)=>{
    let data = empData.filter(val => val.id !== id)
    setEmpData(data);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form method='post' onSubmit={handleSubmit}>
              <h1 className='my-3'>Employee Management System</h1>

                <div className="mb-3">
                  <label htmlFor="ename" className="form-label">Employee Name :</label>
                  <input type="text"
                  onChange={handleChange}
                  name='ename' 
                  className="form-control" 
                  id="ename"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="salary" className="form-label">Salary</label>
                  <input type="text"
                  onChange={handleChange}
                  name='salary' 
                  className="form-control" 
                  id="salary" />
                </div>
                
                <div className="mb-3">
                  <div className='CheckBox'>

                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="checkDefault" />
                      <label className="form-check-label" htmlFor="checkDefault">
                        First
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="checkChecked"/>
                      <label className="form-check-label" htmlFor="checkChecked">
                        Second
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="checkChecked"/>
                      <label className="form-check-label" htmlFor="checkChecked">
                        Third
                      </label>
                    </div>

                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <table className='table caption-top'>
              <caption className='text-white mt-4 fs-3'>Employee Data</caption>
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>E-name</th>
                  <th>Salary</th>
                  <th>Count</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {
                    empData.map((val,idx)=>{
                      const {ename,salary,id} = val
                      return(
                        <tr key={idx}>
                          <td>{idx + 1}</td>
                          <td>{ename}</td>
                          <td>{salary}</td>
                          <td></td>
                          <td>
                            <button onClick={()=>handleDelete(id)} className='btn btn-danger me-2'>Delete</button>
                            <button className='btn btn-warning'>Edit</button>
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
  )
}

export default App
