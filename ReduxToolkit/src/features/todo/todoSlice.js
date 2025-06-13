import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    todo:[]
}


const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo : (state,action)=>{},
        removeTodo : (state,action)=>{}
    }
})

export const {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer