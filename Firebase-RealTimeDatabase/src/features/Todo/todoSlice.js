import { createSlice } from "@reduxjs/toolkit";
import { createTodo, getTodo } from "./thunk";

const initialState = {
    todo : [],
    loading : false,
    error : false,
}

const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {},
    extraReducers: (builder)=>{

        // create
        builder.addCase(createTodo.pending,(state)=>{
            state.loading = true;
            state.error = false
        })
        builder.addCase(createTodo.fulfilled,(state,action)=>{
            state.loading = false;
            state.todo.push(action.payload)
        })
        builder.addCase(createTodo.rejected,(state)=>{
            state.loading = false;
            state.error = action.error.message
        })

        // get data
        builder.addCase(getTodo.pending,(state)=>{
            state.loading = true;
            state.error = false
        })
        builder.addCase(getTodo.fulfilled,(state,action)=>{
            state.loading = false;
            console.log(action.payload)
        })
        builder.addCase(getTodo.rejected,(state)=>{
            state.loading = false;
            state.error = action.error.message
        })
    },
})

export default todoSlice.reducer;