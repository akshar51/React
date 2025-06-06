import React from 'react'

const Header = ({name}) => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center border-bottom py-2">
            <div className='d-flex gap-3'>
                <a href="" className='text-decoration-none text-dark'>Profile</a>
                <a href="" className='text-decoration-none text-dark'>Contact</a>
                <a href="" className='text-decoration-none text-dark'>Blog</a>
                <a href="" className='text-decoration-none text-dark'>Product</a>
            </div>
            <div>
                <h3>Admin,{name}</h3>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
