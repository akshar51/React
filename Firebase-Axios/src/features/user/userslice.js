import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, fetchUser, updateUser } from "./thunk";

const initialState = {
    user : [],
    loading : false,
    error : null,
    editData : {},
    editIdx : null,
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        // set edit data and id
        setEditIdx : (state,action)=>{
            state.editData = action.payload.item,
            state.editIdx = action.payload.id
        }
    },
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

        //fetch
        builder.addCase(fetchUser.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading = false;
            let newData = [];
            let data = action.payload;
            for(let key in data){
                newData.push({...data[key], id : key})
            }
            state.user = newData;
        })
        builder.addCase(fetchUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })

        //delete
        builder.addCase(deleteUser.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        builder.addCase(deleteUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = state.user.filter((item)=> item.id !== action.payload)
        })
        builder.addCase(deleteUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message // action is a object --> in which error is obj and has message
        })

        // Edit
        builder.addCase(updateUser.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        builder.addCase(updateUser.fulfilled,(state,action)=>{
            state.loading = false;
            const {id,updatedUser} = action.payload;

            state.user = state.user.map((item)=>{
                if(item.id === id){
                    return {...updatedUser, id}
                }
                return item;
            })
            state.editData = {};
            state.editIdx = null;
        })
        builder.addCase(updateUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })


    }
})
export const {setEditIdx} = userSlice.actions
export default userSlice.reducer;