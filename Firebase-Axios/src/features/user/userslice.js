import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "./thunk";

const initialState = {
    user : [],
    loading : false,
    error : null,
}

const userSlice = createSlice({
    name : "user",
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(createUser.pending,(state)=>{
            state.loading = true
            state.error = null;
        })
        builder.addCase(createUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.user.push(action.payload);
        })
        builder.addCase(createUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default userSlice.reducer;