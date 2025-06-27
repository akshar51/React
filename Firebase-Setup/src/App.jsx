import React from 'react'
import { getDatabase , set ,ref } from "firebase/database";
import {db} from './firebase'


const App = () => {

    const handleData = ()=>{
      set(ref(db,"/product"),{
        name:"John",
        age:55,
        gender : 'male',
      })
    }

  return (
    <>
      <button onClick={handleData}>Store Data</button>
    </>
  )
}

export default App
