import React, { memo } from 'react'

const Increment = ({handleCount}) => {

console.log("child render...")
  return (
    <>
      <button className='btn btn-primary' onClick={handleCount}>Count</button>
    </>
  )
}

export default memo(Increment)
