import React from 'react'
import { getDatabase , set ,ref } from "firebase/database";
import {db} from './firebase'
const App = () => {

    const db = getDatabase();

    const handleData = ()=>{
      set(ref(db,"/product"),{
        name:"John",
        age:55,
      })
    }

  return (
    <>
      <button onClick={handleData}>Store Data</button>
    </>
  )
}

export default App
