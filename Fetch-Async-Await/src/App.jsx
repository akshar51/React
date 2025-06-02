import React from 'react'

const App = () => {
  let url = "http://localhost:3000/posts"

  const handleFetch = async ()=>{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
  }

  const handleAdd = async ()=>{
    let obj = {
      id: '6', title: 'AaAa title', views: 1000
    }

    let res = await fetch(url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(obj)  
    })
  }

  const handleDelete = async ()=>{
    let res = await fetch(url+"/"+`${"6"}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      },
    })
  }



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto mt-5">
            <button className='btn btn-primary me-2' onClick={handleFetch}>Fetch</button>
            <button className='btn btn-primary me-2'  onClick={handleAdd}>Add</button>
            <button className='btn btn-primary'  onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
