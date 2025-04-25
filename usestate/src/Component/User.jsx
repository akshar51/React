import React from 'react'

function User({handleChange,handleSubmit,name}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} />
        <button>Submit</button>        
      </form>

      <h2>{name}</h2>
    </>
  )
}

export default User
