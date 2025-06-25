import { createSlice } from "@reduxjs/toolkit";
import { createUser, fetchUser } from "./thunk";

const initialState = {
    user : [],
    loading : false,
    error : null,
}


const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(createUser.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(createUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.user.push(action.payload);
        })
        builder.addCase(createUser.rejected,(state)=>{
            state.loading = true;
            state.error = action.error.message;
        })

        //Fetch
        builder.addCase(fetchUser.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled,(state)=>{
            state.loading = false;
            state.user = action.payload;
        })
        builder.addCase(fetchUser.rejected,(state)=>{
            state.loading = false;
            state.error = action.error.message
        })
    },
})


export default userSlice.reducer;
