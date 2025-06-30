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

export const fetchUser = createAsyncThunk('user/fetchUser', async (_,{rejectWithValue})=>{
    try {
        let res = await axiosInstance.get('/.json');
        return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const deleteUser = createAsyncThunk('user/deleteUser', async (id,{rejectWithValue})=>{
    try {
        let res = await axiosInstance.delete(`/${id}.json`);// /.json is root 
        return id
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const updateUser = createAsyncThunk('user/updateUser', async ({updatedUser,id},{rejectWithValue})=>{
    try {
        await axiosInstance.put(`/${id}.json`,updatedUser);// /.json is root 
        return {id,updateUser}
    } catch (error) {
        return rejectWithValue(error.message)
    }
})