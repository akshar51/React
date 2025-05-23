import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const [employee, setEmployee] = useState({});
  const [empData, setEmpData] = useState([]);
  const [count, setCount] = useState([]);
  const [editIdx,setEditIdx] = useState(null)
  const btnSubmit = useRef();
  const eName = useRef()

  

  const handleChange = (e)=>{
    const {name,value,checked} = e.target

    if(name === "count"){
      let newCount = [...count]
      if(checked){
        newCount.push(value)
      }
      else{
        newCount = newCount.filter((item)=> item != value)
      }
      setCount(newCount)
      setEmployee(prev => ({ ...prev, count: newCount }));
      return;
    }
  
    let data = {...employee,[name]:value};
    setEmployee(data);
  }

  const handleSubmit =(e)=>{
    e.preventDefault();

    if(editIdx === null ){
      let data = [...empData,{...employee,id:Date.now()}];
      setEmpData(data) 
    }
    else{
      let Editdata = empData.map((item)=>{
        if(editIdx == item.id){
          item = employee
        }
        return item;
      })
      setEmpData(Editdata);
      setEditIdx(null)
      btnSubmit.current.classList.remove("btn-success")
      btnSubmit.current.innerText = "Submit";
      btnSubmit.current.classList.add("btn-primary")
    }
    setEmployee({});
    setCount([])
    eName.current.focus();
  }

  const handleDelete = (id)=>{
    let data = empData.filter(val => val.id !== id)
    setEmpData(data);
  }

  const handleEdit = (id)=>{
    let data = empData.filter((val,idx)=>val.id === id)[0]
    setEmployee(data);
    setEditIdx(id)
    setCount(data.count)
    btnSubmit.current.classList.remove("btn-primary")
    btnSubmit.current.classList.add("btn-success")
    btnSubmit.current.innerText = "Update";
    eName.current.focus();
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
                  ref={eName}
                  onChange={handleChange}
                  name='ename'
                  value={employee.ename || ""} 
                  className="form-control" 
                  id="ename"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="salary" className="form-label">Salary</label>
                  <input type="text"
                  onChange={handleChange}
                  name='salary'
                  value={employee.salary || ""} 
                  className="form-control" 
                  id="salary" />
                </div>
                
                <div className="mb-3">
                  <div className='CheckBox'>

                    <div className="form-check form-check-inline">
                      <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="checkDefault"
                      name="count" 
                      value="first"
                      onChange={handleChange}
                      checked={count.includes("first")? true : false}/>
                      <label className="form-check-label" htmlFor="checkDefault">
                        First
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="checkChecked"
                      name="count"
                      value="second"
                      onChange={handleChange}
                      checked={count.includes("second")? true : false}/>
                      <label className="form-check-label" htmlFor="checkChecked">
                        Second
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="checkChecked"
                      name="count"
                      value="third"
                      onChange={handleChange}
                      checked={count.includes("third")? true : false}/>
                      <label className="form-check-label" htmlFor="checkChecked">
                        Third
                      </label>
                    </div>

                  </div>
                </div>

                <div className="mb-3">
                  <label className='form-label me-2' htmlFor="Gender">Gender : </label>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" 
                      type="radio" 
                      name="gender"
                      value="Male"
                      onChange={handleChange}
                      checked={employee.gender == "Male"} 
                      id="male" />
                      <label className="form-check-label" htmlFor="radioDefault1">
                        Male
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input className="form-check-input" 
                      type="radio" 
                      name="gender"
                      value="Female"
                      onChange={handleChange}
                      checked={employee.gender == "Female"} 
                      id="female" 
                      />
                      <label className="form-check-label" htmlFor="radioDefault2">
                        Female
                      </label>
                    </div>
                </div>

                <div className="mb-3">
                    <select 
                    name='city' 
                    onChange={handleChange} 
                    className="form-select"
                    value={employee.city || ""}
                    >
                      <option disabled={employee.city && true} selected>---Select City---</option>
                      <option selected={employee.city ? true : false} value="Navsari">Navsari</option>
                      <option selected={employee.city ? true : false} value="Mumbai">Mumbai</option>
                      <option selected={employee.city ? true : false} value="Daman">Daman</option>
                    </select>
                </div>

                <div className="mb-3">
                  <textarea
                  className='w-100 p-3 rounded' 
                  name="address" 
                  id="address"
                  value={employee.address || ""}
                  onChange={handleChange} 
                  placeholder='Enter your address'></textarea>
                </div>

                <button type="submit" ref={btnSubmit} className="btn btn-primary">Submit</button>
              </form>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-10 mx-auto">
            <table className='table caption-top'>
              <caption className='text-white mt-4 fs-3'>Employee Data</caption>
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>E-name</th>
                  <th>Salary</th>
                  <th>Count</th>
                  <th>Gender</th>
                  <th>City</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {
                    empData.map((val,idx)=>{
                      const {ename,salary,id,gender,city,address} = val
                      return(
                        <tr key={idx}>
                          <td>{idx + 1}</td>
                          <td>{ename}</td>
                          <td>{salary}</td>
                          <td>{val.count ? val.count.toString() : []}</td>
                          <td>{gender}</td>
                          <td>{city}</td>
                          <td>{address}</td>
                          <td>
                            <button onClick={()=>handleDelete(id)} className='btn btn-danger me-2'>Delete</button>
                            <button onClick={()=>handleEdit(id)} className='btn btn-warning'>Edit</button>
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
