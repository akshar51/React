import React, { useState } from 'react'
import UseContext from './UseContext';


const ContextProvider = ({children}) => {

  const [user, setUser] = useState({});

  return (
    <>
      <UseContext.Provider value={{user,setUser}}>
        {children}
      </UseContext.Provider>
    </>
  )
}

export default ContextProvider
