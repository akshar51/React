import React from 'react'

function User({handleChange,handleSubmit,name,input}) {
  return (
    <>
      <form >
        <input type="text" name="name" onChange={handleChange} value={input} />
        <button onClick={handleSubmit}>Submit</button>        
      </form>
      <h2>{name}</h2>
    </>
  )
}

export default User
