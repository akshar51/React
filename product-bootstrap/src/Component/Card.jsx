import React from 'react'


function Card({user}) {
    const {title,image,price} = user
  return (
    <>
     <div className="card">
      <img src={image} className="card-img-top" alt="..." />
    <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{price}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  )
}

export default Card
