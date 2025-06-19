import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const fetchData = createAsyncThunk("user/fetchData",async()=>{
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = res.json();
    return data;
})


const initialState = {
    user : []
}



const userSlice = createSlice({
    name:"user",
    initialState,
    reducers : {},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.user = action.payload 
        })
    }
})

export {fetchData}
export default userSlice.reducer