import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axiosApi";

export const createUser = createAsyncThunk('user/createUser',async (user,{rejectWithValue})=>{
    try {
        let res = await axiosInstance.post('/.json',user); // add data to firebase & ./json is a syntax must be return
        return {...user, id : res.data.name} // add to userSlice : user [] <---
    } catch (error) {
        return rejectWithValue(error.message)
    }
})