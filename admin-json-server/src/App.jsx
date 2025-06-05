import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Form from './pages/Form'
import Datatable from './pages/Datatable'
import axios from 'axios'

let url = "http://localhost:3000/users"

const App = () => {

  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [error,setError] = useState({})
  const [editIdx,setEditIdx] = useState("");
  const navi = useNavigate();
  
  useEffect(() => {
    handleFetch()
  }, []);
  

  const handleChange = (e)=>{
    let {name,value} = e.target;
    let data = {...user,[name]:value}
    setUser(data)
  }

  const handleFetch = async ()=>{
    let res = await axios.get(url);
    let data = res.data;
    setList(data)
  }

  const handleSubmit =async (e)=>{
    e.preventDefault()

    if(!validation()) return

    if(editIdx == ""){
      let res = await axios.post(url,{...user,id : String(Date.now())});
      let data = res.data;
    }else{
      let res = await axios.put(`${url}/${editIdx}`,user)
      let data = res.data;
      setUser(data)
      setEditIdx("")
    }

    handleFetch()
    navi("/datatable")
    setUser({})
  }

  const handleEdit = (id)=>{
    let data = list.find((item)=>item.id === id);
    setUser(data);
    setEditIdx(id)
    navi("/form")
  }


  const handleDelete =async (id)=>{
    let res = await axios.delete(url + `/${id}`);
    handleFetch()
  }


  const validation =()=>{
    let error = {}
    if(!user.email) error.email = "Email is required"
    if(!user.password) error.password = "Password is required"
    setError(error)
    return Object.keys(error).length === 0
  }
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/form' element={
        <Form handleChange = {handleChange} handleSubmit={handleSubmit} user={user} error={error}/>
        }/>
      <Route path='/datatable' element={
        <Datatable list={list} handleDelete = {handleDelete} handleEdit = {handleEdit}/>
        }/>
    </Routes>
    </>
  )
}

export default App
