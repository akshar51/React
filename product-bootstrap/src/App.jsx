import React, { useState } from 'react'
import Card from './Component/Card'


function App() {

  const [user,setUser] = useState([]);

  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then((data)=>{
    console.log(data);
    
    setUser(data)
  });

  return (
    <>
      <div className="container">
        <div className="row">
            {user.map((val)=>{
              <div className="col-md-4">
                <Card product = {product}/>
              </div>
            })}
        </div>
      </div>
    </>
  )
}

export default App

