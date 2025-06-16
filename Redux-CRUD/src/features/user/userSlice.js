import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users : []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        createUser : (state,action)=>{
            state.users.push(action.payload);
        }      
    }
})

export const {createUser} = userSlice.actions;
export default userSlice.reducer