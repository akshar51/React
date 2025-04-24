import React from 'react'


function Card({product}) {
    const {title,image,price} = product
  return (
    <>
     <div className="card" style={{width: '18rem'}}>
  <img src={image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{}price</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  )
}

export default Card
