import React, { useReducer } from 'react'

const App = () => {

  const reducer = (state,action)=>{
    switch(action.type){
      case 'increment':
        return state += 1;
      case 'decrement':
        return state -= 1;
      case 'reset':
      return state = 0;
      default : 
      return state;  
    }
  }

  const [state, dispatch] = useReducer(reducer,0);

  return (
    <>
      <h1>Count : {state}</h1>
      <button onClick={()=> dispatch({type : "increment"})}>Increment</button>
      <button onClick={()=> dispatch({type : "decrement"})}>Decrement</button>
      <button onClick={()=> dispatch({type : "reset"})}>Reset</button>
    </>
  )
}

export default App
