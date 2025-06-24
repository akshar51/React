import { createSlice } from "@reduxjs/toolkit";
import { createProduct, deleteProduct, fetch } from "./thunk";


const initialState = {
    list : [],
    loading : false,
    error : null,
}

export const productSlice =  createSlice({
    name : "product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

        // add 
        builder.addCase(createProduct.pending,(state,action)=>{
            state.loading = true;
        })
        builder.addCase(createProduct.fulfilled,(state,action)=>{
            state.loading = false;
            state.list.push(action.payload)
        })
        builder.addCase(createProduct.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })

        // fetch
        builder.addCase(fetch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
        builder.addCase(fetch.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
        builder.addCase(fetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });


      // delete
        builder.addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.list = state.list.filter((item)=> item.id !== action.payload)
      })
        builder.addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    },
})

export default productSlice.reducer