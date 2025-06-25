import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk("create/user",async (user)=>{})
export const fetchUser = createAsyncThunk("fetch/user",async ()=>{})