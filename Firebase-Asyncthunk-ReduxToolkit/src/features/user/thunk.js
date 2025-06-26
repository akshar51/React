import { createAsyncThunk } from "@reduxjs/toolkit";
import { app, db } from "../../../firebase";
import { push, ref, set } from "firebase/database";

export const createUser = createAsyncThunk("create/user",async (user,{rejectWithValue})=>{
    try {
        const userRef = ref(db,'users/');
        const data = push(userRef);
        await set(data,user)
        return {...user, id : data.key}
    } catch (error) {
        return rejectWithValue(error)
    }
})
