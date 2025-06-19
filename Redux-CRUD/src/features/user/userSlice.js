import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  editIdx : null,
  editData : {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {

      if(state.editIdx !== null){
        state.users = state.users.map((val,idx)=>{
          if(idx === state.editIdx){
            val = action.payload
          }
          return val
        })
        state.editData = null;
        state.editData = {};
      }
      else{
        state.users.push(action.payload);
      }

    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(
        (val, index) => index !== action.payload
      );
    },
    setEditIdx : (state,action)=>{
      state.editIdx = action.payload.index;
      state.editData = action.payload.data
    }
  },
});

export const { createUser, deleteUser,setEditIdx} = userSlice.actions;
export default userSlice.reducer;
